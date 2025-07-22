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
        url: "./src/assets/gallery/DSC07592.jpg",
        height: 300,
      },
      {
        id: "2",
        img: "./src/assets/gallery/DSC07838_edited.jpg",
        url: "./src/assets/gallery/DSC07838_edited.jpg",
        height: 350,
      },
      {
        id: "3",
        img: "./src/assets/gallery/IMG-20250604-WA0016.jpg",
        url: "./src/assets/gallery/IMG-20250604-WA0016.jpg",
        height: 250,
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
        height: 350,
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
        height: 400,
      },
      {
        id: "14",
        img: "./src/assets/gallery/DSC07886.jpg",
        url: "https://example.com/fourteen",
        height: 450,
      },
      {
        id: "15",
        img: "./src/assets/gallery/DSC07019.jpg",
        url: "https://example.com/fifteen",
        height: 350,
      },
      {
        id: "16",
        img: "./src/assets/gallery/DSC07838_edited.jpg",
        url: "https://example.com/sixteen",
        height: 400,
      },
      {
        id: "17",
        img: "./src/assets/gallery/IMG-20250610-WA0000.jpg",
        url: "https://example.com/seventeen",
        height: 300,
      },
      {
        id: "18",
        img: "./src/assets/gallery/DSC07886.jpg",
        url: "https://example.com/eighteen",
        height: 350,
      },
      {
        id: "19",
        img: "./src/assets/gallery/IMG-20250714-WA0021.jpg",
        url: "https://example.com/nineteen",
        height: 400,
      },
      {
        id: "20",
        img: "./src/assets/gallery/IMG-20250714-WA0014.jpg",
        url: "https://example.com/twenty",
        height: 300,
      },
        {
        id: "21",
        img: "./src/assets/gallery/DSC07019.jpg",
        url: "https://example.com/fifteen",
        height: 350,
      },
      {
        id: "22",
        img: "./src/assets/gallery/DSC07838_edited.jpg",
        url: "https://example.com/sixteen",
        height: 400,
      },
      {
        id: "23",
        img: "./src/assets/gallery/IMG-20250610-WA0000.jpg",
        url: "https://example.com/seventeen",
        height: 300,
      },
      {
        id: "24",
        img: "./src/assets/gallery/DSC07886.jpg",
        url: "https://example.com/eighteen",
        height: 350,
      },
      {
        id: "25",
        img: "./src/assets/gallery/IMG-20250714-WA0014.jpg",
        url: "https://example.com/nineteen",
        height: 400,
      },
      {
        id: "26",
        img: "./src/assets/gallery/IMG-20250714-WA0021.jpg",
        url: "https://example.com/twenty",
        height: 300,
      }
 


      // ... more items
  ];
  return (
    <div>
      <NavBar />
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