import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function NavBar() {
  const navStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <nav>
      <ul className="nav-brand">
        <h1>React CRUD using Django API</h1>
      </ul>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
