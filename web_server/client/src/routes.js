import NavBar from './NavBar/NavBar';
import LandingPage from './LandingPage/LandingPage';
import App from './App/App';
import LoginPage from './Login/LoginPage';
import SignUpPage from './SignUp/SignUpPage';
import DashBoardPage from './DashBoard/DashBoardPage';
import Payments from './Payments/Payments';
import TakeMoney from './Payments/Checkout';
import Auth from './Auth/Auth';


const routes = {
  // base component (wrapper for the whole application).
  component: NavBar,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, DashBoardPage);
        } else {
          callback(null, App);
        }
      }
    },

    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },

    {
      path: '/dashboard',
      component: DashBoardPage
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    },
    {
      path: '/buy',
      component: TakeMoney
    },
    {
      path: '/checkout',
      component: TakeMoney
    }
  ]
};

export default routes;
