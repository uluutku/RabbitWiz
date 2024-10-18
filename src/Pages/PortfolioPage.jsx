// PortfolioPage.jsx
import React, { useState } from 'react';
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
          <h1 className="portfolio-title">My Projects</h1>
          <p className="portfolio-subtitle">Explore the work I've done over the years.</p>
        </header>
        <div className="portfolio-content">
          {projectData.map((project) => (
            <DetailedProjectCard key={project.id} project={project} onClick={handleCardClick} />
          ))}
        </div>
        {selectedProject && <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />}
      </div>
    );
  }
  
  export default PortfolioPage;