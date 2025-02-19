// src/Components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

function ProjectCard({ project, onClick }) {
  return (
    <motion.div 
      className="project-card" 
      onClick={() => onClick(project)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image-wrapper">
        <img src={project.img} alt={project.title} className="project-image" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.desc}</p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
