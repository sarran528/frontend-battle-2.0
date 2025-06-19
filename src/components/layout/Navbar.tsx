import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { useScrollTrigger } from '../../hooks/useScrollTrigger';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const isScrolled = useScrollTrigger(50);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="text-primary-500" size={28} />
            <span className="text-xl font-bold text-gradient">ModernWeb</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {['Hero', 'Canvas', 'Features', 'Contact'].map((item) => (
              <motion.button
                key={item}
                className="text-sm font-medium hover:text-primary-500 transition-colors"
                onClick={() => scrollToSection(item.toLowerCase())}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <motion.button
              className="glass rounded-lg px-4 py-2 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;