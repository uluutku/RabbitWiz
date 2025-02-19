// src/Pages/LandingPage.jsx
import React from "react";
import Hero from "../Components/Hero";
import BrandStory from "../Components/BrandStory";
import Projects from "../Components/Projects";
import ShortRabbitWay from "../Components/ShortRabbitWay";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <Hero />
      <BrandStory />
      <Projects />
      <ShortRabbitWay />
    </div>
  );
}

export default LandingPage;
