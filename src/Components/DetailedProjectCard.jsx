// src/Components/DetailedProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './DetailedProjectCard.css';

function DetailedProjectCard({ project, onClick }) {
  return (
    <motion.div 
      className="detailed-project-card"
      onClick={() => onClick(project)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <div className="project-image-wrapper" onClick={() => onClick(project)}>
        <img src={project.img} alt={project.title} className="project-image" />
        <div className="overlay">
          <button className="view-details-button" onClick={() => onClick(project)}>
            View Details
          </button>
        </div>
      </div>
      <div className="project-details">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.desc}</p>
        <ul className="project-technologies">
          {project.technologies.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
            Live Demo <FaExternalLinkAlt />
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
            Source Code <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default DetailedProjectCard;
