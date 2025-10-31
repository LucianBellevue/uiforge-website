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
  const variantClass = {
    raised: "neumorphic",
    inset: "neumorphic-inset",
    embossed: "embossed"
  }[variant];

  const Component = animate ? motion.div : "div";
  const animationProps = animate ? {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.4 }
  } : {};

  return (
    <Component
      className={clsx(variantClass, "p-6", className)}
      {...animationProps}
    >
      {children}
    </Component>
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
        "raised-button",
        "px-6 py-3 rounded-lg font-semibold text-white",
        "cursor-pointer border-none",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={onClick}
      disabled={disabled}
      whileTap={!disabled ? { scale: 0.95 } : {}}
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
        "neumorphic-inset",
        "px-4 py-3 w-full",
        "bg-transparent border-none outline-none",
        "text-foreground placeholder:text-muted",
        className
      )}
    />
  );
}
