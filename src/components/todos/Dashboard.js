import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

class Dashboard extends Component {
  render() {
    return (
      <div className='ui container'>
        <div>Todo Create Form</div>
        <TodoCreate />
        <TodoList />
      </div>
    );
  }
}

export default Dashboard;
