import React from 'react';
import './Card.css';

// Card.jsx
export default function Card({ subject, bgColor, textColor, rotate='0deg', iconSrc }) {
  const cardStyle = { backgroundColor: bgColor, color: textColor, transform: `rotate(${rotate})` };
  return (
    <div className="card" style={cardStyle}>
      <div className="card__image-area">
        <img className="card__icon-img" src={iconSrc} alt="" />
      </div>
      <h2 className="card__subject" dir="rtl">{subject}</h2>
    </div>
  );
}
