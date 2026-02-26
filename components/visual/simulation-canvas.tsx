"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Line } from "@react-three/drei";
import * as THREE from "three";

function SimulationNodes() {
  const pointsRef = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);

  const [positions, connections] = useMemo(() => {
    const count = 40;
    const pos = new Float32Array(count * 3);
    const conn: [THREE.Vector3, THREE.Vector3][] = [];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;

      if (i > 0 && Math.random() > 0.7) {
        conn.push([
          new THREE.Vector3(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]),
          new THREE.Vector3(
            pos[(i - 1) * 3],
            pos[(i - 1) * 3 + 1],
            pos[(i - 1) * 3 + 2],
          ),
        ]);
      }
    }
    return [pos, conn];
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      <Points positions={positions} ref={pointsRef}>
        <PointMaterial
          transparent
          color="#4f46e5"
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {connections.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#6366f1"
          lineWidth={0.5}
          transparent
          opacity={0.2}
        />
      ))}

      {/* Core central node */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#4f46e5"
          emissive="#4f46e5"
          emissiveIntensity={2}
        />
      </mesh>
    </group>
  );
}

export function SimulationCanvas() {
  return (
    <div className="w-full h-full bg-zinc-950">
      <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#818cf8" />
        <SimulationNodes />
      </Canvas>
    </div>
  );
}
