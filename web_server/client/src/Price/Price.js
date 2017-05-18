import React, { PropTypes } from 'react';
import Auth from '../Auth/Auth';
import price1 from "../../public/price1.png";
import price2 from "../../public/price2.png";
import price3 from "../../public/price3.png";
import './Price.css';



const Price = ({ onSubmit }) => (

<div>


   <div className="backgroundPrice">


   <div>
    <p id="pricelineNew1">We have the most competitive prices in the industry.</p>
    <p id="pricelineNew2">Cancel any class within 24 hours to receive full credit.</p>
   </div>

    <div>
    <ul>
      <div className="priceNew">
       <li><img id="priceNew1" src={price1} /></li>
       <li><img id="priceNew2" src={price2} /></li>
       <li><img id="priceNew3" src={price3} /></li>
      </div>
    </ul>
    </div>

    <div className="priceButtonNew">
    <div>
    <form action="/checkout" onSubmit={onSubmit}>
      <button type="submit" id="priceButtonNew1">Buy</button>
    </form>
    </div>

    <div>
    <form action="/checkout1" onSubmit={onSubmit}>
      <button type="submit" id="priceButtonNew2">Buy</button>
    </form>
    </div>

    <div>
    <form action="/checkout2" onSubmit={onSubmit}>
      <button type="submit" id="priceButtonNew3">Buy</button>
    </form>
    </div>
    </div>



    <div>
     <p id="pricelineNew3">100% refund policy</p>
     <p id="pricelineNew4">Bring the second student to split tuition fee</p>
     <p id="pricelineNew5">Invite more parents to earn credits</p>
     <p id="pricelineNew6">Purchase $5,900+ to receive shares of the company</p>
     </div>

   <div id="colorstripNew1">
   <ul className="footerNew">
     <div className="container-fluid">
      <li><a href="/login">Log in</a></li>
      <li><a href="#">FAQ</a></li>
      <li><a href="#">About us</a></li>
      <li><a href="#">Contact</a></li>
    </div>
   </ul>
   </div>

   <div className="copyrightNew">
     <h4>Copyright 2017, Block School.</h4>
   </div>

  </div>


</div>
);

Price.propTypes = {
  onSubmit: PropTypes.object.isRequired
};

export default Price;
