import React from 'react';
import Marquee from 'react-fast-marquee';

import './Skills.css';

import { skillsData } from '../../data/skillsData';
import { skillsImage } from '../../utils/skillsImage';

function Skills() {
  const skillBoxStyle = {
    backgroundColor: '#F4E7D5', // your light background
    boxShadow: '0px 0px 30px #8082F8',
  };

  return (
    <div className="skills" style={{ backgroundColor: '#F4E7D5' }}>
      <div className="skillsHeader">
        <h2
          style={{
            color: '#2461E5',
            direction: 'rtl',
            fontFamily: 'Rubik',
            fontWeight: 100,
          }}
        >
          ארגז הכלים
        </h2>
      </div>
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={id} style={skillBoxStyle}>
                <img src={skillsImage(skill)} alt={skill} />
                <h3 style={{ color: '#2461E5' }}>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;
