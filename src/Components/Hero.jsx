// hero.jsx
import React from 'react';
import './hero.css';
import heroImage from './bg_rabbit.jpg'; // Ensure this image is available

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Unleash the Magic with <span>RabbitWiz</span>
        </h1>
        <p className="hero-subtitle">
          Discover the wizardry of modern web development through captivating experiences.
        </p>
        <a href="#portfolio" className="hero-button">
          Explore Portfolio
        </a>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="Rabbit Wizard" className="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
