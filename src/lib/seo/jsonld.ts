import { BASE_URL } from "@/lib/config";

export const neonTattooJsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  "@id": `${BASE_URL}/#neontattoo`,
  url: BASE_URL,
  name: "NeonTattoo тату-студия",
  image: [`${BASE_URL}/logo.svg`],
  telephone: "+373 60 000 000",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Примерная 10",
    addressLocality: "Кишинёв",
    addressCountry: "MD",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 47.0105,
    longitude: 28.8638,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "11:00",
      closes: "17:00",
    },
  ],
  sameAs: ["https://instagram.com/neontattoo"],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Мини-татуировка",
      priceCurrency: "MDL",
      price: "400",
    },
    {
      "@type": "Offer",
      name: "Цветная татуировка",
      priceCurrency: "MDL",
      price: "500",
    },
  ],
};
