"use client";

import { useActiveSection } from "@/lib/useActiveSection";

import { CustomNavLink } from "../../ui/CustomNavLink";

const links = [
  { to: "about", text: "О нас" },
  { to: "services", text: "Услуги" },
  { to: "portfolio", text: "Портфолио" },
  { to: "packages", text: "Пакеты" },
  { to: "course", text: "Курсы тату" },
  { to: "contacts", text: "Контакты" },
] as const;

export const Navigation = () => {
  const active = useActiveSection(
    links.map(l => l.to),
    { headerPx: 96 }
  );

  return (
    <nav className="hidden items-center gap-6 md:flex lg:gap-15">
      {links.map(l => (
        <CustomNavLink key={l.to} to={l.to} text={l.text} isActive={active === l.to} />
      ))}
    </nav>
  );
};
