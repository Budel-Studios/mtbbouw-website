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
    "MTB Bouw is de aannemer uit Enschede achter vier expertises: Wonen & Verbouwen, Zakelijk, Kozijnen en Prefab Bouwen. Eén team, één aanspreekpunt in heel Twente.",
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
  /**
   * Plaatsen waar we werken, voor de schema-code. De Wikipedia-link haalt
   * dubbelzinnigheid weg: er is ook een Hengelo in Gelderland.
   */
  serviceCities: [
    { name: "Enschede", sameAs: "https://nl.wikipedia.org/wiki/Enschede" },
    { name: "Hengelo", sameAs: "https://nl.wikipedia.org/wiki/Hengelo_(Overijssel)" },
    { name: "Almelo", sameAs: "https://nl.wikipedia.org/wiki/Almelo" },
    { name: "Oldenzaal", sameAs: "https://nl.wikipedia.org/wiki/Oldenzaal" },
    { name: "Borne" },
    { name: "Haaksbergen" },
    { name: "Losser" },
  ] as { name: string; sameAs?: string }[],
  kvk: "42148321",
  sbb: "SBB-erkend leerbedrijf · ID 100812726",
  social: {
    instagram: "https://www.instagram.com/mtbbouw/",
    facebook: "",
    linkedin: "",
    youtube: "",
  },
  // Footer: bewust rustig. De hoofddiensten en de focussteden staan op elke
  // pagina (de footer is een sterke interne link); de overige plaatsen zijn
  // bereikbaar via Heel Twente en de stadspagina's, de rest via het menu.
  footerColumns: [
    {
      title: "Wat we bouwen",
      links: [
        { href: "/verbouwing", label: "Verbouwing & renovatie" },
        { href: "/aanbouw-uitbouw", label: "Aanbouw & uitbouw" },
        { href: "/nieuwbouw", label: "Nieuwbouw" },
        { href: "/verduurzamen", label: "Verduurzamen" },
        { href: "/kozijnen", label: "Kozijnen" },
        { href: "/prefab", label: "Prefab bouwen" },
        { href: "/zakelijk", label: "Zakelijk verbouwen" },
      ],
    },
    {
      title: "Werkgebied",
      links: [
        { href: "/aannemer-enschede", label: "Aannemer Enschede" },
        { href: "/aannemer-hengelo", label: "Aannemer Hengelo" },
        { href: "/aannemer-almelo", label: "Aannemer Almelo" },
        { href: "/aannemer-oldenzaal", label: "Aannemer Oldenzaal" },
        { href: "/aannemer-twente", label: "Heel Twente" },
      ],
    },
  ],
  // Kleine links in de onderbalk van de footer.
  footerLinks: [
    { href: "/over-ons", label: "Over ons" },
    { href: "/bouwbedrijf-enschede", label: "Bouwbedrijf Enschede" },
    { href: "/kennisbank", label: "Bouwgids" },
    { href: "/gratis-brochure", label: "Gratis brochure" },
    { href: "/werkgenoeg", label: "Werken bij" },
    { href: "/privacy-policy", label: "Privacy" },
  ],
} as const;
