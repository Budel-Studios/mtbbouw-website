/**
 * Dienstpagina-datamodel — overgenomen uit het Lovable-project. Elke dienst
 * (renovatie, uitbouw, kozijnen, ...) levert deze structuur; de gedeelde
 * ServicePageTemplate rendert het in de MTB-huisstijl.
 */
export type SketchIcon =
  | "flat-roof" | "pitched-roof" | "prefab" | "mantelzorg"
  | "wood-frame" | "plastic-frame" | "alu-frame" | "sliding-door"
  | "total-renovation" | "bathroom" | "kitchen" | "sustainability"
  | "detached" | "semi-detached" | "prefab-house" | "kavel"
  | "team" | "price-tag" | "house-life";

interface CtaLink { label: string; href: string }
interface Stat { value: string; label: string }
interface SubServiceCard { sketchIcon: SketchIcon; title: string; desc: string }
interface Pillar { sketchIcon: SketchIcon; title: string; desc: string }
interface FaqItem { q: string; a: string }

export interface ServiceData {
  slug: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogImage?: string;
    focusKeyword: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    subtitle: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    heroImageAlt: string;
    stats: Stat[];
  };
  subServices: { eyebrow: string; h2: string; cards: SubServiceCard[] };
  werkwijze: { eyebrow: string; h2: string; introText: string };
  caseStudy: {
    eyebrow: string; h2: string; location: string; duration: string;
    delivered: string; story: string; didList: string[];
    quote: string; quoteAuthor: string;
  };
  sketchBreak: { bigQuote: string };
  typeWoningen: { eyebrow: string; h2: string; pills: string[] };
  waarom: { eyebrow: string; h2: string; pillars: Pillar[] };
  faq: { eyebrow: string; h2: string; items: FaqItem[]; fullFaqLink: string };
  cta: {
    h2: string; subtitle: string;
    primaryCta: CtaLink; secondaryCta: CtaLink; note: string;
  };
  related: { label: string; href: string }[];
}

export const sharedPillars: Pillar[] = [
  { sketchIcon: "team", title: "Eén aanspreekpunt",
    desc: "Geen onderaannemers-circus. Mathijs of Robbert is jouw vaste contact. Bel, app, mail — je krijgt antwoord." },
  { sketchIcon: "price-tag", title: "Vaste prijs, vaste planning",
    desc: "Wij geven offertes met een vaste prijs en realistische planning. Geen meerwerk-verrassingen tenzij je zelf iets wijzigt." },
  { sketchIcon: "house-life", title: "Bouwen rond jullie leven",
    desc: "Je woont vaak gewoon door tijdens het project. Wij plannen werkzaamheden rond jullie ritme — schoolweken, vakanties, weekenden." },
];
