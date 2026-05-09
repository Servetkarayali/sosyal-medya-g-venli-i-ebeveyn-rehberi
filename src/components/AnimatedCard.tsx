"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  hoverEffect?: boolean;
}

export default function AnimatedCard({ children, className = "", index = 0, hoverEffect = true }: AnimatedCardProps) {
  const prefersReducedMotion = useReducedMotion();

  // Cap delay at 0.6s max to avoid long waits for cards far down the list
  const cappedDelay = Math.min(index * 0.08, 0.6);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.45,
        delay: cappedDelay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2, ease: "easeOut" } } : undefined}
      style={{ willChange: "transform, opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
