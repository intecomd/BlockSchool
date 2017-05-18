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
  constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      // admin: {
      //   teachers: Auth.getTeachers()
      // }
      teachers: [],
      errors: {},
      user: {
        email: Auth.getEmail(),
        password: Auth.getPassword(),
        events: Auth.getEvents(),
        userRole: Auth.getUserRole()
        // TODO: add personal info if needed for profile
      }
    };
  }

  componentDidMount(){
    const {calendar} = this.refs;
    const email = this.state.user.email;
    const password = this.state.user.password;
    const events = this.state.user.events;
    // this.processForm = this.processForm.bind(this);
    //this.state = this.state.bind(this);


    this.makeTeacherDraggable();

    $('.remove-events').droppable({
        drop:function(event, ui) {
            ui.draggable.detach().remove();
        }
    });

    $(calendar).fullCalendar({
      events: events,

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

      // eventAfterRender: function( event, element, view) {
      //   console.log(event);
      //   console.log(element);
      //   console.log(view);
      //   // this.setState()
      //   // this.processForm();
      // },

      select: function(start, end) {
        var title = prompt("Teacher's Name");
        var eventData;
        if (title && title.trim()) {
          eventData = {
            title: title,
            start: start,
          };
          $('#calendar').fullCalendar('renderEvent', eventData);

          fetch('http://localhost:3000/auth/update', {
            method: 'POST',
            cache: false,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email,
              password: password,
              events: eventData
            })
          }).then(response => {
          });
        }
        $('#calendar').fullCalendar('unselect');
      },

      eventClick: function (calEvent, jsEvent, view) {
        $('#calendar').fullCalendar('removeEvents', calEvent._id);
      },
    });
  }

  componentDidUpdate() {
    this.makeTeacherDraggable();
  }

  addTeacher() {
    var teacher = prompt("Teacher's Name");
    this.setState({teachers: this.state.teachers.concat([teacher])});
  }

  makeTeacherDraggable() {
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

  processForm() {
    const email = this.state.user.email;
    const password = this.state.user.password;
    const events = this.state.user.events;

    // Post registeration data
    fetch('http://localhost:3000/auth/update', {
      method: 'POST',
      cache: false,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.user.email,
        password: this.state.user.password,
        events: this.state.user.events
      })
    }).then(response => {
      if (response.status === 200) {
        this.setState({
          errors: {}
        });
      } else {
        response.json().then(function(json) {
          console.log(json);
          const errors = json.errors ? json.errors : {};
          errors.summary = json.message;
          console.log(this.state.errors);
          this.setState({errors});
        }.bind(this));
      }
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
            {Auth.isUserAdmin() ?
              (<div>
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
              </div>)
              :
              (<div></div>)
            }

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
