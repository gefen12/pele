import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Development.css';

gsap.registerPlugin(ScrollTrigger);


const projects = [
  {
    id: 1,
    img: './src/assets/projectImgs/project1.png',
    top: '20vh',
    left: '30vw',
  },
  {
    id: 2,
    img: './src/assets/projectImgs/project2.png',
    codeLink: 'https://github.com/user/project2',
    top: '80vh',
    left: '40vw',
  },
  {
    id: 3,
    img: './src/assets/projectImgs/project3.png',
    codeLink: 'https://github.com/user/project3',
    top: '40vh',
    left: '60vw',
  },
    {
    id: 4,
    img: './src/assets/projectImgs/project4.png',
    codeLink: 'https://github.com/user/project3',
    top: '110vh',
    left: '20vw',
  },
  {
    id: 5,
    img: './src/assets/projectImgs/project1.png',
    codeLink: 'https://github.com/user/project1',
    top: '130vh',
    left: '50vw',
  },

];

export default function Development() {
  const refs = useRef([]);

  useEffect(() => {
    refs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section className="dev-wrapper">
      {projects.map((proj, i) => (
        <div
          key={proj.id}
          ref={(el) => (refs.current[i] = el)}
          className="dev-card"
          style={{
            top: proj.top,
            left: proj.left,
            width: '280px',
            height: '180px',
          }}
        >
          <img src={proj.img} alt="" className="dev-img" />
          <a
            href={proj.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="overlay"
          >
            <span>&lt;/&gt;</span>
          </a>
        </div>
      ))}
    </section>
  );
}
