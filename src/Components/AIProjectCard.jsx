// src/Components/AIProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './AIProjectCard.css';

function AIProjectCard({ project }) {
  return (
    <motion.div 
      className="ai-project-card"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="ai-project-image-wrapper">
        <img src={project.img} alt={project.title} className="ai-project-image" />
      </div>
      <div className="ai-project-content">
        <h3 className="ai-project-title">{project.title}</h3>
        <p className="ai-project-description">{project.desc}</p>
      </div>
    </motion.div>
  );
}

export default AIProjectCard;
