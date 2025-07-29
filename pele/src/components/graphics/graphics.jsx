// src/components/graphics/graphics.jsx
import React, { useEffect, useState } from "react";
import "./graphics.css";

export default function Graphics() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const modules = import.meta.glob('../../assets/graphics/*.{png,jpg,jpeg,svg}');

    const loadImages = async () => {
      const entries = await Promise.all(
        Object.entries(modules).map(async ([path, importer], index) => {
          const mod = await importer();
          return {
            id: index,
            src: mod.default,
            title: path.split('/').pop().replace(/\.[^/.]+$/, '') // remove file extension
          };
        })
      );
      setImages(entries);
    };

    loadImages();
  }, []);

  return (
    <section className="graphics-section">
      {/* <h1 className="graphics-title">הגרפיקות שלנו</h1> */}
      <div className="graphics-grid">
        {images.map((img) => (
          <div className="graphic-card" key={img.id}>
            <img src={img.src} alt={img.title} loading="lazy" />
            {/* <p className="graphic-label">{img.title}</p> */}
          </div>
        ))}
      </div>
    </section>
  );
}
