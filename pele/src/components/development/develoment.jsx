import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Development.css';

gsap.registerPlugin(ScrollTrigger);

// ✅ Dynamically import images from assets/projectImgs/
const imageModules = import.meta.glob('../../assets/projectImgs/*.{png,svg}', {
  eager: true,
  import: 'default',
});

// ✅ Convert to array and sort alphabetically
const images = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b)) // Optional: sort by file name
  .map(([_, module]) => module);

  
  export default function Development() {
    const refs = useRef([]);
    const [project2Clicked, setProject2Clicked] = useState(false);
    const [project1Clicked, setProject1Clicked] = useState(false);

    // ✅ Project data with dynamic images
    const projects = [
      {
        id: 1,
        img: project1Clicked ? images.find((src) => src.includes('project4v2')) : images[3],
        top: '20vh',
        left: '27vw',
        title: 'לומדת קטלנית',
        description: 'לומדת קטלנית מכינה את הלוחם למבחן הקטלנית ולשימוש הכלי בשטח.',
        tech: 'React, CSS',
        codeLink: 'https://github.com/gefen12/my-app.git',
      },
      {
        id: 2,
         img: project2Clicked ? images.find((src) => src.includes('project5v2')) : images[5],
        top: '20vh',
        left: '53vw',
        title: 'לומדת תלב',
        description: 'לומדת תל"ב אחראית על יצירת תקן לאיכות בהדרכה של לוחמים ומפקדים בבהל"צ.',
        tech: 'React, CSS',
        codeLink: 'https://github.com/gefen12/dragon-lomda.git',
      },
      {
        id: 3,
        img: images[2],
        top: '57vh',
        left: '27vw',
        title: 'אתר בהלצ',
        description: 'האתר נועד לשפר וליעל את שימור הידע בבסיס.',
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
    // ✅ Click handler
  const handleClick = (id) => {
    if (id === 2) setProject2Clicked((prev) => !prev);
    if (id === 1) setProject1Clicked((prev) => !prev);
  };

  return (
    <section className="dev-wrapper">
      {projects.map((proj, i) => (
        <div
          key={proj.id}
          ref={(el) => (refs.current[i] = el)}
          className="dev-card"
          onClick={() => handleClick(proj.id)}
          // style={{
          //   top: proj.top,
          //   left: proj.left,
          // }}
        >
          <img src={proj.img} alt={proj.title} className="dev-img" />

          <div className="overlay-box overlay-left ">
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
