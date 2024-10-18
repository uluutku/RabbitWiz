// footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import rabbitWizardLogo from './rabbit-wizard-logo.png';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">
            <img src={rabbitWizardLogo} alt="RabbitWiz Logo" className="footer-logo-icon" />
            <span className="footer-logo-text">RabbitWiz</span>
          </Link>
        </div>
        <div className="footer-links">
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/portfolio" className="footer-link">
    Portfolio
  </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>
        <div className="footer-socials">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope size={24} />
          </a>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} RabbitWiz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
