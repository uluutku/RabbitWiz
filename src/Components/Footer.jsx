// footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import rabbitWizardLogo from './newicon.png';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import { FaX } from 'react-icons/fa6';

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
        <Link to="/" className="footer-link">
    Home
  </Link>
          <Link to="/portfolio" className="footer-link">
    Portfolio
  </Link>
  <Link to="/about" className="footer-link">
            About
          </Link>
        </div>
        <div className="footer-socials">
          <a href="https://x.com/RabbitWizAI" target="_blank" rel="noopener noreferrer">
            <FaX size={24} />
          </a>
          <a href="https://github.com/uluutku" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://instagram.com/rabbitwizai" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
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
