import React from 'react';
import './Card.css';

export default function Card({ subject, bgColor, textColor, rotate = '0deg' }) {
  const cardStyle = {
    backgroundColor: bgColor,
    color: textColor,
    transform: `rotate(${rotate})`,
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card__image-area"></div>
      <h2 className="card__subject">{subject}</h2>
    </div>
  );
}