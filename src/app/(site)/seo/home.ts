import type { Metadata } from "next";

import { BASE_URL } from "@/lib/config";
import { baseMetadata } from "@/lib/seo/seo-seed";

export const homePageSeo: Metadata = {
  ...baseMetadata,

  title: "Neon Tattoo Studio профессиональная тату-студия в Кишинёве.",
  description:
    "Neon Tattoo Studio профессиональная тату-студия в Кишинёве. Тату, пирсинг, обучение.",

  openGraph: {
    ...baseMetadata.openGraph,
    title: "Neon Tattoo Студия Тату и Пирсинг в Кишинёве",
    description:
      "Профессиональная тату-студия Neon Tattoo. Индивидуальные эскизы, качественная работа.",
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/logo.svg`,
        width: 1200,
        height: 630,
        alt: "Neon Tattoo Studio Главная страница",
      },
    ],
  },

  twitter: {
    ...baseMetadata.twitter,
    title: "Neon Tattoo Тату-студия в Кишинёве",
    description: "Современная и профессиональная тату-студия Neon Tattoo.",
    images: [`${BASE_URL}/logo.svg`],
  },

  alternates: {
    canonical: BASE_URL,
  },
};
