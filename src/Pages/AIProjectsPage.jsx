// src/Pages/AIProjectsPage.jsx
import React from "react";
import { motion } from "framer-motion";
import "./AIProjectsPage.css";
import aiProjectData from "../Components/aiProjectData";
import AIProjectCard from "../Components/AIProjectCard";

function AIProjectsPage() {
  return (
    <div className="ai-projects-page">
      <header className="ai-projects-header">
        <h1 className="ai-projects-title">[EXPERIMENTAL] AI Quarters</h1>
        <p className="ai-projects-subtitle">
          Yes, we know—no rabbits here! This is our secret lab where we test new 
          technologies and tinker with curious ideas. Eventually, if we perfect 
          these arcane arts, we might bring them back to the main warren.
        </p>
        <p className="ai-projects-notice">
          <em>Warning:</em> Under (magical) construction! Expect half-finished spells, 
          broken illusions, or random carrots in odd places.
        </p>
      </header>
      <motion.div
        className="ai-projects-content"
        layout
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
      >
        {aiProjectData.map((project) => (
          <AIProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
}

export default AIProjectsPage;
