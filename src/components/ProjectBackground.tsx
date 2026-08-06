import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y += 0.0003;
    meshRef.current.rotation.x += 0.0004;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3.5, 3.5, 3.5, 10, 10, 10]} />
      <meshStandardMaterial color="#6c5ce7" wireframe />
    </mesh>
  );
}

export function ProjectBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} />
      <AnimatedSphere />
    </Canvas>
  );
}
