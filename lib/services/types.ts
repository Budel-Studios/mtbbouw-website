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
interface SubServiceCard {
  sketchIcon: SketchIcon; title: string; desc: string;
  /** Alleen een link als er een echte vervolgpagina is (nooit naar /contact). */
  href?: string;
}
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
    /** Alleen echte quotes van echte projecten. Leeg laten mag. */
    quote?: string; quoteAuthor?: string;
    /** Alt-tekst van de casefoto (valt terug op de hero-alt). */
    imageAlt?: string;
    /** Link naar de projectpagina in de portfolio. */
    href?: string;
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
  /** Echte projecten uit de portfolio (slugs), getoond als "werk van ons". */
  projects?: { eyebrow: string; h2: string; slugs: string[] };
  /** Partners die bij deze dienst meewerken (namen uit lib/partners.ts). */
  partners?: { h2: string; intro: string; names: string[] };
  /** Werkgebied: links naar de stadspagina's met de dienst in de linktekst. */
  werkgebied?: { label: string; intro: string };
}

export const sharedPillars: Pillar[] = [
  { sketchIcon: "team", title: "Eén aanspreekpunt",
    desc: "Geen onderaannemers-circus. Mathijs of Robbert is jouw vaste contact. Bel, app, mail — je krijgt antwoord." },
  { sketchIcon: "price-tag", title: "Heldere offerte, eerlijke planning",
    desc: "Een gespecificeerde offerte en een realistische planning. Meerwerk voeren we alleen uit na jouw akkoord." },
  { sketchIcon: "house-life", title: "Bouwen rond jullie leven",
    desc: "Je woont vaak gewoon door tijdens het project. Wij plannen werkzaamheden rond jullie ritme — schoolweken, vakanties, weekenden." },
];
