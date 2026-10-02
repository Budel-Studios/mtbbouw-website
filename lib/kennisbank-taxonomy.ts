/**
 * Indeling van de kennisbank — één bron van waarheid.
 *
 * Elk artikel heeft:
 * - precies één `category`  → het onderwerp: wat wil de lezer weten?
 * - 0–3 `subcategories`     → het bouwdeel: over welk deel van het gebouw gaat het?
 * - een `audience`          → voor thuis, voor bedrijven of allebei
 *
 * In de frontmatter staan alleen de slugs (bijv. `category: verduurzamen`,
 * `subcategories: [daken, vloeren]`). Velite valideert ze tegen deze lijsten,
 * dus een typfout breekt de build in plaats van stilletjes een lege filter op
 * te leveren. Nieuwe categorie of bouwdeel? Voeg hem hier toe — de filter op
 * /kennisbank en de labels op de artikelpagina volgen automatisch.
 */

export type TaxonomyItem = {
  slug: string;
  label: string;
  description: string;
};

export const CATEGORIES = [
  {
    slug: "verduurzamen",
    label: "Verduurzamen",
    description: "Isolatie, glas, energielabel, ISDE en andere subsidies.",
  },
  {
    slug: "technische-keuzes",
    label: "Technische keuzes",
    description:
      "Materialen, bouwmethodes (prefab of traditioneel), levensduur en onderhoud.",
  },
  {
    slug: "kosten-offertes",
    label: "Kosten & offertes",
    description:
      "Prijzen per m², offertes lezen en vergelijken, btw, vaste prijs of meerwerk.",
  },
  {
    slug: "regels-vergunningen",
    label: "Regels & vergunningen",
    description:
      "Omgevingswet, vergunningsvrij bouwen, Wkb, welstand en brandveiligheid.",
  },
  {
    slug: "plannen-aanpak",
    label: "Plannen & aanpak",
    description:
      "Stappenplannen, planning, aannemer kiezen, wonen tijdens de verbouwing, oplevering.",
  },
  {
    slug: "uit-de-praktijk",
    label: "Uit de praktijk",
    description: "Projectverhalen en lessen van de bouwplaats.",
  },
] as const satisfies readonly TaxonomyItem[];

export const SUBCATEGORIES = [
  {
    slug: "daken",
    label: "Daken",
    description: "Plat en schuin dak, dakisolatie, dakkapel, dakbedekking.",
  },
  {
    slug: "kozijnen-glas",
    label: "Kozijnen & glas",
    description: "Kozijnen, deuren, HR++ en triple glas.",
  },
  {
    slug: "gevels",
    label: "Gevels",
    description: "Gevelbekleding, metselwerk, spouwmuur.",
  },
  {
    slug: "vloeren",
    label: "Vloeren",
    description: "Vloerisolatie, kruipruimte, dekvloer, vloerverwarming.",
  },
  {
    slug: "wanden-plafonds",
    label: "Wanden & plafonds",
    description: "Metal stud, systeemplafonds, stucwerk, akoestiek.",
  },
  {
    slug: "fundering-constructie",
    label: "Fundering & constructie",
    description: "Fundering, draagmuren, staal, houtskeletbouw.",
  },
  {
    slug: "installaties-ventilatie",
    label: "Installaties & ventilatie",
    description: "Ventilatie na isoleren, elektra, afzuiging.",
  },
] as const satisfies readonly TaxonomyItem[];

export const AUDIENCES = [
  { slug: "thuis", label: "Voor thuis", description: "Particulieren en woningeigenaren." },
  { slug: "bedrijven", label: "Voor bedrijven", description: "Kantoren, horeca, winkels en bedrijfspanden." },
] as const satisfies readonly TaxonomyItem[];

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];
export type SubcategorySlug = (typeof SUBCATEGORIES)[number]["slug"];
export type AudienceSlug = (typeof AUDIENCES)[number]["slug"];

/** Slug-tuples voor Velite's `s.enum` (vereist een niet-lege tuple). */
export const CATEGORY_SLUGS = CATEGORIES.map((c) => c.slug) as [
  CategorySlug,
  ...CategorySlug[],
];
export const SUBCATEGORY_SLUGS = SUBCATEGORIES.map((c) => c.slug) as [
  SubcategorySlug,
  ...SubcategorySlug[],
];
export const AUDIENCE_SLUGS = AUDIENCES.map((c) => c.slug) as [
  AudienceSlug,
  ...AudienceSlug[],
];

/** Maximaal aantal bouwdelen per artikel — houdt de verzamelpagina's scherp. */
export const MAX_SUBCATEGORIES = 3;

const labelOf = (list: readonly TaxonomyItem[], slug: string) =>
  list.find((i) => i.slug === slug)?.label ?? slug;

export const categoryLabel = (slug: string) => labelOf(CATEGORIES, slug);
export const subcategoryLabel = (slug: string) => labelOf(SUBCATEGORIES, slug);
export const audienceLabel = (slug: string) => labelOf(AUDIENCES, slug);

/** Query-parameters op /kennisbank, zodat elke gefilterde weergave deelbaar is. */
export const FILTER_PARAMS = {
  category: "onderwerp",
  subcategory: "bouwdeel",
  audience: "voor",
} as const;

/** Link naar /kennisbank met één filter actief, bijv. vanuit een artikel of de kluswijzer. */
export function kennisbankFilterHref(
  filter: keyof typeof FILTER_PARAMS,
  slug: string
): string {
  return `/kennisbank?${FILTER_PARAMS[filter]}=${encodeURIComponent(slug)}`;
}
