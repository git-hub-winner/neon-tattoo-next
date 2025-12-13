import Image from "next/image";

import PortfolioGallery from "../ui/PortfolioGallery";
import { portfolioImages } from "./mocks/mocks";

export const Portfolio = () => {
  return (
    <section id="portfolio" className="flex flex-col gap-10 md:gap-15">
      <div className="container flex flex-col gap-4">
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
          <p className="text-4xl font-semibold uppercase md:text-6xl">Work Gallery</p>
        </div>
      </div>
      <PortfolioGallery
        galleryID="portfolio-gallery"
        images={portfolioImages}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
      />
    </section>
  );
};
