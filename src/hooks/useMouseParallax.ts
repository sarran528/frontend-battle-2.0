import { useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export const useMouseParallax = (sensitivity: number = 0.1) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      setMousePosition({
        x: (e.clientX - centerX) * sensitivity,
        y: (e.clientY - centerY) * sensitivity,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [sensitivity]);

  return mousePosition;
};