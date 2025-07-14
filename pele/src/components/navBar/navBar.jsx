import React from "react";
import sparkles from "../../assets/sparkles.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div dir="rtl" className="navbar">
      {/* Right side - nav links */}
      <nav className="nav-links">
        <a href="#about">אודות</a>
        <a href="#gallery">גלריה</a>
        <a href="#graphics">גרפיקות</a>
        <a href="#learn">לומדות</a>
      </nav>

      {/* Left side - contact */}
      <div className="contact">
        <a href="mailto:pelebhd14@gmail.com">צרו קשר</a>
        <img src={sparkles} alt="sparkle" className="sparkle-icon" />
        <a href="mailto:pelebhd14@gmail.com" style={{fontFamily: "Alegreya" ,textDecoration: "underline"}}>pelebhd14@gmail.com</a>
      </div>
    </div>
  );
};

export default Navbar;

