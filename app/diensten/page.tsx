import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ExpertiseTiles } from "@/components/sections/expertise-tiles";
import { CtaBanner } from "@/components/sections/cta-banner";
import { expertises } from "@/lib/expertises";

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

/** Alle diensten met één zin uitleg — de ingang naar de dienstpagina's. */
const diensten = [
  {
    href: "/verbouwing",
    label: "Renovatie & verbouw",
    text: "Van een nieuwe badkamer tot een complete woning, binnen en buiten. Wat goed is, laten we staan.",
  },
  {
    href: "/aanbouw-uitbouw",
    label: "Aanbouw & uitbouw",
    text: "Meer ruimte zonder te verhuizen, traditioneel gemetseld of in houtskeletbouw.",
  },
  {
    href: "/nieuwbouw",
    label: "Nieuwbouw",
    text: "Bouwen vanaf de fundering, met één team van vergunning tot sleutel.",
  },
  {
    href: "/verduurzamen",
    label: "Verduurzamen",
    text: "Isoleren en verduurzamen, het liefst meegenomen in dezelfde verbouwing.",
  },
  {
    href: "/kozijnen",
    label: "Kozijnen",
    text: "Hout, kunststof of aluminium, all-in via ons eigen label De Kozijnstudio.",
  },
  {
    href: "/prefab",
    label: "Prefab & houtskeletbouw",
    text: "Wanden, daken en overkappingen die we vooraf in de werkplaats maken.",
  },
  {
    href: "/afbouwstudio",
    label: "Zakelijke afbouw",
    text: "Kantoren, winkels en horeca, van casco tot sleutelklaar.",
  },
  {
    href: "/afbouwstudio/kantoor-verbouwen",
    label: "Kantoor verbouwen",
    text: "Een nieuwe indeling, plafonds en installaties, gepland rond je bedrijf.",
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

      {/* Expertise-tegels met sub-items */}
      <section className="container-page pb-16">
        <ExpertiseTiles items={expertises} showSubItems />
      </section>

      {/* Alle diensten op een rij */}
      <section className="border-y border-mist bg-paper">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow text-stone">Alle diensten</p>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">
            Alles wat we doen, op een rij
          </h2>
          <ul className="mt-10 grid gap-px border border-mist bg-mist sm:grid-cols-2">
            {diensten.map((d) => (
              <li key={d.href} className="bg-white">
                <Link href={d.href} className="group block h-full p-6">
                  <span className="font-display text-lg font-semibold text-ink group-hover:text-navy">
                    {d.label}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-stone">
                    {d.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

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
