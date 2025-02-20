// src/Components/Header.jsx

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import rabbitWizardLogo from "./newicon.png";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import "./Header.css";

// Drawer Motion Variants
const drawerVariants = {
  closed: { x: "100%" },
  open: {
    x: "20%", // occupies ~80% of the screen
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 14
    }
  }
};

// Overlay variants
const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 }
};

// Nav structure
const navLinks = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "The Rabbit Way", path: "/the-rabbit-way" },
  // Desktop uses a vertical bar, mobile uses horizontal <hr>
  { label: "separator", separator: true },
  { label: "Sorcerers Sandbox", path: "/sorcerers-sandbox", sandbox: true }
];

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  // We'll store scroll position to fix iOS scrolling
  const scrollYRef = useRef(0);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  };

  // If the menu is open, lock the body scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      // store current scroll offset
      scrollYRef.current = window.scrollY;
      // lock body
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = "100%";
    } else {
      // restore
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollYRef.current);
    }
    return () => {
      // cleanup
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [mobileMenuOpen]);

  // Close drawer when resizing above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Set initial theme from user preference
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
    if (prefersDark) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={rabbitWizardLogo} alt="RabbitWiz Logo" className="logo-icon" />
          <span className="logo-text">RabbitWiz</span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className="nav-links desktop-nav">
        {navLinks.map((item) => {
          if (item.separator) {
            // For desktop, let's keep the | symbol
            return <span key="sep" className="nav-separator">|</span>;
          }
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`nav-link ${item.sandbox ? "sandbox-desktop-link" : ""}`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Theme Switcher */}
      <div className="theme-switcher" onClick={toggleDarkMode}>
        <div className={`dark-mode-btn ${darkMode ? "dark" : "light"}`}>
          {darkMode ? <FiMoon size={22} /> : <FiSun size={22} />}
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
      </div>

      {/* AnimatePresence for Overlay & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="mobile-overlay"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.4 }}
              onClick={closeMenu}
            />
            {/* Drawer */}
            <motion.nav
              className="mobile-drawer"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navLinks.map((item) => {
                if (item.separator) {
                  // Mobile: horizontal line
                  return <hr key="mobile-sep" className="mobile-separator" />;
                }
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`nav-link mobile-nav-link ${
                      item.sandbox ? "sandbox-mobile-link" : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
