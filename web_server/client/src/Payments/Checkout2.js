import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import Payments from './Payments2'

export default class TakeMoney2 extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(token => {
      alert(`We are in business, ${token.email}`);
    });
  }

  render() {
    return (
      <div>
      <Payments
      />
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_QZQj8bP7Zrhw1KNnFq09qZ1e"
      />
      </div>
    )
  }
}
