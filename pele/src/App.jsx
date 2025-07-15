import { useState, useEffect } from 'react';
import LandingAnimation from "./components/LandingAnimation.jsx";
import arrow from "./assets/arrow.svg";
import NavBar from "./components/navBar/navBar.jsx";
import Skills from './components/skills/skills.jsx';
import Cards from './components/card/cards.jsx';
import About from './components/about/about.jsx';
import RollingGallery from './components/gallery/gallery.jsx';

import './App.css';

function App() {
  const [showArrow, setShowArrow] = useState(false);
  const [hideArrow, setHideArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.body.offsetHeight;

      // נעלים את החץ 150px לפני הסוף
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

      {/* החץ מופיע רק כשהאנימציה נגמרת ואנחנו לא קרובים לתחתית */}
   {showArrow && !hideArrow && (
  <img
    src={arrow}
    alt="Arrow icon"
    className="scroll-arrow bounce"
    onClick={scrollDown}
  />
)}
<RollingGallery autoplay={true} pauseOnHover={true} />
      <Cards />
      <Skills />
      <About />
    </div>
  );
}

export default App;

