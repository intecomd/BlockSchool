import NavBar from './NavBar/NavBar';
import LandingPage from './LandingPage/LandingPage';
import App from './App/App';
import LoginPage from './Login/LoginPage';
import SignUpPage from './SignUp/SignUpPage';
import DashBoardPage from './DashBoard/DashBoardPage';
import Payments from './Payments/Payments';
import TakeMoney from './Payments/Checkout';
import TakeMoney1 from './Payments/Checkout1';
import TakeMoney2 from './Payments/Checkout2';
import ReferralPage from './Referral/ReferralPage';
import PromoCode from './Referral/Refer';
import Price from './Price/Price';
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
    },
    {
      path: '/checkout1',
      component: TakeMoney1
    },
    {
      path: '/checkout2',
      component: TakeMoney2
    },
    {
      path: '/refer',
      component: ReferralPage
    },
    {
      path: '/referNew',
      component: PromoCode
    },
    {
      path: '/price',
      component: Price
    }
  ]
};

export default routes;
