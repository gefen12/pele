// src/components/LandingAnimation.jsx
import { useState } from "react";
import { hover, motion } from "framer-motion";
import '../App.css';
import BorderBox from "./BorderBox.jsx"; // Assuming you have a BorderBox component



import peleLogo from "../assets/icons/pele-draw.svg"; // פלא logo
import iconComputer1 from "../assets/icons/computer-icon-2.svg"; // Example icon
import iconWheel from "../assets/icons/wheel-icon.svg"; 
import devoloper from "../assets/icons/lomda.svg";
import iconConnect from "../assets/icons/connect-icon.svg"; 
import iconPencil1 from "../assets/icons/pencil-icon-2.svg"; 
import graphicDesign from "../assets/icons/graphic-designer.svg"; 
import iconPaint from "../assets/icons/paint-icon.svg"; 
import iconComputer2 from "../assets/icons/computer-icon-1.svg"; 
import iconPlant from "../assets/icons/plant-icon.svg"; 
import iconVideo from "../assets/icons/Video-icon.svg";
import videoEditer from "../assets/icons/video-editor.svg"; 
import iconLightS from "../assets/icons/light-icon-s.svg"; 
import iconPencil2 from "../assets/icons/pencil-icon-1.svg"; 
import iconPost from "../assets/icons/post-icon.svg";
import digital from "../assets/icons/digital.svg"; 
import iconComment from "../assets/icons/comment-icon.svg";
import iconHeart from "../assets/icons/heart-icon.svg"; 
import photographer from "../assets/icons/photographer.svg";
import iconCamera from "../assets/icons/camera-icon.svg"; 
import iconImg from "../assets/icons/img-icon.svg"; 
import iconLightB from "../assets/icons/light-icon-b.svg";

