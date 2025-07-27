import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Development.css';

gsap.registerPlugin(ScrollTrigger);


const projects = [
  {
    id: 1,
    img: './src/assets/projectImgs/project4.png',
    top: '20vh',
    left: '27vw',
    title: 'לומדת קטלנית',
    description: 'לומדת קטלנית מכינה את הלוחם למבחן הקטלנית ולשימוש הכלי בשטח',
    tech: 'React, CSS',
    codeLink: 'https://github.com/user/project1',
  },
  {
    id: 2,
    img: './src/assets/projectImgs/project5.png',
    // top: '55vh',
    left: '53vw',
    top: '20vh',
    // top: '20vh',
    // left: '47vw',
    title: 'לומדת דרקונית',
    description: 'Project 2 Description',
      tech: 'React, CSS',
      codeLink: 'https://github.com/user/project1',
    
  },
  {
    id: 3,
    img: './src/assets/projectImgs/project3.png',
    // top: '90vh',
    left: '27vw',
    top: '57vh',
    // top: '20vh',
    // left: '7vw',
    title: 'לומדת דרקונית',
    description: 'Project 3 Description',
      tech: 'React, CSS',
  codeLink: 'https://github.com/user/project1',
    
  },
    {
    id: 4,
    img: './src/assets/projectImgs/project6.png',
    // top: '125vh',
    left: '53vw',
    top: '57vh',
    //  top: '20vh',
    // left: '67vw',
    title: 'לומדת טקטיקה',
    description: 'Project 4 Description',
      tech: 'React, CSS',
    codeLink: 'https://github.com/user/project1',
  
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
{/* <h1 className='section-header'>לומדות</h1> */}
      {projects.map((proj, i) => (
  // <div
  //   key={proj.id}
  //   ref={(el) => (refs.current[i] = el)}
  //   className="dev-card"
  //   style={{
  //     top: proj.top,
  //     left: proj.left,
  //   }}
  // >
  //   <img src={proj.img} alt="" className="dev-img" />
    
  //   <div className={`overlay-box ${i % 2 === 0 ? 'overlay-left' : 'overlay-right'}`}>
  //     <h3>{proj.title}</h3>
  //     <p>{proj.description}</p>
  //     <p style={{ color: '#E5249E', marginTop: '0.5rem' }}>{proj.tech}</p>
  //     <a href={proj.codeLink} target="_blank" rel="noopener noreferrer" style={{ color: '#E5249E' }}>
  //       &lt;/&gt;
  //     </a>
  //   </div>
  // </div>
  <div
  key={proj.id}
  ref={(el) => (refs.current[i] = el)}
  className="dev-card"
  style={{
    top: proj.top,
    left: proj.left,
  }}
>
  <img src={proj.img} alt="" className="dev-img" />

  <div className="overlay-box overlay-left">
    <h3>{proj.title}</h3>
    <p>{proj.description}</p>
  </div>

  <div className="overlay-box overlay-right">
    <p>{proj.tech}</p>
    <a href={proj.codeLink} target="_blank" rel="noopener noreferrer" >
      &lt;/&gt;
    </a>
  </div>
</div>
))}
    </section>
  );
}
