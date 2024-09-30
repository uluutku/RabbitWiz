import React from 'react';
import PropTypes from 'prop-types';
import './LinkContainerCard.css';

function LinkContainerCard({ title, imageUrl, description, url }) {
  return (
    <div className="link-container-card" onClick={() => window.open(url, "_blank")}>
      <div className="card-image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="card-overlay">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

LinkContainerCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default LinkContainerCard;
