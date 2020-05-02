import React, { Component } from 'react';

import EventSave from '../book/EventSave'
import EventList from '../book/EventList'
import Head from '../layout/Head'

class Dashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <Head />
        <EventSave />
        <EventList />

      </div>
    );
  }
}

export default Dashboard;
