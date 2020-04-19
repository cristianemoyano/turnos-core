import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='ui inverted menu' style={{ borderRadius: '0' }}>
        <a className='header item' href='/'>Todo App</a>
        <a className='item' href='/'>Home</a>
      </div>
    );
  }
}

export default Header;