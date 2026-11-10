import type { MetadataRoute } from "next";
import { siteMeta } from "../data/siteMeta";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteMeta.siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
