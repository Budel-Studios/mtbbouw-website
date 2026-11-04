import { portfolio } from "#site/content";
import type { ProjectCardData } from "@/components/project/project-cards";

export type PortfolioProject = (typeof portfolio)[number];

/**
 * Tijdelijke covers (MTB-logo) voor projecten waarvan de foto's nog volgen.
 * Zulke projecten staan achteraan in overzichten en niet in de homepage-slider.
 */
export const PLACEHOLDER_COVERS = [
  "/images/projects/in-uitvoering.jpg",
  "/images/projects/fotos-volgen.jpg",
];

export function hasPlaceholderCover(p: { cover?: string }): boolean {
  return !!p.cover && PLACEHOLDER_COVERS.includes(p.cover);
}

/**
 * Gepubliceerde projecten in weergavevolgorde: uitgelicht werk vooraan,
 * daarbinnen nieuwste eerst (zelfde regel als de oude homepage-carrousel).
 * Projecten met een tijdelijke cover sluiten de rij.
 */
export function publishedProjects(): PortfolioProject[] {
  const live = portfolio
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
  const withPhotos = live.filter((p) => !hasPlaceholderCover(p));
  return [
    ...withPhotos.filter((p) => p.spotlight),
    ...withPhotos.filter((p) => p.featured && !p.spotlight),
    ...withPhotos.filter((p) => !p.featured && !p.spotlight),
    ...live.filter(hasPlaceholderCover),
  ];
}

/** Cover eerst, aangevuld met galerijfoto's (ontdubbeld, max 3). */
export function projectImages(p: PortfolioProject) {
  return [
    ...(p.cover ? [{ src: p.cover, alt: p.coverAlt || p.title, position: p.coverPosition }] : []),
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
