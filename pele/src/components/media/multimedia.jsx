// MultimediaPage.jsx
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './multimedia.css';

gsap.registerPlugin(ScrollTrigger);

const videos = [
  // {
  //   id: 1,
  //    title: " מכ מאפשר?",
  //   src: `${import.meta.env.BASE_URL}mach-meafsher-2.mp4`,
  //   orientation: "portrait",
  // },
  // {
  //   id: 2,
  //   title: "סרטון אנכי",
  //   src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
  //   orientation: "portrait",
  // },
  // {
  //   id: 3,
  //      title: "סרטון אנכי",
  //   src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
  //   orientation: "portrait",
  // },
  //   {
  //   id: 4,
  //      title: "סרטון אנכי",
  //   src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
  //   orientation: "portrait",
  // },
  //   {
  //   id: 5,
  //      title: "סרטון אנכי",
  //   src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
  //   orientation: "portrait",
  // },
  //   {
  //   id: 6,
  //      title: "סרטון אנכי",
  //   src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
  //   orientation: "portrait",
  // },
    {
    id: 1,
    title: "סרטון רוחבי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "landscape",
    type: "health",
  },
  {
    id: 2,
    title: "סרטון רוחבי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "landscape",
    type: "health",
  },
  {
      id: 3,
    title: "סרטון רוחבי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "landscape",
    type: "gym",
  },
  {
    id: 4,
    title: "סרטון רוחבי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "landscape",
    type: "gym",
  },
  {
    id: 5,
    title: "סרטון רוחבי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "landscape",
    type: "explosion",
  },
  {
      id: 6,
    title: "סרטון רוחבי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "landscape",
    type: "explosion",
  }
  ,
  {
    id: 7,
    title: "סרטון רוחבי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "landscape",
    type: "explosion",
  },
  {
      id: 8,
    title: "סרטון רוחבי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "landscape",
    type:"rekem",
  }

];
export default function MultimediaPage() {
  const videoRefs = useRef([]);
  const filterBtnRefs = useRef([]);
  const [filter, setFilter] = useState("all");

  // Animate videos on scroll
  useEffect(() => {
    videoRefs.current.forEach((el) => {
      if (el) {
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
      }
    });
  }, [filter]); // re-run animation when filter changes

  // Handle filter change with GSAP animation
  const handleFilterChange = (newFilter, index) => {
    setFilter(newFilter);

    filterBtnRefs.current.forEach((btn, i) => {
      if (btn) {
        if (i === index) {
          // Animate active button
          gsap.to(btn, {
            scale: 1.1,
            backgroundColor: "#6a5af9",
            color: "#fff",
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          // Reset inactive buttons
          gsap.to(btn, {
            scale: 1,
            backgroundColor: "#fff",
            color: "#000",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      }
    });
  };

  // Filter videos
  const filteredVideos =
    filter === "all"
      ? videos
      : videos.filter((video) => video.type === filter);

  return (
    <div className="multimedia-wrapper">
      {/* Filter bar */}
      <div className="filter-bar">
        {[
          { key: "all", label: "הכל" },
          // { key: "landscape", label: "סרטון רוחבי" },
          // { key: "portrait", label: "סרטון אנכי" },
          { key: "health", label: "בריאות" },
          { key: "gym", label: "אימון גופני" },
          { key: "explosion", label: "חבלה" },
          { key: "rekem", label: "רקם" },
        ].map((item, i) => (
          <button
            key={item.key}
            ref={(el) => (filterBtnRefs.current[i] = el)}
            className={filter === item.key ? "active" : ""}
            onClick={() => handleFilterChange(item.key, i)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Video grid */}
      <div className="video-grid">
        {filteredVideos.map((video, index) => (
          <div
            key={video.id}
            ref={(el) => (videoRefs.current[index] = el)}
            className={`video-card ${video.orientation}`}
          >
            <iframe
              src={video.src}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="video-title">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}