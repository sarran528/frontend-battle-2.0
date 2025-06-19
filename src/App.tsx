import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import InteractiveCanvas from './components/canvas/InteractiveCanvas';
import Cards from './components/sections/Cards';
import Contact from './components/sections/Contact';
import Loader from './components/ui/Loader';
import ScrollText from './components/ui/ScrollText';
import BackToTop from './components/ui/BackToTop';
import './styles/global.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleLoaderComplete = () => {
    setShowContent(true);
  };

  return (
    <ThemeProvider>
      <div className="relative">
        <Loader isLoading={isLoading} onComplete={handleLoaderComplete} />
        
        {showContent && (
          <>
            <Navbar />
            <ScrollText />
            <main>
              <Hero />
              
              <section id="canvas" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      <span className="text-gradient">Interactive 3D</span>
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300">
                      Experience our interactive 3D canvas with mouse controls
                    </p>
                  </div>
                  <InteractiveCanvas />
                </div>
              </section>

              <Cards />
              <Contact />
            </main>
            <BackToTop />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;