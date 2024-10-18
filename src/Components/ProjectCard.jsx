// ProjectCard.jsx
import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <div className="project-image-wrapper">
        <img src={project.img} alt={project.title} className="project-image" />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
