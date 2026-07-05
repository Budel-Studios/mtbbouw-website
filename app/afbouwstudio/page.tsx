import type { Metadata } from "next";
import Image from "next/image";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import {
  CupIcon,
  BuildingIcon,
  WallIcon,
  ShedIcon,
  UsersIcon,
  ShieldIcon,
  ClockIcon,
  CheckIcon,
  MapPinIcon,
} from "@/components/icons";
import { faqZakelijkeAfbouw } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Afbouwstudio — Kantoorafbouw & afbouw bedrijfspanden | MTB Bouw" },
  description:
    "Afbouwstudio is het label van MTB Bouw voor afbouw van bedrijfspanden en horeca in Enschede, Twente en heel Overijssel. Eigen app voor wand/vloer/plafond — snel schakelen, vaste prijs. Bekijk de case De Broodbode (Zwolle & Apeldoorn).",
  alternates: { canonical: "/afbouwstudio" },
  openGraph: {
    type: "website",
    title: "Afbouwstudio — Afbouw bedrijfspanden & horeca | MTB Bouw",
    description:
      "Afbouwstudio, het label van MTB Bouw uit Enschede voor afbouw van bedrijfspanden en horeca in Twente en Overijssel.",
    url: "/afbouwstudio",
  },
};

const SPECIALISMS = [
  {
    icon: CupIcon,
    title: "Horeca-afbouw",
    body: "Lunchrooms, koffiebars, restaurants en bakkerijen. Wij bouwen interieurs af die de sfeer van jouw merk versterken — van vloer tot plafond, van bar tot achterkeuken. Voorbeeld: De Broodbode in Zwolle en Apeldoorn.",
    href: "/afbouwstudio/horeca-verbouwen",
  },
  {
    icon: BuildingIcon,
    title: "Retail & winkels",
    body: "Showrooms, winkelpanden en concept stores. We werken met retail-architecten en zorgen dat de afbouw klaar is vóór je openingsdatum. Geen vertraging, wel resultaat.",
    href: "/afbouwstudio/winkel-verbouwen",
  },
  {
    icon: WallIcon,
    title: "Kantoren & werkplaatsen",
    body: "Kantoorinrichting, scheidingswanden, akoestische plafonds, vergaderruimtes. Praktisch, duurzaam, en afgestemd op hoe jullie werken in Enschede en Twente.",
    href: "/afbouwstudio/kantoor-verbouwen",
  },
  {
    icon: ShedIcon,
    title: "Bedrijfshallen & utiliteit",
    body: "Afbouw van logistieke hallen, werkplaatsen en utiliteitspanden. Beton, staal, isolatie, vloeren, verlichting — alles op elkaar afgestemd.",
    href: "/afbouwstudio/bedrijfspand-verbouwen",
  },
];

const STEPS = [
  { icon: MapPinIcon, title: "Intake op locatie", body: "We komen langs met de app — alles direct vastgelegd." },
  { icon: ClockIcon, title: "Voorstel + offerte", body: "Binnen 5 werkdagen een vaste prijs op tafel." },
  { icon: UsersIcon, title: "Uitvoering", body: "Eén team, één planning, wekelijkse update." },
  { icon: ShieldIcon, title: "Oplevering + nazorg", body: "Sleutel + 5 jaar garantie." },
];

