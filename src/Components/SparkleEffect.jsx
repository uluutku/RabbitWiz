// src/Components/SparkleEffect.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './SparkleEffect.css';

function SparkleEffect() {
  const sparkles = Array.from({ length: 12 });
  return (
    <div className="sparkle-effect">
      {sparkles.map((_, index) => {
        const delay = Math.random() * 0.3;
        const x = (Math.random() - 0.5) * 80;
        const y = (Math.random() - 0.5) * 80;
        return (
          <motion.div
            key={index}
            className="sparkle"
            initial={{ opacity: 1, scale: 0.5, x: 0, y: 0 }}
            animate={{ opacity: 0, scale: 5, x, y }}
            transition={{ duration: 0.8, ease: 'easeOut', delay }}
          />
        );
      })}
    </div>
  );
}

export default SparkleEffect;
