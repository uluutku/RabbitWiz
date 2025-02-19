// src/Pages/TheRabbitWay.jsx
import React, { useRef } from "react";
import "./TheRabbitWay.css";
import SparkleBackground from "../Components/SparkleBackground";

/* 
  Sub-component: a single card that "looks at" the mouse 
  and renders a glare effect. 
*/
function GuidelineCard({ title, text }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    // Where the card is on screen
    const rect = cardRef.current.getBoundingClientRect();
    // X/Y inside the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    // Card center
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (max tilt ~ 10 degrees)
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    // Update transform for 3D tilt
    cardRef.current.style.transform = `
      perspective(800px) 
      rotateX(${-rotateX}deg) 
      rotateY(${rotateY}deg)
    `;

    // Update glare position via CSS variables
    // This moves the radial gradient “glare” around the card
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    cardRef.current.style.setProperty("--glare-x", `${percentX}%`);
    cardRef.current.style.setProperty("--glare-y", `${percentY}%`);
  };

  const handleMouseLeave = () => {
    // Reset transform
    cardRef.current.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
    // Move glare out of the card so it disappears
    cardRef.current.style.setProperty("--glare-x", `-50%`);
    cardRef.current.style.setProperty("--glare-y", `-50%`);
  };

  return (
    <li
      className="guideline-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="guideline-card-content">
        <h2 className="guideline-title">{title}</h2>
        <p className="guideline-text">{text}</p>
      </div>
      {/* Glare overlay */}
      <div className="guideline-glare" />
    </li>
  );
}

function TheRabbitWay() {
  const guidelines = [
    {
      title: "From Scratch, Always",
      text: "No borrowed fur! We conjure our own code, no external templates. Good or bad, it’s ours."
    },
    {
      title: "Original Art Only",
      text: "All ears are AI-crafted or custom-drawn. No stolen images in our magical warren."
    },
    {
      title: "Cutting-Edge React",
      text: "Every bunny deserves the latest. We hop onto React 19 and beyond for new builds."
    },
    {
      title: "Responsiveness Is Magic",
      text: "One size spells all. Projects adapt to desktop, mobile, and tablet—otherwise, we show a custom mobile UI."
    },
    {
      title: "Consistent Brand Identity",
      text: "Our wizard staff glows the same color each time. We keep color palettes, fonts, and icons cohesive."
    },
    {
      title: "Performance-Focused",
      text: "No carrot-lag allowed. We optimize code so pages load quicker than a rabbit’s hop."
    },
    {
      title: "Security Matters",
      text: "Fortify the bunny burrow. We implement best practices to keep your data safe."
    },
    {
      title: "Accessibility",
      text: "Magic is for everyone. We ensure designs meet accessibility standards."
    },
    {
      title: "Scalable Components",
      text: "Towers of code that don’t topple. We build each piece to be reusable and maintainable."
    },
    {
      title: "Test Early & Often",
      text: "Check the spell before the show. Unit tests, integration tests, you name it—we want stability."
    }
  ];

  return (
    <div className="rabbit-way-page">
      {/* Hero Section */}
      <section className="rabbit-way-hero">
        <SparkleBackground />
        <div className="rabbit-way-hero-content">
          <h1 className="rabbit-way-hero-title">The Rabbit Way</h1>
          <p className="rabbit-way-hero-subtitle">
            A whimsical code of conduct weaving magic and best practices into every project.
          </p>
          <p className="rabbit-way-hero-text">
            We’re more than just pretty pixels—every RabbitWiz creation follows these 
            guiding spells, ensuring consistent, secure, and efficient code. 
            Embrace the magic below!
          </p>
        </div>
      </section>

      {/* Guidelines */}
      <section className="rabbit-way-guidelines">
        <ul className="guidelines-grid">
          {guidelines.map((item) => (
            <GuidelineCard 
              key={item.title} 
              title={item.title} 
              text={item.text} 
            />
          ))}
        </ul>
      </section>

      {/* CTA or Conclusion Section */}
      <section className="rabbit-way-cta">
        <h2 className="rabbit-way-cta-title">Ready to Hop Further?</h2>
        <p>
          Whether you're checking out our <strong>React 19</strong> masterpieces 
          or exploring AI Quarters, we keep one foot in creativity and the other in 
          practicality. Now that you know The Rabbit Way, 
          <a href="/portfolio" className="rabbit-way-cta-link">
            hop on over to our Spellbook of Projects!
          </a>
        </p>
      </section>
    </div>
  );
}

export default TheRabbitWay;
