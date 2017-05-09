import React, { PropTypes } from 'react';
import Auth from '../Auth/Auth';
import './LandingPage.css';

const LandingPage = ({ onSubmit }) => (
  <form action="/signup" onSubmit={onSubmit}>
    <button type="submit" className="btn btn-primary" id="button">Free Trial</button>
  </form>
);

LandingPage.propTypes = {
  onSubmit: PropTypes.object.isRequired
};

export default LandingPage;
