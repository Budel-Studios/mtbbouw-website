import { portfolio } from "#site/content";
import { allPartners } from "@/lib/partners";

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

/** Projecten met minstens één partner van de partnerlijst, met die partners. */
export function projectsWithPartners() {
  return portfolio
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((p) => ({
      title: p.title,
      permalink: p.permalink,
      location: p.location,
      partners: allPartners
        .filter((partner) => namesInProject(p).some((n) => sameParty(n, partner.name)))
        .map((partner) => partner.name),
    }))
    .filter((p) => p.partners.length > 0);
}
