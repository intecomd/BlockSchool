import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import React from 'react';
import logo from '../../public/BlockSchoolLogo.png';
import './App.css';
import LandingPage from '../LandingPage/LandingPage.js';
import Payments from '../Payments/Payments.js';


class App extends React.Component{
  render() {
    return(
      <div>
        <div className='container'>
           <LandingPage />
        </div>
      </div>
    );
  }
}

export default App;
