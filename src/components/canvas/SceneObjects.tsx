import React, { useRef, useMemo } from "react";
import { useFrame, ThreeEvent } from "@react-three/fiber";
import { DragControls } from 'three-stdlib';
import { useThree } from "@react-three/fiber";
import { Group, Vector3 } from "three";

type CrossProps = {
  color: string;
  position: [number, number, number];
};

function Cross({ color, position }: CrossProps) {
  const group = useRef<Group>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const { camera, gl } = useThree();
  
  // Setup drag controls
  React.useEffect(() => {
    if (group.current) {
      const controls = new DragControls([group.current], camera, gl.domElement);
      
      controls.addEventListener('dragstart', () => {
        setIsDragging(true);
        document.body.style.cursor = 'grabbing';
      });
      
      controls.addEventListener('dragend', () => {
        setIsDragging(false);
        document.body.style.cursor = 'grab';
      });

      return () => {
        controls.dispose();
      };
    }
  }, [camera, gl]);

  // Random motion
  const velocity = useMemo(() => new Vector3(
    (Math.random() - 0.5) * 0.02,
    (Math.random() - 0.5) * 0.02,
    (Math.random() - 0.5) * 0.02
  ), []);

  useFrame(() => {
    if (group.current && !isDragging) {
      // Apply random motion when not being dragged
      group.current.position.add(velocity);

      // Bounce off boundaries
      if (Math.abs(group.current.position.x) > 4) velocity.x *= -1;
      if (Math.abs(group.current.position.y) > 2.5) velocity.y *= -1;
      if (Math.abs(group.current.position.z) > 4) velocity.z *= -1;
    }
  });

  return (
    <group
      ref={group}
      position={position}
      onPointerOver={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        document.body.style.cursor = 'grab';
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'default';
      }}
    >
      {/* X axis */}
      <mesh>
        <cylinderGeometry args={[0.18, 0.18, 1.1, 32]} />
        <meshPhysicalMaterial 
          color={isDragging ? '#ff0000' : color} 
          roughness={0.2} 
          metalness={0.7} 
          clearcoat={0.7} 
        />
      </mesh>
      {/* Y axis */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.18, 0.18, 1.1, 32]} />
        <meshPhysicalMaterial 
          color={isDragging ? '#ff0000' : color} 
          roughness={0.2} 
          metalness={0.7} 
          clearcoat={0.7} 
        />
      </mesh>
      {/* Z axis */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.18, 0.18, 1.1, 32]} />
        <meshPhysicalMaterial 
          color={isDragging ? '#ff0000' : color} 
          roughness={0.2} 
          metalness={0.7} 
          clearcoat={0.7} 
        />
      </mesh>
    </group>
  );
}

interface SceneObjectsProps {
  mouse: { x: number; y: number } | null;
}

const SceneObjects: React.FC<SceneObjectsProps> = ({ mouse }) => {
  const COLORS = ["#2563eb", "#18181b", "#f1f5f9"]; // blue, black, white
  const NUM_OBJECTS = 18;

  // Generate positions and colors only once
  const objects = useMemo(
    () =>
      Array.from({ length: NUM_OBJECTS }).map(() => ({
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
      {objects.map(({ position, color }, i) => (
        <Cross key={i} position={position} color={color} />
      ))}
    </>
  );
};

export default SceneObjects;