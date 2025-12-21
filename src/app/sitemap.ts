import { MetadataRoute } from "next";

import { BASE_URL } from "../lib/config";

const LAST_MOD = "2025-12-20";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: LAST_MOD,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
