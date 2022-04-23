import React from 'react';
import './Card.css';

export default function Card(props) {
  const { imgSrc } = props;

  return (
    <div className='card'>
      <div>
        <img src={imgSrc} alt='card front' className='front' />
        <img src='/img/cover.png' alt='card back' className='back' />
      </div>
    </div>
  );
}
