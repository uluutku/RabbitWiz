import React, { useState } from "react";
import "./FAQSection.css";

function FAQSection() {
  // State to toggle the FAQ visibility
  const [isFAQVisible, setIsFAQVisible] = useState(false);

  return (
    <div className="faq-section">
      <button
        className="faq-toggle-button"
        onClick={() => setIsFAQVisible(!isFAQVisible)}
      >
        {isFAQVisible ? "Hide FAQ" : "Show FAQ"}
      </button>
      {isFAQVisible && (
        <div className="faq-content">
          <h2>FAQ</h2>
          <div className="faq-item">
            <button className="faq-question">What is RabbitWiz?</button>
            <div className="faq-answer">
              RabbitWiz is a digital portfolio showcasing my technical skills,
              creativity, and branding expertise.
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question">
              Why is creativity important?
            </button>
            <div className="faq-answer">
              In a rapidly evolving technological landscape, creativity is
              essential for crafting unique and engaging experiences.
            </div>
          </div>
          <div className="faq-item">
            <button className="faq-question">
              Do you use templates for projects?
            </button>
            <div className="faq-answer">
              No, all projects, including RabbitFlix, are built from scratch
              without relying on templates.
            </div>
          </div>
          {/* Add more FAQ items as needed */}
        </div>
      )}
    </div>
  );
}

export default FAQSection;
