"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "light" | "primary";
  hover?: boolean;
  animate?: boolean;
  style?: React.CSSProperties;
}

export function GlassCard({ 
  children, 
  className = "", 
  variant = "default",
  hover = true,
  animate = true,
  style
}: GlassCardProps) {
  const variantStyles = {
    default: {
      background: 'rgba(28, 28, 28, 0.7)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    light: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    primary: {
      background: 'rgba(255, 126, 41, 0.1)',
      backdropFilter: 'blur(15px)',
      WebkitBackdropFilter: 'blur(15px)',
      border: '1px solid rgba(255, 126, 41, 0.3)'
    }
  }[variant];

  return (
    <motion.div
      className={clsx(
        "rounded-2xl p-6 transition-all duration-300",
        className
      )}
      style={{ ...variantStyles, ...style }}
      initial={animate ? { opacity: 0, y: 20 } : false}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={animate ? { once: true, margin: "-50px" } : undefined}
      transition={animate ? { duration: 0.5, ease: [0.16, 1, 0.3, 1] } : undefined}
      whileHover={hover && animate ? { y: -5, transition: { duration: 0.2 } } : undefined}
    >
      {children}
    </motion.div>
  );
}

interface GlassNavbarProps {
  children: ReactNode;
  className?: string;
}

export function GlassNavbar({ children, className = "" }: GlassNavbarProps) {
  return (
    <nav 
      className={clsx("sticky top-0 z-50 transition-all duration-300", className)}
      style={{
        background: 'rgba(28, 28, 28, 0.8)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none'
      }}
    >
      {children}
    </nav>
  );
}

interface GlassModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function GlassModal({ children, isOpen, onClose, className = "" }: GlassModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={clsx("relative rounded-2xl p-8 max-w-2xl w-full", className)}
        style={{
          background: 'rgba(28, 28, 28, 0.9)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
