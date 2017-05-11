import React, { PropTypes } from 'react';
import Auth from '../Auth/Auth';
import './NavBar.css';
import logo from '../../public/BlockSchoolLogo.png';

const NavBar = ({ children }) => (
  <div className="background">
  <div>

    <nav className="nav-bar white">
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="align-left">
        <img className="logo" src={logo} />
        </ul>
        <ul id="nav-mobile" className="right">
          {Auth.isUserAuthenticated() ?
            (<div>

               <li><a href="/logout">Log out</a></li>
             </div>)
             :
            (<div>

               <li><a href="/login">Log in</a></li>
             </div>)
          }
        </ul>
        <ul id="nav-mobile" className="left">
          <div className="container-fluid">
           <li><a href="/">Home</a></li>
           <li><a href="/signup">Free &nbsp;&nbsp;Trial</a></li>
           <li><a>Refer</a></li>
           <li><a href="/buy">Buy</a></li>
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
