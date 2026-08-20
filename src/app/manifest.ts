import type { MetadataRoute } from "next";
import { SEO_DESCRIPTION_SHORT, SITE } from "@/utils/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — ${SITE.jobTitle}`,
    short_name: SITE.firstName,
    description: SEO_DESCRIPTION_SHORT,
    start_url: "/",
    display: "standalone",
    background_color: "#212121",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
