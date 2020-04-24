import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getEvents, deleteEvent } from '../../actions/events';
import moment from "moment";
import 'moment-timezone';

const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

class EventList extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {

    return (
      <div className='ui relaxed divided list' style={{ marginTop: '2rem' }}>
        {this.props.events.map(event => (
          <div className='item' key={event.id}>
            <div className='right floated content'>
              <Link
                to={`/event/delete/${event.id}`}
                className='small ui negative basic button'
              >
                Delete
              </Link>
            </div>
            <i className='large calendar outline middle aligned icon' />
            <div className='content'>
              <Link to={`/event/edit/${event.id}`} className='header'>
                {event.name}
              </Link>
              <div className='description'>
              {
                moment(event.date).tz(tz).format('LL')
                
              }
              <hr/>
              {
                moment(event.time).tz(tz).format('h:mm:ss a')
              }

              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: Object.values(state.events)
});

export default connect(
  mapStateToProps,
  { getEvents, deleteEvent }
)(EventList);
