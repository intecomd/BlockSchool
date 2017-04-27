import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import React from 'react';
import logo from '../../public/BlockSchoolLogo.png';
import './App.css';


class App extends React.Component{
  render() {
    return(
      <div>
        <img className='logo' src={logo} alt='logo'/>
        <div className='container'>

        </div>
      </div>
    );
  }
}

export default App;
