import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
import SceneLights from './SceneLights';

const Model: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.2;
    }
  });

  return (
    <Float
      speed={1.4}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh ref={meshRef} scale={0.8}>
        <torusKnotGeometry args={[2, 0.5, 256, 64]} />
        <meshPhysicalMaterial
          color="#4F46E5"
          roughness={0.2}
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive="#4338CA"
          emissiveIntensity={0.4}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
};

const Hero3D: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 2]}
      style={{
        width: '100%',
        height: '100%',
        background: 'transparent',
        borderRadius: 'inherit',
      }}
      gl={{ antialias: true }}
    >
      <color attach="background" args={['#000000']} />
      <fog attach="fog" args={['#000000', 5, 15]} />
      
      <Suspense fallback={null}>
        <SceneLights />
        <Stars
          radius={40}
          depth={30}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <Model />
        <Environment preset="night" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
          makeDefault
        />
      </Suspense>
    </Canvas>
  );
};

export default Hero3D;
