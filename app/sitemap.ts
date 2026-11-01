import type { MetadataRoute } from "next";
import { portfolio } from "#site/content";
import { existingHubs, hubArticles, hubPath, publishedArticles } from "@/lib/kennisbank";
import { site } from "@/lib/site";
import { jobPath, openJobs } from "@/lib/jobs";
import pageDates from "@/lib/page-dates.json";

// Genereert sitemap.xml automatisch bij elke build.
export default function sitemap(): MetadataRoute.Sitemap {
  // Vaste pagina's: de datum van de laatste commit op de paginamap
  // (lib/page-dates.json, via scripts/page-dates.mjs). Zo ziet Google een
  // echte wijzigingsdatum in plaats van het buildmoment. Ontbreekt een
  // datum, dan valt de pagina terug op het buildmoment.
  const built = new Date();
  const dates = pageDates as Record<string, string>;
  const modified = (path: string) => (dates[path || "/"] ? new Date(dates[path || "/"]) : built);

  // Dienstpagina's — belangrijkste landingspagina's voor SEO
  const serviceRoutes = [
    "/verbouwing",
    "/aanbouw-uitbouw",
    "/nieuwbouw",
    "/kozijnen",
    "/prefab",
    "/zakelijk",
    "/zakelijk/horeca-verbouwen",
    "/zakelijk/bedrijfspand-verbouwen",
    "/wonen-en-verbouwen",
    "/verduurzamen",
    "/aannemer-enschede",
    "/aannemer-twente",
    "/aannemer-hengelo",
    "/aannemer-almelo",
    "/aannemer-oldenzaal",
    "/aannemer-borne",
    "/aannemer-haaksbergen",
    "/aannemer-losser",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: modified(path),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const infoRoutes = [
    "/over-ons",
    "/hoe-wij-werken",
    "/bouwmethodes",
    "/veelgestelde-vragen",
    "/werkgenoeg",
    "/gratis-brochure",
    "/veilig-verantwoord-bouwen",
    "/regionale-partners",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: modified(path),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Alleen bevestigd openstaande vacatures hebben een eigen pagina.
  const jobRoutes = openJobs().map((job) => ({
    url: `${site.url}${jobPath(job.slug)}`,
    lastModified: job.datePosted,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const staticRoutes = [
    ...["", "/diensten", "/projecten", "/kennisbank", "/contact"].map((path) => ({
      url: `${site.url}${path}`,
      lastModified: modified(path),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...serviceRoutes,
    ...infoRoutes,
    {
      url: `${site.url}/privacy-policy`,
      lastModified: modified("/privacy-policy"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  const articleRoutes = publishedArticles().map((a) => ({
    url: `${site.url}${a.permalink}`,
    lastModified: a.updated ?? a.date,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const projectRoutes = portfolio
    .filter((p) => !p.draft)
    .map((p) => ({
      url: `${site.url}${p.permalink}`,
      lastModified: p.date,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }));

  // Kennisbank-hubs: lastModified = nieuwste artikel in die hub.
  const hubRoutes = (["category"] as const).flatMap((type) =>
    existingHubs(type).map((item) => {
      const newest = hubArticles(type, item.slug)
        .map((a) => a.updated ?? a.date)
        .sort()
        .at(-1);
      return {
        url: `${site.url}${hubPath(type, item.slug)}`,
        lastModified: newest ?? built,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      };
    })
  );

  return [...staticRoutes, ...articleRoutes, ...hubRoutes, ...projectRoutes, ...jobRoutes];
}
