import React from 'react';
import { useScroll } from '../../context/ScrollContext';

const ScrollProgress: React.FC = () => {
  const { scrollProgress } = useScroll();

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div
        className="h-full bg-blue-600 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
