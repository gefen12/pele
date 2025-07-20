import React from 'react';
import NavBar from '../components/navBar/navBar.jsx';
import Gallery from '../components/gallery/gallery.jsx';
import Masonry from '../components/masonry/masonry.jsx';
import About from '../components/about/about.jsx';

const GalleryPage = () => {
  const IMGS = [
  "./src/assets/gallery/DSC07592.jpg",
    "./src/assets/gallery/DSC07838_edited.jpg",
    "./src/assets/gallery/IMG-20250604-WA0016.jpg",
    "./src/assets/gallery/IMG-20250610-WA0000.jpg",
    "./src/assets/gallery/IMG-20250707-WA0012.jpg",
    "./src/assets/gallery/IMG-20250714-WA0016.jpg",
    "./src/assets/gallery/IMG-20250714-WA0021.jpg",
   "./src/assets/gallery/IMG-20250714-WA0017.jpg",
   "./src/assets/gallery/IMG-20250714-WA0014.jpg",
   "./src/assets/gallery/DSC06924.jpg",
    "./src/assets/gallery/DSC07832.jpg",
    "./src/assets/gallery/DSC07019.jpg",
    "./src/assets/gallery/DOC-20250703-WA0024.jpg",
    "./src/assets/gallery/DSC07886.jpg",
    "./src/assets/gallery/DOC-20250703-WA0026(1).jpg",
    
];
  const items = [
      {
        id: "1",
        img: "./src/assets/gallery/DSC07592.jpg",
        url: "https://example.com/one",
        height: 400,
      },
      {
        id: "2",
        img: "./src/assets/gallery/DSC07838_edited.jpg",
        url: "https://example.com/two",
        height: 250,
      },
      {
        id: "3",
        img: "./src/assets/gallery/IMG-20250604-WA0016.jpg",
        url: "https://example.com/three",
        height: 200,
      },
      {
        id: "4",
        img: "./src/assets/gallery/IMG-20250610-WA0000.jpg",
        url: "https://example.com/four",
        height: 300,
      },
      {
        id: "5",
        img: "./src/assets/gallery/IMG-20250707-WA0012.jpg",
        url: "https://example.com/five",
        height: 350,
      },
      {
        id: "6",
        img: "./src/assets/gallery/IMG-20250714-WA0016.jpg",
        url: "https://example.com/six",
        height: 400,
      },
      {
        id: "7",
        img: "./src/assets/gallery/IMG-20250714-WA0021.jpg",
        url: "https://example.com/seven",
        height: 300,
      },
      {
        id: "8",
        img: "./src/assets/gallery/IMG-20250714-WA0017.jpg",
        url: "https://example.com/eight",
        height: 250,
      },
      {
        id: "9",
        img: "./src/assets/gallery/IMG-20250714-WA0014.jpg",
        url: "https://example.com/nine",
        height: 200,
      },
      {
        id: "10",
        img: "./src/assets/gallery/DSC06924.jpg",
        url: "https://example.com/ten",
        height: 300,
      },
      {
        id: "11",
        img: "./src/assets/gallery/DSC07832.jpg",
        url: "https://example.com/eleven",
        height: 350,
      },
      {
        id: "12",
        img: "./src/assets/gallery/DSC07019.jpg",
        url: "https://example.com/twelve",
        height: 400,
      },
      {
        id: "13",
        img: "./src/assets/gallery/DOC-20250703-WA0024.jpg",
        url: "https://example.com/thirteen",
        height: 300,
      },
      {
        id: "14",
        img: "./src/assets/gallery/DSC07886.jpg",
        url: "https://example.com/fourteen",
        height: 250,
      },
 


      // ... more items
  ];
  return (
    <div>
      <NavBar/>
      {/* <Gallery /> */}
      <main className='pt-[80px] px-4'>
      <Masonry 
  items={items}
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