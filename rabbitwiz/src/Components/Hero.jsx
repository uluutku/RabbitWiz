import React, { useState } from "react";
import "./Hero.css";
import heroImage from "../assets/single_rabbit_v3.png";
import CircularProgress from "@mui/material/CircularProgress";

function Hero() {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="hero-main">
      <div className="hero-container">
        <div className="hero-image-container">
          {loading && <CircularProgress />}
          <img
            src={heroImage}
            alt="Hero"
            className={`hero-image ${loading ? "hidden" : ""}`}
            onLoad={handleImageLoad}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
