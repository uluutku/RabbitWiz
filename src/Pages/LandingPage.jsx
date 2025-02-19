// src/Pages/LandingPage.jsx
import React from 'react';
import Hero from '../Components/Hero';
import BrandStory from '../Components/BrandStory';
import Projects from '../Components/Projects';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <Hero />
      <BrandStory />
      <Projects />
    </div>
  );
}

export default LandingPage;
