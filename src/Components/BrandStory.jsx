// src/Components/BrandStory.jsx
import React from "react";
import "./BrandStory.css";

function BrandStory() {
  return (
    <section className="brand-story">
      <div className="brand-story-content">
        <h2 className="brand-story-title">Why a Rabbit Wizard?</h2>
        <p className="brand-story-text">
          The RabbitWiz concept was born from a passion for storytelling and a belief that 
          <strong> consistent branding</strong> can make any digital experience truly unforgettable. 
          Just like Apple’s sleek minimalism or Google’s playful simplicity, RabbitWiz embodies a 
          whimsical yet modern identity. Every website I create weaves in elements of this 
          brand personality—proving that design language can be both <em>fun</em> and 
          <em> professional</em>.
        </p>

        <p className="brand-story-text">
          Whether I’m building a complex React app or crafting a minimalist landing page, 
          I sprinkle each project with a dash of magic. From color choices to iconography, 
          every detail helps shape a cohesive, memorable user experience.
        </p>
      </div>
    </section>
  );
}

export default BrandStory;
