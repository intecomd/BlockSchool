import React, {PropTypes} from 'react';

import Auth from '../../Auth/Auth';

import $ from 'jquery';
import moment from 'moment';

import '../../cupertino/jquery-ui.min.css'
import 'fullcalendar/dist/fullcalendar.css';
import 'jquery/dist/jquery.js';
import 'jquery-ui-dist/jquery-ui.js'
import 'fullcalendar/dist/fullcalendar.js';
import './Calendar.css';

class CalendarPage extends React.Component {
  addTeacher() {
    var teacher = prompt("Teacher's Name");
    this.setState({teachers: this.state.teachers.concat([teacher])});
  }

  constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      teachers: [],
      errors: {},
      user: {
        email: Auth.getEmail()
        //events: Auth.getEvent()
        // TODO: add personal info if needed for profile
      }
    };
  }

  componentDidMount(){
    const {calendar} = this.refs;

    $('#external-events .fc-event').each(function() {

      // store data so the calendar knows to render an event upon drop
      $(this).data('event', {
        title: $.trim($(this).text()), // use the element's text as the event title
        stick: true // maintain when user navigates (see docs on the renderEvent method)
      });

      // make the event draggable using jQuery UI
      $(this).draggable({
        zIndex: 999,
        revert: true,      // will cause the event to go back to its
        revertDuration: 0  //  original position after the drag
      });
    });

    $('.remove-events').droppable({
        drop:function(event, ui) {
            ui.draggable.detach().remove();
        }
    });

    $(calendar).fullCalendar({
      events: [],

      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },

      defaultView: 'month',
      defaultTimedEventDuration: '01:00',
      minTime: "08:00:00",
      maxTime: "22:00:00",
      
      theme: true,
      editable: true,
      selectable: true,
      selectHelper: true,
      droppable: true,
      allDaySlot: true,


      eventRender: function(event, element, view){
        element.click(function() {
            $("#startTime").html(moment(event.start).format('MMM Do h:mm A'));
            $("#endTime").html(moment(event.end).format('MMM Do h:mm A'));
            $("#eventContent").dialog({ modal: true, title: event.title, width:350});
        });
      },

      select: function(start, end) {
        // var duration = (end - start) /1000;
        // if(duration == 1800) {
        //   // set default duration to 1 hr.
        // 	end = start.add(30, 'mins');
        //   return calendar.fullCalendar('select', start, end);
        // }
        var title = prompt("Teacher's Name");
        var eventData;
        if (title && title.trim()) {
          eventData = {
            title: title,
            start: start,
          };
          // this.events.push(eventData);
          $('#calendar').fullCalendar('renderEvent', eventData);
        }
        $('#calendar').fullCalendar('unselect');
      },

      eventClick: function (calEvent, jsEvent, view) {
        console.log(calEvent);
        $('#calendar').fullCalendar('removeEvents', calEvent._id);
      },
      loading: function() {
          //this.state.user.events
      }
    });
  }

  componentDidUpdate() {
    $('#external-events .fc-event').each(function() {

      // store data so the calendar knows to render an event upon drop
      $(this).data('event', {
        title: $.trim($(this).text()), // use the element's text as the event title
        stick: true // maintain when user navigates (see docs on the renderEvent method)
      });

      // make the event draggable using jQuery UI
      $(this).draggable({
        zIndex: 999,
        revert: true,      // will cause the event to go back to its
        revertDuration: 0  //  original position after the drag
      });
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s10">
            <div id="calendar" ref="calendar"></div>
          </div>
          <div className="col s2">
            <div id='external-events' onClick={() => this.addTeacher()}>
        			<h4>Add New Teacher</h4>
              <div>
                {this.state.teachers.map(function(teacher){
                  return <div className='fc-event'>{teacher}</div>
                })}
              </div>
        		</div>
            <div id='external-events' className="remove-events">
              <h4>Remove Teacher</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// To make react-router work
CalendarPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default CalendarPage;
