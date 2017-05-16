import React, {PropTypes} from 'react';
import { Link } from 'react-router';
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
        <br/><h5>&nbsp; &nbsp; Hello {user.firstName}</h5><br/>
      </div>
      <Link to="/app" className="collection-item">Profile</Link>
      <Link to="/app/calendar" className="collection-item">Calendar</Link>
      <Link to="/app/preparation" className="collection-item">Preparation</Link>
      <Link to="/app/completed-courses" className="collection-item">Completed Courses</Link>
      <Link to="/app/my-teachers" className="collection-item">My Teachers</Link>
      <Link to="/app/self-test" className="collection-item">Self-Test</Link>
      <Link to="/app/referal" className="collection-item">Referal</Link>
    </div>
  </div>
);

DashBoard.propTypes = {
   user: PropTypes.object.isRequired
};

export default DashBoard;
