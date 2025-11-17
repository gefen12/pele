import React from 'react';
import NavBar from '../components/navBar/navBar.jsx';
import VideoSection from '../components/media2/VideoSection.jsx';

import About from '../components/about/about.jsx';

const MediaPage = () => {

  return (
    <div>
      <NavBar color="#8082F8" />
      <VideoSection />

      <About color="#8082F8" />
    </div>
  );
};

export default MediaPage;