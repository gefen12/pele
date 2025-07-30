import React, { useState, useEffect } from 'react';
import LandingAnimation from '../components/LandingAnimation.jsx';
import arrow from '../assets/arrow.svg';
import NavBar from '../components/navBar/navBar.jsx';
import Skills from '../components/skills/skills.jsx';
import Cards from '../components/card/cards.jsx';
import About from '../components/about/about.jsx';

const HomePage = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [hideArrow, setHideArrow] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // הוספנו סטייט לניווט

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setShowNavbar(false);
      const timer = setTimeout(() => {
        setShowNavbar(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.body.offsetHeight;
      const nearBottom = scrollPosition + viewportHeight >= fullHeight - 250;
      setHideArrow(nearBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
  };

  return (
    <div>
      {showNavbar && <NavBar />}
      <LandingAnimation onAnimationsDone={() => setShowArrow(true)} />
      {showArrow && !hideArrow && (
        <img
          src={arrow}
          alt="Arrow icon"
          className="fixed bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 z-[1000] animate-bounce cursor-pointer"
          onClick={scrollDown}
        />
      )}
      <Cards />
      <Skills />
      <About />
    </div>
  );
};

export default HomePage;
