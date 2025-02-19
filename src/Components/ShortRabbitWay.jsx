// src/Components/ShortRabbitWay.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ShortRabbitWay.css";

function ShortRabbitWay() {
  return (
    <section className="short-rabbit-way">
      <h2 className="short-rabbit-way-title">A Rabbit’s Code of Magic</h2>
      <p className="short-rabbit-way-intro">
        All RabbitWiz creations follow a set of whimsical, yet practical guidelines—
        ensuring each project remains enchantingly consistent. Here’s a quick glimpse:
      </p>

      <ul className="short-rabbit-way-list">
        <li>
          <strong>Original Conjuring Only:</strong>{" "}
          No external templates or borrowed images—every line of code and design spark 
          is conjured from scratch or AI-crafted.
        </li>
        <li>
          <strong>Modern React, Always:</strong>{" "}
          We leap onto React&nbsp;19 (and beyond) for that fresh code aroma in every build.
        </li>
        <li>
          <strong>Responsive Sorcery:</strong>{" "}
          Desktop, mobile, or tablet—our designs morph gracefully. If not feasible, 
          we conjure a fallback just for smaller screens.
        </li>
        <li>
          <strong>Performance &amp; Security:</strong>{" "}
          Even the fastest rabbit hates lag—and the most cautious wizard fortifies 
          every burrow against unwelcome intruders.
        </li>
      </ul>

      <p className="short-rabbit-way-outro">
        Ready for the full set of rabbit commandments?
        <Link to="/the-rabbit-way" className="short-rabbit-way-link">
          Hop on over to The Rabbit Way!
        </Link>
      </p>
    </section>
  );
}

export default ShortRabbitWay;
