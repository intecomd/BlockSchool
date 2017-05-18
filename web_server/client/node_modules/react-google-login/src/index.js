import React, { PropTypes, Component } from 'react';

class GoogleLogin extends Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.state = {
      disabled: true,
    };
  }
  componentDidMount() {
    const { clientId, cookiePolicy, loginHint, hostedDomain, autoLoad, fetchBasicProfile, redirectUri, discoveryDocs, onFailure, uxMode } = this.props;
    ((d, s, id, cb) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      js = d.createElement(s);
      js.id = id;
      js.src = '//apis.google.com/js/client:platform.js';
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = cb;
    })(document, 'script', 'google-login', () => {
      const params = {
        client_id: clientId,
        cookiepolicy: cookiePolicy,
        login_hint: loginHint,
        hosted_domain: hostedDomain,
        fetch_basic_profile: fetchBasicProfile,
        discoveryDocs,
        ux_mode: uxMode,
        redirect_uri: redirectUri,
      };
      window.gapi.load('auth2', () => {
        this.setState({
          disabled: false,
        });
        if (!window.gapi.auth2.getAuthInstance()) {
          window.gapi.auth2.init(params).then(
            () => {},
            err => onFailure(err)
          );
        }
        if (autoLoad) {
          this.signIn();
        }
      });
    });
  }
  signIn(e) {
    if (e) {
      e.preventDefault(); // to prevent submit if used within form
    }
    if (!this.state.disabled) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      const { offline, redirectUri, onSuccess, onRequest, fetchBasicProfile, onFailure, prompt, scope, responseType } = this.props;
      const options = {
        response_type: responseType,
        redirect_uri: redirectUri,
        fetch_basic_profile: fetchBasicProfile,
        prompt,
        scope,
      };
      onRequest();
      if (offline) {
        auth2.grantOfflineAccess(options)
          .then(
            res => onSuccess(res),
            err => onFailure(err)
          );
      } else {
        auth2.signIn(options)
          .then((res) => {
            /*
              offer renamed response keys to names that match use
            */
            const basicProfile = res.getBasicProfile();
            const authResponse = res.getAuthResponse();
            res.googleId = basicProfile.getId();
            res.tokenObj = authResponse;
            res.tokenId = authResponse.id_token;
            res.accessToken = authResponse.access_token;
            res.profileObj = {
              googleId: basicProfile.getId(),
              imageUrl: basicProfile.getImageUrl(),
              email: basicProfile.getEmail(),
              name: basicProfile.getName(),
              givenName: basicProfile.getGivenName(),
              familyName: basicProfile.getFamilyName(),
            };
            onSuccess(res);
          }, err =>
            onFailure(err)
          );
      }
    }
  }

  render() {
    const { tag, style, className, disabledStyle, buttonText, children } = this.props;
    const disabled = this.state.disabled || this.props.disabled;
    const initialStyle = {
      display: 'inline-block',
      background: '#d14836',
      color: '#fff',
      width: 190,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 2,
      border: '1px solid transparent',
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Roboto',
    };
    const styleProp = (() => {
      if (style) {
        return style;
      } else if (className && !style) {
        return {};
      }
      return initialStyle;
    })();
    const defaultStyle = (() => {
      if (disabled) {
        return Object.assign({}, styleProp, disabledStyle);
      }
      return styleProp;
    })();
    const googleLoginButton = React.createElement(
      tag, {
        onClick: this.signIn,
        style: defaultStyle,
        disabled,
        className,
      }, children ? children : buttonText
    );
    return googleLoginButton;
  }
}

GoogleLogin.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
  clientId: PropTypes.string.isRequired,
  onRequest: PropTypes.func,
  buttonText: PropTypes.string,
  offline: PropTypes.bool,
  scope: PropTypes.string,
  className: PropTypes.string,
  redirectUri: PropTypes.string,
  cookiePolicy: PropTypes.string,
  loginHint: PropTypes.string,
  hostedDomain: PropTypes.string,
  children: React.PropTypes.node,
  style: React.PropTypes.object,
  disabledStyle: React.PropTypes.object,
  fetchBasicProfile: PropTypes.bool,
  prompt: PropTypes.string,
  tag: PropTypes.string,
  autoLoad: PropTypes.bool,
  disabled: PropTypes.bool,
  discoveryDocs: PropTypes.array,
  responseType: PropTypes.string,
  uxMode: PropTypes.string,
};

GoogleLogin.defaultProps = {
  tag: 'button',
  buttonText: 'Login with Google',
  scope: 'profile email',
  responseType: 'permission',
  prompt: '',
  cookiePolicy: 'single_host_origin',
  fetchBasicProfile: true,
  uxMode: 'popup',
  disabledStyle: {
    opacity: 0.6,
  },
  onRequest: () => {},
  offline: false,
};

export default GoogleLogin;
