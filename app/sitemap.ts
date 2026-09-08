import type { MetadataRoute } from "next";
import { kennisbank, portfolio } from "#site/content";
import { site } from "@/lib/site";

// Genereert sitemap.xml automatisch bij elke build.
export default function sitemap(): MetadataRoute.Sitemap {
  // Buildtijdstip: statische pagina's hebben geen eigen wijzigingsdatum,
  // maar Google verwacht wel een lastModified per URL.
  const built = new Date();

  // Dienstpagina's — belangrijkste landingspagina's voor SEO
  const serviceRoutes = [
    "/verbouwing",
    "/aanbouw-uitbouw",
    "/nieuwbouw",
    "/kozijnen",
    "/prefab",
    "/afbouwstudio",
    "/afbouwstudio/kantoor-verbouwen",
    "/afbouwstudio/kantoor-verbouwen-enschede",
    "/afbouwstudio/kantoor-verbouwen-hengelo",
    "/afbouwstudio/kantoor-verbouwen-almelo",
    "/afbouwstudio/kantoor-verbouwen-deventer",
    "/afbouwstudio/kantoor-verbouwen-apeldoorn",
    "/afbouwstudio/kantoor-verbouwen-zwolle",
    "/afbouwstudio/bedrijfspand-verbouwen",
    "/afbouwstudio/horeca-verbouwen",
    "/afbouwstudio/winkel-verbouwen",
    "/afbouwstudio/metal-stud-wanden",
    "/afbouwstudio/systeemplafonds",
    "/wonen-en-verbouwen",
    "/verduurzamen-enschede",
    "/aannemer-enschede",
    "/bouwbedrijf-enschede",
    "/aannemer-twente",
    "/aannemer-oldenzaal",
    "/aannemer-borne",
    "/aannemer-haaksbergen",
    "/aannemer-losser",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: built,
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
    lastModified: built,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const staticRoutes = [
    ...["", "/diensten", "/projecten", "/kennisbank", "/contact"].map((path) => ({
      url: `${site.url}${path}`,
      lastModified: built,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...serviceRoutes,
    ...infoRoutes,
    {
      url: `${site.url}/privacy-policy`,
      lastModified: built,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  const articleRoutes = kennisbank
    .filter((a) => !a.draft)
    .map((a) => ({
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

  return [...staticRoutes, ...articleRoutes, ...projectRoutes];
}
