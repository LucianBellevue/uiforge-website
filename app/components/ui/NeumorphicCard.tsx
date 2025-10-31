"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface NeumorphicCardProps {
  children: ReactNode;
  className?: string;
  variant?: "raised" | "inset" | "embossed";
  animate?: boolean;
}

export function NeumorphicCard({ 
  children, 
  className = "",
  variant = "raised",
  animate = true
}: NeumorphicCardProps) {
  const variantStyles = {
    raised: {
      background: 'var(--background-charcoal)',
      boxShadow: '8px 8px 16px rgba(0, 0, 0, 0.5), -8px -8px 16px rgba(40, 40, 40, 0.5)',
      borderRadius: '1rem'
    },
    inset: {
      background: 'var(--background-charcoal)',
      boxShadow: 'inset 6px 6px 12px rgba(0, 0, 0, 0.5), inset -6px -6px 12px rgba(40, 40, 40, 0.5)',
      borderRadius: '1rem'
    },
    embossed: {
      background: 'linear-gradient(145deg, #1f1f1f, #191919)',
      boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.6), -5px -5px 10px rgba(40, 40, 40, 0.3)',
      borderRadius: '1rem'
    }
  }[variant];

  return (
    <motion.div
      className={clsx("p-6 transition-all duration-300", className)}
      style={variantStyles}
      initial={animate ? { opacity: 0, scale: 0.95 } : false}
      whileInView={animate ? { opacity: 1, scale: 1 } : undefined}
      viewport={animate ? { once: true, margin: "-50px" } : undefined}
      transition={animate ? { duration: 0.5, ease: [0.16, 1, 0.3, 1] } : undefined}
    >
      {children}
    </motion.div>
  );
}

interface NeumorphicButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function NeumorphicButton({ 
  children, 
  onClick,
  className = "",
  disabled = false
}: NeumorphicButtonProps) {
  return (
    <motion.button
      className={clsx(
        "px-6 py-3 rounded-lg font-semibold",
        "cursor-pointer border-none transition-all duration-200",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      style={{
        background: 'var(--background-charcoal)',
        boxShadow: '6px 6px 12px rgba(0, 0, 0, 0.5), -6px -6px 12px rgba(40, 40, 40, 0.5)',
        color: 'var(--primary)'
      }}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98, boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.5), inset -4px -4px 8px rgba(40, 40, 40, 0.5)' } : {}}
    >
      {children}
    </motion.button>
  );
}

interface NeumorphicInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  type?: string;
}

export function NeumorphicInput({ 
  placeholder,
  value,
  onChange,
  className = "",
  type = "text"
}: NeumorphicInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={clsx(
        "px-4 py-3 w-full rounded-lg",
        "border-none outline-none transition-all duration-200",
        "text-foreground placeholder:text-muted",
        "focus:ring-2 focus:ring-primary/30",
        className
      )}
      style={{
        background: 'var(--background-charcoal)',
        boxShadow: 'inset 6px 6px 12px rgba(0, 0, 0, 0.5), inset -6px -6px 12px rgba(40, 40, 40, 0.5)'
      }}
    />
  );
}
