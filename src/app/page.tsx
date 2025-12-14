import { About } from "./components/sections/About";
import { Contacts } from "./components/sections/Contacts";
import { Course } from "./components/sections/Course";
import { Hero } from "./components/sections/Hero";
import { Packages } from "./components/sections/Packages";
import { Portfolio } from "./components/sections/Portfolio";
import { Services } from "./components/sections/Services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Packages />
      <Course />
      <Contacts />
    </>
  );
}
