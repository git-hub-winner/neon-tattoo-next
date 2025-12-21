import type { Metadata } from "next";

import { BASE_URL } from "@/lib/config";
import { baseMetadata } from "@/lib/seo/seo-seed";

export const homePageSeo: Metadata = {
  ...baseMetadata,

  title: "Neon Tattoo | Тату-студия в Кишинёве Татуировки, Пирсинг, Перманентный Макияж",

  description:
    "Профессиональная тату-студия Neon Tattoo в Кишинёве (ТЦ Atrium, ул. Албишоара 4). Индивидуальные эскизы, художественные татуировки, пирсинг, перманентный макияж. Стерильность, опытные мастера, современное оборудование. Запись: +373 79 146 506",

  keywords: [
    "тату студия Кишинёв",
    "татуировка Кишинёв",
    "пирсинг Кишинёв",
    "перманентный макияж Кишинёв",
  ],

  alternates: {
    canonical: `${BASE_URL}/`,
  },

  openGraph: {
    type: "website",
    url: `${BASE_URL}/`,
    siteName: "Neon Tattoo",
    title: "Neon Tattoo | Профессиональная Тату-студия в Кишинёве",
    description:
      "Художественные татуировки, пирсинг и перманентный макияж в центре Кишинёва. ТЦ Atrium, ул. Албишоара 4. Опытные мастера, индивидуальный подход, стерильность. Запись онлайн!",
    locale: "ru_MD",
    images: [
      {
        url: `${BASE_URL}/og_image.png`,
        width: 1200,
        height: 630,
        alt: "Neon Tattoo Studio Тату-студия в Кишинёве | Татуировки, Пирсинг, Перманентный Макияж",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Neon Tattoo | Тату-студия в Кишинёве Татуировки & Пирсинг",
    description:
      "Профессиональные татуировки в Кишинёве. ТЦ Atrium, ул. Албишоара 4. Индивидуальные эскизы, пирсинг, перманентный макияж. Запись: +373 79 146 506",
    images: {
      url: `${BASE_URL}/og_image.png`,
      alt: "Neon Tattoo Studio Тату-студия в Кишинёве",
    },
  },
};
