import React, {PropTypes} from 'react';

import Auth from '../Auth/Auth';
import DashBoard from './DashBoard';

class DashBoardPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: Auth.getEmail()
        // TODO: add personal info if needed for profile
      }
    };
  }

  render() {
    return (
      <DashBoard
        user={this.state.user}
      />
    );
  }
}

// To make react-router work
DashBoardPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default DashBoardPage;
