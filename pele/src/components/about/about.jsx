import React from 'react';
import './about.css';
import Arrow from '../../assets/arrow2.svg'; 

export default function About({ color = '#2461E5' }) {
  return (
    <section className="about" id="about" style={{  '--main-color': color  }}>
      <div className="about__content">
        <h1 className="about__headline" >פלא בהלצ</h1>
        <p className="about__subtext">מוכנים להפוך את החזון שלכם למציאות?</p>
        <div className="about__mail">
          <img src={Arrow} alt="arrow" className="about__arrow" />
          <a href="mailto:pelebhd14@gmail.com" >pelebhd14@gmail.com</a>
        </div>
      </div>

      <div className="about__socials">
        <span >SOCIALS</span>
        <a href="https://www.instagram.com/handasa.kravit.idf?igsh=MWN6anE5aHd4ZGNjOA==" target="_blank" rel="noreferrer">INSTAGRAM</a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer" >TIKTOK</a>
        <a href="https://www.facebook.com/share/1GbPRLijjg/?mibextid=wwXIfr" target="_blank" rel="noreferrer" >FACEBOOK</a>
      </div>

    </section>
  );
}
