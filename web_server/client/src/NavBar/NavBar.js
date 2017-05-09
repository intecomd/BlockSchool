import React, { PropTypes } from 'react';
import Auth from '../Auth/Auth';
import './NavBar.css';
import logo from '../../public/BlockSchoolLogo.png';

const NavBar = ({ children }) => (
  <div className="background">
  <div>

    <nav className="nav-bar cyan lighten-3">
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="align-left">

        <a href="/" className="brand-logo">&nbsp;&nbsp;BlockSchool</a>
        </ul>
        <ul id="nav-mobile" className="right">
          {Auth.isUserAuthenticated() ?
            (<div>

               <li><a href="/logout">LOG OUT</a></li>
             </div>)
             :
            (<div>

               <li><a href="/login">LOG IN</a></li>
             </div>)
          }
        </ul>
        <ul id="nav-mobile" className="right">
          <div className="container-fluid">
           <li><a href="/">HOME</a></li>
           <li><a href="/signup">FREE TRIAL</a></li>
           <li><a>REFER</a></li>
           <li><a href="/buy">BUY</a></li>
         </div>
        </ul>
      </div>
    </nav>

    <br/>
    {children}
  </div>
  </div>
);

NavBar.propTypes = {
  children: PropTypes.object.isRequired
};

export default NavBar;
