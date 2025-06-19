import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group, Mesh } from 'three';
import { RoundedBox, Text } from '@react-three/drei';

const COLORS = ['#2563eb', '#18181b', '#f1f5f9']; // blue, black, white

// Helper to create a cross shape using three cylinders
function Cross({ color, ...props }: { color: string; position: [number, number, number] }) {
  const group = useRef<Group>(null);

  // Optional: animate rotation
  useFrame(() => {
    if (group.current) {
      group.current.rotation.x += 0.002;
      group.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={group} {...props}>
      {/* X axis */}
      <mesh>
        <cylinderGeometry args={[0.18, 0.18, 1.1, 32]} />
        <meshPhysicalMaterial color={color} roughness={0.2} metalness={0.7} clearcoat={0.7} />
      </mesh>
      {/* Y axis */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.18, 0.18, 1.1, 32]} />
        <meshPhysicalMaterial color={color} roughness={0.2} metalness={0.7} clearcoat={0.7} />
      </mesh>
      {/* Z axis */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 1.1, 32]} />
        <meshPhysicalMaterial color={color} roughness={0.2} metalness={0.7} clearcoat={0.7} />
      </mesh>
    </group>
  );
}

const NUM_OBJECTS = 18;

const SceneObjects: React.FC = () => {
  // Generate random positions/colors for the crosses
  const crosses = React.useMemo(
    () =>
      Array.from({ length: NUM_OBJECTS }).map((_, i) => ({
        key: i,
        position: [
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 2.5,
          (Math.random() - 0.5) * 4,
        ] as [number, number, number],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      })),
    []
  );

  return (
    <>
      {crosses.map(({ key, position, color }) => (
        <Cross key={key} position={position} color={color} />
      ))}
    </>
  );
};

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
       
      >
        3D INTERACTIVE
      </Text>
      <SceneObjects />
    </group>
  );
};

export default InteractiveCube;