// src/Pages/AIProjectsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './AIProjectsPage.css';
import aiProjectData from '../Components/aiProjectData';
import AIProjectCard from '../Components/AIProjectCard';

function AIProjectsPage() {
  return (
    <div className="ai-projects-page">
      <header className="ai-projects-header">
        <h1 className="ai-projects-title">AI Research Projects</h1>
        <p className="ai-projects-subtitle">
          Explore cutting-edge experiments and research in AI, neural networks, and machine learning.
        </p>
      </header>
      <motion.div className="ai-projects-content" layout>
        {aiProjectData.map((project) => (
          <AIProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
}

export default AIProjectsPage;
