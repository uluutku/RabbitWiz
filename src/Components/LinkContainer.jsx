import React from 'react';
import LinkContainerCard from "./LinkContainerCard";
import RabbitFlixThumb from "../assets/rabbitflix-new-thumb.jpg";
import PawPickerThumb from "../assets/pawpicker-thumb.jpg";
import CarrotCrossroadsThumb from "../assets/carrot-crossroads-thumb.jpg";
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LinkContainerWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.25); /* Glassmorphism effect */
  backdrop-filter: blur(10px);
  border-radius: 12px;
  width: 90vw;
  max-width: 1000px;
  margin: 0 auto;
`;

const LinkContainerHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    max-width: 800px;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.6rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

const CardsWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr; /* Single column layout on small screens */
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on medium screens */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Three columns on large screens */
  }
`;

function LinkContainer() {
  const links = [
    {
      title: "RabbitFlix",
      url: "http://rabbitflix.vercel.app",
      img: RabbitFlixThumb,
      desc: "A Netflix inspired project with our wizard rabbit's touch.",
    },
    {
      title: "Carrot Crossroads",
      url: "http://carrot-crossroads.vercel.app",
      img: CarrotCrossroadsThumb,
      desc: "Decision-based life simulation game with a rabbit twist.",
    },
    {
      title: "PawPicker",
      url: "http://pawpicker.vercel.app",
      img: PawPickerThumb,
      desc: "Modern A/B testing tool for selecting the best from multiple images.",
    },
  ];

  return (
    <LinkContainerWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <LinkContainerHeader>
        <h2>Our Rabbit's Recent Projects</h2>
        <p>Discover the magical projects our wizard rabbit has been crafting. Click to explore!</p>
      </LinkContainerHeader>
      <CardsWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {links.map((link) => (
          <LinkContainerCard
            key={link.title}
            title={link.title}
            imageUrl={link.img}
            description={link.desc}
            url={link.url}
          />
        ))}
      </CardsWrapper>
    </LinkContainerWrapper>
  );
}

export default LinkContainer;
