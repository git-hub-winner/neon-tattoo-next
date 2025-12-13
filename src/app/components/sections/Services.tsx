import { MoveRight } from "lucide-react";
import Image from "next/image";

import { CustomNavLink } from "../ui/CustomNavLink";

export const Services = () => {
  return (
    <section id="services" className="grid w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
      <div className="relative min-h-[710px] w-full">
        <Image
          src="/images/services1.jpg"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="h-full w-full object-cover"
          alt="Тату-мастер наносит татуировку в студии NeonTattoo"
        />
      </div>

      <div className="flex flex-col gap-10 bg-black px-4 py-15 text-white sm:px-8 sm:py-25">
        <div className="border-primary border-4 p-6 text-center">
          <p className="text-sm font-bold uppercase">A Curated Gallery Of</p>
          <p className="text-2xl font-bold uppercase md:text-5xl">tattoo art</p>
        </div>
        <p className="tracking-widest uppercase">
          In this Brando, we have invited artists to reveal their talent, for an ode to creativity.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&#39;s standard dummy text ever since the 1500s. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.
        </p>
        <CustomNavLink
          className="bg-primary group flex w-fit items-center justify-between gap-4 p-4 font-bold tracking-widest uppercase hover:text-white"
          to="portfolio"
          text="Enter the gallery"
          icon={
            <MoveRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={24}
              strokeWidth={2}
            />
          }
        />
      </div>

      <div className="hidden flex-col gap-10 bg-black px-8 py-25 text-white sm:flex xl:hidden">
        <div className="border-primary border-4 p-6 text-center">
          <p className="text-sm font-bold uppercase">A Curated Gallery Of</p>
          <p className="text-2xl font-bold uppercase md:text-5xl">tattoo art</p>
        </div>
        <p className="tracking-widest uppercase">
          In this Brando, we have invited artists to reveal their talent, for an ode to creativity.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&#39;s standard dummy text ever since the 1500s. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry.
        </p>
        <CustomNavLink
          className="bg-primary group flex w-fit items-center justify-between gap-4 p-4 font-bold tracking-widest uppercase hover:text-white"
          to="portfolio"
          text="Enter the gallery"
          icon={
            <MoveRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={24}
              strokeWidth={2}
            />
          }
        />
      </div>

      <div className="relative min-h-[710px] w-full">
        <Image
          src="/images/services2.jpg"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          alt="Тату-мастер наносит татуировку в студии NeonTattoo"
        />
      </div>
    </section>
  );
};
