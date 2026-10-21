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

/**
 * Vaste projectnummers op uitvoeringsdatum (oudste = 01), zodat een nummer
 * niet verspringt als er een nieuw project bijkomt.
 */
function projectNumbers(): Map<string, string> {
  const chronological = portfolio
    .filter((p) => !p.draft)
    .sort((a, b) => a.date.localeCompare(b.date) || a.slug.localeCompare(b.slug));
  return new Map(
    chronological.map((p, i) => [p.slug, String(i + 1).padStart(2, "0")])
  );
}

export function projectNumber(slug: string): string {
  return projectNumbers().get(slug) ?? "";
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
    number: projectNumber(p.slug),
    category: p.category,
    location: p.location,
    clientType: p.clientType,
    featured: p.featured,
    images: projectImages(p),
  };
}
