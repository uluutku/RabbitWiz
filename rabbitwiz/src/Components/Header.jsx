import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <div className="header-container">
        <div className="header-title">
          <h1>RabbitWiz</h1>
        </div>
        <nav className="header-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
