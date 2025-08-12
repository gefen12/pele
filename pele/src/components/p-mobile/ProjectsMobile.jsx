// components/p-mobile/ProjectsMobile.jsx
import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./projects-mobile.css";

export default function ProjectsMobile({ projects = [] }) {
  const wrapRef = useRef(null);

  // Scroll to top when this component mounts
  useLayoutEffect(() => {
    // For browsers that scroll the document
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    // For Safari & some mobile cases
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    // If your scroll is inside the wrapper instead of window
    wrapRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const rootEl = wrapRef.current;
    if (!rootEl) return;

    const slides = Array.from(rootEl.querySelectorAll(".pm-slide"));
    if (!slides.length) return;

    const setActive = (el) => {
      slides.forEach((s) => s.classList.toggle("is-active", s === el));
    };

    setActive(slides[0]);

    const io = new IntersectionObserver(
      (entries) => {
        const best = entries.reduce(
          (a, b) =>
            (a?.intersectionRatio || 0) > (b?.intersectionRatio || 0) ? a : b,
          null
        );

        if (best && best.isIntersecting) {
          requestAnimationFrame(() => setActive(best.target));
        }
      },
      {
        root: null,
        threshold: [0, 0.25, 0.5, 0.6, 0.75, 1],
        rootMargin: "0px 0px 0px 0px",
      }
    );

    slides.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [projects]);

  return (
    <div ref={wrapRef} className="pm-wrap">
      {projects.map((p, i) => (
        <section className="pm-slide" key={p.id ?? i}>
          <h1 className="pm-title">{p.title}</h1>
          <div className="pm-hero">
            <img className="pm-phone" src={p.image} alt={p.title} />
          </div>
          <a className="pm-link" href={p.href} target="_blank" rel="noreferrer">
            View Project
          </a>
        </section>
      ))}
    </div>
  );
}
