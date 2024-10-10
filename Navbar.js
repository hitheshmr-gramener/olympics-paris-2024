// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import 'C:/Users/Administrator/Desktop/paris-olympics/src/Navbar.css'; // Add this CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Paris Olympics 2024</h1>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/players">Players</Link>
        </li>
        <li>
          <Link to="/create-player">Create Player</Link>
        </li>
        <li className="dropdown">
          <span>Management</span>
          <ul className="dropdown-content">
            <li><Link to="/manage-players">Manage Players</Link></li>
            <li><Link to="/manage-events">Manage Events</Link></li>
            <li><Link to="/manage-schedule">Manage Schedule</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
