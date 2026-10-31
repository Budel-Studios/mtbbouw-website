import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ExpertiseTiles } from "@/components/sections/expertise-tiles";
import { CtaBanner } from "@/components/sections/cta-banner";
import { expertises } from "@/lib/expertises";
import { CardSlider } from "@/components/sections/card-slider";
import type { ProjectCardData } from "@/components/project/project-cards";

const title = "Diensten: verbouw, uitbouw & afbouw in Twente | MTB Bouw";
const description =
  "Wat MTB Bouw bouwt in Twente: renovatie, aanbouw en uitbouw, nieuwbouw, kozijnen, prefab en zakelijke afbouw. Vast team uit Enschede, vaste prijs vooraf.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/diensten" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/diensten",
  },
};

/**
 * Alle diensten met één zin uitleg en een foto uit eigen werk — de ingang
 * naar de dienstpagina's. Getoond als slider met dezelfde kaart als de
 * projecten: label links, voor wie rechts.
 */
const diensten: ProjectCardData[] = [
  {
    slug: "verbouwing",
    permalink: "/verbouwing",
    title: "Renovatie & verbouw",
    description: "Van een nieuwe badkamer tot een complete woning, binnen en buiten. Wat goed is, laten we staan.",
    category: "Wonen & Verbouwen",
    location: "Thuis",
    images: [
      {
        src: "/images/projects/renovatie-villa-zantinge-enschede/04.jpg",
        alt: "Zitkuil met maatwerk banken, haard en baksteenwand in een gerenoveerde Van Zantinge-villa in Enschede",
      },
    ],
  },
  {
    slug: "aanbouw-uitbouw",
    permalink: "/aanbouw-uitbouw",
    title: "Aanbouw & uitbouw",
    description: "Meer ruimte zonder te verhuizen, traditioneel gemetseld of in houtskeletbouw.",
    category: "Wonen & Verbouwen",
    location: "Thuis",
    images: [
      {
        src: "/images/projects/uitbouw-houtskeletbouw-enschede/01.jpg",
        alt: "Nieuwe uitbouw in houtskeletbouw met Finiplus-gevel en zwarte kozijnen in Enschede",
      },
    ],
  },
  {
    slug: "nieuwbouw",
    permalink: "/nieuwbouw",
    title: "Nieuwbouw",
    description: "Bouwen vanaf de fundering, met één team van vergunning tot sleutel.",
    category: "Wonen & Verbouwen",
    location: "Thuis & zakelijk",
    images: [
      {
        src: "/images/projects/bedrijfshal-borne.webp",
        alt: "Nieuwgebouwde bedrijfshal in Borne, door MTB Bouw van ruwbouw tot oplevering",
      },
    ],
  },
  {
    slug: "verduurzamen",
    permalink: "/verduurzamen",
    title: "Verduurzamen",
    description: "Isoleren en verduurzamen, het liefst meegenomen in dezelfde verbouwing.",
    category: "Wonen & Verbouwen",
    location: "Thuis",
    images: [
      {
        src: "/images/projects/renovatie-villa-zantinge-enschede/03.jpg",
        alt: "Woonruimte met nieuwe glazen pui en vloerverwarming in een gerenoveerde villa in Enschede",
      },
    ],
  },
  {
    slug: "kozijnen",
    permalink: "/kozijnen",
    title: "Kozijnen",
    description: "Hout, kunststof of aluminium, all-in via ons eigen label De Kozijnstudio.",
    category: "De Kozijnstudio",
    location: "Thuis & zakelijk",
    images: [
      {
        src: "/images/projects/renovatie-villa-zantinge-enschede/01.jpg",
        alt: "Glazen patio met zelfgemaakte zwarte kozijnen en een olijfboom in een Van Zantinge-villa in Enschede",
      },
    ],
  },
  {
    slug: "prefab",
    permalink: "/prefab",
    title: "Prefab & houtskeletbouw",
    description: "Wanden, daken en overkappingen die we vooraf in de werkplaats maken.",
    category: "Prefab bouwen",
    location: "Thuis & zakelijk",
    images: [
      {
        src: "/images/projects/luxe-overkapping-twente/cover.jpg",
        alt: "Luxe houten overkapping met zitgedeelte in de tuin",
      },
    ],
  },
  {
    slug: "afbouwstudio",
    permalink: "/afbouwstudio",
    title: "Zakelijke afbouw",
    description: "Kantoren, winkels en horeca, van casco tot sleutelklaar.",
    category: "Afbouwstudio",
    location: "Zakelijk",
    images: [
      {
        src: "/images/projects/broodbode-apeldoorn/01.jpg",
        alt: "Sfeervol zitgedeelte van huiskamer-lunchroom De Broodbode in Apeldoorn met vintage behang en houten meubels",
      },
    ],
  },
  {
    slug: "kantoor-verbouwen",
    permalink: "/afbouwstudio/kantoor-verbouwen",
    title: "Kantoor verbouwen",
    description: "Een nieuwe indeling, plafonds en installaties, gepland rond je bedrijf.",
    category: "Afbouwstudio",
    location: "Zakelijk",
    images: [
      {
        src: "/images/projects/broodbode-zwolle-lunchroom/02.jpg",
        alt: "Vakman richt een houten maatwerk wandkast in tijdens de afbouw van een lunchroom in Zwolle",
      },
    ],
  },
];

const steden = [
  { href: "/aannemer-hengelo", label: "Aannemer in Hengelo" },
  { href: "/aannemer-almelo", label: "Aannemer in Almelo" },
  { href: "/aannemer-oldenzaal", label: "Aannemer in Oldenzaal" },
  { href: "/aannemer-enschede", label: "Aannemer in Enschede" },
  { href: "/aannemer-twente", label: "Heel Twente" },
];

export default function DienstenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Wat we bouwen", url: "/diensten" },
        ]}
      />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="eyebrow text-stone">Wat we bouwen</p>
        <h1 className="mt-3 text-4xl font-medium tracking-[-0.03em]">
          Wat we bouwen in Twente
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-stone">
          MTB Bouw is een bouwbedrijf uit Enschede, met een vast kernteam en
          vaste partners uit de regio. We bouwen voor thuis en voor bedrijven.
          Je hebt één aanspreekpunt, van de eerste koffie tot de oplevering.
        </p>
      </section>

      {/* Expertise-tegels; de losse diensten staan in de slider eronder */}
      <section className="container-page pb-16">
        <ExpertiseTiles items={expertises} />
      </section>

      {/* Alle diensten op een rij */}
      <CardSlider
        items={diensten}
        label="Alle diensten"
        eyebrow="Alle diensten"
        title="Alles wat we doen, op een rij"
      />

      {/* Werkgebied */}
      <section className="container-page py-20 md:py-28">
        <p className="eyebrow text-stone">Werkgebied</p>
        <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">
          Vanuit Enschede, door heel Twente
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-stone">
          We zijn een klein bedrijf en dat willen we graag zo houden. Daarom
          werken we vooral dicht bij huis: in Enschede, Hengelo, Almelo,
          Oldenzaal en de dorpen eromheen. Kies je plaats voor projecten en
          vragen uit jouw buurt.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {steden.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="border border-mist bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-ink/30 hover:text-navy"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Werkwijze */}
      <ProcessSteps compact />

      <CtaBanner
        eyebrow="Vrijblijvend kennismaken"
        title="Iets te bouwen in Twente?"
        text="We komen langs, denken mee en je ontvangt een offerte met vaste prijs."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
