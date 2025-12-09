"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const Hero = () => {
  return (
    <section className="relative w-full">
      <Swiper
        pagination={{
          el: ".heroSwiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".heroSwiper-button-next",
          prevEl: ".heroSwiper-button-prev",
        }}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="swiperHero min-h-[calc(100dvh-96px)]"
      >
        <SwiperSlide className="relative min-h-[calc(100dvh-96px)]">
          <div className="absolute inset-0 z-10 bg-black/40"></div>
          <Image
            src="/images/hero1.jpg"
            fill
            priority
            className="h-full w-full object-cover"
            alt="Тату-мастер наносит татуировку в студии NeonTattoo"
          />
          <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-white">
            <div className="flex flex-col gap-10">
              <p className="sedwick text-center text-5xl sm:text-7xl">NeonTattoo</p>
              <div className="flex flex-col gap-4 text-center tracking-widest uppercase">
                <h2>профессиональная тату студия в кишинёве</h2>
                <h2>индивидуальные тату эскизы</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative min-h-[calc(100dvh-96px)]">
          <div className="absolute inset-0 z-10 bg-black/40"></div>
          <Image
            src="/images/hero2.jpg"
            fill
            className="h-full w-full object-cover"
            alt="Авторская татуировка в тату-студии NeonTattoo Кишинёв"
          />
          <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-white">
            <div className="flex flex-col gap-10">
              <p className="sedwick text-center text-5xl sm:text-7xl">NeonTattoo</p>
              <div className="flex flex-col gap-4 text-center tracking-widest uppercase">
                <h2>профессиональная тату студия в кишинёве</h2>
                <h2>индивидуальные тату эскизы</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative min-h-[calc(100dvh-96px)]">
          <div className="absolute inset-0 z-10 bg-black/40"></div>
          <Image
            src="/images/hero3.jpg"
            fill
            className="h-full w-full object-cover"
            alt="Эскизы и профессиональные тату в студии NeonTattoo"
          />
          <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-white">
            <div className="flex flex-col gap-10">
              <p className="sedwick text-center text-5xl sm:text-7xl">NeonTattoo</p>
              <div className="flex flex-col gap-4 text-center tracking-widest uppercase">
                <h2>профессиональная тату студия в кишинёве</h2>
                <h2>индивидуальные тату эскизы</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="heroSwiper-pagination [&>.swiper-pagination-bullet]:bg-primary! absolute! bottom-10! left-1/2! z-40! flex! w-fit! -translate-x-1/2! translate-y-1/2! items-center! gap-3! [&>.swiper-pagination-bullet]:h-0.5! [&>.swiper-pagination-bullet]:w-10! [&>.swiper-pagination-bullet]:cursor-pointer! [&>.swiper-pagination-bullet]:rounded-none!"></div>

      <div className="absolute top-4 right-4 z-20">
        <div className="flex items-center gap-6">
          <button className="heroSwiper-button-prev flex items-center justify-center rounded-full border border-white/10 bg-white/20 p-2 shadow-lg shadow-black/20 backdrop-blur-md transition hover:bg-white/30">
            <ChevronLeft className="size-6 text-white" />
          </button>
          <button className="heroSwiper-button-next flex items-center justify-center rounded-full border border-white/10 bg-white/20 p-2 shadow-lg shadow-black/20 backdrop-blur-md transition hover:bg-white/30">
            <ChevronRight className="size-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};
