import type { MetadataRoute } from "next";
import { SITE } from "@/utils/seo";

// Served at /sitemap.xml. The portfolio is a single indexable document — section
// anchors are deliberately left out because search engines discard URL fragments
// in sitemaps rather than treating them as separate pages.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
