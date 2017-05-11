import React, { PropTypes } from 'react';
import './Payments.css';

const Payments = ({ onSubmit }) => (
  <div id="colorstrip">
   <p id="position">Play <span id="fun">fun</span> with <span id="code">code</span> in Block School</p>
  <form action="/charge" method="post" >
    <script
    src="https://checkout.stripe.com/checkout.js"
    className="stripe-button"
    data-key="pk_test_QZQj8bP7Zrhw1KNnFq09qZ1e"
    data-amount="999"
    data-name="Demo Site"
    data-description="Widget"
    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
    data-locale="auto">
    </script>

  </form>
  </div>
);

Payments.propTypes = {
  onSubmit: PropTypes.object.isRequired
};

export default Payments;
