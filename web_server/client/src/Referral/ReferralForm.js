import React, { PropTypes } from 'react';
import './ReferralForm.css';
import logo from '../../public/BlockSchoolLogo.png';
import gift from '../../public/gift.png';

const  ReferralForm = ({
  onSubmit,
  onChange,
  user
}) => (
  <div>

    <div id="colorstripRefer">
    </div>

    <div>
      <img id="gift" src={gift} />
    </div>

    <div>
      <p id="giftLine1">Share with your friends and you&#39;ll</p>
      <p id="giftLine2">both get $50 of credits when they </p>
      <p id="giftLine3">buy the first course. &nbsp;&nbsp;Learn more.</p>
    </div>

    <div>
     <form action="/" onSubmit={onSubmit}>
        <div className="referralBox">
          <form>
          Your information:
          <input type="text" id="firstName" name="firstName" placeholder="John" onChange={onChange}/>
          <input type="text" id="lastName" name="lastName" placeholder="Doe" onChange={onChange}/>
          <input type="text" id="email" name="email" placeholder="johndoe@gmail.com" onChange={onChange}/>
          </form>
        </div>

        <div>
        <form>
          <input id="button2" type="submit" className="btn btn-primary" value="Refer Code" />
        </form>
        </div>
     </form>
    </div>

  </div>

);

ReferralForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default ReferralForm;
