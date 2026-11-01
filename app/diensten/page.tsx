import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { CardSlider } from "@/components/sections/card-slider";
import type { ProjectCardData } from "@/components/project/project-cards";
import { DrawOnView } from "@/components/blueprint/draw-on-view";
import {
  HouseDrawing,
  LunchroomDrawing,
  PrefabDrawing,
  WindowDrawing,
} from "@/components/blueprint/drawings";

const title = "Diensten: verbouw, uitbouw & afbouw in Twente | MTB Bouw";
const description =
  "Wat MTB Bouw bouwt in Twente: renovatie, aanbouw en uitbouw, nieuwbouw, kozijnen, prefab en zakelijke afbouw. Vast team uit Enschede, heldere offerte.";

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
        src: "/images/projects/overkapping-paardenstal-enschede/04.jpg",
        alt: "Nieuwe overkapping met paardenstal in het buitengebied van Enschede, gebouwd door MTB Bouw",
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
    slug: "zakelijk",
    permalink: "/zakelijk",
    title: "Zakelijk verbouwen",
    description: "Horeca, kantoren, winkels en bedrijfspanden, van casco tot gebruiksklaar.",
    category: "Zakelijk",
    location: "Zakelijk",
    images: [
      {
        src: "/images/projects/broodbode-apeldoorn/01.jpg",
        alt: "Sfeervol zitgedeelte van huiskamer-lunchroom De Broodbode in Apeldoorn met vintage behang en houten meubels",
      },
    ],
  },
  {
    slug: "bedrijfspand-verbouwen",
    permalink: "/zakelijk/bedrijfspand-verbouwen",
    title: "Bedrijfspand verbouwen",
    description: "Kantoor, winkel of bedrijfsruimte: indeling, wanden, plafonds en afwerking.",
    category: "Zakelijk",
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

/** De vier expertises, naast elkaar bovenaan de pagina, elk met een schets. */
const EXPERTISES = [
  {
    label: "Voor thuis",
    title: "Wonen & Verbouwen",
    href: "/wonen-en-verbouwen",
    text: "Renoveren, uitbouwen, verduurzamen of nieuw bouwen. Van jaren-30 woning tot huis uit de jaren zeventig.",
    links: [
      { href: "/verbouwing", label: "Renovatie & verbouw" },
      { href: "/aanbouw-uitbouw", label: "Aanbouw & uitbouw" },
      { href: "/verduurzamen", label: "Verduurzamen" },
      { href: "/nieuwbouw", label: "Nieuwbouw" },
    ],
    Drawing: HouseDrawing,
  },
  {
    label: "Voor bedrijven",
    title: "Zakelijk verbouwen",
    href: "/zakelijk",
    text: "Horeca, kantoren, winkels en bedrijfspanden, van casco tot gebruiksklaar. Gepland rond je bedrijf.",
    links: [
      { href: "/zakelijk/horeca-verbouwen", label: "Horeca afbouw & verbouwen" },
      { href: "/zakelijk/bedrijfspand-verbouwen", label: "Bedrijfspand verbouwen" },
    ],
    Drawing: LunchroomDrawing,
  },
  {
    label: "Eigen label",
    title: "Kozijnen",
    href: "/kozijnen",
    text: "Hout, kunststof of aluminium, all-in via ons eigen label De Kozijnstudio.",
    links: [
      { href: "/kennisbank/kozijnen-kiezen-hout-kunststof-aluminium", label: "Welk materiaal kies je?" },
      { href: "/kennisbank/kozijnen-vervangen-wanneer", label: "Wanneer vervangen?" },
    ],
    Drawing: WindowDrawing,
  },
  {
    label: "Slim en snel",
    title: "Prefab bouwen",
    href: "/prefab",
    text: "Wanden, daken en overkappingen, vooraf gemaakt in de werkplaats. Snel geplaatst, weinig overlast.",
    links: [
      { href: "/prefab#hsb", label: "Houtskeletbouw" },
      { href: "/prefab#elementen", label: "Prefab daken & wanden" },
      { href: "/prefab#overkappingen", label: "Overkappingen" },
    ],
    Drawing: PrefabDrawing,
  },
];

function ArrowUpRight({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export default function DienstenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Wat we bouwen", url: "/diensten" },
        ]}
      />

      {/* HERO op licht tekenpapier, met meteen de vier expertises */}
      <section className="blueprint-grid relative border-b border-mist">
        <div className="container-page pb-16 pt-14 md:pb-24 md:pt-20">
          <p className="eyebrow text-stone">Bouwbedrijf uit Enschede</p>
          <h1 className="display mt-6 text-5xl md:text-7xl">Wat we bouwen in Twente.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone">
            MTB Bouw is een klein bouwbedrijf uit Enschede, met een vast team
            en vaste partners uit de regio. We bouwen voor thuis en voor
            bedrijven: van een uitbouw aan een jaren-30 woning tot de afbouw
            van een lunchroom. Je hebt één aanspreekpunt, van de eerste kop
            koffie tot de oplevering.
          </p>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {EXPERTISES.map(({ label, title, href, text, links, Drawing }, i) => (
              <article key={href} className="flex flex-col border border-ink/15 bg-white">
                <DrawOnView className="h-44 border-b border-ink/10 px-4 py-5 md:h-48">
                  <Drawing />
                </DrawOnView>
                <div className="flex flex-1 flex-col p-6">
                  <p className="label-mono text-navy">
                    {String(i + 1).padStart(2, "0")} · {label}
                  </p>
                  <h2 className="display mt-4 text-3xl">
                    <Link href={href} className="transition-colors hover:text-navy">
                      {title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{text}</p>
                  <ul className="mt-5 border-t border-ink">
                    {links.map((l) => (
                      <li key={l.href} className="border-b border-mist">
                        <Link
                          href={l.href}
                          className="group flex items-center justify-between gap-3 py-2.5 text-sm font-semibold text-ink transition-colors hover:text-navy"
                        >
                          {l.label}
                          <ArrowUpRight className="size-3.5 shrink-0 text-stone transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href}
                    className="label-mono mt-auto inline-flex items-center gap-2 self-start pt-6 text-navy"
                  >
                    Alles over {title.toLowerCase()} <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Alle diensten op een rij */}
      <CardSlider
        items={diensten}
        label="Alle diensten"
        eyebrow="Alle diensten"
        title="Alles wat we doen, op een rij"
      />

      {/* EÉN BOUWBEDRIJF */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow text-stone">Eén bouwbedrijf</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              Aannemer voor het hele plaatje
            </h2>
          </div>
          <div className="space-y-5 leading-relaxed text-stone md:col-span-6 md:col-start-7">
            <p className="text-xl leading-snug tracking-[-0.01em] text-ink md:text-2xl">
              Renoveren, uitbouwen, verduurzamen en nieuwbouw lopen vaak in
              elkaar over. Wie uitbouwt, isoleert meteen mee. Wie renoveert,
              kijkt ook naar de kozijnen.
            </p>
            <p>
              Je hoeft dus niet te kiezen. Je hebt één vast aanspreekpunt,
              Mathijs of Robbert, en wij stemmen de rest af. Op de bouwplaats
              staat ons vaste team, samen met{" "}
              <Link href="/regionale-partners" className="font-semibold text-ink underline hover:text-navy">
                partners uit de regio
              </Link>{" "}
              die we al jaren kennen.
            </p>
            <p>
              Na een kennismaking bij jou thuis of op de zaak krijg je een
              gespecificeerde offerte. Zo weet je vooraf wat er wel gebeurt, en
              ook wat niet. Meerwerk doen we alleen na jouw akkoord. Hoe dat verder loopt,
              lees je bij{" "}
              <Link href="/hoe-wij-werken" className="font-semibold text-ink underline hover:text-navy">
                hoe wij werken
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* WERKGEBIED */}
      <section className="border-t border-mist bg-white">
        <div className="container-page py-20 md:py-28">
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
        </div>
      </section>
    </>
  );
}
