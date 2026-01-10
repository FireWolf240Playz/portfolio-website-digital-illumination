import { ReactLenis } from 'lenis/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/sections/Footer'; // <-- Импорт
import Hero from './components/sections/Hero';
import Portfolio from './components/sections/Portfolio';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <Navbar />

      <main className="min-h-screen bg-cinema-black">
        <Hero />
        <Portfolio />

        <div className="h-20 bg-cinema-black md:h-40"></div>
      </main>

      <Footer />
    </ReactLenis>
  );
}

export default App;
