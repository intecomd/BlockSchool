import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

import React from 'react';
// import logo from '../../public/BlockSchoolLogo.png';
import './App.css';

import DashBoardPage from '../DashBoard/DashBoardPage';

class App extends React.Component{
  render() {
    return(
      <div>
        <div className='row'>
          <div className="col s4">
            <DashBoardPage />
          </div>
          <div className="col s8 center-align">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
