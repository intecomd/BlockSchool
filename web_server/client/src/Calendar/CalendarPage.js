import React, {PropTypes} from 'react';

import Auth from '../Auth/Auth';
//import Calendar from './Calendar';

import $ from 'jquery';
import 'fullcalendar/dist/fullcalendar.css';
import 'jquery/dist/jquery.min.js';
import 'moment/min/moment.min.js';
import 'fullcalendar/dist/fullcalendar.js';

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

  componentDidMount(){
    const {calendar} = this.refs;

    $(calendar).fullCalendar();
  }

  render() {
    return (
      <div ref="calendar">
      </div>
    );
  }
}

// To make react-router work
CalendarPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default CalendarPage;
