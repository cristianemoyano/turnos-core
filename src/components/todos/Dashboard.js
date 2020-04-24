import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

import EventSave from '../book/EventSave'
import EventList from '../book/EventList'

class Dashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <div>Todo Create Form</div>

        <EventSave />
        <EventList />

        <TodoCreate />
        <TodoList />
      </div>
    );
  }
}

export default Dashboard;
