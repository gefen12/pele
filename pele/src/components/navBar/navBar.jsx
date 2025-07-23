import React from "react";
import {
  useState,
} from "react";
import { Link } from "react-router-dom";
import logoBlue from '../../assets/pele-blue.svg';
import logoPink from '../../assets/pele-pink.svg';
import sparklePink from '../../assets/sparklePink.svg';
import sparkleBlue from '../../assets/sparkles.svg';
import "./Navbar.css";

const Navbar = ({ color = "#2461E5" }) => {
  const linkStyle = { color };
   const logo = color === "#E5249E" ? logoPink : logoBlue; 
  const sparkles = color === "#E5249E" ? sparklePink : sparkleBlue;
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <div dir="rtl" className="navbar" style={{ '--main-color': color }}>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {/* Right side - nav links */}
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <a href="#about" >אודות</a>
        <Link to="/gallery" >גלריה</Link>
        <a href="#graphics" >גרפיקות</a>
        <Link to="/development" >לומדות</Link>
      </nav>

      {/* Left side - contact */}
      <div className="left-side">
        
        <a href="mailto:pelebhd14@gmail.com" className="contact">צרו קשר</a>
        <img src={sparkles} alt="sparkle" className="sparkle-icon contact" />
        <a href="mailto:pelebhd14@gmail.com" style={{ ...linkStyle, textDecoration: "underline" }} className="contact">
          pelebhd14@gmail.com
        </a>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Pele Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


