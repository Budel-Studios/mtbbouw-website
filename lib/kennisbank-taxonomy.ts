/**
 * Indeling van de Bouwgids — één bron van waarheid.
 *
 * Elk artikel heeft:
 * - precies één `category`  → een van de zes hoofdcategorieën van De Bouwgids
 * - 0–3 `subcategories`     → bouwdelen. Geen eigen pagina's meer: ze sturen
 *                             alleen welke artikelen op dienst- en stadspagina's
 *                             verschijnen en wat "Lees ook" aanraadt.
 * - een `audience`          → voor thuis, voor bedrijven of allebei
 * - optioneel een `series`  → de redactionele serie waar het artikel bij hoort
 *
 * In de frontmatter staan alleen de slugs (bijv. `category: bouwvoorbereiding`).
 * Velite valideert ze tegen deze lijsten, dus een typfout breekt de build in
 * plaats van stilletjes een lege filter op te leveren.
 *
 * Dit bestand is pure data: het wordt geïmporteerd door velite.config.ts,
 * server-componenten én de client-filter. Geen imports van site-content hier.
 */

export type TaxonomyLink = { href: string; label: string };

export type TaxonomyItem = {
  slug: string;
  label: string;
  description: string;
  /** Meta description van de hubpagina (≤ 160 tekens). */
  metaDescription?: string;
  /** Intro van de hubpagina, één string per alinea. */
  intro?: readonly string[];
  /** Interne links onder de intro van de hubpagina. */
  links?: readonly TaxonomyLink[];
};

/**
 * De zes hoofdcategorieën uit de masterinstructie (november 2026). Een
 * categorie krijgt pas een eigen pagina vanaf MIN_HUB_ARTICLES artikelen, dus
 * een lege categorie levert nooit een dunne pagina op.
 */
