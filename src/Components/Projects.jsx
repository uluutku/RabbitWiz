// src/Components/Projects.jsx
import React from "react";
import "./Projects.css";
import projectData from "./projectData"; // your project details

function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-title">Spellbook of Enchanted Projects</h2>
      <p className="projects-subtitle">
        Each of these creations is woven with RabbitWiz magic—click to explore the front-end
        wizardry and consistent branding in action!
      </p>
      <div className="projects-grid">
        {projectData.map((project) => (
          <a
            href={project.url}
            className="project-card"
            key={project.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-image-wrapper">
              <img src={project.img} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
