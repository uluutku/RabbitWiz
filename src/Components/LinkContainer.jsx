import React from 'react';
import LinkContainerCard from "./LinkContainerCard";
import RabbitFlixThumb from "../assets/rabbitflix-new-thumb.jpg";
import PawPickerThumb from "../assets/pawpicker-thumb.jpg";
import CarrotCrossroadsThumb from "../assets/carrot-crossroads-thumb.jpg";
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LinkContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #fdfdfd;
`;

const LinkContainerHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 576px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const CardsWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
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
      desc: "Desicion based life simulation game with our rabbit touch.",
    },
    {
      title: "PawPicker",
      url: "http://pawpicker.vercel.app",
      img: PawPickerThumb,
      desc: "Modern A/B testing tool for selecting perfect one from multiple images.",
    },
  ];

  return (
    <LinkContainerWrapper>
      <LinkContainerHeader>
        <h2>Our Rabbit's Recent Projects</h2>
        <p>
          Our rabbit has been working on some exciting projects. You can check them out by clicking on the images below.
        </p>
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
