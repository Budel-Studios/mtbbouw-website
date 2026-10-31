import { portfolio } from "#site/content";
import { allPartners } from "@/lib/partners";
import { toProjectCard } from "@/lib/projects";
import type { ProjectCardData } from "@/components/project/project-cards";

/**
 * Koppelt partners aan projecten in de portfolio. De bron is de portfolio
 * zelf (partners, onderaannemers en leveranciers per project), dus er staat
 * nooit een samenwerking op de site die niet in een project is vastgelegd.
 *
 * Alleen server-side gebruiken: dit importeert de volledige portfolio.
 */
export type PartnerProject = { title: string; permalink: string; location?: string };

function normalize(name: string) {
  return name
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .split(" — ")[0]
    .trim();
}

function sameParty(a: string, b: string) {
  const x = normalize(a);
  const y = normalize(b);
  if (x.length < 4 || y.length < 4) return x === y;
  return x === y || x.startsWith(y) || y.startsWith(x);
}

function namesInProject(p: (typeof portfolio)[number]): string[] {
  return [
    ...p.partners.map((pa) => pa.name),
    ...p.contractors,
    ...p.suppliers,
  ];
}

/** Per partnernaam de projecten waar die partner aan meewerkte. */
export function projectsByPartner(): Record<string, PartnerProject[]> {
  const live = portfolio
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
  const map: Record<string, PartnerProject[]> = {};
  for (const partner of allPartners) {
    const hits = live.filter((p) =>
      namesInProject(p).some((n) => sameParty(n, partner.name))
    );
    if (hits.length > 0) {
      map[partner.name] = hits.map((p) => ({
        title: p.title,
        permalink: p.permalink,
        location: p.location,
      }));
    }
  }
  return map;
}

function joinNames(names: string[]) {
  return names.length < 2
    ? names.join("")
    : `${names.slice(0, -1).join(", ")} en ${names[names.length - 1]}`;
}

/**
 * Projecten met minstens één partner van de partnerlijst, als projectkaart.
 * De omschrijving noemt wie er meebouwde.
 */
export function projectsWithPartners(): ProjectCardData[] {
  return portfolio
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((p) => {
      const partners = allPartners
        .filter((partner) => namesInProject(p).some((n) => sameParty(n, partner.name)))
        .map((partner) => partner.name);
      return { card: toProjectCard(p), partners };
    })
    .filter(({ card, partners }) => partners.length > 0 && card.images.length > 0)
    .map(({ card, partners }) => ({
      ...card,
      description: `Gebouwd met ${joinNames(partners)}.`,
    }));
}
