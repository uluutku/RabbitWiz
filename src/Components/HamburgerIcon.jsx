import React from 'react';
import { motion } from 'framer-motion';
import './HamburgerIcon.css';

const HamburgerIcon = ({ isOpen, toggle }) => {
  return (
    <motion.button 
      className="hamburger-button"
      onClick={toggle}
      animate={isOpen ? "open" : "closed"}
      initial="closed"
    >
      <motion.span
        className="hamburger-line"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 8 }
        }}
      />
      <motion.span
        className="hamburger-line"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
      />
      <motion.span
        className="hamburger-line"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -8 }
        }}
      />
    </motion.button>
  );
};

export default HamburgerIcon; 