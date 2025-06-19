import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToCanvas = () => {
    document.getElementById('canvas')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <Sparkles className="mx-auto text-primary-500 mb-4" size={48} />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Modern</span>{' '}
            <span className="text-slate-900 dark:text-white">Web</span>{' '}
            <span className="text-gradient">Experience</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover the future of web design with interactive 3D elements, 
          smooth animations, and glassmorphic aesthetics.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="glass rounded-xl px-8 py-4 text-lg font-semibold text-primary-600 hover:text-primary-700 transition-colors shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Features
          </motion.button>
          
          <motion.button
            className="bg-primary-500 hover:bg-primary-600 text-white rounded-xl px-8 py-4 text-lg font-semibold transition-colors shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.button
          onClick={scrollToCanvas}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-500 hover:text-primary-600 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;