import React from 'react';
import NavBar from '../components/navBar/navBar.jsx';
import MultiMedia from '../components/media/multimediaPage.jsx';

import About from '../components/about/about.jsx';

const MediaPage = () => {

  return (
    <div>
      <NavBar color="#8082F8" />
     <MultiMedia />

      <About color="#8082F8" />
    </div>
  );
};

export default MediaPage;