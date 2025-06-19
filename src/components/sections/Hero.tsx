import React from 'react';
import Hero3D from '../scenes/Hero3D';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen bg-black py-20">
      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-80px)]">
          {/* Content */}
          <div className="relative z-20 order-2 lg:order-1">
            <div className="max-w-xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight fade-in">
                <span className="block mb-2">Welcome to</span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
                  Frontend Battle 2.0
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed slide-up">
                Experience the next generation of web development with cutting-edge
                technology and stunning 3D visuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 slide-up" style={{ animationDelay: '200ms' }}>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                >
                  Explore Features
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 hover:shadow-lg border border-gray-700"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* 3D Scene Container */}
          <div className="relative order-1 lg:order-2 w-full aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10 pointer-events-none" />
            <Hero3D />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 