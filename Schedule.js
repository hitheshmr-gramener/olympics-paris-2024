import React from 'react';
import 'C:/Users/Administrator/Desktop/paris-olympics/src/Schedule.css';

const Schedule = () => {
  const schedules = [
    { date: '26 July 2024', event: 'Opening Ceremony' },
    { date: '27 July 2024', event: 'Athletics (Men\'s 100m)' },
    { date: '28 July 2024', event: 'Swimming (Women\'s 200m)' },
    { date: '24–25 July 2024', event: 'Football (Soccer): Early rounds (Men\'s and Women\'s), Rugby Sevens: First two days, Handball: Preliminary rounds' },
    { date: '26 July 2024', event: 'Opening Ceremony at River Seine' },
    { date: '27 July 2024', event: 'Swimming: Heats, Cycling (Men\'s Road Race), Archery: Team and Individual rounds, Fencing: Start, Judo: Early rounds, Tennis, Rugby Sevens' },
    { date: '28 July 2024', event: 'Gymnastics (Artistic): Men\'s qualifiers, Skateboarding, Diving, Shooting: Mixed team competitions' },
    { date: '29 July–2 August 2024', event: 'Swimming: Finals, Fencing: Medal events, Surfing: Competition window opens, Basketball 3x3, Rowing: First rounds and quarterfinals' },
    { date: '3–5 August 2024', event: 'Athletics: Starts, Cycling (Track), Golf: Men\'s and Women\'s tournaments, Sport Climbing: Men\'s and Women\'s events' },
    { date: '6–10 August 2024', event: 'Gymnastics (Rhythmic), Basketball (5x5): Semifinals and Medal rounds, Boxing: Finals, Sailing: Finals, Wrestling: Medal events, Beach Volleyball: Finals' },
    { date: '10–11 August 2024', event: 'Men\'s Marathon, Handball: Finals, Volleyball: Finals, Boxing: Finals, Wrestling: Medal matches, Rhythmic Gymnastics: Finals, Water Polo: Medal matches' },
    { date: '11 August 2024', event: 'Closing Ceremony, Men\'s Marathon (Morning)' },
  ];

  return (
    <section id="schedule" className="section">
      <h2>Olympics Schedule</h2>
      <ul>
        {schedules.map((item, index) => (
          <li key={index}>
            <strong>{item.date}</strong> - {item.event}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Schedule;
