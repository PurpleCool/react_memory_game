import React from 'react';
import './Card.css';

export default function Card({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (disabled) {
      return;
    }

    handleChoice(card);
  };

  return (
    <div className='card'>
      <div className={flipped ? 'card--flipped' : ''}>
        <img src={card.src} alt='Card front' className='card-front' />
        <img
          src='/img/cover.png'
          className='card-back'
          alt='Card back'
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
