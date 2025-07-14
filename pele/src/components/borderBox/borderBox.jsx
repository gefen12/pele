import React from 'react';
import bgFrame from '../../assets/borderBox.svg';
import './borderBox.css';


export default function BorderBox({ children, className = "" }) {
  return (
    <div className="border-box">
      <img src={bgFrame} alt="background frame" className="border-box__background" />
      <div className="border-box__content">
        {children}
      </div>
    </div>
  );
}