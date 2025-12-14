"use client";

import { useEffect, useState } from "react";

import { Hamburger } from "./ui/Hamburger";
import { Logo } from "./ui/Logo";
import { Navigation } from "./ui/Navigation";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header className="sticky top-0 z-50 h-24">
      <div
        className={`border-b bg-white transition-all duration-300 ${isScrolled ? "py-4" : "py-6"}`}
      >
        <div className="flex items-center justify-between gap-10 px-6">
          <Logo />
          <Navigation />
          <Hamburger />
        </div>
      </div>
    </header>
  );
};
