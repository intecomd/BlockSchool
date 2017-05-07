import React, {PropTypes} from 'react';

import Auth from '../Auth/Auth';
import Calendar from './Calendar';

class CalendarPage extends React.Component {

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
      <Calendar
        user={this.state.user}
      />
    );
  }
}

// To make react-router work
CalendarPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default CalendarPage;
