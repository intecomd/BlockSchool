import React, { PropTypes } from 'react';
import Auth from '../Auth/Auth';
import './LandingPage.css';

const LandingPage = ({ children }) => (
  <div>
    <nav className="nav-bar cyan lighten-3">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">&nbsp;&nbsp;BlockSchool</a>
        <ul id="nav-mobile" className="center">
          <div >
           <li><a>Mission</a></li>

           <li><a>Teachers</a></li>
           <li><a>Projects</a></li>
           <li><a>FAQ</a></li>
           <li><a>Start Now</a></li>

      </div>
        </ul>
        <ul id="nav-mobile" className="right">
          {Auth.isUserAuthenticated() ?
            (<div>
               <li>{Auth.getEmail()}</li>
               <li><a href="/logout">Log out</a></li>
             </div>)
             :
            (<div>
               <li><a href="/login">Log in</a></li>
               <li><a href="/signup">Sign up</a></li>
             </div>)
          }
        </ul>
      </div>
    </nav>
    <br/>
    {children}
  </div>
);

LandingPage.propTypes = {
  children: PropTypes.object.isRequired
};

export default LandingPage;
