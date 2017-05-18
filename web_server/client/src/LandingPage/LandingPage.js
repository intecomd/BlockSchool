import React, { PropTypes } from 'react';
// import Auth from '../Auth/Auth';
import './LandingPage.css';
import logo from '../../public/BlockSchoolLogo.png';
import bg2 from "../../public/bg2.png";
import aboutYou from "../../public/aboutyou.png";
import aboutBlock from "../../public/aboutblock.png";
import aboutTeacher from "../../public/aboutteacher.png";
import aboutProject from "../../public/aboutproject.png";
import aboutPrice from "../../public/aboutprice.png";
import price1 from "../../public/price1.png";
import price2 from "../../public/price2.png";
import price3 from "../../public/price3.png";
import school1 from "../../public/school1.png";
import school2 from "../../public/school2.png";
import school3 from "../../public/school3.png";
import school4 from "../../public/school4.png";
import school5 from "../../public/school5.png";
import school6 from "../../public/school6.png";
import school7 from "../../public/school7.png";
import school8 from "../../public/school8.png";
import school9 from "../../public/school9.png";
import school10 from "../../public/school10.png";



const LandingPage = ({ onSubmit }) => (

<div>
  <div id="background1">
  </div>

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
  <div className="layer">
  <div id="page2">
  <p id="you1">	&#183;Knowing coding is the language of the 21st  </p>
  <p id="you2">century, but hard to find the incredible</p>
  <p  id="you3">class with great teachers in your area to </p>
  <p  id="you4">get started?</p>
  <p  id="you5">&#183;Never thought of getting 1-on-1 coding </p>
  <p  id="you6">instruction because of the crazy price? </p>
  <p  id="you7">Then ...... </p>
  </div>
  </div>
  </div>

   <div id="page4">
   <img className='aboutBlock' src={aboutBlock} />
   </div>

   <div id="background3">
   <div className="layer1">
   <div id="page5">
   <p id="block1">Children love blocks. Blocks help children imagine and create. </p>
   <p id="block2">This is why BlockSchool''s central concept is block. </p>
   <p  id="block3">To build with blocks, kids write code in a Scratch-like visual </p>
   <p  id="block4">programming language call Puzzle. This empowered them to </p>
   <p  id="block5">build whatever they want (and a lot faster than LEGOs). </p>
   </div>
   </div>
   </div>

   <div id="page6">
   <img className='aboutTeacher' src={aboutTeacher} />
   </div>

   <div id="background4">
   <div className="layer2">
   <div id="page7">
   <p id="teacher1">Teachers From Top 100 Colleges </p>
   <p id="teacher2">They Are Great with Kids </p>

   <div>
   <ul>
     <div className="teacherRow1">
      <li><img id="teacher1" src={school1} /></li>
      <li><img id="teacher2" src={school2} /></li>
      </div>
   </ul>
   </div>

   <div>
   <ul>
     <div className="teacherRow2">
      <li><img id="teacher3" src={school3} /></li>
      <li><img id="teacher4" src={school4} /></li>
     </div>
   </ul>
   </div>

   <div>
   <ul>
     <div className="teacherRow3">
      <li><img id="teacher5" src={school5} /></li>
      <li><img id="teacher6" src={school6} /></li>
     </div>
   </ul>
   </div>

   <div>
   <ul>
     <div className="teacherRow4">
      <li><img id="teacher7" src={school7} /></li>
      <li><img id="teacher8" src={school8} /></li>
     </div>
   </ul>
   </div>

   <div>
   <ul>
     <div className="teacherRow5">
      <li><img id="teacher9" src={school9} /></li>
      <li><img id="teacher10" src={school10} /></li>
     </div>
   </ul>
   </div>

   <div>
   <p id="des1">BlockSchool only hires teachers from </p>
   <p id="des2">top 100 US colleges. Every teacher </p>
   <p  id="des3">must pass a technical interview, </p>
   <p  id="des4">have some teaching experience, and  </p>
   <p  id="des5">complete a background check. </p>
   <p id="des6">Teachers prepare each class by </p>
   <p id="des7">having recently complete the same </p>
   <p  id="des8">project your child is working on. </p>
   <p  id="des9">During each class, teachers are</p>
   <p  id="des10">tracking student progress across </p>
   <p  id="des11">many dimensions so parents are </p>
   <p  id="des12">always in the loop. </p>
   </div>

   </div>
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
    <form action="/buy" onSubmit={onSubmit}>
    <ul>
      <div className="priceButton">
       <li><button type="submit" id="priceButton1">Buy</button></li>
       <li><button type="submit" id="priceButton2">Buy</button></li>
       <li><button type="submit" id="priceButton3">Buy</button></li>
      </div>
    </ul>
    </form>
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
