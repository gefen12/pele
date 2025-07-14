import { useState } from 'react'
import LandingAnimation from "./components/LandingAnimation.jsx";
import arrow from "./assets/arrow.svg"; // Arrow icon
import NavBar from "./components/navBar/navBar.jsx";
import Skills from './components/skills/skills.jsx';

import './App.css';

function App() {
  const [showArrow, setShowArrow] = useState(false);
  return (
<div >
<NavBar />
  <LandingAnimation  onAnimationsDone={() => setShowArrow(true)} />
{showArrow && (
<img src={arrow} alt="Arrow icon" className="arrow" />
)}
  <Skills />
</div>
  );
}

export default App;

