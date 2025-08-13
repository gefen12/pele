import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Development.css';

gsap.registerPlugin(ScrollTrigger);

// ✅ Dynamically import images from assets/projectImgs/
const imageModules = import.meta.glob('../../assets/projectImgs/*.png', {
  eager: true,
  import: 'default',
});

// ✅ Convert to array and sort alphabetically
const images = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b)) // Optional: sort by file name
  .map(([_, module]) => module);

// ✅ Project data with dynamic images
const projects = [
  {
    id: 1,
    img: images[3],
    top: '20vh',
    left: '27vw',
    title: 'לומדת קטלנית',
    description: 'לומדת קטלנית מכינה את הלוחם למבחן הקטלנית ולשימוש הכלי בשטח',
    tech: 'React, CSS',
    codeLink: 'https://github.com/gefen12/my-app.git',
  },
  {
    id: 2,
    img: images[4],
    top: '20vh',
    left: '53vw',
    title: 'לומדת תלב',
    description: 'Project 2 Description',
    tech: 'React, CSS',
    codeLink: 'https://github.com/gefen12/dragon-lomda.git',
  },
  {
    id: 3,
    img: images[2],
    top: '57vh',
    left: '27vw',
    title: 'אתר בהלצ',
    description: 'Project 3 Description',
    tech: 'React, CSS',
    codeLink: 'https://github.com/gefen12/bhd14.git',
  },
  // {
  //   id: 4,
  //   img: images[2],
  //   top: '57vh',
  //   left: '53vw',
  //   title: 'אתר בהלצ',
  //   description: 'Project 4 Description',
  //   tech: 'React, CSS',
  //   codeLink: 'https://github.com/gefen12/bhd14.git',
  // },
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
          // style={{
          //   top: proj.top,
          //   left: proj.left,
          // }}
        >
          <img src={proj.img} alt={proj.title} className="dev-img" />

          <div className="overlay-box overlay-left">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>

          <div className="overlay-box overlay-right">
            <p>{proj.tech}</p>
            <a
              href={proj.codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt;/&gt;
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}
