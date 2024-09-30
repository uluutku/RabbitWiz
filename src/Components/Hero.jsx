import { useState } from "react";
import { motion } from "framer-motion";
import CircularProgress from "@mui/material/CircularProgress";
import "./Hero.css";
import heroImage from "../assets/single_rabbit_v4.png";

function Hero() {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <motion.div 
      className="hero-main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="hero-container"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="hero-image-container">
          {loading && <CircularProgress />}
          <motion.img
            src={heroImage}
            alt="Hero Rabbit"
            className={`hero-image ${loading ? "hidden" : ""}`}
            onLoad={handleImageLoad}
            initial={{ opacity: 0 }}
            animate={{ opacity: loading ? 0 : 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Hero;
