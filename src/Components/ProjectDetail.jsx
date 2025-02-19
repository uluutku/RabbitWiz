// src/Components/ProjectDetail.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './ProjectDetail.css';

function ProjectDetail({ project, onClose }) {
  // Container animation: slide up from bottom with a slight scale effect.
  const containerVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { y: 100, opacity: 0, scale: 0.95, transition: { duration: 0.4, ease: 'easeIn' } }
  };

  // Staggered items for a smooth reveal.
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 }
    })
  };

  // A new, dynamic hover effect for images.
  const imageHover = {
    scale: 1.05,
    filter: 'brightness(1.05) contrast(1.05)',
    transition: { duration: 0.4, ease: 'easeInOut' }
  };

  const modalContent = (
    <motion.div 
      className="project-detail-overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="project-detail-container"
        onClick={(e) => e.stopPropagation()}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="project-detail-header">
          <motion.h2 
            className="project-detail-title" 
            custom={1}
            variants={itemVariants}
          >
            {project.title}
          </motion.h2>
          <button className="close-button" onClick={onClose} aria-label="Close">
            <FaTimes size={28} />
          </button>
        </div>
        <motion.div className="project-detail-body">
          <motion.p 
            className="project-detail-description" 
            custom={2} 
            variants={itemVariants}
          >
            {project.desc}
          </motion.p>
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="project-detail-images">
              {project.screenshots.map((screenshot, index) => (
                <motion.img 
                  key={index}
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="project-detail-image"
                  whileHover={imageHover}
                  custom={3 + index * 0.1}
                  variants={itemVariants}
                />
              ))}
            </div>
          )}
          <motion.div 
            className="project-detail-section" 
            custom={3.5} 
            variants={itemVariants}
          >
            <h3>Technologies Used</h3>
            <ul className="project-detail-list">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="project-detail-section" 
            custom={4} 
            variants={itemVariants}
          >
            <h3>Features</h3>
            <ul className="project-detail-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="project-detail-section" 
            custom={4.5} 
            variants={itemVariants}
          >
            <h3>Challenges & Solutions</h3>
            <ul className="project-detail-list">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="project-detail-links" 
            custom={5} 
            variants={itemVariants}
          >
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-detail-link"
            >
              Visit Site <FaExternalLinkAlt />
            </a>
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-detail-link"
            >
              View Code <FaGithub />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}

export default ProjectDetail;
