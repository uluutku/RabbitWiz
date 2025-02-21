import React from 'react';
import './VaultCard.css';

function VaultCard() {
  return (
    <div className="vault-container">
      <div className="vault-inside">Secure Content</div>
      <div className="vault-door">
        <div className="vault-handle"></div>
      </div>
    </div>
  );
}

export default VaultCard;