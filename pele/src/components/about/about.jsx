import React from 'react';
import './about.css';
import lineSvg from '../../assets/line.svg';
import Arrow from '../../assets/arrow2.svg'; 

export default function About() {
  return (
    <section className="about" id="about" >
      {/* <img src={lineSvg} alt="decorative line" className="about__line" /> */}

      <div className="about__content">
        <h1 className="about__headline">פלא בהלצ</h1>
        <p className="about__subtext">מוכנים להפוך את החזון שלכם למציאות?</p>
        <div className="about__mail">
            <img src={Arrow} alt="arrow" className="about__arrow" />
            <a href="mailto:pelebhd14@gmail.com">pelebhd14@gmail.com</a>
        </div>
      </div>

      <div className="about__socials">
        <span>SOCIALS</span>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM</a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer">TIKTOK</a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">FACEBOOK</a>
      </div>
    </section>
  );
}