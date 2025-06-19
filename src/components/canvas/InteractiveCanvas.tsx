import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import InteractiveCube from './SceneObjects';
import { useMouseParallax } from '../../hooks/useMouseParallax';

const InteractiveCanvas: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const mousePosition = useMouseParallax(0.5);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-96 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl flex items-center justify-center">
        <div className="text-slate-500">Loading 3D Scene...</div>
      </div>
    );
  }

  return (
    <motion.div
      className="h-96 mx-2.5 glass rounded-2xl overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <InteractiveCube mousePosition={mousePosition} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default InteractiveCanvas;