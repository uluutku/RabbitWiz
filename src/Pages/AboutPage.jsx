// About.jsx
import React from 'react';
import './aboutPage.css';
import profilePicture from './newicon.png'; // Ensure this image is available
import { FaReact, FaNodeJs, FaDatabase, FaLaptopCode } from 'react-icons/fa';

function AboutPage() {
  return (
    <section className="about">
      {/* About RabbitWiz Section */}
      <div className="about-section">
        <h1 className="about-title">About RabbitWiz</h1>
        <p className="about-description">
          Welcome to <span>RabbitWiz</span>, where I showcase not just my technical skills, but also my ability to create a brand and develop consistent projects.
        </p>
        <p className="about-description">
          In today's competitive digital world, I believe it's not enough to just be good at coding. RabbitWiz represents my vision of combining creativity with technology to create engaging experiences.
        </p>
        <p className="about-description">
          With the rise of AI, I understand the importance of skills beyond coding. Here at RabbitWiz, I prioritize creativity and originality. While coding is important, it's the unique ideas and artistic touch that make my projects stand out.
        </p>
        <p className="about-description">
          Every project, including RabbitFlix, is built from scratch, without using templates. Each one is a reflection of my dedication to creating something special and consistent within the RabbitWiz brand.
        </p>
        <p className="about-description">
          Come join me in exploring this digital journey where innovation and creativity thrive. Let's push the boundaries together and redefine what's possible.
        </p>
      </div>

      {/* About the Rabbit Section */}
      <div className="about-section">
        <div className="about-content">
          <div className="about-image-wrapper">
            <img src={profilePicture} alt="RabbitWiz" className="about-image" />
          </div>
          <div className="about-text">
            <h1 className="about-title">About the Rabbit</h1>
            <p className="about-description">
              Hello! I'm the <span>Rabbit Wizard</span>, a passionate web developer with a knack for crafting magical user experiences. With a background in both design and development, I bridge the gap between aesthetics and functionality to create seamless digital journeys.
            </p>
            <div className="skills">
              <h2 className="skills-title">My Expertise</h2>
              <ul className="skills-list">
                <li><FaReact /> React.js</li>
                <li><FaNodeJs /> Node.js</li>
                <li><FaDatabase /> MongoDB</li>
                <li><FaLaptopCode /> Full-Stack Development</li>
                {/* Add more skills as needed */}
              </ul>
            </div>
            <a href="/portfolio" className="about-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
