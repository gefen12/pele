// components/p-mobile/ProjectsMobile.jsx
import React, { useEffect, useLayoutEffect, useRef } from "react";
import "./projects-mobile.css";

/** Minimal lazy image with IO + native fallback */
function LazyImage({ src, alt, className, priority = false }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const img = ref.current;
    if (!img) return;

    // If browser supports native lazy, just set src (plus eager for the first)
    if ("loading" in HTMLImageElement.prototype) {
      if (priority) img.loading = "eager";
      img.src = src;
      return;
    }

    // Fallback: load when near viewport
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          img.src = src;
          io.disconnect();
        }
      },
      { root: null, rootMargin: "300px 0px", threshold: 0.01 }
    );

    io.observe(img);
    return () => io.disconnect();
  }, [src, priority]);

  const common = priority ? { fetchpriority: "high" } : {};

  return (
    <img
      ref={ref}
      alt={alt}
      className={`${className ?? ""} lazy-img`}
      // native lazy for supporting browsers
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...common}
      // tiny transparent pixel as placeholder (avoids layout shift)
      src="data:image/gif;base64,R0lGODlhAQABAAAAACw="
      onLoad={(e) => e.currentTarget.classList.add("is-loaded")}
    />
  );
}

export default function ProjectsMobile({ projects = [] }) {
  const wrapRef = useRef(null);

  // Scroll to top on mount/switch
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
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
      { root: null, threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "0px" }
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
            {/* priority=true for the first slide so it appears immediately */}
            <LazyImage
              className="pm-phone"
              src={p.image}
              alt={p.title}
              priority={i === 0}
            />
          </div>
          <a className="pm-link" href={p.href} target="_blank" rel="noreferrer">
            View Project
          </a>
        </section>
      ))}
    </div>
  );
}
