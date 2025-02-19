// src/Components/BrandStory.jsx
import React from "react";
import "./BrandStory.css";

function BrandStory() {
  return (
    <section className="brand-story">
      <div className="brand-story-content">
        <h2 className="brand-story-title">The Legend of RabbitWiz</h2>
        <p className="brand-story-text">
          Long ago, a curious rabbit discovered the mystical powers of <strong>React</strong>, 
          <em> design systems</em>, and a pinch of enchanted CSS. This fabled “RabbitWiz” 
          set out to prove that a <strong>consistent theme</strong> can make any digital 
          experience shine brighter than a wizard’s wand.
        </p>

        <p className="brand-story-text">
          Just like Apple’s sleek minimalism or Google’s vibrant simplicity, 
          RabbitWiz embraces a whimsical but modern identity. Every project 
          I conjure—whether a full-blown React app or a minimalist landing 
          page—stays true to this brand personality. Because who says you can’t 
          be <em>fun</em> and <em>professional</em> at the same time?
        </p>
      </div>
    </section>
  );
}

export default BrandStory;
