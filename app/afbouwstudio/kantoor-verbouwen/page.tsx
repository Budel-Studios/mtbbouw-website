import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import {
  WallIcon,
  BuildingIcon,
  BoltIcon,
  PaintIcon,
  ClockIcon,
  UsersIcon,
  MapPinIcon,
  CheckIcon,
} from "@/components/icons";
import { faqKantoorVerbouwen } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Kantoor verbouwen in Enschede & Twente | Afbouwstudio — MTB Bouw" },
  description:
    "Kantoor verbouwen of casco kantoorruimte afbouwen? Afbouwstudio (MTB Bouw, Enschede) verzorgt kantoorafbouw van casco tot turn-key in Twente, Deventer, Apeldoorn en Zwolle. Vaste prijs binnen 5 werkdagen.",
  alternates: { canonical: "/afbouwstudio/kantoor-verbouwen" },
};

const WERKZAAMHEDEN: {
  icon: typeof WallIcon;
  title: string;
  text: string;
  href?: string;
}[] = [
  {
    icon: WallIcon,
    title: "Metal stud-wanden & indeling",
    text: "Nieuwe kantoorindeling met scheidingswanden, glaswanden en vergaderruimtes — snel geplaatst en akoestisch op orde.",
    href: "/afbouwstudio/metal-stud-wanden",
  },
  {
    icon: BuildingIcon,
    title: "Systeemplafonds & akoestiek",
    text: "Akoestische plafonds die spraakverstaanbaarheid en concentratie verbeteren, inclusief verlichtingsplan.",
    href: "/afbouwstudio/systeemplafonds",
  },
  {
    icon: BoltIcon,
    title: "Installaties & verlichting",
    text: "Elektra, data, klimaat en verlichting — gecoördineerd met onze vaste installatiepartners, één planning.",
  },
  {
    icon: PaintIcon,
    title: "Vloeren & afwerking",
    text: "Gietvloeren, tapijt of pvc, schilderwerk en pantry's: strak afgewerkt tot in de laatste hoek.",
  },
];

const STEDEN: { name: string; href?: string }[] = [
  { name: "Enschede", href: "/afbouwstudio/kantoor-verbouwen-enschede" },
  { name: "Hengelo", href: "/afbouwstudio/kantoor-verbouwen-hengelo" },
  { name: "Almelo", href: "/afbouwstudio/kantoor-verbouwen-almelo" },
  { name: "Oldenzaal" },
  { name: "Deventer", href: "/afbouwstudio/kantoor-verbouwen-deventer" },
  { name: "Apeldoorn", href: "/afbouwstudio/kantoor-verbouwen-apeldoorn" },
  { name: "Zwolle", href: "/afbouwstudio/kantoor-verbouwen-zwolle" },
];

