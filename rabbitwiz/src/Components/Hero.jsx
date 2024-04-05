import React from "react";
import "./Hero.css";
import heroImage from "../assets/single_rabbit_v2.png";

function Hero() {
  return (
    <div className="hero-main">
      <div className="hero-container">
        <div className="hero-image-container">
          <img src={heroImage} alt="Hero" className="hero-image" />
          <h1> </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