const CASES = [
  {
    tag: "Nieuwbouw casco → sleutelklaar",
    title: "Broodbode Zwolle",
    location: "Schuurmansstraat, Wezenlanden",
    type: "Compleet nieuwe lunchroom",
    looptijd: "7 weken",
    story:
      "Een leeg casco-pand in een nieuw ontwikkelingsgebied. Wij bouwden de complete lunchroom af: keukenblok, counter met etalage, zitruimte, sanitair en achterkeuken. Met onze app legden we tijdens het eerste bezoek elke wand vast — een week later lag het complete voorstel op tafel.",
    items: ["Tegelwerk vloer & wanden", "Bar / counter op maat", "Akoestisch plafond", "Verlichtingsplan", "Sanitair", "Schilderwerk", "Keukenblok-installatie", "Opgeleverd vóór opening"],
    img: "/images/projects/project-2.jpg",
  },
  {
    tag: "Restyling bestaand pand",
    title: "Broodbode Apeldoorn",
    location: "Centrum Apeldoorn",
    type: "Restyling lunchroom",
    looptijd: "4 weken (10 dagen dicht)",
    story:
      "Bestaand pand, maar de uitstraling moest aansluiten bij de nieuwe Broodbode-stijl. Wij planden de werkzaamheden zo dat de zaak slechts 10 dagen dicht hoefde — de rest deden we 's nachts en in fasen.",
    items: ["Vernieuwd interieur", "Nieuwe vloer", "Bar uitgebreid", "Verlichting vervangen", "Schilderwerk", "Akoestiek verbeterd", "Heropening op planning"],
    img: "/images/projects/project-1.jpg",
  },
];

const SECTORS = ["Lunchrooms", "Bakkerijen", "Restaurants", "Cafés", "Showrooms", "Winkels", "Kantoren", "Werkplaatsen", "Kapsalons", "Sportscholen", "Praktijken", "Bedrijfshallen"];
const PARTNERS = ["Broodbode", "Dukato", "BMN", "Gevelaar", "VvE Beheer Twente", "Kuality"];

const PILLARS = [
  { icon: UsersIcon, title: "Eén aanspreekpunt", body: "Geen onderaannemers-circus. Mathijs of Robbert is jouw vaste contact. Bel, app, mail — je krijgt antwoord." },
  { icon: ShieldIcon, title: "Vaste prijs, vaste planning", body: "Wij geven offertes met vaste prijs en realistische planningen. Geen meerwerk-verrassingen tenzij jij iets wijzigt." },
  { icon: ClockIcon, title: "Bouwen rond jouw business", body: "Werkzaamheden 's nachts? In fasen? In één weekend? Voor horeca en retail in Enschede en Twente passen wij ons aan jouw openingstijden aan." },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
      {children}
    </p>
  );
}

