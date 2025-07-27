import React from 'react';
import NavBar from '../components/navBar/navBar.jsx';
import MultiMedia from '../components/media/multimediaPage.jsx';

import About from '../components/about/about.jsx';

const MediaPage = () => {

  return (
    <div>
      <NavBar color="#6C63FF" />
     <MultiMedia />

      <About color="#6C63FF" />
    </div>
  );
};

export default MediaPage;