// header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import rabbitWizardLogo from './rabbit-wizard-logo.png'; 
import { FiMenu, FiX } from 'react-icons/fi'; 
import './Header.css';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Update the body's class
    if (!darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when resizing window
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Effect to set initial theme based on user preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    if (prefersDark) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
          <img src={rabbitWizardLogo} alt="RabbitWiz Logo" className="logo-icon" />
          <span className="logo-text">RabbitWiz</span>
        </Link>
      </div>
      <nav className={`nav-links ${mobileMenuOpen ? 'open active' : 'closed'}`}>
        <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
          Home
        </Link>
        <Link to="/portfolio" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
          Portfolio
        </Link>
        <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
          About
        </Link>
        {/* Additional links can be added here */}
        <div className="mobile-theme-switcher">
          <input
            type="checkbox"
            id="mobile-toggle"
            className="toggle"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <label htmlFor="mobile-toggle">
            <span className="toggle-icon">{darkMode ? '🌞' : '🌜'}</span>
          </label>
        </div>
      </nav>
      <div className="theme-switcher">
        <input
          type="checkbox"
          id="toggle"
          className="toggle"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <label htmlFor="toggle">
          <span className="toggle-icon">{darkMode ? '🌞' : '🌜'}</span>
        </label>
      </div>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>
    </header>
  );
}

export default Header;
