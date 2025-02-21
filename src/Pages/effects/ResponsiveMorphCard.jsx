import React, { useState } from 'react';
import './ResponsiveMorphCard.css';

const ResponsiveMorphCard = () => {
  const [device, setDevice] = useState('desktop');

  const toggleDevice = () => {
    setDevice(prev => {
      if (prev === 'desktop') return 'tablet';
      if (prev === 'tablet') return 'mobile';
      return 'desktop';
    });
  };

  return (
    <div className={`responsive-card ${device}`} onClick={toggleDevice}>
      <div className="content">
        {device === 'desktop' && <p>Desktop View</p>}
        {device === 'tablet' && <p>Tablet View</p>}
        {device === 'mobile' && <p>Mobile View</p>}
      </div>
    </div>
  );
};

export default ResponsiveMorphCard;