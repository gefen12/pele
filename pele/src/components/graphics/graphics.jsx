import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./graphics.css";

gsap.registerPlugin(ScrollTrigger);

export default function Graphics() {
  const [images, setImages] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const modules = import.meta.glob('../../assets/graphics/*.{png,jpg,jpeg,svg}');

    const loadImages = async () => {
      const entries = await Promise.all(
        Object.entries(modules).map(async ([path, importer], index) => {
          const mod = await importer();
          return {
            id: index,
            src: mod.default,
            title: path.split('/').pop().replace(/\.[^/.]+$/, '')
          };
        })
      );
      setImages(entries);
    };

    loadImages();
  }, []);

  useEffect(() => {
    refs.current = refs.current.slice(0, images.length); // trim any extras

    refs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [images]);

  return (
    <section className="graphics-section">
      <div className="graphics-grid">
        {images.map((img, i) => (
          <div
            className="graphic-card"
            key={img.id}
            ref={(el) => (refs.current[i] = el)}
          >
            <img src={img.src} alt={img.title} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
