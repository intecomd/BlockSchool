import React, {PropTypes} from 'react';
<<<<<<< HEAD
import $ from 'jquery';
=======
>>>>>>> intecomd

import logo from '../../public/BlockSchoolLogo.png';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './DashBoard.css';

<<<<<<< HEAD


=======
>>>>>>> intecomd
const LoginForm = ({
  user,
}) => (
  <div className="nav-wrapper">
    <link href="http://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet" type="text/css"/>
    <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<<<<<<< HEAD
    <div className="container"><a href="#" data-activates="nav-mobile" className="btn button-collapse top-nav full hide-on-large"><i className="material-icons">menu</i></a></div>
    <ul id="nav-mobile" className="side-nav fixed">
=======
    <ul id="slide-out" className="side-nav fixed">
>>>>>>> intecomd
      <li ><a href="/"><img className='logo' src={logo} alt='logo' width="200px"/></a></li>
      <div className="align-center">
        <li><br/><h5>&nbsp; &nbsp; Hello {user.email}</h5><br/></li>
      </div>
      <li className="bold"><a href="/profile" className="waves-effect waves-teal">Profile</a></li>
      <li className="bold"><a href="/bookCourses" className="waves-effect waves-teal">Book Courses</a></li>
      <li className="bold"><a href="/preparation" className="waves-effect waves-teal">Preparation</a></li>
      <li className="bold"><a href="/completedCourses" className="waves-effect waves-teal">Completed Courses</a></li>
      <li className="bold"><a href="/myTeachers" className="waves-effect waves-teal">My Teachers</a></li>
      <li className="bold"><a href="/selfTest" className="waves-effect waves-teal">Self-Test</a></li>
      <li className="bold"><a href="/referal" className="waves-effect waves-teal">Referal</a></li>
    </ul>
<<<<<<< HEAD
=======
    <div className="container"><a href="#" data-activates="slide-out" className="button-collapse top-nav full hide-on-large"><i className="material-icons">menu</i></a></div>
>>>>>>> intecomd
  </div>
);

LoginForm.propTypes = {
   user: PropTypes.object.isRequired
};

export default LoginForm;
