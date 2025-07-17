import React from "react";
import { Link } from "react-router-dom";
import sparkles from "../../assets/sparkles.svg";
import logoBlue from '../../assets/pele-blue.svg';
import "./Navbar.css";

const Navbar = ({ color = "#2461E5" }) => {
  const linkStyle = { color };

  return (
    <div dir="rtl" className="navbar" style={{ color }}>
      {/* Right side - nav links */}
      <nav className="nav-links">
        <a href="#about" style={linkStyle}>אודות</a>
        <Link to="/gallery" style={linkStyle}>גלריה</Link>
        <a href="#graphics" style={linkStyle}>גרפיקות</a>
        <a href="#learn" style={linkStyle}>לומדות</a>
      </nav>

      {/* Left side - contact */}
      <div className="contact">
        <a href="mailto:pelebhd14@gmail.com" style={linkStyle}>צרו קשר</a>
        <img src={sparkles} alt="sparkle" className="sparkle-icon" />
        <a href="mailto:pelebhd14@gmail.com" style={{ ...linkStyle, textDecoration: "underline" }}>
          pelebhd14@gmail.com
        </a>
        <div className="logo">
          <a href="/">
            <img src={logoBlue} alt="Pele Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


