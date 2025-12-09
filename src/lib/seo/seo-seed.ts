import type { Metadata } from "next";

import { BASE_URL } from "../config";

export const baseMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "NeonTattoo тату-студия",
    template: "%s | NeonTattoo тату-студия",
  },

  description:
    "NeonTattoo профессиональная тату-студия в Кишинёве. Тату, пирсинг, курсы татуировки.",

  openGraph: {
    type: "website",
    siteName: "NeonTattoo",
    title: "NeonTattoo тату-студия",
    description:
      "Профессиональная тату-студия в Кишинёве. Индивидуальные эскизы, качественная работа.",
    images: [
      {
        url: `${BASE_URL}/logo.svg`,
        width: 1200,
        height: 630,
        alt: "NeonTattoo тату-студия",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "NeonTattoo Студия",
    description: "Профессиональная тату-студия в Кишинёве.",
    images: [`${BASE_URL}/logo.svg`],
  },

  alternates: {
    canonical: BASE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  keywords: [
    "тату Кишинёв",
    "тату студия",
    "тату салон",
    "пирсинг Кишинёв",
    "NeonTattoo",
    "курсы татуировки",
  ],
};
