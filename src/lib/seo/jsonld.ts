import { BASE_URL } from "@/lib/config";

export const NeonTattooJsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  "@id": `${BASE_URL}/#neon-tattoo`,
  url: BASE_URL,
  name: "Neon Tattoo",
  description:
    "Neon Tattoo профессиональная тату-студия в Кишинёве. Индивидуальные эскизы, татуировки, пирсинг и перманентный макияж. Работаем по предварительной записи.",
  image: [`${BASE_URL}/logo.svg`, `${BASE_URL}/images/portfolio1.webp`],
  telephone: "+37379146506",
  priceRange: "MDL",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Strada Albișoara 4, Atrium",
    addressLocality: "Chișinău",
    postalCode: "MD-2001",
    addressCountry: "MD",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.0146631,
    longitude: 28.8558081,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  sameAs: ["https://www.instagram.com/TrinkoTattoo"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+37379146506",
    contactType: "customer support",
    availableLanguage: ["ru", "ro"],
  },
  areaServed: {
    "@type": "City",
    name: "Chișinău",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tattoo & Piercing Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Маленькая татуировка",
        price: "300",
        priceCurrency: "MDL",
      },
      {
        "@type": "Offer",
        name: "Большая татуировка",
        price: "1200",
        priceCurrency: "MDL",
      },
      {
        "@type": "Offer",
        name: "Перманентный макияж",
        price: "900",
        priceCurrency: "MDL",
      },
      {
        "@type": "Offer",
        name: "Пирсинг",
        price: "150",
        priceCurrency: "MDL",
      },
      {
        "@type": "Offer",
        name: "Курсы татуировки (индивидуально)",
        description:
          "Индивидуальное обучение татуировке. Теория, практика и сопровождение мастера.",
        price: "450",
        priceCurrency: "EUR",
      },
    ],
  },
};
