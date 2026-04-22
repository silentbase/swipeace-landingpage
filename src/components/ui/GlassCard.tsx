import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hoverable = false,
}: GlassCardProps) {
  return (
    <div className={`card p-6 ${hoverable ? "card-hover" : ""} ${className}`}>
      {children}
    </div>
  );
}
