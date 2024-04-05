import React from "react";
import "./Header.css";
import LogoImage from "../assets/newicon.png";

function Header() {
  return (
    <div>
      <div className="header-container">
        <div className="logo-container">
          <img className="logo-img" src={LogoImage}></img>
          <h1 className="header-title">RABBITWIZ</h1>
        </div>

        <nav className="header-links">
          <a href="#home">Main</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
