import { Hamburger } from "./ui/Hamburger";
import { Logo } from "./ui/Logo";
import { Navigation } from "./ui/Navigation";

export const Header = () => {
  return (
    <header className="container flex items-center justify-between gap-10 py-6">
      <Logo />
      <Navigation />
      <Hamburger />
    </header>
  );
};
