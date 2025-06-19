import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';
import Loader from './components/ui/Loader';

function App() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <Loader />
      <div className="bg-red-500 text-white p-10">Tailwind Test</div>
    </div>
  );
}

export default App;