// src/Components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import rabbitWizardLogo from './newicon.png';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import './Header.css';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle dark mode and update body classes
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

  // Close mobile menu on window resize
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
    <motion.header 
      className="header" 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <div className="logo">
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
          <img src={rabbitWizardLogo} alt="RabbitWiz Logo" className="logo-icon" />
          <span className="logo-text">RabbitWiz</span>
        </Link>
      </div>
      <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/portfolio" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
          Portfolio
        </NavLink>
        <NavLink to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
          About
        </NavLink>
        <NavLink to="/ai" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
          AI Research
        </NavLink>
      </nav>
      <div className="theme-switcher" onClick={toggleDarkMode}>
        <div className={`dark-mode-btn ${darkMode ? 'dark' : 'light'}`}>
          {darkMode ? <FiMoon size={22} /> : <FiSun size={22} />}
        </div>
      </div>
      <div className="menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>
    </motion.header>
  );
}

export default Header;
