// src/Pages/AboutPage.jsx
import React from 'react';
import profilePicture from './newicon.png'; // Ensure this image is available
import { FaReact, FaNodeJs, FaDatabase, FaLaptopCode } from 'react-icons/fa';
import './AboutPage.css';

function AboutPage() {
  return (
    <section className="about">
      {/* About RabbitWiz Section */}
      <div className="about-section">
        <h1 className="about-title">About RabbitWiz</h1>

        <p className="about-description">
          Welcome to the coziest warren on the web—<span>RabbitWiz</span>. 
          Here, I blend whimsical design with solid code, sprinkling 
          each project with just enough magic to make it both delightful 
          and reliable. Think of it as a friendly rabbit tapping a 
          wizard’s staff on your keyboard.
        </p>

        <p className="about-description">
          My specialty? Crafting brand-consistent experiences from 
          ear to tail. Whether it’s an online store with a dash 
          of carrot flair or a data dashboard with subtle sparkle, 
          each build reflects the playful modernity that is RabbitWiz. 
          There are no dusty templates or borrowed designs here—just 
          fresh lines of code and visuals conjured from scratch (or 
          a little AI assistance when needed).
        </p>

        <p className="about-description">
          Every RabbitWiz project aims to make visitors feel welcomed, 
          amused, and fully immersed. From color palettes to custom 
          icons, everything flows together so you’ll say, 
          “Yep, this is definitely RabbitWiz.” It’s all about 
          that sweet spot between a friendly greeting and a 
          jaw-dropping reveal.
        </p>

        <p className="about-description">
          And yes, carrots, spells, and whimsical puns are 
          occasionally part of the process—because if I’m 
          having fun creating, you’ll sense that spark 
          in the final site. More than anything, RabbitWiz 
          is a reminder that even professional work can—and 
          should—come with a smile.
        </p>

        <p className="about-description">
          So hop in, explore my portfolio, and let’s see how 
          a little humor and consistent design can turn 
          ordinary ideas into something enchantingly different.
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
              Hello! I’m the <span>Rabbit Wizard</span>, a front-end 
              (and sometimes full-stack) developer with an affinity 
              for bright colors, breezy interfaces, and the occasional 
              magical pun. I started out sketching quirky bunnies 
              in a notebook and ended up weaving entire digital 
              worlds through React—and let me tell you, that’s 
              one rabbit hole I’m glad I fell into.
            </p>
            <p className="about-description">
              Whether I’m summoning new UI components or taming 
              back-end logic, I strive to make the experience 
              as smooth as a hare’s hop. It’s all about 
              balancing playful visuals with the practicality 
              that users expect—so your final product feels like 
              a cozy warren they’ll want to revisit.
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