export default function LandingAnimation() {
  const [showIcon, setShowIcon] = useState(false);
  const [hovered, setHovered] = useState(false);
const hoverTexts = {
  dev: "מפתחת לומדה עוסקת בפיתוח מערכות למידה ואתרים אינטראקטיביים, במטרה לייעל תהליכי הכשרה ולהנגיש ידע באופן חווייתי, אפקטיבי ומותאם למשתמש.",
  video: "עורכת וידאו אחראית על הפקת סרטונים ללמידה והמחשה, בשילוב גרפיקה, קריינות והנפשה.",
  designer: "מעצבת גרפית מפתחת שפה ויזואלית למוצרי למידה, שומרת על קונספט אחיד, ברור ונעים לעין.",
  photographer: "צלמת אחראית על תיעוד צילומים ללמידה, עיצוב סביבות צילום ויצירת תמונות איכותיות ואסתטיות.",
  digital: "משק הדיגיטל אחראי על ניהול התוכן ברשתות החברתיות "
};

  return (
    <div className="relative w-screen h-screen">

{hovered && hoverTexts[hovered] && (
  <div
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
    style={{ direction: "rtl", textAlign: "right" }}
  >
    <BorderBox>
      {hoverTexts[hovered]}
    </BorderBox>
  </div>

)}

      {/* פלא logo beating in center */}
      <motion.img
        src={peleLogo}
        alt="פלא"
        className={`w-32 h-32 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 ${hovered ? "opacity-30" : "opacity-100"}`}
        animate={{ scale: [1.1, 1.2, 1.1] }}
        transition={{ repeat: 1, duration: 0.7, ease: "easeInOut" }}
        onAnimationComplete={() => setShowIcon(true)}
      />

      {/* Bursting icon - manually placed */}
      {showIcon && (
        <motion.img
          src={iconComputer1}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: 100, y: -260, opacity: 1 }} // customize this position
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        />
        
      )}
        {showIcon && (
        <motion.img
          src={iconWheel}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: 90, y: -335, opacity: 1 }} // customize this position
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        />
        
      )}
{showIcon && (
  <div className="relative left-1/2 top-1/2">
    {/* Bursting icon */}
    <motion.img
      src={devoloper}
      alt="Burst icon"
      className="w-16 h-16 cursor-pointer"
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{
        x: -50,
        y: -320,
        opacity: 1,
        scale: [1, 1.1, 1],
      }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 10,
        scale: {
          delay: 1,
          duration: 0.8,
          repeat: 1,
          ease: "easeInOut",
        },
      }}
      onMouseEnter={() => setHovered("dev")}
      onMouseLeave={() => setHovered(null)}
    />

  </div>
)}


                  {showIcon && (
        <motion.img
          src={iconConnect}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: -140, y: -320, opacity: 1 }} // customize this position
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        />
      )}
        {showIcon && (
        <motion.img
          src={iconPencil1}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: -245, y: -315, opacity: 1 }} // customize this position
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        />
      )}
        {showIcon && (
        <motion.img
          src={graphicDesign}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: -240,
            y: -230,
            opacity: 1,
            scale: [1, 1.15, 1], 
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 10,
            scale: { delay: 1.2, duration: 0.8, repeat: 1, ease: "easeInOut" }, 
          }}
          onMouseEnter={() => setHovered("designer")}
        onMouseLeave={() => setHovered(null)}
        />
      )}
         {showIcon && (
        <motion.img
          src={iconPaint}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: -300, y: -220, opacity: 1 }} // customize this position
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        />
      )}
        {showIcon && (
        <motion.img
          src={iconComputer2}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: -375, y: -140, opacity: 1 }} // customize this position
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        />
      )}
            {showIcon && (
        <motion.img
          src={iconPlant}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: -240, y: -20, opacity: 1 }} // customize this position
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        />
      )}
        {showIcon && (
        <motion.img
          src={iconVideo}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: -340, y: 40, opacity: 1 }} // customize this position
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        />
      )}
        {showIcon && (
        <motion.img
          src={videoEditer}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: -270,
            y: 120,
            opacity: 1,
            scale: [1, 1.15, 1], 
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 10,
            scale: { delay: 1.6, duration: 0.8, repeat: 1, ease: "easeInOut" }, // same delay before beat
          }}
            onMouseEnter={() => setHovered("video")}
        onMouseLeave={() => setHovered(null)}
        />
      )}
        {showIcon && (
        <motion.img
          src={iconLightS}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: -140, y: 120, opacity: 1 }} // customize this position
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        />
      )}
        {showIcon && (
        <motion.img
          src={iconPencil2}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: -110, y: 180, opacity: 1 }} // customize this position
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        />
      )}
        {showIcon && (
        <motion.img
          src={iconPost}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: -80, y: 270, opacity: 1 }} // customize this position
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        />
      )}
          {showIcon && (
        <motion.img
          src={digital}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: 10,
            y: 150,
            opacity: 1,
            scale: [1, 1.15, 1],
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 10,
            scale: { delay: 2, duration: 0.8, repeat: 1, ease: "easeInOut" }, // same delay before beat
          }}
            onMouseEnter={() => setHovered("digital")}
        onMouseLeave={() => setHovered(null)}
        />
      )}
        {showIcon && (
        <motion.img
          src={iconComment}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: -30, y: 140, opacity: 1 }} // customize this position
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        />
      )}
              {showIcon && (
        <motion.img
          src={iconHeart}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: 140, y: 165, opacity: 1 }} // customize this position
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        />
      )}
        {showIcon && (
        <motion.img
          src={photographer}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: 175,
            y: -10,
            opacity: 1,
            scale: [1, 1.15, 1], 
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 10,
            scale: { delay: 2.4, duration: 0.8, repeat: 1, ease: "easeInOut" }, // same delay before beat
          }}
            onMouseEnter={() => setHovered("photographer")}
        onMouseLeave={() => setHovered(null)}
        />
      )}
             {showIcon && (
        <motion.img
          src={iconCamera}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: 280, y: -65, opacity: 1 }} // customize this position
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        />
      )}
      {showIcon && (
        <motion.img
          src={iconImg}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: 160, y: -120, opacity: 1 }} // customize this position
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        />
      )}
            {showIcon && (
        <motion.img
          src={iconLightB}
          alt="Burst icon"
          className="w-16 h-16 absolute left-1/2 top-1/2"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{ x: 230, y: -225, opacity: 1 }} // customize this position
          transition={{ type: "spring", stiffness: 80, damping: 10 }}
        />
      )}
      
    </div>
  );
}
// This component uses Framer Motion for animations and displays a logo with a burst effect.