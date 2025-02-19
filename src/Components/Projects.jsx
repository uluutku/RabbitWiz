// src/Components/Projects.jsx
import React, { useRef, useEffect } from "react";
import "./Projects.css";
import projectData from "./projectData";

// Lerp utility for smooth motion
function lerp(current, target, factor = 0.3) {
  return current + (target - current) * factor;
}

function ProjectCard({ project }) {
  const cardRef = useRef(null);

  // We store the current/target transform data
  const transformDataRef = useRef({
    currentRotateX: 0,
    currentRotateY: 0,
    targetRotateX: 0,
    targetRotateY: 0,

    // For two-layer glare
    currentGlareX1: 50,
    currentGlareY1: 50,
    targetGlareX1: 50,
    targetGlareY1: 50,

    currentGlareX2: 50,
    currentGlareY2: 50,
    targetGlareX2: 50,
    targetGlareY2: 50
  });

  const requestRef = useRef(null);

  // rAF-driven animation loop
  const animate = () => {
    const t = transformDataRef.current;

    // Lerp angles
    t.currentRotateX = lerp(t.currentRotateX, t.targetRotateX, 0.3); 
    t.currentRotateY = lerp(t.currentRotateY, t.targetRotateY, 0.3);

    // Lerp glare coords
    t.currentGlareX1 = lerp(t.currentGlareX1, t.targetGlareX1, 0.3);
    t.currentGlareY1 = lerp(t.currentGlareY1, t.targetGlareY1, 0.3);
    t.currentGlareX2 = lerp(t.currentGlareX2, t.targetGlareX2, 0.2);
    t.currentGlareY2 = lerp(t.currentGlareY2, t.targetGlareY2, 0.2);

    // Update DOM
    if (cardRef.current) {
      cardRef.current.style.transform = `
        perspective(1000px)
        rotateX(${t.currentRotateX}deg)
        rotateY(${t.currentRotateY}deg)
      `;
      // glare #1
      cardRef.current.style.setProperty("--glare1-x", `${t.currentGlareX1}%`);
      cardRef.current.style.setProperty("--glare1-y", `${t.currentGlareY1}%`);
      // glare #2
      cardRef.current.style.setProperty("--glare2-x", `${t.currentGlareX2}%`);
      cardRef.current.style.setProperty("--glare2-y", `${t.currentGlareY2}%`);
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
    // eslint-disable-next-line
  }, []);

  // Mouse move => set tilt & glare targets
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cardWidth = rect.width;
    const cardHeight = rect.height;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // ±10 degrees tilt
    const rotateY = ((x - cardWidth / 2) / (cardWidth / 2)) * 10;
    const rotateX = -((y - cardHeight / 2) / (cardHeight / 2)) * 10;

    // Glare positions
    const glare1X = (x / cardWidth) * 100;
    const glare1Y = (y / cardHeight) * 100;
    // second layer offset
    const glare2X = (x / cardWidth) * 50 + 25; 
    const glare2Y = (y / cardHeight) * 50 + 25;

    const t = transformDataRef.current;
    t.targetRotateX = rotateX;
    t.targetRotateY = rotateY;
    t.targetGlareX1 = glare1X;
    t.targetGlareY1 = glare1Y;
    t.targetGlareX2 = glare2X;
    t.targetGlareY2 = glare2Y;
  };

  // Mouse leave => go back to neutral
  const handleMouseLeave = () => {
    const t = transformDataRef.current;
    t.targetRotateX = 0;
    t.targetRotateY = 0;
    t.targetGlareX1 = 50;
    t.targetGlareY1 = 50;
    t.targetGlareX2 = 50;
    t.targetGlareY2 = 50;
  };

  return (
    <a
      href={project.url}
      className="project-card-3d"
      target="_blank"
      rel="noopener noreferrer"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 2 glare layers */}
      <div className="project-glare glare1" />
      <div className="project-glare glare2" />

      {/* The top image edge-to-edge */}
      <img src={project.img} alt={project.title} className="project-image" />

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.desc}</p>
      </div>
    </a>
  );
}

function Projects() {
  return (
    <section className="projects">
      <h2 className="projects-title">Spellbook of Enchanted Projects</h2>
      <p className="projects-subtitle">
        Handcrafted from scratch, brand-consistent, and built on React&nbsp;19. 
        Hover for a magical 3D effect, then tap or click to explore!
      </p>
      <div className="projects-grid">
        {projectData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
