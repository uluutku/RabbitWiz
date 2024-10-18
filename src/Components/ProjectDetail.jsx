// ProjectDetail.jsx
import React from 'react';
import './ProjectDetail.css';
import { FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function ProjectDetail({ project, onClose }) {
  return (
    <div className="project-detail-overlay" onClick={onClose}>
      <div className="project-detail" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close">
          <FaTimes size={24} />
        </button>
        <div className="project-detail-content">
          <h2 className="project-detail-title">{project.title}</h2>
          <p className="project-detail-description">{project.desc}</p>
          <div className="project-detail-images">
            {project.screenshots.map((screenshot, index) => (
              <img src={screenshot} alt={`${project.title} screenshot ${index + 1}`} key={index} />
            ))}
          </div>
          <div className="project-detail-section">
            <h3>Technologies Used</h3>
            <ul className="project-detail-technologies">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="project-detail-section">
            <h3>Features</h3>
            <ul className="project-detail-features">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="project-detail-section">
            <h3>Challenges & Solutions</h3>
            <ul className="project-detail-challenges">
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>
          <div className="project-detail-links">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-detail-link">
              Visit Site <FaExternalLinkAlt />
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-detail-link">
              View Code <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
