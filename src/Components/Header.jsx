import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import rabbitWizardLogo from './rabbit-wizard-logo.png';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import './Header.css';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
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

  // Set initial theme based on user preference
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
        <Link to="/">
          <img src={rabbitWizardLogo} alt="RabbitWiz Logo" className="logo-icon" />
          <span className="logo-text">RabbitWiz</span>
        </Link>
      </div>
      <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link to="/portfolio" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link>
        <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
      </nav>
      <div className="theme-switcher" onClick={toggleDarkMode}>
        <div className={`dark-mode-btn ${darkMode ? 'dark' : 'light'}`}>
          {darkMode ? <FiMoon size={22} /> : <FiSun size={22} />}
        </div>
      </div>
      <div className="menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>
    </header>
  );
}

export default Header;
