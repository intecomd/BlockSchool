import React, {PropTypes} from 'react';

import Auth from '../Auth/Auth';
import ReferralForm from './ReferralForm';
import './ReferralForm.css';


class ReferralPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: ''
      },
      code:''
    };

    this.generateCode = this.generateCode.bind(this);
    this.changeUser = this.changeUser.bind(this);

  }

  generateCode(event) {

    event.preventDefault();

    const firstName = this.state.user.firstName.toUpperCase();

    const lastName = this.state.user.lastName;

    const email = this.state.user.email;

    var val = Math.floor(1000 + Math.random() * 9000);

    var code = firstName.concat(val);

    console.log(code);

    this.setState({
      code:code
    });

    return(
      <div className="codeBox">
      <p>Share your invite code:</p>
      <p>{this.state.code}</p>
      </div>
    );


  }


  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

    render() {
    return(
      <div>
        <ReferralForm
          onSubmit={this.generateCode}
          onChange={this.changeUser}
          user={this.state.user}/>
        <div className="codeBox">
          <p>Share your invite code</p >
          <p id="codeStyle">{this.state.code}</p >
        </div>
      </div>
    );
  }
}

ReferralPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default ReferralPage;
