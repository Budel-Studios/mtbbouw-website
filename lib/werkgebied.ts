import { twenteMap } from "@/lib/twente-map-data";

/**
 * Werkgebied op de Twente-kaart. Gemeenten met een eigen stadspagina linken
 * daarheen; de overige Twentse gemeenten linken naar het overzicht van heel
 * Twente (geen dunne pagina's per gemeente).
 */
export type MapPlace = {
  slug: string;
  name: string;
  href: string;
  /** Korte regel onder de naam in de lijst. */
  tagline: string;
  /** Heeft deze gemeente een eigen stadspagina? */
  hasPage: boolean;
  /** Plaats van de stip op de kaart (viewBox-coördinaten). */
  town: [number, number];
};

const pages: Record<string, { tagline: string }> = {
  enschede: { tagline: "Onze thuisbasis" },
  hengelo: { tagline: "Hier groeiden we op" },
  almelo: { tagline: "Van veranda tot verbouwing" },
  oldenzaal: { tagline: "Vakwerk met oog voor karakter" },
  borne: { tagline: "Woningen & bedrijfspanden" },
  haaksbergen: { tagline: "Verbouw & verduurzamen" },
  losser: { tagline: "Uitbouw & renovatie" },
};

export const mapPlaces: MapPlace[] = twenteMap.municipalities.map((m) => {
  const page = pages[m.slug];
  return {
    slug: m.slug,
    name: m.name,
    href: page ? `/aannemer-${m.slug}` : "/aannemer-twente",
    tagline: page?.tagline ?? "Werkgebied Twente",
    hasPage: Boolean(page),
    town: m.town,
  };
});

/** Alleen de plaatsen met een eigen pagina, in kaartvolgorde. */
export const mapPlacesWithPage = mapPlaces.filter((p) => p.hasPage);
