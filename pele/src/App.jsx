import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/homePage.jsx';
import GalleryPage from './pages/galleryPage.jsx';
import DevPage from './pages/devPage.jsx'; 
import MediaPage from './pages/mediaPage.jsx';
import GraphicPage from './pages/graphicPage.jsx';


function App() {
  return (
    <Router basename="/pele">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/multimedia' element={<MediaPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/development" element={<DevPage />} />
        <Route path="/graphics" element={<GraphicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
