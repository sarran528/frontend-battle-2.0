import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { RoundedBox, Text } from '@react-three/drei';

interface InteractiveCubeProps {
  mousePosition: { x: number; y: number };
}

const InteractiveCube: React.FC<InteractiveCubeProps> = ({ mousePosition }) => {
  const cubeRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = state.clock.elapsedTime * 0.5 + mousePosition.y * 0.002;
      cubeRef.current.rotation.y = state.clock.elapsedTime * 0.3 + mousePosition.x * 0.002;
      cubeRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group>
      <RoundedBox
        ref={cubeRef}
        args={[2, 2, 2]}
        radius={0.1}
        smoothness={4}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#0ea5e9"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1}
        />
      </RoundedBox>
      
      <Text
        position={[0, -2, 0]}
        fontSize={0.5}
        color="#0ea5e9"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter-Bold.woff"
      >
        3D INTERACTIVE
      </Text>
    </group>
  );
};

export default InteractiveCube;