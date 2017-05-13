import React, { PropTypes } from 'react';
import Auth from '../Auth/Auth';
import './LandingPage.css';
import bg2 from "../../public/bg2.png";
import aboutYou from "../../public/aboutyou.png";
import aboutBlock from "../../public/aboutblock.png";
import aboutTeacher from "../../public/aboutteacher.png";
import aboutProject from "../../public/aboutproject.png";
import aboutPrice from "../../public/aboutprice.png";
import price1 from "../../public/price1.png";
import price2 from "../../public/price2.png";
import price3 from "../../public/price3.png";



const LandingPage = ({ onSubmit }) => (

<div>
  <div className="box">
   <h3 className="line1">PRIVATE. <span className="color1">CR</span><span className="color2">EA</span><span className="color3">TI</span><span className="color4">VE</span> CODING</h3>
   <h3 className="line2">LIVING TUTORING FOR KIDS AGE 4-14</h3>
  </div>
  <div id="page1">
  <form action="/signup" onSubmit={onSubmit}>
    <button type="submit" className="btn btn-primary" id="button">Free Trial</button>
  </form>
  </div>

  <div id="page3">
   <img className='aboutYou' src={aboutYou} />
  </div>

  <div id="background2">
  <div id="page2">
  </div>
  </div>

   <div id="page4">
   <img className='aboutBlock' src={aboutBlock} />
   </div>

   <div id="background3">
   <div id="page5">
   </div>
   </div>

   <div id="page6">
   <img className='aboutTeacher' src={aboutTeacher} />
   </div>

   <div id="background4">
   <div id="page7">
   </div>
   </div>

   <div id="page8">
   <img className='aboutProject' src={aboutProject} />
   </div>

   <div id="background5">
   <div id="page7">
   </div>
   </div>

   <div id="page9">
   <img className='aboutPrice' src={aboutPrice} />
   </div>

   <div id="background6">
   <div id="page7">
    <p id="price">P&nbsp;r&nbsp;i&nbsp;c&nbsp;i&nbsp;n&nbsp;g</p>
    <p id="priceline1">We have the most competitive prices in the industry.</p>
    <p id="priceline2">Cancel any class within 24 hours to receive full credit.</p>
    <div>
    <ul>
      <div className="price">
       <li><img id="price1" src={price1} /></li>
       <li><img id="price2" src={price2} /></li>
       <li><img id="price3" src={price3} /></li>
      </div>
    </ul>
    </div>
    <div>
    <ul>
      <div className="priceButton">
       <li><button type="submit" id="priceButton1">Buy</button></li>
       <li><button type="submit" id="priceButton2">Buy</button></li>
       <li><button type="submit" id="priceButton3">Buy</button></li>
      </div>
    </ul>
    </div>
    <div>
     <p id="priceline3">100% refund policy</p>
     <p id="priceline4">Bring the second student to split tuition fee</p>
     <p id="priceline5">Invite more parents to earn credits</p>
     <p id="priceline6">Purchase $5,900+ to receive shares of the company</p>
     </div>
   </div>
   </div>

   <div id="colorstrip1">
   <ul className="footer">
     <div className="container-fluid">
      <li><a href="/login">Log in</a></li>
      <li><a href="#">FAQ</a></li>
      <li><a href="#">About us</a></li>
      <li><a href="#">Contact</a></li>
    </div>
   </ul>
   </div>

   <div className="copyright">
     <h4>Copyright 2017, Block School.</h4>
   </div>
</div>
);

LandingPage.propTypes = {
  onSubmit: PropTypes.object.isRequired
};

export default LandingPage;
