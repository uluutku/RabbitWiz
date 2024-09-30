import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardWrapper = styled(motion.div)`
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1), -3px -3px 6px rgba(255, 255, 255, 0.7); /* Neomorphic effect */

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.div`
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background-size: cover;
  background-position: center;
`;

const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${CardWrapper}:hover & {
    opacity: 1;
  }

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 8px 0 0;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 576px) {
    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

function LinkContainerCard({ title, imageUrl, description, url }) {
  return (
    <CardWrapper
      onClick={() => window.open(url, "_blank")}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
    >
      <CardImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <CardOverlay>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardOverlay>
    </CardWrapper>
  );
}

LinkContainerCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default LinkContainerCard;
