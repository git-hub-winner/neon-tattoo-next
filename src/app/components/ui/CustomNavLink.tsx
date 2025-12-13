"use client";

import { cn } from "@/lib/utils";

type Props = {
  to: string;
  text: string;
  className?: string;
  icon?: React.ReactNode;
};

export const CustomNavLink = ({ to, text, className, icon }: Props) => {
  return (
    <a
      href={`#${to}`}
      className={cn("hover:text-primary cursor-pointer transition-colors", className)}
      onClick={e => {
        e.preventDefault();
        document.getElementById(to)?.scrollIntoView({
          behavior: "smooth",
        });
      }}
    >
      {text}
      {icon}
    </a>
  );
};
