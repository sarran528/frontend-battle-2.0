import React, { Suspense, useState, useEffect } from 'react';
import { Canvas, ThreeEvent, useThree } from '@react-three/fiber'; // Import useThree
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import SceneObjects from './SceneObjects';

// New component to get the true mouse position
const MouseTracker: React.FC<{
  setMouse: React.Dispatch<React.SetStateAction<{ x: number; y: number } | null>>;
}> = ({ setMouse }) => {
  const { mouse } = useThree();

  // Use useFrame to continuously update the mouse position in 3D world space
  // based on the camera's projection of the 2D mouse coordinates.
  // This is better for a "magnetic" effect.
  useThree((state) => {
    // state.mouse.x and state.mouse.y are the normalized device coordinates (-1 to 1)
    // We'll pass these directly to our objects for repulsion, as they represent
    // the mouse's relative position on the screen.
    setMouse({ x: state.mouse.x, y: state.mouse.y });
  });

  return null; // This component doesn't render anything visually
};

const InteractiveCanvas: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  // Changed initial state to null, as the MouseTracker will set it once mounted
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

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
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />

          {/* MouseTracker component to get continuous mouse position updates */}
          <MouseTracker setMouse={setMouse} />

          {/* Pass the mouse state to SceneObjects */}
          <SceneObjects mouse={mouse} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate={!mouse} // Disable auto-rotation when interacting
            autoRotateSpeed={1}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default InteractiveCanvas;