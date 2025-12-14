"use client";

import "photoswipe/style.css";

import Image from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { useEffect } from "react";

import { cn } from "@/lib/utils";

type ImageItem = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

type Props = {
  galleryID: string;
  images: ImageItem[];
  className?: string;
};

export default function PortfolioGallery({ galleryID, images, className }: Props) {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, [galleryID]);

  return (
    <div className={cn("pswp-gallery", className)} id={galleryID}>
      {images.map((image, index) => (
        <a
          key={`${galleryID}-${index}`}
          href={image.url}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          target="_blank"
          rel="noreferrer"
          className="relative block min-h-[650px] overflow-hidden"
        >
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(min-width: 1536px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="aspect-3/4 object-cover"
          />
        </a>
      ))}
    </div>
  );
}
