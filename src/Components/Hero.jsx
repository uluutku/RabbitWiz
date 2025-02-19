// src/Components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./Hero.css";
import heroImage from "./bgv3.png";
import SparkleBackground from "./SparkleBackground";

function Hero() {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  return (
    <section className="hero">
      <SparkleBackground />
      <div className="hero-content">
        <h1 className="hero-title">
          Summoning Modern Web Experiences <br />
          <span>with RabbitWiz</span>
        </h1>
        <p className="hero-subtitle">
          I’m a front-end developer weaving spells of design, code, and brand consistency—because every website deserves a touch of magic.
        </p>
        <Link to="/portfolio" className="hero-button">
          Open the Spellbook
        </Link>
      </div>
      <motion.div className="hero-image-container" style={{ y }}>
        <img src={heroImage} alt="Rabbit Wizard" className="hero-image" />
      </motion.div>
    </section>
  );
}

export default Hero;
