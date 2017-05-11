import React, {PropTypes} from 'react';

import logo from '../../public/BlockSchoolLogo.png';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import './DashBoard.css';

const DashBoard = ({
  user,
}) => (
  <div className="container nav-wrapper card white">
    <div id="nav-mobile" className="fixed collection">
      <a href="/"><img className='logo collection-item' src={logo} alt='logo' width="200px"/></a>
      <div className="align-center">
        <br/><h5>&nbsp; &nbsp; Hello {user.email}</h5><br/>
      </div>
      <a href="/profile" className="collection-item">Profile</a>
      <a href="/bookCourses" className="collection-item">Book Courses</a>
      <a href="/preparation" className="collection-item">Preparation</a>
      <a href="/completedCourses" className="collection-item">Completed Courses</a>
      <a href="/myTeachers" className="collection-item">My Teachers</a>
      <a href="/selfTest" className="collection-item">Self-Test</a>
      <a href="/referal" className="collection-item">Referal</a>
    </div>
  </div>
);

DashBoard.propTypes = {
   user: PropTypes.object.isRequired
};

export default DashBoard;
