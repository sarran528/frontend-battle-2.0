import React from 'react';

const SceneLights: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight
        position={[5, 5, 3]}
        intensity={0.8}
        color="#4F46E5"
      />
      <pointLight
        position={[-5, -5, -3]}
        intensity={0.4}
        color="#818CF8"
      />
      <spotLight
        position={[3, 3, 3]}
        angle={0.4}
        penumbra={1}
        intensity={0.5}
        color="#C7D2FE"
        castShadow
      />
    </>
  );
};

export default SceneLights;
