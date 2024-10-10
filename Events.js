import React from 'react';
import 'C:/Users/Administrator/Desktop/paris-olympics/src/Events.css';  // Add this for component-specific styling

const events = [
  { sport: 'Aquatics', emoji: '🏊‍♂️' },
  { sport: 'Archery', emoji: '🏹' },
  { sport: 'Athletics', emoji: '🏃‍♂️' },
  { sport: 'Badminton', emoji: '🏸' },
  { sport: 'Basketball', emoji: '🏀' },
  { sport: '5x5 Basketball', emoji: '🏀' },
  { sport: '3x3 Basketball', emoji: '🏀' },
  { sport: 'Boxing', emoji: '🥊' },
  { sport: 'Breaking', emoji: '🕺' },
  { sport: 'Canoeing', emoji: '🚣‍♂️' },
  { sport: 'Canoe Sprint', emoji: '🚣‍♂️' },
  { sport: 'Canoe Slalom', emoji: '🚣‍♂️' },
  { sport: 'Cycling', emoji: '🚴‍♂️' },
  { sport: 'BMX Freestyle', emoji: '🚴‍♂️' },
  { sport: 'BMX Racing', emoji: '🚴‍♂️' },
  { sport: 'Mountain Biking', emoji: '🚵‍♂️' },
  { sport: 'Road Cycling', emoji: '🚴‍♂️' },
  { sport: 'Track Cycling', emoji: '🚴‍♂️' },
  { sport: 'Equestrian', emoji: '🐎' },
  { sport: 'Dressage', emoji: '🐎' },
  { sport: 'Eventing', emoji: '🐎' },
  { sport: 'Jumping', emoji: '🐎' },
  { sport: 'Fencing', emoji: '🤺' },
  { sport: 'Football (Soccer)', emoji: '⚽️' },
  { sport: 'Golf', emoji: '🏌️‍♂️' },
  { sport: 'Gymnastics', emoji: '🤸‍♂️' },
  { sport: 'Artistic Gymnastics', emoji: '🤸‍♂️' },
  { sport: 'Rhythmic Gymnastics', emoji: '🤸‍♀️' },
  { sport: 'Trampoline', emoji: '🤸‍♂️' },
  { sport: 'Handball', emoji: '🤾‍♂️' },
  { sport: 'Hockey', emoji: '🏑' },
  { sport: 'Judo', emoji: '🥋' },
  { sport: 'Modern Pentathlon', emoji: '🤺' },
  { sport: 'Rowing', emoji: '🚣‍♀️' },
  { sport: 'Rugby Sevens', emoji: '🏉' },
  { sport: 'Sailing', emoji: '⛵️' },
  { sport: 'Shooting', emoji: '🔫' },
  { sport: 'Skateboarding', emoji: '🛹' },
  { sport: 'Sport Climbing', emoji: '🧗‍♂️' },
  { sport: 'Surfing', emoji: '🏄‍♂️' },
  { sport: 'Table Tennis', emoji: '🏓' },
  { sport: 'Taekwondo', emoji: '🥋' },
  { sport: 'Tennis', emoji: '🎾' },
  { sport: 'Triathlon', emoji: '🏊‍♀️🏃‍♀️🚴‍♀️' },
  { sport: 'Volleyball', emoji: '🏐' },
  { sport: 'Indoor Volleyball', emoji: '🏐' },
  { sport: 'Beach Volleyball', emoji: '🏖️' },
  { sport: 'Weightlifting', emoji: '🏋️‍♂️' },
  { sport: 'Wrestling', emoji: '🤼‍♂️' },
  { sport: 'Freestyle Wrestling', emoji: '🤼‍♂️' },
  { sport: 'Greco-Roman Wrestling', emoji: '🤼‍♂️' },
];

const Events = () => {
  return (
    <section id="events" className="section">
      <h2>Olympic Sports Events</h2>
      <ul>
        {events.map((item, index) => (
          <li key={index}>
            {item.emoji} {item.sport}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Events;

