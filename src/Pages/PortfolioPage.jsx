// src/Pages/PortfolioPage.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PortfolioPage.css';
import projectData from '../Components/projectData';
import ProjectDetail from '../Components/ProjectDetail';
import DetailedProjectCard from '../Components/DetailedProjectCard';

function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <h1 className="portfolio-title">Spellbook of Enchanted Projects</h1>
        <p className="portfolio-subtitle">
          Witness the magic of RabbitWiz—each project is a spell of creativity, code, and consistent branding.
        </p>
      </header>
      <motion.div className="portfolio-content" layout>
        {projectData.map((project) => (
          <DetailedProjectCard key={project.id} project={project} onClick={handleCardClick} />
        ))}
      </motion.div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default PortfolioPage;
