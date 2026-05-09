"use client";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  hoverEffect?: boolean;
}

export default function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  return <div className={className}>{children}</div>;
}
