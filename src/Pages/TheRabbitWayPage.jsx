// src/Pages/TheRabbitWay.jsx
import React from "react";
import "./TheRabbitWay.css";
import SparkleBackground from "../Components/SparkleBackground";
import { FaCode, FaPaintBrush, FaReact, FaMobileAlt, FaPalette, FaRocket, FaShieldAlt, FaUniversalAccess, FaCubes, FaFlask } from "react-icons/fa";
import CodeEditorCard from "./effects/CodeEditorCard";
import ThreeDModelCard from "./effects/ThreeDModelCard";      // Updated to CSS 3D
import ComponentTreeCard from "./effects/ComponentTreeCard";
import ResponsiveMorphCard from "./effects/ResponsiveMorphCard";
import ThemeSwitcherCard from "./effects/ThemeSwitcherCard";
import ParticleSystemCard from "./effects/ParticleSystemCard"; // Updated to tsparticles
import VaultCard from "./effects/VaultCard";
import AccessibilityCard from "./effects/AccessibilityCard";
import FractalCard from "./effects/FractalCard";
import GameTestCard from "./effects/GameTestCard";

function TheRabbitWay() {
  const guidelines = [
    { title: "From Scratch, Always", desc: "We build everything with original code, no templates.", icon: <FaCode />, effect: <CodeEditorCard /> },
    { title: "Original Art Only", desc: "All visuals are custom-made or AI-generated, never stolen.", icon: <FaPaintBrush />, effect: <ThreeDModelCard /> },
    { title: "Cutting-Edge React", desc: "We use the latest React versions for all new projects.", icon: <FaReact />, effect: <ComponentTreeCard /> },
    { title: "Responsiveness Is Magic", desc: "Our designs adapt seamlessly across devices.", icon: <FaMobileAlt />, effect: <ResponsiveMorphCard /> },
    { title: "Consistent Brand Identity", desc: "We maintain a unified look and feel across all projects.", icon: <FaPalette />, effect: <ThemeSwitcherCard /> },
    { title: "Performance-Focused", desc: "Optimized code ensures fast load times.", icon: <FaRocket />, effect: <ParticleSystemCard /> },
    { title: "Security Matters", desc: "We implement best practices to keep data safe.", icon: <FaShieldAlt />, effect: <VaultCard /> },
    { title: "Accessibility", desc: "Our designs are inclusive and meet accessibility standards.", icon: <FaUniversalAccess />, effect: <AccessibilityCard /> },
    { title: "Scalable Components", desc: "We build reusable and maintainable components.", icon: <FaCubes />, effect: <FractalCard /> },
    { title: "Test Early & Often", desc: "Rigorous testing ensures stability and reliability.", icon: <FaFlask />, effect: <GameTestCard /> },
  ];

  return (
    <div className="rabbit-way-page">
      <section className="rabbit-way-hero">
        <SparkleBackground />
        <div className="hero-content">
          <h1 className="hero-title">The <span>Rabbit</span> Way</h1>
          <p className="hero-subtitle">Our magical principles for crafting enchanting web experiences</p>
        </div>
        <div className="hero-illustration">
          <img src="path/to/rabbit-wizard.png" alt="Rabbit Wizard" />
        </div>
      </section>

      <section className="guidelines">
        <h2 className="guidelines-title">Our Enchanted Principles</h2>
        <div className="guidelines-grid">
          {guidelines.map((guideline) => (
            <div key={guideline.title} className="guideline-card">
              <div className="guideline-icon">{guideline.icon}</div>
              <h3 className="guideline-title">{guideline.title}</h3>
              <p className="guideline-description">{guideline.desc}</p>
              <div className="guideline-effect">{guideline.effect}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <h2 className="cta-title">Ready to Hop In?</h2>
        <p className="cta-message">Explore our spellbook of projects to see The Rabbit Way in action.</p>
        <a href="/portfolio" className="cta-button">View Portfolio</a>
      </section>
    </div>
  );
}

export default TheRabbitWay;