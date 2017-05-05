import React, { PropTypes } from 'react';
import Auth from '../Auth/Auth';
import './LandingPage.css';

const LandingPage = ({ children }) => (
  <div>
    {children}
  </div>
);

LandingPage.propTypes = {
  children: PropTypes.object.isRequired
};

export default LandingPage;
