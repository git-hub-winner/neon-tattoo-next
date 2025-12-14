"use client";

import { cn } from "@/lib/utils";

type Props = {
  to: string;
  text: string;
  className?: string;
  icon?: React.ReactNode;
  isActive?: boolean;
};

export const CustomNavLink = ({ to, text, className, icon, isActive }: Props) => {
  return (
    <a
      href={`#${to}`}
      className={cn(
        "hover:text-primary group relative transition-colors",
        isActive && "text-primary font-semibold",
        className
      )}
      aria-current={isActive ? "location" : undefined}
    >
      {text}
      {icon}
      <span
        className={cn(
          "bg-primary absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-300",
          isActive ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </a>
  );
};
