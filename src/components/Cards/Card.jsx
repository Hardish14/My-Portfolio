import React from 'react';
import './Card.css';

const Card = ({emoji, heading, detail}) => {
  return (
    <div className='card1'>
      <img src={emoji} alt=""></img>
      <span className='card-heading'>{heading}</span>
      <span className='card-details'>{detail}</span>
      <button className='c-button'>LEARN MORE</button>
    </div>
  )
}

export default Card;