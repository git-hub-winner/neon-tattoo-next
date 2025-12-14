import type { Metadata } from "next";

import { BASE_URL } from "../config";

export const baseMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Neon Tattoo тату-студия в Кишинёве (Atrium)",
    template: "%s | Neon Tattoo",
  },

  description:
    "Neon Tattoo тату-студия в Кишинёве (ТЦ Atrium, ул. Албишоара 4). Татуировки, пирсинг, перманентный макияж. Работаем по предварительной записи.",

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Neon Tattoo",
    title: "Neon Tattoo тату-студия в Кишинёве (Atrium)",
    description:
      "Тату-студия в Кишинёве: ТЦ Atrium, ул. Албишоара 4. Татуировки, пирсинг, перманентный макияж. По предварительной записи.",
    locale: "ru_MD",
    images: [
      {
        url: `${BASE_URL}/logo.svg`,
        width: 1200,
        height: 630,
        alt: "Neon Tattoo тату-студия в Кишинёве (Atrium)",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Neon Tattoo тату-студия в Кишинёве (Atrium)",
    description: "ТЦ Atrium, ул. Албишоара 4. Татуировки, пирсинг, перманентный макияж. По записи.",
    images: [`${BASE_URL}/logo.svg`],
  },
};
