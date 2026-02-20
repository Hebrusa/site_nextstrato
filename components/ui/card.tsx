import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function Card({ children, className, hover = false, gradient = false }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-[#E4E4EF] p-6",
        hover && "card-hover",
        gradient && "relative overflow-hidden",
        className
      )}
    >
      {gradient && (
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(79,110,247,0.02)] to-[rgba(139,92,246,0.02)] pointer-events-none" />
      )}
      <div className={cn(gradient && "relative z-10")}>{children}</div>
    </div>
  );
}
