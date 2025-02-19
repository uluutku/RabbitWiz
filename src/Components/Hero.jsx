// src/Components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./Hero.css";
import heroImage from "./bgv3.png";
import SparkleBackground from "./SparkleBackground";

function Hero() {
  // Parallax offset
  const { scrollY } = useViewportScroll();
  // Image moves slightly up to -50px as you scroll 0-300px
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section className="hero">
      <SparkleBackground />
      <div className="hero-content">
        <h1 className="hero-title">
          Where Code Meets Conjuring <br />
          <span>RabbitWiz</span>
        </h1>
        <p className="hero-subtitle">
          A front-end wizard weaving modern sites, wrapped in a whimsical but
          consistent brand identity—proving that magic and professionalism
          can coexist.
        </p>
        <div className="hero-buttons">
          <Link to="/portfolio" className="hero-button">
            Explore the Spellbook
          </Link>
          <Link to="/the-rabbit-way" className="hero-button secondary-button">
            The Rabbit Way
          </Link>
        </div>
      </div>

      {/* Parallax effect on the hero image container */}
      <motion.div className="hero-image-container" style={{ y }}>
        <img src={heroImage} alt="Rabbit Wizard" className="hero-image" />
      </motion.div>
    </section>
  );
}

export default Hero;
