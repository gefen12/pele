import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./card.jsx";
import "./cards.css";
import iconPaint from "../../assets/icons/card-icons/paint-icon2.svg";
import iconComputer from "../../assets/icons/card-icons/computer-icon3.svg";
import iconCamera from "../../assets/icons/card-icons/img-icon2.svg";
import iconVideo from "../../assets/icons/card-icons/camera-icon3.svg";
export default function Cards() {
  const [scrolled, setScrolled] = useState(false);

  const cardData = [
    { subject: "גרפיקות",   bgColor: "#F3E1FD", textColor: "#A257D6", iconSrc: iconPaint, route: "/graphics"    },
    { subject: "לומדות",    bgColor: "#FFE5F5", textColor: "#F52BA0", iconSrc: iconComputer, route: "/development" },
    { subject: "גלריה",     bgColor: "#E8ECFF", textColor: "#2461E5", iconSrc: iconCamera, route: "/gallery"     },
    { subject: "מולטימדיה", bgColor: "#F6E6FC", textColor: "#8082F8", iconSrc: iconVideo, route: "/multimedia"  },
  ];

  useEffect(() => {
    const onScroll = () => {
      const trigger = window.innerHeight * 0.3;
      setScrolled(window.scrollY > trigger); // also closes when scrolling back up
    };
    onScroll(); // set initial state if already scrolled
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const positions = ["far-left", "left", "right", "far-right"];

  return (
    <div className="cards-wrapper">
      <div className="cardsHeader">
        <h2 style={{ color: "#2461E5", direction: "rtl", fontFamily: "Rubik", fontWeight: 100 }}>
          התוצרים שלנו
        </h2>
      </div>

      <div className={`card-container ${scrolled ? "open" : ""}`}>
        {cardData.map((c, i) => (
          <div key={c.subject} className={`card-position ${positions[i] || ""}`}>
            <Link to={c.route} style={{ textDecoration: "none" }}>
              <Card
                subject={c.subject}
                bgColor={c.bgColor}
                textColor={c.textColor}
                iconSrc={c.iconSrc} 
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
