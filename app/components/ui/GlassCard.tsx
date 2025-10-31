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
  const glassClass = {
    default: "glass",
    light: "glass-light",
    primary: "glass-primary"
  }[variant];

  const Component = animate ? motion.div : "div";
  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  } : {};

  return (
    <Component
      className={clsx(
        glassClass,
        "rounded-2xl p-6",
        hover && "hover-lift",
        className
      )}
      style={style}
      {...animationProps}
    >
      {children}
    </Component>
  );
}

interface GlassNavbarProps {
  children: ReactNode;
  className?: string;
}

export function GlassNavbar({ children, className = "" }: GlassNavbarProps) {
  return (
    <nav className={clsx("glass", "sticky top-0 z-50", className)}>
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
        className={clsx("glass", "relative rounded-2xl p-8 max-w-2xl w-full", className)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
