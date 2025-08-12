// components/p-mobile/ProjectsMobile.jsx
import React, { useEffect, useRef } from "react";
import "./projects-mobile.css";

export default function ProjectsMobile({ projects = [] }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const rootEl = wrapRef.current;
    if (!rootEl) return;

    const slides = Array.from(rootEl.querySelectorAll(".pm-slide"));
    if (!slides.length) return;

    // Helper: activate exactly one slide (the most visible)
    const setActive = (el) => {
      slides.forEach((s) => s.classList.toggle("is-active", s === el));
    };

    // Make the first slide active initially
    setActive(slides[0]);

    // Observe with the viewport as root
    const io = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the highest visibility
        const best = entries.reduce((a, b) =>
          (a?.intersectionRatio || 0) > (b?.intersectionRatio || 0) ? a : b
        , null);

        if (best && best.isIntersecting) {
          // batch to next frame for smoother class changes
          requestAnimationFrame(() => setActive(best.target));
        }
      },
      {
        root: null,               // 👈 viewport (important after CSS change)
        threshold: [0, 0.25, 0.5, 0.6, 0.75, 1],
        rootMargin: "0px 0px 0px 0px",
      }
    );

    slides.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [projects]); // re-run if list changes

  return (
    <div ref={wrapRef} className="pm-wrap">
      {projects.map((p, i) => (
        <section className="pm-slide" key={p.id ?? i}>
          <h1 className="pm-title">{p.title}</h1>

          <div className="pm-hero">
            <img className="pm-phone" src={p.image} alt={p.title} />
            {/* {p.note && (<p className="pm-note">{p.note} <br></br> {"</>"}</p>
            )} */}

          </div>

          <a className="pm-link" href={p.href} target="_blank" rel="noreferrer">
            View Project
          </a>
{/* 
          {i < projects.length - 1 && (
            <div className="pm-hint">Swipe to see next ↓</div>
          )} */}
        </section>
      ))}
    </div>
  );
}
