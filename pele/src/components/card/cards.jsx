import React, { useEffect, useState } from 'react';
import Card from './card.jsx';
import './cards.css';

export default function Cards() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

  const triggerPoint = window.innerHeight * 0.3;
  if (window.scrollY > triggerPoint) {
    setScrolled(true);
  }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="cards-wrapper">
            <div className="cardsHeader">
        <h2
          style={{
            color: '#2461E5',
            direction: 'rtl',
            fontFamily: 'Rubik',
            fontWeight: 100,
          }}
        >
          התוצרים שלנו
        </h2>
      </div>
      <div className={`card-container ${scrolled ? 'open' : ''}`}>
        <div className="card-position left">
          <Card subject="גרפיקות" bgColor="#EDE5FF" textColor="#6C63FF" />
        </div>
        <div className="card-position center">
          <Card subject="לומדות" bgColor="#FFE5F5" textColor="#F52BA0" />
        </div>
        <div className="card-position right">
          <Card subject="גלריה" bgColor="#E8ECFF" textColor="#2461E5" />
        </div>
      </div>
    </div>
  );
}
