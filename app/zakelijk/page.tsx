import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { FaqJsonLd, WebPageJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import { ProcessLine } from "@/components/zakelijk/process-line";
import { ZakelijkContact } from "@/components/zakelijk/contact-section";
import { MapPinIcon, ClockIcon, RulerIcon, HammerIcon, UsersIcon, ShieldIcon } from "@/components/icons";
import { faqZakelijk } from "@/lib/faq";

const TITLE = "Zakelijke verbouwing in Enschede & Twente | MTB Bouw";
const DESCRIPTION =
  "Horeca, kantoor of bedrijfspand verbouwen in Enschede en Twente? MTB Bouw regelt de uitvoering met één aanspreekpunt en een duidelijke offerte.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/zakelijk" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "/zakelijk",
    images: [{ url: "/images/projects/broodbode-zwolle-lunchroom/04.jpg" }],
  },
};

const ROUTES = [
  {
    href: "/zakelijk/horeca-verbouwen",
    title: "Horeca afbouw & verbouwen",
    text: "Lunchrooms, restaurants en andere horecaruimten. Een casco pand gebruiksklaar maken, of een bestaande zaak aanpassen.",
    img: "/images/projects/broodbode-apeldoorn/07.jpg",
    alt: "Ronde maatwerkbalie met roze sierbetegeling bij De Broodbode in Apeldoorn",
    linkLabel: "Naar horeca afbouw en verbouwen",
  },
  {
    href: "/zakelijk/bedrijfspand-verbouwen",
    title: "Bedrijfspanden verbouwen",
    text: "Kantoor, winkel, showroom of bedrijfsruimte. Van een nieuwe indeling met wanden en plafonds tot de afwerking.",
    img: "/images/projects/broodbode-zwolle-lunchroom/02.jpg",
    alt: "Vakman richt een houten maatwerk wandkast in tijdens de afbouw van een lunchroom in Zwolle",
    linkLabel: "Naar bedrijfspanden verbouwen",
  },
];

const ORGANISEREN = [
  {
    icon: RulerIcon,
    title: "Opname en scope",
    text: "We bekijken het pand op locatie en leggen vast wat er moet gebeuren: per ruimte, per wand, vloer en plafond. Zo weten we allebei waar we het over hebben.",
  },
  {
    icon: HammerIcon,
    title: "Bouwkundige uitvoering",
    text: "Sloop- en breekwerk, nieuwe indeling, wanden, plafonds, vloeren, tegelwerk en maatwerk. Dat doen we met ons eigen team en vaste vakmensen.",
  },
  {
    icon: UsersIcon,
    title: "Afstemming met partners",
    text: "Elektra, ventilatie, verlichting en klimaat zijn specialistisch werk. Dat doen vaste installatiepartners; wij stemmen het af en zetten het in één planning.",
  },
  {
    icon: ShieldIcon,
    title: "Oplevering en nazorg",
    text: "We lopen de oplevering samen na. Daarna bellen we je altijd na om te horen of alles naar wens is, of dat je nog ergens tegenaan loopt.",
  },
];

const CASES = [
  {
    href: "/projecten/broodbode-zwolle-lunchroom",
    title: "De Broodbode Zwolle",
    plaats: "Zwolle, wijk Wezenlanden",
    soort: "Casco pand afgebouwd tot lunchroom",
    duur: "7 weken",
    text: "Een lege betonnen doos in een nieuw ontwikkelingsgebied. Wij bouwden er de complete lunchroom in: tegelwerk, een maatwerk counter, een akoestisch plafond, verlichting, sanitair en de achterkeuken.",
    img: "/images/projects/broodbode-zwolle-lunchroom/cover.jpg",
    alt: "Wandkast met hanglamp en lange tafel in lunchroom De Broodbode Zwolle",
  },
  {
    href: "/projecten/broodbode-apeldoorn-lunchroom",
    title: "De Broodbode Apeldoorn",
    plaats: "Centrum Apeldoorn",
    soort: "Winkelpand verbouwd tot lunchroom",
    duur: "circa 7 weken, in de zomervakantie",
    text: "Een winkelpand uit de jaren '40–'50, gedeeltelijk gesloopt en opnieuw ingedeeld. Met nieuwe elektra, circa 180 m² tegelwerk en twee ronde maatwerkbalies.",
    img: "/images/projects/broodbode-apeldoorn/01.jpg",
    alt: "Zitgedeelte met vintage behang en houten banken bij De Broodbode Apeldoorn",
  },
];

