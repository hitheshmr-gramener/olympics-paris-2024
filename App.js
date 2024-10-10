import React from 'react';
import './App.css';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Events from './components/Events';

function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>Paris Olympics 2024</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#events">Events</a></li>
        </ul>
      </nav>

      <div className="content">
        <Home />
        <Schedule />
        <Events />
      </div>
    </div>
  );
}

export default App;
