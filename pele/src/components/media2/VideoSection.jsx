import React from "react";
import videoFile from "/pele-action.mp4";
import "./VideoSection.css";

const VideoSection = () => {
  return (
    <section className="video-section">
      {/* video background */}
      <div className="video-container">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoFile} type="video/mp4" />
          הדפדפן שלך לא תומך בניגון וידאו.
        </video>
      </div>

      {/* text section below video */}
      <div className="video-text">
        <h2 className="video-title">כאן לומדים אחרת.</h2>
        <a
          href="https://vod.idf.il/pele"
          target="_blank"
          rel="noopener noreferrer"
          className="video-button"
        >
          לערוץ שלנו 
        </a>
      </div>
    </section>
  );
};

export default VideoSection;
