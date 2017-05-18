import React, {Component, PropTypes} from 'react';

import {connect} from 'react-redux';

import {changePromoCodeInput,handleSubmit} from 'actions';

class PromoCode extends Component {

  static displayName = 'PromoCode';

  static propTypes = {
    promoCode: PropTypes.string,
    changePromoCodeInput: PropTypes.func,
    handleSubmit: PropTypes.func,
  };

  constructor() {
    super();
    this.hiddenCodeInputCheck = null;
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount() {
    const {
      changePromoCodeInput,
      handleSubmit,
    } = this.props;

    this.hiddenCodeInputCheck = window.setInterval(() => {
      if (this.hiddenCodeInput && this.hiddenCodeInput.value !== this.state.inputValue) {
        this.setState({ inputValue: this.hiddenCodeInput.value });
        changePromoCodeInput(this.hiddenCodeInput.value);
        handleSubmit();
      }
    }, 100);
  }

  componentWillUnmount() {
    window.clearInterval(this.hiddenCodeInputCheck);
    this.hiddenCodeInputCheck = null;
  }

  render() {
    const {
      promoCode,
      handleSubmit,
    } = this.props;

    return (
      <form>

        <input type="hidden" name="promoTextField" ref={el => { this.hiddenCodeInput = el; }} />

        {/* Mention Me container */}
        <div id="mmWrapper" />

        <input type="text" value={promoCode} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
  }

}

const mapStateToProps = ({ promoCode }) => ({
  promoCode,
});

const mapDispatchToProps = {
  changePromoCodeInput,
  handleSubmit,
};

export default connect(mapStateToProps, mapDispatchToProps)(PromoCode);
