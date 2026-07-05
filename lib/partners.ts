/**
 * Regionale partners — vaste vakmensen, leveranciers en samenwerkingen van
 * MTB Bouw in Twente. Overgenomen uit het Lovable-project (samen-bouwen).
 * Externe links zijn dofollow backlinks (openen in nieuw tabblad).
 */
type PartnerCategory =
  | "bouwbedrijven"
  | "vakmensen"
  | "installatie"
  | "schilders"
  | "dakwerk"
  | "stukadoor"
  | "bouwmaterialen"
  | "gevels"
  | "tuin"
  | "interieur"
  | "beheer"
  | "overig";

export type Partner = {
  name: string;
  category: PartnerCategory;
  description: string;
  url?: string;
  rel?: string;
  /** Tegelbreedte in metro-grid (1 = normaal, 2 = dubbel). */
  size?: 1 | 2;
  /** Grote highlight-tegel (2×2) — voor onze kernpartners. */
  featured?: boolean;
  /** Regio-label (bv. "Enschede", "Twente"). */
  region?: string;
};

export const partnerCategories: Record<PartnerCategory, string> = {
  bouwbedrijven: "Bouwbedrijven",
  vakmensen: "Vakmensen & Onderaannemers",
  installatie: "Installatie (E & W)",
  schilders: "Schilders",
  dakwerk: "Dakwerk",
  stukadoor: "Stukadoor & Afbouw",
  bouwmaterialen: "Bouwmaterialen",
  gevels: "Gevels & Kozijnen",
  tuin: "Tuin & Buitenruimte",
  interieur: "Interieur",
  beheer: "VvE & Beheer",
  overig: "Overige Partners",
};

/* ---- Buckets (tabs) ---- */
export type Bucket = "onderaannemers" | "toeleveranciers" | "partners";

export const bucketMeta: Record<Bucket, { title: string; intro: string }> = {
  onderaannemers: {
    title: "Onderaannemers & vakmensen",
    intro:
      "Vaste ZZP'ers en gespecialiseerde vakmensen waarmee we structureel bouwen.",
  },
  toeleveranciers: {
    title: "Toeleveranciers & bouwmaterialen",
    intro:
      "Leveranciers van bouwmaterialen, kozijnen en gevels — snel en betrouwbaar op de bouw.",
  },
  partners: {
    title: "Partners",
    intro:
      "Vaste samenwerkingspartners rondom interieur, tuin, beheer en aanverwante diensten.",
  },
};

export const categoryToBucket: Record<PartnerCategory, Bucket> = {
  vakmensen: "onderaannemers",
  installatie: "onderaannemers",
  schilders: "onderaannemers",
  dakwerk: "onderaannemers",
  stukadoor: "onderaannemers",
  bouwmaterialen: "toeleveranciers",
  gevels: "toeleveranciers",
  bouwbedrijven: "partners",
  tuin: "partners",
  interieur: "partners",
  beheer: "partners",
  overig: "partners",
};

const craftsman: Partner[] = [
  {
    name: "RN Afbouw (Rick)",
    category: "vakmensen",
    description:
      "Vaste afbouwpartner van MTB, gespecialiseerd in houtwerk en fijne afbouw.",
    url: "https://www.instagram.com/RNafbouw/",
    region: "Twente",
    featured: true,
    size: 2,
  },
  {
    name: "Niels — Timmerwerk & Installatie",
    category: "vakmensen",
    description:
      "Vaste ZZP-timmerman met installatie-achtergrond. Denkt mee, werkt door.",
    region: "Enschede",
    featured: true,
  },
];

const suppliers: Partner[] = [
  {
    name: "BMN Bouwmaterialen",
    category: "bouwmaterialen",
    description:
      "Onze vaste leverancier van bouwmaterialen — betrouwbaar en snel op de bouw.",
    url: "https://www.bmn.nl/",
    region: "Twente",
    size: 2,
  },
  {
    name: "Gevelaar",
    category: "gevels",
    description: "Partner voor gevels en kozijnen op onze grotere projecten.",
    url: "https://gevelaar.nl",
    region: "Twente",
  },
  {
    name: "De Kozijnstudio",
    category: "gevels",
    description:
      "All-in en transparante kozijnvervanging. Onze kennispartner voor advies over glas en isolatie.",
    url: "https://dekozijnstudio.nl",
    region: "Oost-Nederland",
    featured: true,
  },
  {
    name: "Meuleman Hoveniers",
    category: "tuin",
    description:
      "Voor tuinaanleg, bestrating en buitenruimte rondom onze projecten.",
    url: "https://www.meulemanhoveniers.nl/",
    region: "Twente",
  },
  {
    name: "Zebrano Studio",
    category: "interieur",
    description:
      "Ons zusterlabel voor interieur — meubels, styling en afwerking van binnen.",
    url: "https://zebranostudio.nl",
    region: "Enschede",
    featured: true,
    size: 2,
  },
  {
    name: "VvE Beheer Twente",
    category: "beheer",
    description: "VvE- en vastgoedbeheer in de regio Twente.",
    url: "https://vvebeheer-twente.nl/",
    region: "Twente",
  },
  {
    name: "Dukato",
    category: "overig",
    description: "Vaste partner in de bouwregio Twente.",
    url: "https://dukato.nl",
    region: "Twente",
  },
  {
    name: "Kuality",
    category: "overig",
    description: "Vaste partner in de bouwregio Twente.",
    url: "https://kuality.nl/",
    region: "Twente",
  },
];

export const allPartners: Partner[] = [...craftsman, ...suppliers];
