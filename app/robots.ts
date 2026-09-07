import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Genereert robots.txt automatisch.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // API-endpoints horen niet in de index; /api/contact/preview bestaat
      // alleen lokaal, maar zo blijft ook een previewdeploy erbuiten.
      disallow: ["/api/"],
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
