import React from "react";
import "C:/Users/Administrator/Desktop/paris-olympics/src/Home.css"; // Adding CSS for the Home page styling

const Home = () => {
  return (
    <section id="home" className="section home">
      <h1>Welcome to Paris Olympics 2024</h1>

      {/* Add logo and torch images */}
      <div className="home-header">
        <img
          src="/images/Paris-2024-Olympics-Logo-PNG-Picture.png"
          alt="Paris 2024 Logo"
          className="logo"
        />
      </div>

      <p>
        The Paris 2024 Olympic Games will be held from 26 July to 11 August
        2024. Join the world's best athletes in Paris for an unforgettable
        event.
      </p>
    </section>
  );
};

export default Home;
