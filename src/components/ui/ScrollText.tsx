import React from 'react';
import { motion } from 'framer-motion';
import { useMouseParallax } from '../../hooks/useMouseParallax';

const ScrollText: React.FC = () => {
  const mousePosition = useMouseParallax(0.05);

  return (
    <>
      <motion.div
        className="floating-text text-gradient"
        style={{
          top: '20%',
          left: '10%',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2, delay: 1 }}
      >
        INNOVATE
      </motion.div>
      <motion.div
        className="floating-text text-gradient"
        style={{
          bottom: '20%',
          right: '10%',
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        CREATE
      </motion.div>
    </>
  );
};

export default ScrollText;