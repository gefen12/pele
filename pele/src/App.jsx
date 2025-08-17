import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/homePage.jsx';
import GalleryPage from './pages/galleryPage.jsx';
import DevPage from './pages/devPage.jsx';
import MediaPage from './pages/mediaPage.jsx';
import GraphicPage from './pages/graphicPage.jsx';

function App() {
  const PHONE_DISPLAY = '054-566-7706';
  const PHONE_TEL = '+972545667706';

  const [copied, setCopied] = useState(false);

  const badgeStyle = {
    position: 'fixed',
    right: 'calc(12px + env(safe-area-inset-right))',
    bottom: 'calc(12px + env(safe-area-inset-bottom))',
    zIndex: 9999,
    padding: '8px 12px',
    fontFamily: 'Rubik, system-ui, sans-serif',
    fontSize: '12px',
    color: '#4b5563',
    background: 'rgba(255,255,255,0.85)',
    border: '1px solid #eee',
    borderRadius: '12px',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    boxShadow: '0 6px 20px rgba(0,0,0,.08)',
    textDecoration: 'none',
    cursor: 'pointer',
    userSelect: 'none',
  };

  const toastStyle = {
    position: 'fixed',
    right: 'calc(12px + env(safe-area-inset-right))',
    bottom: 'calc(48px + env(safe-area-inset-bottom))',
    zIndex: 10000,
    padding: '6px 10px',
    fontFamily: 'Rubik, system-ui, sans-serif',
    fontSize: '12px',
    color: '#111827',
    background: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '10px',
    boxShadow: '0 6px 20px rgba(0,0,0,.10)',
  };

  const handleClick = async () => {
    try {
      // copy number (digits only) for convenience
      await navigator.clipboard.writeText(PHONE_DISPLAY.replace(/\D/g, ''));
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      // clipboard not available—ignore
    }
    // The <a href="tel:..."> will still open the dialer
  };

  return (
    <Router basename="/pele">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/multimedia" element={<MediaPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/development" element={<DevPage />} />
        <Route path="/graphics" element={<GraphicPage />} />
      </Routes>


      {/* <a
        href={`tel:${PHONE_TEL}`}
        onClick={handleClick}
        style={badgeStyle}
        dir="rtl"
        title={`להתקשר: ${PHONE_DISPLAY}`}
        aria-label={`להתקשר לגפן ${PHONE_DISPLAY}`}
      >
        פותח באהבה ע״י גפן
      </a>

      {copied && <div style={toastStyle}>📋 המספר הועתק</div>} */}
    </Router>
  );
}

export default App;
