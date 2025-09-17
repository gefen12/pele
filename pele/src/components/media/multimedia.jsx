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
  },
  {
    id: 2,
    title: "סרטון רוחבי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "landscape",
  },
  {
      id: 3,
    title: "סרטון רוחבי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "landscape",
  },
  {
    id: 4,
    title: "סרטון רוחבי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "landscape",
  },
  {
    id: 5,
    title: "סרטון רוחבי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "landscape",
  },
  {
      id: 6,
    title: "סרטון רוחבי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "landscape",
  }
  ,
  {
    id: 7,
    title: "סרטון רוחבי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "landscape",
  },
  {
      id: 8,
    title: "סרטון רוחבי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "landscape",
  }

];
export default function MultimediaPage() {
  const videoRefs = useRef([]);
  const [filter, setFilter] = useState("all");

  // Animate videos on scroll
  useEffect(() => {
    videoRefs.current.forEach((el, index) => {
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

  // Filter videos
  const filteredVideos =
    filter === "all"
      ? videos
      : videos.filter((video) => video.orientation === filter);

  return (
    <div className="multimedia-wrapper">
      {/* Filter bar */}
      <div className="filter-bar">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          הכל
        </button>
        <button
          className={filter === "landscape" ? "active" : ""}
          onClick={() => setFilter("landscape")}
        >
          סרטון רוחבי
        </button>
        <button
          className={filter === "portrait" ? "active" : ""}
          onClick={() => setFilter("portrait")}
        >
          סרטון אנכי
        </button>
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