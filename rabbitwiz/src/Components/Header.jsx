import React from "react";
import "./Header.css";
import LogoImage from "../assets/newicon.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header-container">
        <div className="logo-container">
          <img className="logo-img" src={LogoImage}></img>
          <h1 className="header-title">RABBITWIZ</h1>
        </div>
        <nav className="header-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
