import type { ServiceData } from "./types";
import { sharedPillars } from "./types";

export const uitbouwData: ServiceData = {
  slug: "/aanbouw-uitbouw",
  seo: {
    title: "Aanbouw & uitbouw in Enschede & Twente | MTB Bouw",
    description:
      "Aanbouw of uitbouw plannen in Enschede, Hengelo of Twente? MTB Bouw realiseert je extra ruimte met één team, een heldere offerte en een duidelijke planning.",
    canonical: "/aanbouw-uitbouw",
    focusKeyword: "aanbouw Enschede",
  },
  hero: {
    eyebrow: "Voor particulieren",
    h1: "Uitbouw in Enschede & Twente — meer ruimte, meer leefplezier.",
    subtitle:
      "Een keuken die uitkomt op de tuin, een werkkamer waar je écht werkt, een speelhoek voor de kinderen — wij maken jouw woning ruimer, lichter en logischer. Zonder gedoe en zonder verrassingen.",
    primaryCta: { label: "Plan een intake", href: "/contact" },
    secondaryCta: { label: "Bekijk onze case", href: "#case" },
    heroImageAlt:
      "Nieuwe uitbouw in houtskeletbouw met zwarte kozijnen en Finiplus-gevel in Enschede, gebouwd door MTB Bouw",
    stats: [
      { value: "1 aanspreekpunt", label: "Mathijs of Robbert" },
      { value: "Twente-breed", label: "Enschede tot Oldenzaal" },
      { value: "Heldere offerte", label: "Meerwerk alleen na akkoord" },
    ],
  },
  subServices: {
    eyebrow: "01 — Wat we voor jou doen",
    h2: "Vier soorten uitbouw die we het meest bouwen",
    cards: [
      { sketchIcon: "flat-roof", title: "Uitbouw met plat dak",
        desc: "Strakke moderne look, ideaal voor een dakterras of zonnepanelen. Geeft je binnen meer ruimtegevoel zonder schuine wanden." },
      { sketchIcon: "pitched-roof", title: "Uitbouw met schuin dak",
        desc: "Past bij klassieke woningen of waar de gemeente Enschede een hellend dak vraagt. Karaktervol en tijdloos." },
      { sketchIcon: "prefab", title: "Prefab uitbouw",
        desc: "In de fabriek voorbereid, in 1–2 weken op locatie gemonteerd. Sneller, strakker en vaak voordeliger.",
        href: "/prefab" },
      { sketchIcon: "mantelzorg", title: "Mantelzorg-uitbouw",
        desc: "Een zelfstandige ruimte voor familie, met eigen ingang, sanitair en keuken. Slim, duurzaam en met behoud van privacy." },
    ],
  },
  werkwijze: {
    eyebrow: "02 — Werkwijze",
    h2: "Wand. Vloer. Plafond. Live in onze eigen app.",
    introText:
      "Wij hebben een eigen app gebouwd waarmee we tijdens het eerste bezoek elke wand, vloer en plafond live inventariseren. Het resultaat? Sneller schakelen, minder ruis, en je ziet direct wat we voorstellen.",
  },
  caseStudy: {
    eyebrow: "03 — Case",
    h2: "Een vervallen uitbouw, in vijf weken opnieuw gebouwd",
    location: "Enschede — uitbouw in houtskeletbouw",
    duration: "5 weken",
    delivered: "Opgeleverd",
    story:
      "Een gescheurde fundering, kapotte halfsteens muren en een uitbouw vol troep. Samen met de bewoner kozen we voor slopen en opnieuw beginnen. In vijf weken stond er een complete nieuwe uitbouw in houtskeletbouw, met een eigen slaap- en leefkamer. De bewoner nam zijn kamer zelfs al in gebruik vóór de opleverdatum.",
    didList: [
      "Oude uitbouw gesloopt",
      "Nieuwe uitbouw in houtskeletbouw",
      "Finiplus-gevel in eikenlook",
      "Houten kozijnen met triple glas",
      "Nieuw dak met bitumen dakbedekking",
      "Badkamer en toilet",
      "Houten overkapping met schuur",
    ],
    quote:
      "Toen we begonnen, vroeg onze stagiair wat ik nou weer had aangenomen. Aan het eind was hij super trots op dit project.",
    quoteAuthor: "Robbert, MTB Bouw",
    imageAlt:
      "Nieuwe uitbouw in houtskeletbouw met Finiplus gevelbekleding in eikenlook en zwarte kozijnen in Enschede",
    href: "/projecten/uitbouw-houtskeletbouw-enschede",
  },
  sketchBreak: { bigQuote: "Niet bouwen op gevoel. Bouwen op plan." },
  typeWoningen: {
    eyebrow: "04 — Voor welke woningen",
    h2: "Uitbouwen voor élk type woning in Twente",
    pills: ["Rijwoning","Vrijstaand","Twee-onder-één-kap","Hoekwoning","Jaren-30 woning","Bungalow","Boerderijwoning","Recente bouw"],
  },
  waarom: {
    eyebrow: "05 — Waarom MTB Bouw",
    h2: "Geen bouwsoap. Een team dat doet wat het zegt.",
    pillars: sharedPillars,
  },
  faq: {
    eyebrow: "06 — Veelgesteld",
    h2: "De 5 vragen die we bij elke uitbouw krijgen",
    items: [
      { q: "Wat kost een uitbouw in Enschede of Twente?",
        a: "Als indicatie: €2.200 tot €3.200 per m² inclusief btw, afhankelijk van afwerking, dakvorm en isolatie. Voor 20 m² kom je dan rond €45.000 tot €65.000. Na de intake krijg je een gespecificeerde offerte op maat." },
      { q: "Hoe lang duurt het bouwen van een uitbouw?",
        a: "Reken op 8 tot 14 weken uitvoering, afhankelijk van de grootte en de fundering. In houtskeletbouw gaat het sneller: onze uitbouw in Enschede stond er in vijf weken. Je krijgt de planning vooraf en we houden je wekelijks op de hoogte." },
      { q: "Heb ik een vergunning nodig voor een uitbouw?",
        a: "Vaak niet, maar een vaste maat die overal geldt is er niet. Het hangt af van onder meer waar op het erf de uitbouw komt, hoe diep en hoe hoog hij wordt, hoeveel er al gebouwd is en wat het omgevingsplan van je gemeente zegt. Doe voor een eerste beeld de Vergunningcheck in het Omgevingsloket; wij checken het altijd voor jouw adres. Ook zonder vergunning gelden de technische bouwregels. Is er wel een vergunning nodig, dan regelen wij de aanvraag." },
      { q: "Kan ik in mijn huis blijven wonen tijdens de uitbouw?",
        a: "Meestal wel. We schermen de werkzone af, beperken stof en geluid, en houden het openmaken van de bestaande gevel zo kort mogelijk." },
      { q: "Verhoogt een uitbouw de waarde van mijn woning?",
        a: "Vaak wel: extra leefruimte maakt een huis aantrekkelijker voor kopers. Hoeveel het oplevert hangt af van je woning en de buurt; een taxateur kan dat het best inschatten. De echte winst merk je elke dag in huis." },
    ],
    fullFaqLink: "/veelgestelde-vragen",
  },
  cta: {
    h2: "Klaar om je woning ruimer te maken?",
    subtitle:
      "Plan een vrijblijvende intake. We komen langs, leggen alles vast met onze app, en sturen daarna een gespecificeerde offerte.",
    primaryCta: { label: "Plan intake", href: "/contact" },
    secondaryCta: { label: "Bel direct: 053 206 50 71", href: "tel:+31532065071" },
    note: "Of mail naar info@mtbbouw.com — we reageren binnen één werkdag.",
  },
  projects: {
    eyebrow: "Ons werk",
    h2: "Uitbouwen die we bouwden",
    slugs: ["uitbouw-houtskeletbouw-enschede", "dubbele-uitbouw-enschede", "veranda-bouwen-almelo"],
  },
  partners: {
    h2: "Vaste partners bij een uitbouw",
    intro:
      "Een uitbouw bouwen we met ons eigen kernteam. Voor beton, dakbedekking, hout en kozijnen werken we met vaste partners uit de regio.",
    names: ["Rouwmaat Betoncentrale", "Kamphuis Dakbedekking", "Jongeneel Hengelo", "De Kozijnstudio"],
  },
  werkgebied: {
    label: "Uitbouw",
    intro:
      "Vanuit Enschede bouwen we uitbouwen in heel Twente. Op de pagina van jouw plaats vind je projecten, regels en vragen uit de buurt.",
  },
  related: [
    { label: "Kozijnen vervangen", href: "/kozijnen" },
    { label: "Renovatie & verbouwing", href: "/verbouwing" },
    { label: "Alle veelgestelde vragen", href: "/veelgestelde-vragen" },
  ],
};
