import { portfolio } from "#site/content";
import type { ProjectCardData } from "@/components/project/project-cards";

export type PortfolioProject = (typeof portfolio)[number];

/**
 * Gepubliceerde projecten in weergavevolgorde: uitgelicht werk vooraan,
 * daarbinnen nieuwste eerst (zelfde regel als de oude homepage-carrousel).
 */
export function publishedProjects(): PortfolioProject[] {
  const live = portfolio
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
  return [...live.filter((p) => p.featured), ...live.filter((p) => !p.featured)];
}

/** Cover eerst, aangevuld met galerijfoto's (ontdubbeld, max 3). */
export function projectImages(p: PortfolioProject) {
  return [
    ...(p.cover ? [{ src: p.cover, alt: p.coverAlt || p.title }] : []),
    ...p.gallery.map((g) => ({ src: g.src, alt: g.alt })),
  ]
    .filter((img, i, arr) => arr.findIndex((x) => x.src === img.src) === i)
    .slice(0, 3);
}

export function toProjectCard(p: PortfolioProject): ProjectCardData {
  return {
    slug: p.slug,
    permalink: p.permalink,
    title: p.title,
    description: p.description,
    category: p.category,
    location: p.location,
    clientType: p.clientType,
    featured: p.featured,
    images: projectImages(p),
  };
}