export const CATEGORIES = [
  {
    slug: "bouwvoorbereiding",
    label: "Bouwvoorbereiding",
    description:
      "Oriëntatie, planning, budget, offertes, vergunningen, subsidies en financiering.",
    metaDescription:
      "Verbouwing voorbereiden: budget, offertes vergelijken, vergunningen, ISDE en financiering. Praktische uitleg van MTB Bouw uit Enschede.",
    intro: [
      "Een goede verbouwing begint ruim voor de eerste schop in de grond. Wat mag het kosten, hoe vergelijk je offertes, heb je een vergunning nodig en welke subsidie kun je krijgen? In deze artikelen zetten we het op een rij, zodat je goed voorbereid aan je plannen begint.",
      "Regels en subsidies veranderen geregeld. We houden deze artikelen bij, en twijfel je over jouw situatie, dan kijken we graag mee tijdens een intake op locatie.",
    ],
    links: [
      { href: "/hoe-wij-werken", label: "Zo werken wij" },
      { href: "/verduurzamen", label: "Verduurzamen" },
    ],
  },
  {
    slug: "bouw-constructie",
    label: "Bouw & constructie",
    description:
      "Slopen, funderingen, draagmuren, aanbouwen, uitbouwen, dakconstructies en isolatie.",
    metaDescription:
      "Aanbouw, uitbouw, fundering, draagmuren en houtskeletbouw: heldere uitleg over constructie en bouwmethodes van MTB Bouw uit Enschede.",
    intro: [
      "Alles wat je later niet meer ziet, moet vanaf het begin kloppen. In deze artikelen gaat het over de constructie: van fundering en draagmuren tot een uitbouw in houtskeletbouw of traditioneel metselwerk.",
      "We bouwen zowel traditioneel als prefab, in Enschede en de rest van Twente. Daardoor kunnen we de opties eerlijk naast elkaar zetten.",
    ],
    links: [
      { href: "/aanbouw-uitbouw", label: "Aanbouw & uitbouw" },
      { href: "/prefab", label: "Prefab bouwen" },
      { href: "/bouwmethodes", label: "Bouwmethodes" },
    ],
  },
  {
    slug: "installaties-energie",
    label: "Installaties & energie",
    description:
      "Vloerverwarming, warmtepompen, elektra, ventilatie, riolering en verduurzaming.",
    metaDescription:
      "Vloerverwarming, ventilatie, warmtepomp en verduurzamen: praktische uitleg over installaties bij je verbouwing, van MTB Bouw uit Enschede.",
    intro: [
      "Een verbouwing is het moment om installaties goed te regelen. In deze artikelen lees je over vloerverwarming, ventilatie, elektra en de stappen naar een duurzamer huis.",
      "Het installatiewerk nemen we mee in dezelfde planning als de rest van de verbouwing, zodat alles op elkaar aansluit.",
    ],
    links: [
      { href: "/verduurzamen", label: "Verduurzamen" },
      { href: "/verbouwing", label: "Verbouwing & renovatie" },
    ],
  },
  {
    slug: "materialen-keuzes",
    label: "Materialen & keuzes",
    description:
      "Kozijnen, glas, gevelbekleding, dakbedekking, deuren, wanden, vloeren en tegels.",
    metaDescription:
      "Hout, kunststof of aluminium? HR++ of triple glas? Eerlijke vergelijkingen van materialen voor je verbouwing, van MTB Bouw uit Enschede.",
    intro: [
      "Bij elke verbouwing kies je materialen die je jarenlang ziet en merkt: kozijnen, glas, gevelbekleding, vloeren. In deze artikelen zetten we de opties naast elkaar, met de voor- en nadelen die we in de praktijk tegenkomen.",
      "We zijn niet gebonden aan één materiaal. We plaatsen hout, kunststof en aluminium, dus we kunnen eerlijk adviseren wat bij jouw huis past.",
    ],
    links: [{ href: "/kozijnen", label: "Kozijnen" }],
  },
  {
    slug: "tijdens-na-de-bouw",
    label: "Tijdens & na de bouw",
    description:
      "Bouwplanning, communicatie, meerwerk, kwaliteit, oplevering, garantie en onderhoud.",
    metaDescription:
      "Wat gebeurt er tijdens de bouw en daarna? Planning, meerwerk, oplevering, garantie en onderhoud, uitgelegd door MTB Bouw uit Enschede.",
    intro: [
      "Als de bouw begint, komen er nieuwe vragen. Hoe verloopt de planning, wat als er meerwerk is en waar let je op bij de oplevering? En als alles klaar is: hoe houd je het mooi?",
      "We schrijven deze artikelen vanuit wat we op de bouwplaats meemaken: wat goed werkt, waar het vaak misgaat en hoe je dat voorkomt.",
    ],
    links: [{ href: "/hoe-wij-werken", label: "Zo werken wij" }],
  },
  {
    slug: "huizen-door-de-jaren",
    label: "Huizen door de jaren",
    description:
      "Per bouwperiode: constructie, materialen, veelvoorkomende gebreken, isolatie en passende renovaties.",
    metaDescription:
      "Een huis uit 1900, de jaren 30, 50 of 70? Wat je per bouwperiode tegenkomt en welke renovatie past. Een serie van MTB Bouw uit Enschede.",
    intro: [
      "Elke bouwperiode heeft z'n eigen manier van bouwen. Een jaren-30-woning vraagt iets anders dan een rijtjeshuis uit de jaren 70. In deze serie lopen we de periodes langs: hoe er toen werd gebouwd, welke materialen je tegenkomt, wat vaak speelt en welke renovaties passen.",
      "Het zijn kenmerken die vaak voorkomen. Wat er in jouw huis zit, zie je pas bij onderzoek op locatie.",
    ],
    links: [
      { href: "/verbouwing", label: "Verbouwing & renovatie" },
      { href: "/verduurzamen", label: "Verduurzamen" },
    ],
  },
] as const satisfies readonly TaxonomyItem[];

/**
 * Bouwdelen. Geen eigen pagina's (zie de masterinstructie: zes categorieën,
 * geen ingewikkelde subcategorieën). Ze koppelen artikelen aan de juiste
 * dienst- en stadspagina's via KennisbankBlock en sturen "Lees ook".
 */
export const SUBCATEGORIES = [
  { slug: "daken", label: "Daken", description: "Plat en schuin dak, dakisolatie, dakkapel, dakbedekking." },
  { slug: "kozijnen-glas", label: "Kozijnen & glas", description: "Kozijnen, deuren, HR++ en triple glas." },
  { slug: "gevels", label: "Gevels", description: "Gevelbekleding, metselwerk, spouwmuur." },
  { slug: "vloeren", label: "Vloeren", description: "Vloerisolatie, kruipruimte, dekvloer, vloerverwarming." },
  { slug: "wanden-plafonds", label: "Wanden & plafonds", description: "Metal stud, systeemplafonds, stucwerk, akoestiek." },
  { slug: "fundering-constructie", label: "Fundering & constructie", description: "Fundering, draagmuren, staal, houtskeletbouw." },
  { slug: "installaties-ventilatie", label: "Installaties & ventilatie", description: "Ventilatie na isoleren, elektra, afzuiging." },
] as const satisfies readonly TaxonomyItem[];

export const AUDIENCES = [
  { slug: "thuis", label: "Voor thuis", description: "Particulieren en woningeigenaren." },
  { slug: "bedrijven", label: "Voor bedrijven", description: "Kantoren, horeca, winkels en bedrijfspanden." },
] as const satisfies readonly TaxonomyItem[];

