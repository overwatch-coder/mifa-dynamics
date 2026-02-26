"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Sphere,
  MeshDistortMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import * as THREE from "three";

function GeometricMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 50; i++) {
      p.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
        ),
      );
    }
    return p;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;

      // Subtle mouse interaction
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        mouse.x * 0.5,
        0.1,
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        mouse.y * 0.5,
        0.1,
      );
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[1.5, 64, 64]}>
          <MeshDistortMaterial
            color="#4f46e5"
            speed={3}
            distort={0.4}
            radius={1}
            emissive="#1e1b4b"
          />
        </Sphere>
      </Float>

      {/* Wireframe overlay for technical look */}
      <Sphere args={[1.52, 32, 32]}>
        <meshStandardMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.1}
        />
      </Sphere>

      {/* Background particles/nodes */}
      {points.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

export function HeroCanvas() {
  return (
    <div className="w-full h-full bg-zinc-950">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#818cf8" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#4f46e5"
        />
        <GeometricMesh />
      </Canvas>
    </div>
  );
}
