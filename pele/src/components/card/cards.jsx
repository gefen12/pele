import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './card.jsx';
import './cards.css';

export default function Cards() {
  const [scrolled, setScrolled] = useState(false);
    const cardData = [
    {
      subject: 'גרפיקות',
      bgColor: '#F3E1FD',
      textColor: '#A257D6',
      route: '/graphics',
    },
    {
      subject: 'לומדות',
      bgColor: '#FFE5F5',
      textColor: '#F52BA0',
      route: '/development',
    },
    {
      subject: 'גלריה',
      bgColor: '#E8ECFF',
      textColor: '#2461E5',
      route: '/gallery',
    },
    {
      subject: 'מולטימדיה',
      bgColor: '#F6E6FC',
      textColor: '#8082F8',
      route: '/multimedia',
    },
  ];

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
        <div className="card-position far-left">
          <Link to="/graphics" style={{ textDecoration: 'none' }}>
            <Card subject="גרפיקות" bgColor="#F3E1FD" textColor="#A257D6" />
          </Link>
        </div>
        <div className="card-position left">
          <Link to="/development" style={{ textDecoration: 'none' }}>
            <Card subject="לומדות" bgColor="#FFE5F5" textColor="#F52BA0" />
          </Link>
        </div>
        <div className="card-position right">
          <Link to="/gallery" style={{ textDecoration: 'none' }}>
            <Card subject="גלריה" bgColor="#E8ECFF" textColor="#2461E5" />
          </Link>
        </div>
        <div className="card-position far-right">
          <Link to="/multimedia" style={{ textDecoration: 'none' }}>
            <Card subject="מולטימדיה" bgColor="#F6E6FC" textColor="#8082F8" />
          </Link>
        </div>
      </div>
    </div>
  );
}
