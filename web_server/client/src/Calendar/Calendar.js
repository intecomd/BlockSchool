import React, {PropTypes} from 'react';

import 'fullcalendar/dist/fullcalendar.css'
import 'jquery/dist/jquery.min.js'
import 'moment/min/moment.min.js'
import 'fullcalendar/dist/fullcalendar.js'

const Calendar = ({
  user,
}) => (
  <div ref="calendar">

  </div>
);

Calendar.propTypes = {
   user: PropTypes.object.isRequired
};

export default Calendar;
