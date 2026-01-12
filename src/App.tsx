// src/App.tsx
import { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import { BrowserRouter as Router, Route, Routes, useLocation, } from 'react-router-dom';

import Navbar from './components/ui/Navbar.tsx';
import Footer from './components/sections/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/PageDetail.tsx';
import About from './pages/About.tsx';

import Work from './components/sections/Work.tsx';
import Contact from './pages/Contact.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ReactLenis
        root
        options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
      >
        <ScrollToTop />
        <Navbar />

        <main className="min-h-screen bg-cinema-black">
          <Routes>
            {/* Начална страница */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </ReactLenis>
    </Router>
  );
}

export default App;
