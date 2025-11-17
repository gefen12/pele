import React, { useState } from "react";
import videoFile from "/pele-action.mp4";
import "./VideoSection.css";
import comingsoon from "../../assets/icons/soon.svg";

const VideoSection = () => {
  const [showBubble, setShowBubble] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowBubble(true);
    setTimeout(() => setShowBubble(false), 3000);
  };

  return (
    <section className="video-section">
      {/* video background */}
      <div className="video-container">
        <video className="background-video" autoPlay loop muted playsInline>
          <source src={videoFile} type="video/mp4" />
          הדפדפן שלך לא תומך בניגון וידאו.
        </video>
      </div>

      {/* text + button */}
      <div className="video-text">
        <h2 className="video-title">כאן לומדים אחרת.</h2>

        {/* wrapper for button + bubble */}
        <div className="video-button-wrapper">
          <a
            href="#"
            className="video-button"
            onClick={handleClick}
          >
            לערוץ שלנו
          </a>

          {showBubble && (
            <img
              src={comingsoon}
              alt="coming soon"
              className="coming-soon-img"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