const STEPS = [
  {
    title: "Pand bekijken",
    text: "We komen langs, lopen het pand door en horen wat je ermee wilt. Casco, leeg of nog in gebruik: we kijken wat er staat en wat er moet komen.",
  },
  {
    title: "Scope en offerte",
    text: "Je ontvangt een gespecificeerde offerte voor de afgesproken werkzaamheden. Stelposten, uitsluitingen en onzekerheden maken we inzichtelijk.",
  },
  {
    title: "Uitvoering afstemmen",
    text: "We maken de planning samen: met jouw openingstijden, je leveranciers en onze installatiepartners. Wijzigingen in werk, prijs of planning bespreken we vooraf.",
  },
  {
    title: "Opleveren",
    text: "We lopen alles samen na en lossen openstaande punten op. Na de oplevering bellen we je na om te horen hoe het bevalt.",
  },
];

const REGIO = [
  { href: "/aannemer-enschede", label: "Ons werkgebied in Enschede" },
  { href: "/aannemer-hengelo", label: "Hengelo" },
  { href: "/aannemer-almelo", label: "Almelo" },
  { href: "/aannemer-oldenzaal", label: "Oldenzaal" },
  { href: "/aannemer-twente", label: "Heel Twente" },
];

export default function ZakelijkPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Zakelijk", url: "/zakelijk" },
        ]}
      />
      <WebPageJsonLd
        type="CollectionPage"
        name="Zakelijk verbouwen in Enschede en Twente"
        description={DESCRIPTION}
        url="/zakelijk"
        parts={[
          { name: "Horeca afbouw & verbouwen", url: "/zakelijk/horeca-verbouwen" },
          { name: "Bedrijfspanden verbouwen", url: "/zakelijk/bedrijfspand-verbouwen" },
        ]}
      />
      <FaqJsonLd items={faqZakelijk} />

      {/* 1 — HERO */}
      <PageHero
        variant="image"
        image={{
          src: "/images/projects/broodbode-zwolle-lunchroom/04.jpg",
          alt: "Gastruimte van lunchroom De Broodbode in Zwolle, door MTB Bouw afgebouwd vanuit een casco pand",
          position: "50% 45%",
        }}
        eyebrow="MTB Bouw Zakelijk"
        title="Zakelijk verbouwen in Enschede en Twente"
        tagline="Een pand dat werkt voor jouw bedrijf."
        intro="Een nieuwe horecazaak, een andere kantoorindeling of een bedrijfspand dat toe is aan een verbouwing. MTB Bouw helpt ondernemers in Enschede en Twente met de bouwkundige uitvoering en afwerking. Met een vast aanspreekpunt, een gespecificeerde offerte en een planning die we samen afstemmen."
        cta={
          <>
            <ArrowLink drawer preset="zakelijk" onDark>
              Bespreek je pand
            </ArrowLink>
            <ArrowLink href="#werk" onDark>
              Bekijk ons zakelijke werk
            </ArrowLink>
          </>
        }
      />

      {/* 2 — TWEE ROUTES */}
      <section className="bg-paper">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow text-stone">01 — Waar gaat het om?</p>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">
            Horeca of een ander bedrijfspand
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Een zaak waar gasten komen vraagt iets anders dan een kantoor of
            showroom. Daarom hebben we twee pagina&apos;s: kies de route die bij
            jouw pand past.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {ROUTES.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                aria-label={r.linkLabel}
                className="group flex flex-col border border-mist bg-white transition-colors hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                  <Image
                    src={r.img}
                    alt={r.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <h3 className="text-2xl font-semibold md:text-3xl">{r.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-stone">{r.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink">
                    Bekijk de aanpak
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — WAT WE ORGANISEREN */}
      <section className="border-y border-mist bg-white">
        <div className="container-page py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-stone">02 — Wat we organiseren</p>
              <h2 className="display mt-4 text-4xl md:text-5xl">Eén aanspreekpunt, van opname tot oplevering</h2>
              <p className="mt-5 leading-relaxed text-stone">
                Bij MTB Bouw is Mathijs of Robbert je vaste contact. Zij komen
                kijken, maken de planning, zetten de vakmensen en partners in
                de goede volgorde en zijn degene die je belt als er iets is. Je
                hoeft dus niet zelf tussen aannemer, installateur en
                leveranciers te schakelen.
              </p>
            </div>
            <div className="grid gap-px border-l border-t border-mist sm:grid-cols-2 lg:col-span-7">
              {ORGANISEREN.map(({ icon: Icon, title, text }) => (
                <div key={title} className="border-b border-r border-mist bg-white p-7">
                  <Icon className="h-7 w-7 text-navy" />
                  <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-stone">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 — WERK UIT DE PRAKTIJK */}
      <section id="werk" className="scroll-mt-24 bg-paper">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow text-stone">03 — Zakelijk werk uit de praktijk</p>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">Gebouwd voor ondernemers.</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Onze thuisbasis is Enschede en we werken vooral in Twente. Deze
            twee opdrachten deden we voor De Broodbode, in Zwolle en in
            Apeldoorn. Twee lunchrooms, twee heel verschillende startpunten.
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {CASES.map((c) => (
              <article key={c.href} className="flex flex-col border border-mist bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <Image src={c.img} alt={c.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <h3 className="text-2xl font-semibold md:text-3xl">{c.title}</h3>
                  <dl className="mt-4 grid gap-x-6 gap-y-1 text-sm text-stone sm:grid-cols-[auto_1fr]">
                    <dt className="flex items-center gap-1.5 font-semibold text-ink">
                      <MapPinIcon className="h-3.5 w-3.5" /> Plaats
                    </dt>
                    <dd>{c.plaats}</dd>
                    <dt className="font-semibold text-ink">Werk</dt>
                    <dd>{c.soort}</dd>
                    <dt className="flex items-center gap-1.5 font-semibold text-ink">
                      <ClockIcon className="h-3.5 w-3.5" /> Duur
                    </dt>
                    <dd>{c.duur}</dd>
                  </dl>
                  <p className="mt-5 flex-1 text-[15px] leading-relaxed text-stone">{c.text}</p>
                  <Link
                    href={c.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink underline decoration-lime decoration-2 underline-offset-4 hover:decoration-ink"
                  >
                    Bekijk het project {c.title.replace("De Broodbode ", "in ")} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — PROJECTVERLOOP */}
      <section className="border-y border-mist bg-paper">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow text-stone">04 — Zo verloopt een project</p>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">Van eerste blik tot oplevering</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Hoe lang elke stap duurt, hangt af van het pand en van wat er moet
            gebeuren. Een openingsdatum beoordelen we samen, als de scope en de
            levertijden bekend zijn.
          </p>
          <ProcessLine steps={STEPS} />
        </div>
      </section>

      {/* 6 — WERKGEBIED */}
      <section className="bg-white">
        <div className="container-page grid gap-10 py-20 md:py-24 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow text-stone">05 — Werkgebied</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">Vanuit Enschede, in heel Twente</h2>
          </div>
          <div className="lg:col-span-6">
            <p className="leading-relaxed text-stone">
              We zitten aan de Heersenkampweg in Enschede. Van daaruit werken we
              voor ondernemers in Enschede, Hengelo, Almelo, Oldenzaal en de
              rest van Twente. Een grotere zakelijke opdracht buiten de regio?
              Dat is bespreekbaar; voor De Broodbode werkten we in Zwolle en
              Apeldoorn.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {REGIO.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="font-semibold text-ink underline decoration-mist underline-offset-4 hover:decoration-ink">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqAccordion items={faqZakelijk} eyebrow="06 — Veelgesteld" title="Vragen van ondernemers" />

      {/* 7 — CONTACT */}
      <ZakelijkContact
        title="Vertel ons over je pand"
        intro="Bel, app of vul het formulier in. We plannen een moment om het pand te bekijken. Daarna ontvang je een gespecificeerde offerte."
        cta="Bespreek je pand"
      />
    </>
  );
}
