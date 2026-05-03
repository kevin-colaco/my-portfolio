import type { MetadataRoute } from "next";
import { siteMeta } from "../data/siteMeta";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteMeta.siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
