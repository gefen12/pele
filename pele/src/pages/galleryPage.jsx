import React from 'react';
import NavBar from '../components/navBar/navBar.jsx';
import Masonry from '../components/masonry/masonry.jsx';
import About from '../components/about/about.jsx';

const imageModules = import.meta.glob('//src/assets/gallery/*.jpg', {
  eager: true,
  import: 'default',
});

const images = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, img], i) => ({
    id: String(i + 1),
    img,
    url: img,
    height: 400 - ((i % 4) * 20),
  }));

const GalleryPage = () => {
  return (
    <div>
      <NavBar />
      <main className='pt-[80px] px-4'>
        <Masonry 
          items={images}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </main>
      <About />
    </div>
  );
};

export default GalleryPage;
