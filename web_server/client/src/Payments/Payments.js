import React, { PropTypes } from 'react';
import './Payments.css';
import logo from '../../public/BlockSchoolLogo.png';

const Payments = ({ onSubmit }) => (
  <div>
  <div id="colorstrip">
   <p id="position">Play <span id="fun">fun</span> with <span id="code">code</span> in Block School</p>
  </div>

  <div className="box1">
   <h3 className="l1">Shopping Cart</h3>
   <h3 className="l2"><span id="pn">30 Classes Package</span><span id="pri">960</span></h3>
   <hr id="hr" color="#00C2B1" />
   <h3 className="l2"><span id="total">Total</span><span id="totalpri">960</span></h3>
   <form >
     Promotion: <input type="text" name="fname" placeholder="Promotion code" />
   </form>

   <form action="localhost:3000/charge" method="post" >
     <script
     src="https://checkout.stripe.com/checkout.js"
     className="stripe-button"
     data-key="pk_test_QZQj8bP7Zrhw1KNnFq09qZ1e"
     data-amount="96000"
     data-name="Block School"
     data-image={logo}
     data-description="The best online coding school!"
     data-locale="auto"
     data-currency="usd">
     </script>
   </form>
  </div>
  </div>

);

Payments.propTypes = {
  onSubmit: PropTypes.object.isRequired
};

export default Payments;
