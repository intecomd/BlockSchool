import React, { PropTypes } from 'react';
import './ReferralForm.css';
import logo from '../../public/BlockSchoolLogo.png';
import gift from '../../public/gift.png';

const  ReferralForm = ({ onSubmit }) => (
  <div>

  <div id="colorstripRefer">
  </div>

  <div>
  <img id="gift" src={gift} />
  </div>

  <div>
  <p id="giftLine1">Share with your friends and you''ll</p>
  <p id="giftLine2">both get $50 of credits when they </p>
  <p id="giftLine3">buy the first course. &nbsp;&nbsp;Learn more.</p>
  </div>

  <div className="referralBox">
  <form>
  Your information:
  <input type="text" name="firstname" placeholder="John"/>
  <input type="text" name="lastname" placeholder="Doe"/>
  <input type="text" name="email" placeholder="johndoe@gmail.com"/>
  </form>
  </div>

  </div>

);

ReferralForm.propTypes = {
  onSubmit: PropTypes.object.isRequired
};

export default ReferralForm;
