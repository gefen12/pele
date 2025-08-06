import React, { useEffect, useRef, useState } from "react";
import "./masonry.css"; 

const Masonry = ({ items }) => {
  const containerRef = useRef();
  const [visibleItems, setVisibleItems] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            setVisibleItems((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { rootMargin: "0px 0px -100px 0px", threshold: 0.1 }
    );

    const boxes = containerRef.current.querySelectorAll(".masonry-item");
    boxes.forEach((box) => observer.observe(box));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="masonry-container" ref={containerRef}>
      {items.map((item) => (
        <div
          key={item.id}
          data-id={item.id}
          className={`masonry-item fade-in ${
            visibleItems[item.id] ? "visible" : ""
          }`}
        >
          <div className="masonry-img-wrapper">
            <img src={item.img} alt="" loading="lazy" className="masonry-img" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;
