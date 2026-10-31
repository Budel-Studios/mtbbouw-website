import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CtaBanner } from "@/components/sections/cta-banner";
import { CardSlider } from "@/components/sections/card-slider";
import type { ProjectCardData } from "@/components/project/project-cards";
import { DrawOnView } from "@/components/blueprint/draw-on-view";
import { NumberBox } from "@/components/blueprint/marks";
import {
  HouseDrawing,
  LunchroomDrawing,
  PrefabDrawing,
  WindowDrawing,
} from "@/components/blueprint/drawings";

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

/** De twee hoofdrichtingen, bovenaan de pagina, elk met een schets. */
const HOOFD = [
  {
    n: 1,
    label: "Voor thuis",
    title: "Wonen & Verbouwen",
    href: "/wonen-en-verbouwen",
    text: "Renoveren, uitbouwen, verduurzamen of nieuw bouwen. Of je nu in een jaren-30 woning woont of in een huis uit de jaren zeventig: we kijken eerst wat goed is, en maken de rest weer van nu.",
    links: [
      { href: "/verbouwing", label: "Renovatie & verbouw" },
      { href: "/aanbouw-uitbouw", label: "Aanbouw & uitbouw" },
      { href: "/verduurzamen", label: "Verduurzamen" },
      { href: "/nieuwbouw", label: "Nieuwbouw" },
    ],
    Drawing: HouseDrawing,
  },
  {
    n: 2,
    label: "Voor bedrijven",
    title: "Zakelijke afbouw",
    href: "/afbouwstudio",
    text: "Kantoren, winkels en horeca, van casco tot sleutelklaar. We plannen het werk rond je bedrijf, zodat je zo kort mogelijk dicht bent.",
    links: [
      { href: "/afbouwstudio/kantoor-verbouwen", label: "Kantoor verbouwen" },
      { href: "/afbouwstudio/winkel-verbouwen", label: "Winkel verbouwen" },
      { href: "/afbouwstudio/horeca-verbouwen", label: "Horeca verbouwen" },
      { href: "/afbouwstudio/bedrijfspand-verbouwen", label: "Bedrijfspand verbouwen" },
    ],
    Drawing: LunchroomDrawing,
  },
];

/** De twee specialismen die bij allebei horen. */
const SPECIALISMEN = [
  {
    n: 3,
    label: "Eigen label",
    title: "Kozijnen",
    href: "/kozijnen",
    text: "Hout, kunststof of aluminium, all-in via ons eigen label De Kozijnstudio. Los geplaatst of meegenomen in je verbouwing.",
    Drawing: WindowDrawing,
  },
  {
    n: 4,
    label: "Slim en snel",
    title: "Prefab bouwen",
    href: "/prefab",
    text: "Wanden, daken en overkappingen maken we vooraf in de werkplaats. Op de bouw staat het dan snel, met weinig overlast voor jou en de buren.",
    Drawing: PrefabDrawing,
  },
];

