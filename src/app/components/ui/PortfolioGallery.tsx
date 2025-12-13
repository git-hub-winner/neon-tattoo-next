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
          className="block overflow-hidden"
        >
          <Image
            src={image.url}
            alt={image.alt}
            width={720}
            height={720}
            className="h-auto w-full object-cover"
          />
        </a>
      ))}
    </div>
  );
}
