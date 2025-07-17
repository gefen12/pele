import React from 'react';
import NavBar from '../components/navBar/navBar.jsx';
import Gallery from '../components/gallery/gallery.jsx';
import About from '../components/about/about.jsx';

const GalleryPage = () => {
  return (
    <div>
      <NavBar/>
      <Gallery />

      <About />
    </div>
  );
};

export default GalleryPage;