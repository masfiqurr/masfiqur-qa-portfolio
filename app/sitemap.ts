import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://masfiqur.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.masfiqur.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