/**
 * Redactionele series. `pillar` is de slug van het overzichtsartikel van de
 * serie; dat staat in de serienavigatie altijd bovenaan.
 */
export const SERIES = [
  {
    slug: "kozijnen",
    label: "Kozijnen",
    pillar: "kozijnen-kiezen-hout-kunststof-aluminium",
  },
  {
    slug: "uitbouw",
    label: "Uitbouw: houtskeletbouw of traditioneel",
    pillar: "uitbouw-houtskeletbouw-of-traditioneel",
  },
  {
    slug: "offertes-prijzen",
    label: "Offertes & prijzen",
    pillar: "offertes-vergelijken-verbouwing",
  },
  {
    slug: "klus-plannen",
    label: "Je klus plannen",
    pillar: "verbouwing-plannen-stappenplan",
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]["slug"];
export type SubcategorySlug = (typeof SUBCATEGORIES)[number]["slug"];
export type AudienceSlug = (typeof AUDIENCES)[number]["slug"];
export type SeriesSlug = (typeof SERIES)[number]["slug"];

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
export const SERIES_SLUGS = SERIES.map((s) => s.slug) as [
  SeriesSlug,
  ...SeriesSlug[],
];

/** Maximaal aantal bouwdelen per artikel — houdt de verzamelpagina's scherp. */
export const MAX_SUBCATEGORIES = 3;

/**
 * Een categoriepagina (/kennisbank/onderwerp/…) bestaat pas vanaf dit aantal
 * gepubliceerde artikelen. Een hub met één artikel is
 * een dunne pagina die alleen het artikel zelf herhaalt.
 */
export const MIN_HUB_ARTICLES = 2;

/** SEO-grenzen; de build waarschuwt als een artikel erboven komt. */
export const TITLE_SUFFIX = " | MTB Bouw";
export const MAX_TITLE_TAG = 60;
export const MAX_META_DESCRIPTION = 160;

const labelOf = (list: readonly TaxonomyItem[], slug: string) =>
  list.find((i) => i.slug === slug)?.label ?? slug;

export const categoryLabel = (slug: string) => labelOf(CATEGORIES, slug);
export const subcategoryLabel = (slug: string) => labelOf(SUBCATEGORIES, slug);
export const audienceLabel = (slug: string) => labelOf(AUDIENCES, slug);
export const seriesLabel = (slug: string) =>
  SERIES.find((s) => s.slug === slug)?.label ?? slug;

/** Query-parameters op /kennisbank, zodat elke gefilterde weergave deelbaar is. */
export const FILTER_PARAMS = {
  category: "onderwerp",
  subcategory: "bouwdeel",
  audience: "voor",
} as const;

/** Link naar /kennisbank met één filter actief, bijv. vanuit de kluswijzer. */
export function kennisbankFilterHref(
  filter: keyof typeof FILTER_PARAMS,
  slug: string
): string {
  return `/kennisbank?${FILTER_PARAMS[filter]}=${encodeURIComponent(slug)}`;
}

/** Pad van een categoriepagina. Of die bestaat, bepaalt lib/kennisbank.ts. */
export const HUB_PATH = {
  category: "/kennisbank/onderwerp",
} as const;

/**
 * Oude indeling (tot november 2026) → nieuwe categoriepagina. Gebruikt voor
 * de 301-redirects in next.config.ts, zodat bestaande links blijven werken.
 */
export const LEGACY_HUB_REDIRECTS: readonly { from: string; to: string }[] = [
  { from: "/kennisbank/onderwerp/plannen-aanpak", to: "/kennisbank/onderwerp/bouwvoorbereiding" },
  { from: "/kennisbank/onderwerp/kosten-offertes", to: "/kennisbank/onderwerp/bouwvoorbereiding" },
  { from: "/kennisbank/onderwerp/regels-vergunningen", to: "/kennisbank/onderwerp/bouwvoorbereiding" },
  { from: "/kennisbank/onderwerp/technische-keuzes", to: "/kennisbank/onderwerp/materialen-keuzes" },
  { from: "/kennisbank/onderwerp/verduurzamen", to: "/kennisbank" },
  { from: "/kennisbank/onderwerp/uit-de-praktijk", to: "/kennisbank" },
  { from: "/kennisbank/bouwdeel/kozijnen-glas", to: "/kennisbank/onderwerp/materialen-keuzes" },
  { from: "/kennisbank/bouwdeel/fundering-constructie", to: "/kennisbank/onderwerp/bouw-constructie" },
  { from: "/kennisbank/bouwdeel/:slug", to: "/kennisbank" },
];
