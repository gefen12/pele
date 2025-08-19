import React from "react";
import {
  useState,
} from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import logoBlue from '../../assets/pele-blue.svg';
import logoPink from '../../assets/pele-pink.svg';
import logoPurple from '../../assets/pele-purple.svg';
import logoBlack from '../../assets/pele-black.svg';
import logoGrey from '../../assets/pele-grey.svg';

import sparklePink from '../../assets/sparklePink.svg';
import sparkleBlue from '../../assets/sparkles.svg';
import sparklePurple from '../../assets/sparklePurple.svg';
import sparkleBlack from '../../assets/sparkleBlack.svg'; 
import sparkleGrey from '../../assets/sparkleGrey.svg';
import "./Navbar.css";

const Navbar = ({ color = "#2461E5" }) => {
  const linkStyle = { color };


const logo = color === "#E5249E"
  ? logoPink
  : color === "#8082F8"
  ? logoPurple
  : color === "#555"
  ? logoGrey
  : logoBlue;

const sparkles = color === "#E5249E"
  ? sparklePink
  : color === "#8082F8F"
  ? sparklePurple
  : color === "#555"
  ? sparkleGrey
  : sparkleBlue;
  const [menuOpen, setMenuOpen] = useState(false); 
const location = useLocation();
const isHome = location.pathname === "/";

  return (
    <div dir="rtl" className="navbar" style={{ '--main-color': color }}>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {/* Right side - nav links */}
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {/* <a href="#about" >אודות</a> */}
           <NavLink to="/graphics" className={({ isActive }) => isActive ? "active" : ""}>גרפיקות</NavLink>
        <NavLink to="/development" className={({ isActive }) => isActive ? "active" : ""}>לומדות</NavLink>
        <NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : ""}>גלריה</NavLink>
        <NavLink to="/multimedia" className={({ isActive }) => isActive ? "active" : ""}>מולטימדיה</NavLink>
          </nav>

      {/* Left side - contact */}
      <div className="left-side">
        
        <a href="mailto:pelebhd14@gmail.com" className="contact">צרו קשר</a>
        <img src={sparkles} alt="sparkle" className="sparkle-icon contact" />
        <a href="mailto:pelebhd14@gmail.com" style={{ ...linkStyle, textDecoration: "underline" }} className="contact">
          pelebhd14@gmail.com
        </a>
        <div className={`logo ${isHome ? "hide-logo-mobile" : ""}`}>
            <a href="./">
              <img src={logo} alt="Pele Logo" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