export default function KantoorVerbouwenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Afbouwstudio", url: "/afbouwstudio" },
          { name: "Kantoor verbouwen", url: "/afbouwstudio/kantoor-verbouwen" },
        ]}
      />
      <ServiceJsonLd
        name="Kantoor verbouwen en kantoorafbouw"
        description="Kantoorverbouwing en kantoorafbouw van casco tot turn-key in Enschede, Twente, Deventer, Apeldoorn en Zwolle door Afbouwstudio (MTB Bouw)."
        url="/afbouwstudio/kantoor-verbouwen"
        serviceType="Kantoorafbouw"
      />
      <FaqJsonLd items={faqKantoorVerbouwen} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/bedrijfshal-borne.webp",
          alt: "Kantoorafbouw door Afbouwstudio, het zakelijke label van MTB Bouw",
        }}
        eyebrow="Afbouwstudio · Kantoorafbouw"
        title="Kantoor verbouwen in Enschede en Twente: van casco tot turn-key"
        intro="Een kantoor verbouwen betekent voor ons: één team dat wanden, plafonds, vloeren, installaties en afwerking regelt — met een vaste prijs binnen vijf werkdagen na de intake. Afbouwstudio is het zakelijke label van MTB Bouw uit Enschede, werkzaam in heel Oost-Nederland."
        cta={
          <>
            <ArrowLink href="#contact" onDark>Plan een intake</ArrowLink>
            <ArrowLink href="/afbouwstudio#cases" onDark>Bekijk onze cases</ArrowLink>
          </>
        }
      />

      {/* WERKZAAMHEDEN */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
            01 — Wat we doen
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Complete kantoorafbouw, één planning
          </h2>
          <div className="mt-12 grid gap-px border-l border-t border-mist md:grid-cols-2">
            {WERKZAAMHEDEN.map(({ icon: Icon, title, text, href }) =>
              href ? (
                <Link
                  key={title}
                  href={href}
                  className="group border-b border-r border-mist bg-white p-8 transition-colors hover:bg-paper md:p-10"
                >
                  <Icon className="h-8 w-8 text-lime-dark" />
                  <h3 className="mt-6 text-2xl font-extrabold">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-stone">{text}</p>
                  <span className="mt-4 inline-block text-sm font-bold group-hover:text-lime-dark">
                    Meer info →
                  </span>
                </Link>
              ) : (
                <div key={title} className="border-b border-r border-mist bg-white p-8 md:p-10">
                  <Icon className="h-8 w-8 text-lime-dark" />
                  <h3 className="mt-6 text-2xl font-extrabold">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-stone">{text}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CASCO → TURN-KEY + KOSTEN */}
      <section className="border-y border-mist bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
                02 — Casco gehuurd?
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Van lege betonnen doos naar werkend kantoor
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Veel kantoorruimte wordt casco opgeleverd: kale vloeren, geen
                wanden, geen plafond. Wij nemen de complete afbouw uit handen —
                van indelingsplan en installaties tot pantry en sanitair. Tijdens
                het eerste pandbezoek leggen we met onze eigen app elke wand,
                vloer en plafond vast; binnen vijf werkdagen ligt er een vaste
                prijs.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Eén aanspreekpunt: Mathijs of Robbert",
                  "Vaste prijs en realistische planning",
                  "Gefaseerd werken — je kantoor blijft bereikbaar",
                  "Oplevering met 5 jaar garantie",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] text-ink">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-lime-dark" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
                03 — Kosten
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Wat kost een kantoorverbouwing?
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Gangbare marktindicaties (2026): een cosmetische opknapbeurt
                kost circa €150–400 per m², een grondige kantoorrenovatie
                €300–600 per m², en een complete casco-afbouw tot turn-key
                kantoor €600–1.500 per m² — afhankelijk van installaties en
                afwerkingsniveau. In Twente liggen de uitvoeringskosten
                doorgaans gunstiger dan in de Randstad.
              </p>
              <p className="mt-4 leading-relaxed text-stone">
                Wat jouw pand kost? Na één intake met onze inventarisatie-app
                ontvang je binnen vijf werkdagen een offerte met vaste prijs —
                geen stelposten-verrassingen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WERKGEBIED */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
            04 — Werkgebied
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Kantoren verbouwen we in heel Oost-Nederland
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Vanuit Enschede werken we voor zakelijke opdrachtgevers in Twente
            én de grotere steden eromheen — zo bouwden we voor De Broodbode
            complete horecazaken af in Zwolle en Apeldoorn.
          </p>
          <ul className="mt-8 flex max-w-3xl flex-wrap gap-2.5">
            {STEDEN.map((s) => (
              <li key={s.name}>
                {s.href ? (
                  <Link
                    href={s.href}
                    className="flex items-center gap-1.5 border border-ink/15 bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-lime-dark hover:bg-lime"
                  >
                    <MapPinIcon className="h-3.5 w-3.5 text-lime-dark" />
                    {s.name}
                  </Link>
                ) : (
                  <span className="flex items-center gap-1.5 border border-ink/15 bg-white px-4 py-2 text-sm font-medium text-ink">
                    <MapPinIcon className="h-3.5 w-3.5 text-lime-dark" />
                    {s.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-8">
            <div className="flex items-center gap-3 text-sm text-stone">
              <UsersIcon className="h-5 w-5 text-ink" /> Eén vast team, ook op locatie
            </div>
            <div className="flex items-center gap-3 text-sm text-stone">
              <ClockIcon className="h-5 w-5 text-ink" /> Ook 's avonds of in het weekend
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion
        items={faqKantoorVerbouwen}
        eyebrow="05 — Veelgesteld"
        title="Vragen over kantoor verbouwen"
      />

      {/* CTA — zelfde patroon als /afbouwstudio */}
      <section id="contact" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime">
            Persoonlijk contact
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Kantoorplannen? Plan een intake.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            We komen binnen 7 dagen langs met onze app, leggen alles vast en
            sturen binnen 5 werkdagen een vaste offerte. Bekijk ook{" "}
            <Link href="/afbouwstudio" className="underline hover:text-white">
              alles over Afbouwstudio
            </Link>
            .
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:info@mtbbouw.com?subject=Intake%20kantoorverbouwing"
              className="inline-flex items-center justify-center gap-2 bg-lime px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-lime-dark"
            >
              Plan intake
            </a>
            <a
              href="tel:+31532065071"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Bel direct: 053 206 50 71
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
