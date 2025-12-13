import Image from "next/image";

import { PackageCard } from "../ui/PackageCard";
import { packages } from "./mocks/mocks";

export const Packages = () => {
  return (
    <section id="packages" className="container flex flex-col gap-10 pb-10 md:gap-15 md:pb-15">
      <div className="flex flex-col gap-10">
        <div className="relative mx-auto h-[55px] w-full max-w-[350px]">
          <Image
            src="/images/about2.jpg"
            alt="О нас NeonTattoo"
            fill
            sizes="(max-width: 640px) 100vw, 350px"
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <p className="text-xs tracking-widest uppercase">We love Creative Tattoo</p>
          <p className="text-4xl font-semibold uppercase md:text-6xl">Tattoo Package</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {packages.map((item, index) => (
          <PackageCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};
