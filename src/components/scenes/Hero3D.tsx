import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import SceneLights from './SceneLights';

const Hero3D: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      style={{ background: '#111827' }}
    >
      <Suspense fallback={null}>
        <SceneLights />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <mesh>
          <torusKnotGeometry args={[2, 0.5, 128, 32]} />
          <meshStandardMaterial
            color="#4F46E5"
            roughness={0.5}
            metalness={0.8}
          />
        </mesh>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  );
};

export default Hero3D;
