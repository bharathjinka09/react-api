import React, { Component } from "react";
import './App.css'

class NavBar extends React.Component {
  render() {
    return (
      <nav>
		  <ul className='nav-brand'>
			  <h1>React API</h1>
		  </ul>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
