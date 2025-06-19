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
  return (
    <group>
      <SceneObjects />
    </group>
  );
};

export default InteractiveCube;