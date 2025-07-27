// MultimediaPage.jsx
import './multimediaPage.css';

const videos = [
  {
    id: 1,
     title: "סרטון אנכי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
    orientation: "portrait",
  },
  {
    id: 2,
    title: "סרטון אנכי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
    orientation: "portrait",
  },
  {
    id: 3,
       title: "סרטון אנכי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "portrait",
  },
    {
    id: 4,
       title: "סרטון אנכי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "portrait",
  },
    {
    id: 5,
       title: "סרטון אנכי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "portrait",
  },
    {
    id: 6,
       title: "סרטון אנכי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "portrait",
  },
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
  },
  {
      id: 9,
    title: "סרטון רוחבי",
    src: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    orientation: "landscape",
  }
];

export default function MultimediaPage() {
  return (
    <div className="multimedia-wrapper">
      <h1 className="multimedia-title">מולטימדיה</h1>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className={`video-card ${video.orientation}`}>
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
