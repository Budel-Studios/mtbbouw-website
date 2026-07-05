/**
 * Centrale site-configuratie. Eén bron van waarheid voor metadata, JSON-LD,
 * sitemap, header en footer. Gegevens overgenomen van de huidige mtbbouw.com.
 */
export const site = {
  name: "MTB Bouw",
  legalName: "MTB Bouw B.V.",
  tagline: "Bouw. Samen.",
  // Apex zonder www — de live site canonicaliseert hiernaartoe; bij deploy
  // een domeinbrede 301 van www → apex instellen.
  url: "https://mtbbouw.com",
  description:
    "MTB Bouw is de aannemer uit Enschede achter vier expertises: Wonen & Verbouwen, Afbouwstudio, Kozijnen en Prefab Bouwen. Eén team, één aanspreekpunt in heel Twente.",
  locale: "nl_NL",
  telephone: "053 206 50 71",
  telephoneHref: "+31532065071",
  whatsapp: "+31642997018",
  email: "info@mtbbouw.com",
  address: {
    streetAddress: "Heersenkampweg 5",
    postalCode: "7546 PG",
    addressLocality: "Enschede",
    addressRegion: "Overijssel",
    addressCountry: "NL",
  },
  openingHours: "Ma–Vr 08:00–17:00",
  areaServed: ["Twente", "Oost-Nederland"],
  sbb: "SBB-erkend leerbedrijf · ID 100812726",
  social: {
    instagram: "https://www.instagram.com/mtbbouw/",
    facebook: "",
    linkedin: "",
    youtube: "",
  },
  // Footer-kolommen — óók de crawlbare vangnet-navigatie voor pagina's die
  // in het (client-side) mega-menu hangen. Hoofdnavigatie staat in lib/nav.ts.
  footerColumns: [
    {
      title: "Wat we bouwen",
      links: [
        { href: "/wonen-en-verbouwen", label: "Wonen & Verbouwen" },
        { href: "/afbouwstudio", label: "Afbouwstudio" },
        { href: "/kozijnen", label: "Kozijnen" },
        { href: "/prefab", label: "Prefab Bouwen" },
      ],
    },
    {
      title: "Werkgebied",
      links: [
        { href: "/aannemer-enschede", label: "Aannemer Enschede" },
        { href: "/bouwbedrijf-enschede", label: "Bouwbedrijf Enschede" },
        { href: "/aannemer-twente", label: "Aannemer Twente" },
        { href: "/afbouwstudio/kantoor-verbouwen", label: "Kantoor verbouwen" },
      ],
    },
    {
      title: "Over ons",
      links: [
        { href: "/hoe-wij-werken", label: "Onze werkwijze" },
        { href: "/veilig-verantwoord-bouwen", label: "Veilig & verantwoord bouwen" },
        { href: "/regionale-partners", label: "Regionale partners" },
        { href: "/bouwmethodes", label: "Bouwmethodes" },
        { href: "/kennisbank", label: "Blog" },
        { href: "/over-ons", label: "Over ons" },
      ],
    },
    {
      title: "Support",
      links: [
        { href: "/contact", label: "Contact" },
        { href: "/werkgenoeg", label: "Werken bij" },
        { href: "/veelgestelde-vragen", label: "FAQ" },
        { href: "/privacy-policy", label: "Privacy" },
      ],
    },
  ],
} as const;