const KENGETALLEN = [
  { value: "4", label: "expertises onder één dak" },
  { value: "1", label: "vast aanspreekpunt" },
  { value: "1", label: "offerte met een vaste prijs" },
  { value: "0", label: "voorrijkosten in Twente" },
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

      {/* HERO op licht tekenpapier, met meteen de twee hoofdrichtingen */}
      <section className="blueprint-grid relative overflow-hidden border-b border-mist">
        <div className="container-page relative pb-16 pt-14 md:pb-24 md:pt-20">
          <p className="eyebrow text-stone">Bouwbedrijf uit Enschede</p>
          <h1 className="display mt-6 text-5xl md:text-7xl">
            Wat we <span className="mark-lime">bouwen</span> in Twente.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone">
            MTB Bouw is een klein bouwbedrijf uit Enschede, met een vast team
            en vaste partners uit de regio. We bouwen voor thuis en voor
            bedrijven: van een uitbouw aan een jaren-30 woning tot de afbouw
            van een lunchroom. Je hebt één aanspreekpunt, van de eerste kop
            koffie tot de oplevering.
          </p>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {HOOFD.map(({ n, label, title, href, text, links, Drawing }) => (
              <article key={href} className="flex flex-col border border-ink/15">
                <DrawOnView className="relative border-b border-ink/10 px-4 py-6 md:px-8">
                  <Drawing />
                </DrawOnView>
                <div className="flex flex-1 flex-col bg-white p-6 md:p-8">
                  <NumberBox n={n} label={label} />
                  <h2 className="display mt-5 text-4xl md:text-5xl">
                    <Link href={href} className="transition-colors hover:text-navy">
                      {title}
                    </Link>
                  </h2>
                  <p className="mt-4 max-w-xl leading-relaxed text-stone">{text}</p>
                  <ul className="mt-6 grid gap-x-6 border-t border-ink sm:grid-cols-2">
                    {links.map((l) => (
                      <li key={l.href} className="border-b border-mist">
                        <Link
                          href={l.href}
                          className="group flex items-center justify-between gap-3 py-3 font-display text-base font-semibold text-ink transition-colors hover:text-navy"
                        >
                          {l.label}
                          <ArrowUpRight className="size-4 shrink-0 text-stone transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href}
                    className="label-mono mt-8 inline-flex items-center gap-2 self-start border border-navy bg-navy px-5 py-3.5 text-white transition-colors hover:border-navy-dark hover:bg-navy-dark"
                  >
                    Alles over {title} <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KOZIJNEN EN PREFAB */}
      <section className="container-page py-20 md:py-28">
        <p className="eyebrow text-stone">Ook in huis</p>
        <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">
          Kozijnen en prefab, onder hetzelfde dak
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {SPECIALISMEN.map(({ n, label, title, href, text, Drawing }) => (
            <article key={href} className="grid border border-ink/15 bg-white sm:grid-cols-2">
              <DrawOnView className="blueprint-grid relative flex items-center border-b border-ink/10 p-4 sm:border-b-0 sm:border-r">
                <Drawing />
              </DrawOnView>
              <div className="flex flex-col p-6 md:p-8">
                <NumberBox n={n} label={label} />
                <h3 className="display mt-5 text-3xl md:text-4xl">
                  <Link href={href} className="transition-colors hover:text-navy">
                    {title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{text}</p>
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
      </section>

      {/* Alle diensten op een rij */}
      <CardSlider
        items={diensten}
        label="Alle diensten"
        eyebrow="Alle diensten"
        title="Alles wat we doen, op een rij"
      />

      {/* EÉN BOUWBEDRIJF — verhaal en kengetallen */}
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
              offerte met een vaste prijs, volledig gespecificeerd. Zo weet je
              vooraf wat er wel gebeurt, en ook wat niet. Hoe dat verder loopt,
              lees je bij{" "}
              <Link href="/hoe-wij-werken" className="font-semibold text-ink underline hover:text-navy">
                hoe wij werken
              </Link>
              .
            </p>
          </div>
        </div>
        <dl className="mt-16 grid grid-cols-2 border-t border-ink md:grid-cols-4">
          {KENGETALLEN.map((k, i) => (
            <div
              key={k.label}
              className={`flex flex-col gap-3 border-mist py-6 pr-4 md:py-8 ${i % 2 === 1 ? "pl-4 md:pl-6" : ""} ${i > 0 ? "md:border-l md:pl-6" : ""}`}
            >
              <dt className="sr-only">{k.label}</dt>
              <dd className="display text-5xl text-navy md:text-6xl" aria-hidden="true">
                {k.value}
              </dd>
              <dd className="text-sm leading-snug text-stone">
                <span className="sr-only">{k.value} </span>
                {k.label}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* WERKGEBIED */}
      <section className="border-y border-mist bg-white">
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

      {/* Werkwijze */}
      <ProcessSteps compact />

      <CtaBanner
        eyebrow="Vrijblijvend kennismaken"
        title="Iets te bouwen in Twente?"
        text="We komen langs, denken mee en je ontvangt een offerte met vaste prijs."
        cta={{ label: "Neem contact op", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
