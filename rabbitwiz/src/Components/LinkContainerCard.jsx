import React from "react";
import "./LinkContainerCard.css";

function LinkContainerCard({ cardTitle, active, font, grayedOut }) {
  const handleLinkClick = () => {
    if (active) {
      window.open("http://rabbitflix.vercel.app", "_blank");
    }
  };

  return (
    <div
      className={`link-container-box-card-main ${
        grayedOut ? "grayed-out" : ""
      }`}
      onClick={handleLinkClick}
      style={{ fontFamily: font }}
    >
      <div className="link-box">
        <div className="link-box-title">
          <h2>{cardTitle}</h2>
        </div>
      </div>
    </div>
  );
}

export default LinkContainerCard;
