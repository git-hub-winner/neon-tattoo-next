import type { Metadata } from "next";

import { BASE_URL } from "@/lib/config";
import { baseMetadata } from "@/lib/seo/seo-seed";

export const homePageSeo: Metadata = {
  ...baseMetadata,

  title: "NeonTattoo Студия Тату",
  description:
    "NeonTattoo Studio профессиональная тату-студия в Кишинёве. Тату, пирсинг, обучение.",

  openGraph: {
    ...baseMetadata.openGraph,
    title: "NeonTattoo Студия Тату и Пирсинг в Кишинёве",
    description:
      "Профессиональная тату-студия NeonTattoo. Индивидуальные эскизы, качественная работа.",
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/logo.svg`,
        width: 1200,
        height: 630,
        alt: "NeonTattoo Studio Главная страница",
      },
    ],
  },

  twitter: {
    ...baseMetadata.twitter,
    title: "NeonTattoo Тату-студия в Кишинёве",
    description: "Современная и профессиональная тату-студия NeonTattoo.",
    images: [`${BASE_URL}/logo.svg`],
  },

  alternates: {
    canonical: BASE_URL,
  },
};
