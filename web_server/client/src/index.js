import React from 'react';
import ReactDom from 'react-dom';

import { browserHistory, Router, Route, IndexRoute} from 'react-router';

import NavBar from './NavBar/NavBar';
import LandingPage from './LandingPage/LandingPage';
import App from './App/App';
import LoginPage from './Login/LoginPage';
import SignUpPage from './SignUp/SignUpPage';
import Auth from './Auth/Auth';
import Calendar from './Components/Calendar/Calendar';
import Profile from './Components/Profile/Profile';
import TakeMoney from './Payments/Checkout';
import ReferralPage from './Referral/ReferralPage';
import Price from './Price/Price';

ReactDom.render(
  // <Router history={browserHistory} routes={routes} />,
  <Router history={browserHistory} >
    <Route path="" component={NavBar}>
      <Route path='/'>
        <IndexRoute component={LandingPage} />
        <Route path='/app' getComponent={(location, callback) => {
          if (Auth.isUserAuthenticated()) {
            callback(null, App);
          } else {
            callback(null, LandingPage);
          }
        }}>
          <IndexRoute component={Profile} />
          <Route path='/app/calendar' component={Calendar} />
          <Route path='/app/preparation' component={Calendar} />
          <Route path='/app/completed-courses' component={Calendar} />
          <Route path='/app/my-teachers' component={Calendar} />
          <Route path='/app/self-test' component={Calendar} />
          <Route path='/app/referal' component={Calendar} />
        </Route>
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/price' component={Price} />
        <Route path='/buy' component={TakeMoney} />
        <Route path='/checkout' component={TakeMoney} />
        <Route path='/refer' component={ReferralPage} />
        <Route path='/logout' onEnter={(nextState, replace) => {
                Auth.deauthenticateUser();

                // change the current URL to /
                replace('/');
              }} >
        </Route>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