export default function AfbouwstudioPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Afbouwstudio", url: "/afbouwstudio" },
        ]}
      />
      <ServiceJsonLd
        name="Afbouw bedrijfspanden en horeca"
        description="Afbouw van bedrijfspanden, horeca, retail en kantoren in Enschede, Twente en Overijssel, onder het label Afbouwstudio van MTB Bouw."
        url="/afbouwstudio"
        serviceType="Afbouw bedrijfspanden en horeca"
      />
      <FaqJsonLd items={faqZakelijkeAfbouw} />

      {/* HERO */}
      <PageHero
        variant="image"
        image={{
          src: "/images/projects/bedrijfshal-borne.webp",
          alt: "Afgebouwd bedrijfspand door Afbouwstudio, het zakelijke afbouw-label van MTB Bouw",
        }}
        eyebrow="Afbouwstudio · Zakelijke afbouw"
        title="Bedrijfspanden en horeca, afgebouwd zoals het hoort."
        intro="Afbouwstudio is het label van MTB Bouw voor zakelijke afbouw: van casco tot sleutelklaar. Wij bouwen bedrijfspanden en horeca-locaties af in Enschede, Twente en ver daarbuiten — strak, snel en met één team dat doet wat het belooft."
        cta={
          <>
            <ArrowLink href="#contact" onDark>Plan een intake</ArrowLink>
            <ArrowLink href="#cases" onDark>Bekijk onze cases</ArrowLink>
          </>
        }
      />

      {/* 01 — SPECIALISMEN */}
      <section id="specialismen" className="scroll-mt-24 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <Eyebrow>01 — Specialismen</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Onze focus: afbouw die werkt voor jouw business
          </h2>
          {/* Kaarten linken door naar de sector-subpagina's — bewust géén
              extra linklijsten of menu-items: hub-and-spoke houdt de site
              overzichtelijk terwijl alles crawlbaar blijft. */}
          <div className="mt-12 grid gap-px border-l border-t border-mist md:grid-cols-2">
            {SPECIALISMS.map(({ icon: Icon, title, body, href }) => (
              <a
                key={title}
                href={href}
                className="group border-b border-r border-mist bg-white p-8 transition-colors hover:bg-paper md:p-10"
              >
                <Icon className="h-8 w-8 text-lime-dark" />
                <h3 className="mt-6 text-2xl font-extrabold">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone">{body}</p>
                <span className="mt-5 inline-block text-sm font-bold group-hover:text-lime-dark">
                  Meer info →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — WERKWIJZE */}
      <section id="werkwijze" className="scroll-mt-24 border-y border-mist bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <Eyebrow>02 — Werkwijze</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl">
                Wand. Vloer. Plafond. Live in onze eigen app.
              </h2>
              <p className="mt-6 leading-relaxed text-stone">
                Wij hebben een eigen app gebouwd waarmee we tijdens het eerste
                pandbezoek elke wand, vloer en plafond live inventariseren —
                inclusief afmetingen, foto&apos;s, materiaalstaat en gewenste
                afwerking. Het resultaat? Sneller schakelen, minder ruis, en jij
                ziet direct wat we voorstellen.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Plattegrond inscannen of importeren",
                  "Per wand/vloer/plafond status + materiaal + wens vastleggen",
                  "Foto's gekoppeld aan exacte plek in plattegrond",
                  "Direct deelbaar met jou als opdrachtgever",
                  "Materialen, kleuren en deadlines geüpdatet zonder e-mail-pingpong",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] text-ink">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-lime-dark" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Statische PandScan-visual */}
            <div className="mx-auto w-full max-w-sm border border-mist bg-white">
              <div className="border-b border-mist px-5 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone">
                  Afbouwstudio · PandScan
                </p>
                <p className="mt-1 font-display text-lg font-bold">Broodbode · Zwolle</p>
              </div>
              <div className="relative aspect-[4/3] bg-lime/10">
                <svg viewBox="0 0 200 150" className="h-full w-full" aria-hidden="true">
                  <rect x="20" y="20" width="160" height="110" fill="none" stroke="var(--color-ink)" strokeWidth="1.5" />
                  <path d="M20 80h160M110 20v110" stroke="var(--color-ink)" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                  <rect x="34" y="34" width="60" height="26" fill="none" stroke="var(--color-lime)" strokeWidth="2.4" />
                </svg>
              </div>
              <div className="space-y-1.5 p-3">
                {[
                  ["Wand 1", "Stuc — glad afgewerkt"],
                  ["Vloer", "Gietvloer · 96 m²"],
                  ["Plafond", "Akoestiek · zwart"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between border border-mist bg-white px-3 py-2 text-[11px]">
                    <span className="font-semibold text-ink">{k}</span>
                    <span className="text-stone">{v}</span>
                  </div>
                ))}
              </div>
              <div className="bg-ink px-3 py-2.5 text-center text-[11px] font-semibold text-white">
                Deel met opdrachtgever
              </div>
            </div>
          </div>

          {/* 4 stappen */}
          <div className="mt-20 grid gap-px border-l border-t border-mist md:grid-cols-4">
            {STEPS.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="border-b border-r border-mist bg-white p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-display text-3xl font-extrabold text-lime-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-5 w-5 text-ink" />
                </div>
                <h3 className="font-display text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — CASE STUDY */}
      <section id="cases" className="scroll-mt-24 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <Eyebrow>03 — Case study</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            De Broodbode. Twee locaties, één signatuur.
          </h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-stone">
            Toen De Broodbode uitbreidde naar Zwolle en hun locatie in Apeldoorn
            een complete restyling kreeg, kwamen ze bij Afbouwstudio. De opdracht:
            een ambachtelijke lunchroom afbouwen waar elke focaccia en elke koffie
            tot zijn recht komt. Twee panden, twee karakters — één strakke
            uitvoering.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {CASES.map((c) => (
              <article key={c.title} className="group overflow-hidden border border-mist bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <Image
                    src={c.img}
                    alt={`${c.title} ${c.location} — afbouw door Afbouwstudio`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-lime px-2.5 py-1 text-[11px] font-semibold text-ink">
                    {c.tag}
                  </span>
                </div>
                <div className="p-7 md:p-9">
                  <h3 className="text-2xl font-extrabold md:text-3xl">{c.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-stone">
                    <span className="flex items-center gap-1.5">
                      <MapPinIcon className="h-3.5 w-3.5" />
                      {c.location}
                    </span>
                    <span>{c.type}</span>
                    <span className="flex items-center gap-1.5">
                      <ClockIcon className="h-3.5 w-3.5" />
                      {c.looptijd}
                    </span>
                  </div>
                  <p className="mt-5 text-[15px] leading-relaxed text-stone">{c.story}</p>
                  <div className="mt-5 border-t border-mist pt-5">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone">
                      Wat we deden
                    </p>
                    <ul className="grid gap-x-4 gap-y-1.5 text-sm text-ink sm:grid-cols-2">
                      {c.items.map((it) => (
                        <li key={it} className="flex gap-2">
                          <span className="text-lime-dark">·</span>
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <blockquote className="mt-16 border-l-4 border-lime bg-lime/10 p-10 md:p-14">
            <p className="font-display text-2xl font-bold leading-[1.15] text-ink md:text-3xl">
              &ldquo;Afbouwstudio was van het eerste pandbezoek tot oplevering
              helder, snel en vakkundig. De app waarmee ze elke wand vastlegden
              voelde als een professional move — geen verrassingen achteraf.&rdquo;
            </p>
            <footer className="mt-5 text-sm font-semibold text-stone">
              — Team De Broodbode
            </footer>
          </blockquote>
        </div>
      </section>

      {/* SCHETS BREAK */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
            Niet bouwen op gevoel. Bouwen op plan.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Elke wand, elk plafond, elke vierkante meter — vastgelegd, getekend,
            gedeeld. Voor jou en voor ons.
          </p>
        </div>
      </section>

      {/* 04 — SECTOREN */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <Eyebrow>04 — Sectoren</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Voor ondernemers in Twente, Overijssel en daarbuiten
          </h2>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {SECTORS.map((s) => (
              <li key={s} className="border border-ink/15 bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-lime-dark hover:bg-lime">
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-14 border-t border-mist pt-10">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone">
              Partners & opdrachtgevers
            </p>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {PARTNERS.map((p) => (
                <span key={p} className="font-display text-xl font-bold text-ink/40 transition-colors hover:text-ink md:text-2xl">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — WAAROM */}
      <section className="border-y border-mist bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <Eyebrow>05 — Waarom</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Geen bouwsoap. Een team dat doet wat het zegt.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="border-t-2 border-lime pt-6">
                <Icon className="h-8 w-8 text-ink" />
                <h3 className="mt-5 text-2xl font-extrabold">{title}</h3>
                <p className="mt-3 leading-relaxed text-stone">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion
        items={faqZakelijkeAfbouw}
        eyebrow="06 — Veelgesteld"
        title="Vragen van zakelijke opdrachtgevers"
      />

      {/* CTA */}
      <section id="contact" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime">
            Persoonlijk contact
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Klaar voor de intake?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Stuur ons een bericht of bel direct. We komen binnen 7 dagen langs met
            onze app, leggen alles vast en sturen binnen 5 werkdagen een vaste
            offerte.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:info@mtbbouw.com?subject=Intake%20bedrijfspand"
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
          <p className="mt-6 text-sm text-white/50">
            Of stuur een mail naar info@mtbbouw.com — we reageren binnen één werkdag.
          </p>
        </div>
      </section>
    </>
  );
}
