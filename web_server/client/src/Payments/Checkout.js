import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import Payments from './Payments'

export default class TakeMoney extends React.Component {


  render() {
    return (
      <div>
      <script src="https://checkout.stripe.com/checkout.js"></script>
      <Payments
      />
      <StripeCheckout

      />

      </div>
    )
  }
}
