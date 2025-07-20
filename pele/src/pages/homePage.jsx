import React, { useState, useEffect } from 'react';
import LandingAnimation from '../components/LandingAnimation.jsx';
import arrow from '../assets/arrow.svg';
import NavBar from '../components/navBar/navBar.jsx';
import Skills from '../components/skills/skills.jsx';
import Cards from '../components/card/cards.jsx';
import About from '../components/about/about.jsx';
import Gallery from '../components/gallery/gallery.jsx';

const HomePage = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [hideArrow, setHideArrow] = useState(false);

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
      <NavBar />
      <LandingAnimation onAnimationsDone={() => setShowArrow(true)} />
      {showArrow && !hideArrow && (
        <img
          src={arrow}
          alt="Arrow icon"
          className="scroll-arrow bounce"
          onClick={scrollDown}
        />
      )}
      {/* <Gallery /> */}
      <Cards />
      {/* <Skills /> */}
      <About />
    </div>
  );
};

export default HomePage;
