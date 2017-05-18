import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import React from 'react';
// import logo from '../../public/BlockSchoolLogo.png';
import './App.css';
import LandingPage from '../LandingPage/LandingPage.js';
import Payments from '../Payments/Payments.js';

import DashBoardPage from '../DashBoard/DashBoardPage';

class App extends React.Component{
  render() {
    return(
      <div>
{/*<<<<<<< HEAD*/}
        <div className='row'>
          <div className="col s4">
            <DashBoardPage />
          </div>
          <div className="col s8 center-align">
            {this.props.children}
          </div>
{/*=======
        <div className='container'>
           <LandingPage />
>>>>>>> fbb491a6c325e842ccd12cd97ec0cd31fcdfa77a*/}
        </div>
      </div>
    );
  }
}

export default App;
