import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "blue" | "violet" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-[#EEF1FE] text-[#4F6EF7] border border-[#D5DCFC]",
    blue: "bg-[#EEF1FE] text-[#4F6EF7] border border-[#D5DCFC]",
    violet: "bg-[#F3EEFE] text-[#8B5CF6] border border-[#DDD0FB]",
    outline: "border border-[#E4E4EF] text-[#71718A] bg-white",
  };

  return (
    <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  );
}
