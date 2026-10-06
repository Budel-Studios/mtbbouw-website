/**
 * Indeling van de kennisbank — één bron van waarheid.
 *
 * Elk artikel heeft:
 * - precies één `category`  → het onderwerp: wat wil de lezer weten?
 * - 0–3 `subcategories`     → het bouwdeel: over welk deel van het gebouw gaat het?
 * - een `audience`          → voor thuis, voor bedrijven of allebei
 * - optioneel een `series`  → de redactionele serie waar het artikel bij hoort
 *
 * In de frontmatter staan alleen de slugs (bijv. `category: verduurzamen`,
 * `subcategories: [daken, vloeren]`). Velite valideert ze tegen deze lijsten,
 * dus een typfout breekt de build in plaats van stilletjes een lege filter op
 * te leveren. Nieuwe categorie of bouwdeel? Voeg hem hier toe — de filter op
 * /kennisbank, de hubpagina's en de labels op de artikelpagina volgen
 * automatisch.
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

export const CATEGORIES = [
  {
    slug: "verduurzamen",
    label: "Verduurzamen",
    description: "Isolatie, glas, energielabel, ISDE en andere subsidies.",
    metaDescription:
      "Isoleren, HR++ of triple glas en ISDE-subsidie: praktische artikelen over je huis verduurzamen, van MTB Bouw uit Enschede.",
    intro: [
      "Verduurzamen begint bij de schil van je huis: dak, gevel, vloer en glas. Pas als die goed geïsoleerd zijn, haal je echt het meeste uit een warmtepomp of andere installatie. In deze artikelen leggen we uit welke maatregelen het meeste opleveren, in welke volgorde je ze aanpakt en hoe je subsidie zoals de ISDE aanvraagt.",
      "Ons standpunt: verduurzamen is het voordeligst als je het combineert met een verbouwing. De steiger staat er dan al en het dak of de vloer ligt toch al open. Daarom nemen we isolatie standaard mee in ons advies, bij klussen in Enschede en de rest van Twente.",
    ],
    links: [{ href: "/verduurzamen-enschede", label: "Woning verduurzamen in Enschede" }],
  },
  {
    slug: "technische-keuzes",
    label: "Technische keuzes",
    description:
      "Materialen, bouwmethodes (prefab of traditioneel), levensduur en onderhoud.",
    metaDescription:
      "Hout, kunststof of aluminium? Prefab of traditioneel? Eerlijke uitleg over materialen en bouwmethodes van het team van MTB Bouw.",
    intro: [
      "Bij elke verbouwing maak je technische keuzes die je jarenlang merkt: het materiaal van je kozijnen, prefab of traditioneel bouwen, een plat of schuin dak, het soort gevelbekleding. In deze artikelen zetten we de opties naast elkaar, met de voor- en nadelen die we in de praktijk tegenkomen.",
      "We zijn niet gebonden aan één materiaal of systeem. We plaatsen hout, kunststof en aluminium en bouwen zowel traditioneel als prefab. Daardoor kunnen we eerlijk adviseren wat bij jouw huis past.",
    ],
    links: [
      { href: "/bouwmethodes", label: "Bouwmethodes" },
      { href: "/kozijnen", label: "Kozijnen" },
    ],
  },
  {
    slug: "kosten-offertes",
    label: "Kosten & offertes",
    description:
      "Prijzen per m², offertes lezen en vergelijken, btw, vaste prijs of meerwerk.",
    metaDescription:
      "Wat kost een verbouwing, hoe lees je een offerte en wat zijn stelposten en meerwerk? Duidelijke uitleg over bouwkosten van MTB Bouw.",
    intro: [
      "Bouwkosten zijn lastig te vergelijken. De ene offerte rekent met stelposten, de andere met een vaste prijs, en wat er níet in staat is vaak net zo belangrijk als wat er wel in staat. In deze artikelen leggen we uit wat klussen ongeveer kosten en waar je op let als je offertes vergelijkt.",
      "Wij werken met een vaste prijs vooraf, zodat je niet voor verrassingen komt te staan. Prijzen in onze artikelen zijn altijd indicaties: je echte prijs hangt af van je woning en je wensen, en die bepalen we na een intake op locatie.",
    ],
    links: [{ href: "/hoe-wij-werken", label: "Zo werken wij" }],
  },
  {
    slug: "regels-vergunningen",
    label: "Regels & vergunningen",
    description:
      "Omgevingswet, vergunningsvrij bouwen, Wkb, welstand en brandveiligheid.",
    metaDescription:
      "Vergunningsvrij bouwen, de Omgevingswet en het omgevingsplan van je gemeente: heldere uitleg over bouwregels van MTB Bouw uit Enschede.",
    intro: [
      "Mag je zonder vergunning aanbouwen? Wat zegt het omgevingsplan van je gemeente over je voorgevel? Sinds de Omgevingswet op 1 januari 2024 is ingegaan, werken veel bouwregels anders dan je misschien gewend bent. In deze artikelen leggen we de regels uit in gewone taal.",
      "Regels kunnen per gemeente verschillen, ook binnen Twente. Bij elke klus kijken we mee of een vergunning nodig is en wat er geregeld moet worden. Twijfel je? Check het Omgevingsloket of vraag het ons tijdens de intake.",
    ],
    links: [{ href: "/hoe-wij-werken", label: "Zo werken wij" }],
  },
  {
    slug: "plannen-aanpak",
    label: "Plannen & aanpak",
    description:
      "Stappenplannen, planning, aannemer kiezen, wonen tijdens de verbouwing, oplevering.",
    metaDescription:
      "Stappenplannen, doorlooptijden en praktische tips om je verbouwing, aanbouw of bedrijfspand goed aan te pakken. Van het team van MTB Bouw.",
    intro: [
      "Een goede verbouwing begint ver voor de eerste schop in de grond. In deze artikelen lees je hoe je een klus aanpakt: van het eerste idee en de planning tot de oplevering. Voor woningen, maar ook voor kantoren, winkels en horeca.",
      "We schrijven ze vanuit onze eigen praktijk in Enschede en de rest van Twente: wat goed werkt, waar het vaak misgaat en hoe je dat voorkomt. Wil je meteen sparren over jouw plan? We komen graag langs voor een intake op locatie.",
    ],
    links: [
      { href: "/wonen-en-verbouwen", label: "Wonen & Verbouwen" },
      { href: "/afbouwstudio", label: "Afbouwstudio (zakelijk)" },
    ],
  },
  {
    slug: "uit-de-praktijk",
    label: "Uit de praktijk",
    description: "Projectverhalen en lessen van de bouwplaats.",
    metaDescription:
      "Projectverhalen en lessen van de bouwplaats: zo pakten we echte klussen in Twente en daarbuiten aan. Van het team van MTB Bouw.",
    intro: [
      "In deze artikelen nemen we je mee naar de bouwplaats. Hoe pakten we een klus aan, waar liepen we tegenaan en wat zouden we de volgende keer anders doen? Niet alleen de mooie eindfoto, maar het verhaal erachter.",
      "Meer van ons werk zien? Op de projectenpagina vind je verbouwingen, uitbouwen en zakelijke projecten uit Enschede, Twente en daarbuiten.",
    ],
    links: [{ href: "/projecten", label: "Alle projecten" }],
  },
] as const satisfies readonly TaxonomyItem[];

export const SUBCATEGORIES = [
  {
    slug: "daken",
    label: "Daken",
    description: "Plat en schuin dak, dakisolatie, dakkapel, dakbedekking.",
    metaDescription:
      "Plat of schuin dak, dakisolatie en dakbedekking: artikelen over alles wat met je dak te maken heeft, van MTB Bouw uit Enschede.",
    intro: [
      "Via het dak kan veel warmte verloren gaan, en bij een uitbouw liggen er veel keuzes. In deze artikelen gaat het over dakisolatie, plat of schuin bouwen, dakbedekking en hoe je je dak meeneemt in een verbouwing.",
      "Ga je toch al aan de slag met je dak, voor een uitbouw of renovatie? Dan is dat het voordeligste moment om het ook meteen goed te isoleren.",
    ],
    links: [
      { href: "/aanbouw-uitbouw", label: "Aanbouw & uitbouw" },
      { href: "/verduurzamen-enschede", label: "Verduurzamen" },
    ],
  },
  {
    slug: "kozijnen-glas",
    label: "Kozijnen & glas",
    description: "Kozijnen, deuren, HR++ en triple glas.",
    metaDescription:
      "Hout, kunststof of aluminium kozijnen, HR++ of triple glas en wanneer je moet vervangen: alles over kozijnen en glas van MTB Bouw.",
    intro: [
      "Kozijnen bepalen hoe je huis eruitziet, hoe warm het is en hoeveel onderhoud je hebt. In deze artikelen lees je alles over de keuzes die je maakt: het materiaal, het glas, de afstandhouder, de montage en het moment om te vervangen.",
      "Kozijnen zijn een vak apart. Daarom hebben we er met De Kozijnstudio een eigen tak voor. We plaatsen hout, kunststof en aluminium, in Enschede en de rest van Twente.",
    ],
    links: [{ href: "/kozijnen", label: "Kozijnen" }],
  },
  {
    slug: "gevels",
    label: "Gevels",
    description: "Gevelbekleding, metselwerk, spouwmuur.",
    metaDescription:
      "Gevelbekleding, spouwmuren, steenstrips of baksteen: artikelen over de gevel van je huis of uitbouw, van MTB Bouw uit Enschede.",
    intro: [
      "De gevel is het visitekaartje van je huis, en ook een belangrijk deel van de isolatie. In deze artikelen gaat het over de opbouw van een spouwmuur, gevelisolatie en de keuze voor gevelbekleding: hout, kunststof, composiet, steenstrips of baksteen.",
      "Bij een uitbouw of renovatie zoeken we vaak naar een gevel die aansluit bij de rest van het huis, of er juist bewust mee contrasteert. We zetten de opties eerlijk naast elkaar.",
    ],
    links: [{ href: "/aanbouw-uitbouw", label: "Aanbouw & uitbouw" }],
  },
  {
    slug: "vloeren",
    label: "Vloeren",
    description: "Vloerisolatie, kruipruimte, dekvloer, vloerverwarming.",
    metaDescription:
      "Vloerisolatie, kruipruimte, dekvloer en vloerverwarming: artikelen over de vloer van je huis of uitbouw, van MTB Bouw uit Enschede.",
    intro: [
      "Koude voeten en een vochtige kruipruimte: de vloer is een onderschat deel van je huis. In deze artikelen lees je over vloerisolatie, de kruipruimte, dekvloeren en vloerverwarming, en wanneer welke aanpak zinvol is.",
      "Een goed geïsoleerde vloer scheelt niet alleen energie. Je merkt het ook meteen aan je comfort.",
    ],
    links: [{ href: "/verduurzamen-enschede", label: "Verduurzamen" }],
  },
  {
    slug: "wanden-plafonds",
    label: "Wanden & plafonds",
    description: "Metal stud, systeemplafonds, stucwerk, akoestiek.",
    metaDescription:
      "Metal stud wanden, systeemplafonds, stucwerk en akoestiek: artikelen over wanden en plafonds in woningen en bedrijfspanden van MTB Bouw.",
    intro: [
      "Wanden en plafonds bepalen de indeling, de akoestiek en de uitstraling van een ruimte. In deze artikelen gaat het over metal stud wanden, systeemplafonds, stucwerk en akoestiek, in woningen en vooral ook in kantoren, winkels en horeca.",
      "Met Afbouwstudio bouwen we bedrijfsruimtes af van casco tot turn-key. Hier delen we wat we daarbij leren.",
    ],
    links: [
      { href: "/afbouwstudio/metal-stud-wanden", label: "Metal stud wanden" },
      { href: "/afbouwstudio/systeemplafonds", label: "Systeemplafonds" },
    ],
  },
  {
    slug: "fundering-constructie",
    label: "Fundering & constructie",
    description: "Fundering, draagmuren, staal, houtskeletbouw.",
    metaDescription:
      "Fundering, draagmuren, staal en houtskeletbouw: artikelen over de constructie van je uitbouw of verbouwing, van MTB Bouw uit Enschede.",
    intro: [
      "Alles wat je later niet meer ziet, moet vanaf het begin kloppen. In deze artikelen gaat het over de fundering van een uitbouw, het weghalen van draagmuren, staalconstructies en het verschil tussen houtskeletbouw en traditioneel bouwen.",
      "Constructieve keuzes vragen om een berekening door een constructeur. We leggen uit waarom, en wat je zelf moet weten voordat je begint.",
    ],
    links: [
      { href: "/aanbouw-uitbouw", label: "Aanbouw & uitbouw" },
      { href: "/prefab", label: "Prefab bouwen" },
    ],
  },
  {
    slug: "installaties-ventilatie",
    label: "Installaties & ventilatie",
    description: "Ventilatie na isoleren, elektra, afzuiging.",
    metaDescription:
      "Ventilatie na het isoleren, elektra en afzuiging: artikelen over installaties bij verbouwingen en bedrijfspanden, van MTB Bouw uit Enschede.",
    intro: [
      "Een goed geïsoleerd huis heeft goede ventilatie nodig, en bij een verbouwing of nieuwe bedrijfsruimte komt er altijd installatiewerk bij kijken. In deze artikelen gaat het over ventilatie, elektra en afzuiging.",
      "Het installatiewerk nemen we mee in dezelfde planning als de rest van de verbouwing, zodat alles op elkaar aansluit.",
    ],
    links: [
      { href: "/verduurzamen-enschede", label: "Verduurzamen" },
      { href: "/afbouwstudio/bedrijfspand-verbouwen", label: "Bedrijfspand verbouwen" },
    ],
  },
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
    pillar: "offertes-aannemer-vergelijken",
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
 * Een hubpagina (/kennisbank/onderwerp/… of /kennisbank/bouwdeel/…) bestaat
 * pas vanaf dit aantal gepubliceerde artikelen. Een hub met één artikel is
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

/** Pad van een hubpagina. Of de hub bestaat, bepaalt lib/kennisbank.ts. */
export const HUB_PATH = {
  category: "/kennisbank/onderwerp",
  subcategory: "/kennisbank/bouwdeel",
} as const;
