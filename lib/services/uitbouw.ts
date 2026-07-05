import type { ServiceData } from "./types";
import { sharedPillars } from "./types";

export const uitbouwData: ServiceData = {
  slug: "/aanbouw-uitbouw",
  seo: {
    title: "Aanbouw & uitbouw Enschede & Twente | MTB Bouw vaste prijs",
    description:
      "Aanbouw of uitbouw plannen in Enschede, Hengelo of Twente? MTB Bouw realiseert je extra ruimte met één team, vaste prijs en duidelijke planning.",
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
      "Moderne uitbouw met grote schuifpui aan jaren-30 woning in Enschede door MTB Bouw",
    stats: [
      { value: "60+", label: "Particuliere uitbouwen" },
      { value: "Twente-breed", label: "Enschede tot Oldenzaal" },
      { value: "Vaste prijs", label: "Geen meerwerk-verrassingen" },
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
        desc: "In de fabriek voorbereid, in 1–2 weken op locatie gemonteerd. Sneller, strakker en vaak voordeliger." },
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
    h2: "Een uitbouw die de woonkamer eindelijk woonkamer maakt",
    location: "Hengelo — Vrijstaande jaren-30 woning",
    duration: "9 weken",
    delivered: "Najaar 2025",
    story:
      "De familie wilde meer licht en directe verbinding met de tuin. Wij bouwden een uitbouw van 28 m² met plat dak, lichtstraat en grote schuifpui. Dankzij onze app legden we tijdens het eerste bezoek elke wand vast — een week later lag het volledige voorstel op tafel.",
    didList: [
      "Funderingswerk + sloop bestaande gevel",
      "Constructie staal + draagmuur",
      "Plat dak met EPDM en lichtstraat",
      "HR++ glas en aluminium schuifpui",
      "Vloerverwarming i.c.m. bestaande cv",
      "Stuc, vloer en schilderwerk",
      "Oplevering binnen planning",
    ],
    quote:
      "MTB Bouw heeft elke week kort doorgesproken hoe het stond. Geen onverwachte kosten, geen gedoe. Onze woonkamer is eindelijk de plek waar we hem voor gebouwd hebben.",
    quoteAuthor: "Familie B. — Hengelo",
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
        a: "Gemiddeld €2.200–€3.200 per m² inclusief BTW, afhankelijk van afwerking, dakvorm en isolatie. Een uitbouw van 20 m² kost dus €45.000–€65.000. Wij geven altijd een vaste prijsofferte op maat." },
      { q: "Hoe lang duurt het bouwen van een uitbouw?",
        a: "Een gemiddelde uitbouw duurt 8–14 weken vanaf start uitvoering. Prefab kan in 4–6 weken. Wij delen de planning vooraf en updaten je wekelijks." },
      { q: "Heb ik een vergunning nodig voor een uitbouw?",
        a: "Tot 5 m² achter je woning vaak vergunningsvrij, daarboven of aan de zijgevel meestal wél nodig. Wij regelen de aanvraag bij de gemeente Enschede, Hengelo of waar je ook woont." },
      { q: "Kan ik in mijn huis blijven wonen tijdens de uitbouw?",
        a: "In 90% van de gevallen wel. We schermen de werkzone af, beperken stof en geluid, en plannen het 'opensnijden' van de bestaande gevel zo kort mogelijk." },
      { q: "Verhoogt een uitbouw de waarde van mijn woning?",
        a: "Ja — gemiddeld 70–90% van de bouwkosten komt terug in de WOZ-waarde. Plus dagelijks meer woongenot, dat is de echte winst." },
    ],
    fullFaqLink: "/veelgestelde-vragen",
  },
  cta: {
    h2: "Klaar om je woning ruimer te maken?",
    subtitle:
      "Plan een vrijblijvende intake. We komen langs, leggen alles vast met onze app, en sturen binnen 5 werkdagen een vaste offerte.",
    primaryCta: { label: "Plan intake", href: "/contact" },
    secondaryCta: { label: "Bel direct: 053 206 50 71", href: "tel:+31532065071" },
    note: "Of mail naar info@mtbbouw.com — we reageren binnen één werkdag.",
  },
  related: [
    { label: "Kozijnen vervangen", href: "/kozijnen" },
    { label: "Renovatie & verbouwing", href: "/verbouwing" },
    { label: "Alle veelgestelde vragen", href: "/veelgestelde-vragen" },
  ],
};
