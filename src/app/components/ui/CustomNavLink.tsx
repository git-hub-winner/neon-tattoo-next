"use client";

import { Link } from "react-scroll";

import { cn } from "@/lib/utils";

type Props = {
  to: string;
  text: string;
  className?: string;
};

export const CustomNavLink = ({ to, text, className }: Props) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={500}
      offset={-80}
      activeClass="text-primary"
      className={cn("cursor-pointer transition-colors", className)}
    >
      {text}
    </Link>
  );
};
