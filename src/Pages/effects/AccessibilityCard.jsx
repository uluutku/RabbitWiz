import React, { useState } from 'react';
import './AccessibilityCard.css';

const AccessibilityCard = () => {
  const [accessible, setAccessible] = useState(false);

  return (
    <div
      className={`accessibility-card ${accessible ? 'accessible' : ''}`}
      onClick={() => setAccessible(!accessible)}
    >
      <p>Click for Accessibility Mode</p>
    </div>
  );
};

export default AccessibilityCard;