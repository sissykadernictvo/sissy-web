import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://www.sissy.sk",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.sissy.sk/cennik",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}