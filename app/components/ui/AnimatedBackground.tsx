"use client";

import { motion } from "framer-motion";
import { useState, useSyncExternalStore } from "react";

// Helper function to generate random orbs (called once during initialization)
const generateOrbs = () => 
  [...Array(5)].map((_, i) => ({
    id: i,
    width: Math.random() * 300 + 100,
    height: Math.random() * 300 + 100,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.3 + 0.1,
    xMovement: Math.random() * 100 - 50,
    yMovement: Math.random() * 100 - 50,
    scale: Math.random() * 0.5 + 0.8,
    duration: Math.random() * 10 + 10,
  }));

export function FloatingOrbs() {
  const [orbs] = useState(generateOrbs);

  // Proper hydration handling - prevent server/client mismatch
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!isClient) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full"
          style={{
            width: orb.width,
            height: orb.height,
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            background: `radial-gradient(circle, rgba(239, 68, 68, ${orb.opacity}) 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, orb.xMovement, 0],
            y: [0, orb.yMovement, 0],
            scale: [1, orb.scale, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(239, 68, 68, 0.3)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

// Helper function to generate random particles
const generateParticles = () =>
  [...Array(20)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

interface ParticleFieldProps {
  variant?: 'light' | 'dark';
}

export function ParticleField({ variant = 'light' }: ParticleFieldProps) {
  const [particles] = useState(generateParticles);
  
  // Color based on variant
  const particleColor = variant === 'dark' 
    ? '#1C1C1C' // Charcoal for light backgrounds
    : '#EF4444'; // Red for dark backgrounds

  // Proper hydration handling with useSyncExternalStore
  // This prevents hydration mismatch without triggering cascading renders
  const isClient = useSyncExternalStore(
    () => () => {}, // subscribe function (no-op since we don't need updates)
    () => true,      // getSnapshot (client-side always returns true)
    () => false      // getServerSnapshot (server-side always returns false)
  );

  if (!isClient) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div key={particle.id} className="absolute" style={{ left: `${particle.left}%`, top: `${particle.top}%` }}>
          {/* Main particle (largest - 4px) */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: '4px',
              height: '4px',
              backgroundColor: particleColor,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
          
          {/* First trailing particle (3px) */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: '3px',
              height: '3px',
              backgroundColor: particleColor,
            }}
            animate={{
              y: [0, -85, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay + 0.1,
              ease: "easeInOut",
            }}
          />
        </div>
      ))}
    </div>
  );
}

interface WaveBackgroundProps {
  className?: string;
}

export function WaveBackground({ className = "" }: WaveBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="rgba(239, 68, 68, 0.1)"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          animate={{
            d: [
              "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,186.7C672,192,768,160,864,138.7C960,117,1056,107,1152,112C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}
