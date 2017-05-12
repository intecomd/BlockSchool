import React, { PropTypes } from 'react';
import Auth from '../Auth/Auth';
import './LandingPage.css';
import bg2 from "../../public/bg2.png";
import aboutYou from "../../public/aboutyou.png";
import aboutBlock from "../../public/aboutblock.png";
import aboutTeacher from "../../public/aboutteacher.png";
import aboutProject from "../../public/aboutproject.png";
import aboutPrice from "../../public/aboutprice.png";



const LandingPage = ({ onSubmit }) => (

<div>
  <div className="box">
   <h3 className="line1">PRIVATE. <span className="color1">CR</span><span className="color2">EA</span><span className="color3">TI</span><span className="color4">VE</span> CODING</h3>
   <h3 className="line2">LIVING TUTORING FOR KIDS AGE 4-14</h3>
  </div>

  <div id="page1">
  <a id="about" class="smooth"></a>
  <form action="/signup" onSubmit={onSubmit}>
    <button type="submit" className="btn btn-primary" id="button">Free Trial</button>
  </form>
  </div>

  <div id="page3">
   <img className='aboutYou' src={aboutYou} />
   <a id="contact" class="smooth"></a>
  </div>

  <div id="background2">
  <div id="page2">
   <a id="portfolio" class="smooth"></a>
     Portfolio page content goes here.
  </div>
  </div>

   <div id="page4">
   <img className='aboutBlock' src={aboutBlock} />
    <a id="portfolio" class="smooth"></a>
      Portfolio page content goes here.
   </div>

   <div id="background3">
   <div id="page5">
    <a id="contact" class="smooth"></a>
      Contact page content goes here.
   </div>
   </div>

   <div id="page6">
   <img className='aboutTeacher' src={aboutTeacher} />
    <a id="portfolio" class="smooth"></a>
      Portfolio page content goes here.
   </div>

   <div id="background4">
   <div id="page7">
    <a id="contact" class="smooth"></a>
      Contact page content goes here.
   </div>
   </div>

   <div id="page8">
   <img className='aboutProject' src={aboutProject} />
    <a id="portfolio" class="smooth"></a>
      Portfolio page content goes here.
   </div>

   <div id="background5">
   <div id="page7">
    <a id="contact" class="smooth"></a>
      Contact page content goes here.
   </div>
   </div>

   <div id="page9">
   <img className='aboutPrice' src={aboutPrice} />
    <a id="portfolio" class="smooth"></a>
      Portfolio page content goes here.
   </div>

   <div id="background6">
   <div id="page7">
    <a id="contact" class="smooth"></a>
      Contact page content goes here.
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
