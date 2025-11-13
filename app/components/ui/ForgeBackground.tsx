"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function LavaBlob({ position, scale, speed }: { position: [number, number, number]; scale: number; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    timeRef.current += delta * speed;
    
    // Organic floating movement
    meshRef.current.position.y = position[1] + Math.sin(timeRef.current) * 0.5;
    meshRef.current.position.x = position[0] + Math.cos(timeRef.current * 0.7) * 0.3;
    meshRef.current.position.z = position[2] + Math.sin(timeRef.current * 0.5) * 0.3;
    
    // Pulsing scale
    const pulseFactor = 1 + Math.sin(timeRef.current * 2) * 0.1;
    meshRef.current.scale.setScalar(scale * pulseFactor);
    
    // Rotation
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#EF4444"
        emissive="#EF4444"
        emissiveIntensity={2.5}
        roughness={0.8}
        metalness={0.1}
        transparent={true}
        opacity={0.85}
      />
    </mesh>
  );
}

// Helper function to generate random blob positions
const generateBlobs = () => 
  Array.from({ length: 8 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 5 - 2
    ] as [number, number, number],
    scale: Math.random() * 1.5 + 0.8,
    speed: Math.random() * 0.3 + 0.15
  }));

function ForgeScene() {
  const [blobs] = useState(generateBlobs);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 8]} intensity={1.2} color="#EF4444" />
      <pointLight position={[-5, -5, 8]} intensity={1.0} color="#F87171" />
      <pointLight position={[0, 0, 6]} intensity={0.8} color="#EF4444" />
      <spotLight position={[0, 8, 5]} intensity={1.0} color="#EF4444" angle={0.5} penumbra={0.6} />
      
      {blobs.map((blob) => (
        <LavaBlob
          key={blob.id}
          position={blob.position}
          scale={blob.scale}
          speed={blob.speed}
        />
      ))}
    </>
  );
}

export function ForgeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity: 0.7 }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ForgeScene />
      </Canvas>
    </div>
  );
}

// Simpler 2D version for better performance
export function ForgeGlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 179, 71, 0.25) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'float 6s ease-in-out infinite reverse'
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'float 10s ease-in-out infinite',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  );
}
