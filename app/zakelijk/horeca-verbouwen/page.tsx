import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd, WebPageJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import { PhaseExplorer } from "@/components/zakelijk/phase-explorer";
import { ZakelijkContact } from "@/components/zakelijk/contact-section";
import { CheckIcon } from "@/components/icons";
import { facts } from "@/lib/facts";
import { faqHoreca } from "@/lib/faq";

const URL = "/zakelijk/horeca-verbouwen";
const TITLE = "Horeca afbouw & verbouwen in Twente | MTB Bouw";
const DESCRIPTION =
  "Een lunchroom, restaurant of horecapand verbouwen in Enschede of Twente? Bekijk de aanpak van MTB Bouw en onze afbouwprojecten voor De Broodbode.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    images: [{ url: "/images/projects/broodbode-apeldoorn/01.jpg" }],
  },
};

const ONDERDELEN = [
  {
    title: "Indeling en bouwkundige wanden",
    text: "Gastruimte, bar, keuken, spoelruimte, opslag en toiletten op de juiste plek. Nieuwe wanden in metal stud of Ytong, zoals in Apeldoorn.",
  },
  {
    title: "Vloeren, tegelwerk en afwerking",
    text: "Tegelwerk op vloer en wanden, vloercoating, schilderwerk en de details die gasten zien. In Apeldoorn ging het om circa 180 m² tegelwerk.",
  },
  {
    title: "Balie, bar en maatwerk",
    text: "Counters, balies, zitbanken, lambrisering en kasten, op maat gemaakt en afgewerkt. Verlichting werken we waar het kan weg in het maatwerk.",
  },
  {
    title: "Plafonds en akoestiek",
    text: "Een volle zaak is snel rumoerig. Een akoestisch plafond dempt de galm; in Zwolle kozen we voor een zwart akoestisch plafond.",
  },
  {
    title: "Sanitair en achterruimte",
    text: "Toiletten, een wasruimte, de spoelkeuken en de achterkeuken: betegeld, goed schoon te houden en logisch ingedeeld voor het team.",
  },
  {
    title: "Afstemming met installateurs",
    text: "Elektra, verlichting en ventilatie doen gespecialiseerde installateurs. Wij stemmen het werk af; in Apeldoorn verzorgde HIBO de nieuwe meterkast.",
  },
];

const CASES = [
  {
    href: "/projecten/broodbode-zwolle-lunchroom",
    title: "De Broodbode Zwolle",
    meta: "Zwolle, wijk Wezenlanden · 7 weken",
    img: "/images/projects/broodbode-zwolle-lunchroom/01-counter.jpg",
    alt: "Verlichte counter met houten lamellen en het logo van De Broodbode in Zwolle",
    rows: [
      ["Beginsituatie", "Een casco pand in een nieuw ontwikkelingsgebied: kale vloeren, geen wanden, geen plafond."],
      ["Vraag", "Een lunchroom die past bij de ambachtelijke stijl van De Broodbode, klaar voor de geplande opening."],
      ["Ons werk", "Tegelwerk op vloer en wanden, bar en counter met etalage op maat, akoestisch plafond, verlichtingsplan, sanitair en achterkeuken, schilderwerk en installatie van het keukenblok."],
      ["Uitdaging", "Van niets naar een complete zaak in zeven weken, met een ruimte die ook vol gasten prettig klinkt."],
      ["Resultaat", "Opgeleverd vóór de opening."],
    ],
  },
  {
    href: "/projecten/broodbode-apeldoorn-lunchroom",
    title: "De Broodbode Apeldoorn",
    meta: "Centrum Apeldoorn · circa 7 weken, zomervakantie 2026",
    img: "/images/projects/broodbode-apeldoorn/07.jpg",
    alt: "Ronde maatwerkbalie met roze sierbetegeling en terrazzo blad bij De Broodbode Apeldoorn",
    rows: [
      ["Beginsituatie", "Een winkelpand uit de jaren '40–'50 met een indeling, techniek en uitstraling die niet meer pasten."],
      ["Vraag", "Een warme huiskamer-lunchroom, uitgevoerd in de zomervakantie zodat de zaak zo kort mogelijk dicht hoefde."],
      ["Ons werk", "Gedeeltelijke sloop, nieuwe indeling met Ytong- en metal stud-wanden, nieuwe elektra met krachtstroom, circa 180 m² tegelwerk, twee ronde maatwerkbalies met doekglas, lambrisering en zitbanken."],
      ["Partners", "HIBO voor de meterkast en elektra, Het Vloerenhof voor de vloercoating."],
      ["Uitdaging", "Sloop, opbouw, installaties en afwerking in elkaar schuiven binnen een vaste vakantieperiode."],
    ],
  },
];

const FASEN = [
  {
    title: "Ontwerp en keuzes",
    text: "Indeling, materialen, kleuren, verlichting en de keuken liggen vast. Hoe eerder dit rond is, hoe beter de planning klopt. Wijzigingen later in het traject kosten bijna altijd tijd.",
    tempo: ["Jouw ontwerp of dat van je ontwerper", "Keuzes voor tegels, maatwerk en verlichting", "De keuken en de apparatuur"],
  },
  {
    title: "Bestellen en vergunningen",
    text: "Apparatuur, tegels, maatwerk en installatiemateriaal hebben levertijden. Tegelijk regel je bij de gemeente wat je zaak nodig heeft om open te mogen.",
    tempo: ["Levertijden van apparatuur en materialen", "Vergunningen en beslistermijnen van de gemeente"],
  },
  {
    title: "Bouwen in de goede volgorde",
    text: "Eerst sloop en indeling, dan leidingen en installaties, daarna vloeren, wanden, plafonds en tegelwerk. Maatwerk en afwerking komen als laatste.",
    tempo: ["Beschikbaarheid van installateurs", "Droogtijden van vloeren, lijm en voegen", "Wat er tijdens de sloop tevoorschijn komt"],
  },
  {
    title: "Testen en opleveren",
    text: "Installaties testen, apparatuur aansluiten, schoonmaken en samen de oplevering nalopen. Daarna is de zaak klaar voor het team en de eerste gasten.",
    tempo: ["Aansluiten van apparatuur door de leverancier", "Keuringen en controles", "Openstaande punten uit de oplevering"],
  },
];

const KOSTEN = [
  "Casco of een bestaande zaak",
  "De oppervlakte en het aantal ruimtes",
  "Keuken, spoelruimte en techniek",
  "Het afwerkingsniveau en de materialen",
  "Hoeveel maatwerk er in de zaak komt",
  "Het werk van de installateurs",
  "Gefaseerd werken of in één keer",
];

export default function HorecaVerbouwenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Zakelijk", url: "/zakelijk" },
          { name: "Horeca afbouw & verbouwen", url: URL },
        ]}
      />
      <WebPageJsonLd name="Horeca afbouw en verbouwen in Enschede en Twente" description={DESCRIPTION} url={URL} />
      <ServiceJsonLd
        name="Horeca afbouw en verbouwen"
        description="Afbouw van casco horecapanden en verbouwing van bestaande horecazaken door MTB Bouw uit Enschede: indeling, tegelwerk, maatwerk, plafonds en afwerking, met afstemming van installaties."
        url={URL}
        serviceType="Horeca afbouw en verbouwing"
      />
      <FaqJsonLd items={faqHoreca} />

      {/* 1 — HERO */}
      <PageHero
        variant="image"
        image={{
          src: "/images/projects/broodbode-apeldoorn/01.jpg",
          alt: "Sfeervol zitgedeelte met vintage behang en houten meubels in lunchroom De Broodbode in Apeldoorn",
          position: "50% 60%",
        }}
        eyebrow="Zakelijk · Horeca"
        title="Horeca afbouw en verbouwen in Enschede en Twente"
        tagline="Van leeg pand naar een zaak die klopt."
        intro="MTB Bouw verzorgt horeca-afbouw en horecaverbouwingen voor ondernemers in Enschede en Twente. We maken een casco pand gebruiksklaar of passen een bestaande zaak aan, van indeling en tegelwerk tot maatwerk en afstemming van installaties. Onze projecten voor De Broodbode in Zwolle en Apeldoorn laten zien hoe we dat aanpakken."
        cta={
          <>
            <ArrowLink drawer preset="zakelijk" onDark>
              Bespreek je horecaplan
            </ArrowLink>
            <ArrowLink href="#cases" onDark>
              Bekijk De Broodbode-projecten
            </ArrowLink>
          </>
        }
      />

      {/* 2 — CASCO OF BESTAAND */}
      <section className="bg-paper">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow text-stone">01 — Afbouwen of verbouwen</p>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">Casco afbouwen of een bestaande zaak verbouwen</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Afbouwen is een casco pand gebruiksklaar maken. Verbouwen is een
            zaak die er al is aanpassen. Het verschil zit in het startpunt, en
            dat bepaalt wat er moet gebeuren.
          </p>
          <div className="mt-12 grid gap-px border-l border-t border-mist md:grid-cols-2">
            {[
              {
                kop: "Casco pand",
                sub: "Je begint met een lege ruimte",
                img: "/images/projects/broodbode-zwolle-lunchroom/03.jpg",
                alt: "Afgebouwde gastruimte van De Broodbode in Zwolle, voorheen een casco pand",
                items: ["Indeling van gastruimte, keuken en voorzieningen", "Aansluitingen en techniek, met de installateurs", "Wanden, plafonds, vloeren en tegelwerk", "Maatwerk en afwerking", "Samen opleveren"],
              },
              {
                kop: "Bestaande zaak",
                sub: "Er staat al iets, en niet alles hoeft weg",
                img: "/images/projects/broodbode-apeldoorn/05.jpg",
                alt: "Lambrisering met wandlampen en sierbetegeling in de verbouwde gastruimte van De Broodbode Apeldoorn",
                items: ["Inventariseren wat kan blijven", "Sloop en een nieuwe indeling waar nodig", "Vervangen van techniek, sanitair of afwerking", "Fasering, zodat de zaak zo kort mogelijk dicht is", "Samen opleveren"],
              },
            ].map((k) => (
              <div key={k.kop} className="grid border-b border-r border-mist bg-white sm:grid-cols-5">
                <div className="relative aspect-[4/3] sm:col-span-2 sm:aspect-auto">
                  <Image src={k.img} alt={k.alt} fill sizes="(max-width: 640px) 100vw, 20vw" className="object-cover" />
                </div>
                <div className="p-7 sm:col-span-3">
                  <h3 className="text-2xl font-semibold">{k.kop}</h3>
                  <p className="mt-1 text-sm text-stone">{k.sub}</p>
                  <ul className="mt-5 space-y-2">
                    {k.items.map((t) => (
                      <li key={t} className="flex gap-3 text-[15px] text-ink">
                        <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-stone">
            De scope verschilt per pand. Een lunchroom verbouwen is iets anders
            dan een complete restaurantkeuken realiseren. Wat jouw zaak nodig
            heeft, bepalen we samen na een opname op locatie.
          </p>
        </div>
      </section>

      {/* 3 — ONDERDELEN */}
      <section className="border-y border-mist bg-white">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow text-stone">02 — Wat we doen</p>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">Van gastgedeelte tot achterkeuken</h2>
          <ol className="mt-12 grid gap-px border-l border-t border-mist sm:grid-cols-2 lg:grid-cols-3">
            {ONDERDELEN.map((o, i) => (
              <li key={o.title} className="border-b border-r border-mist bg-white p-7">
                <span className="label-num text-navy">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-semibold">{o.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-stone">{o.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-stone">
            Wie wat doet, spreken we vooraf af. Het ontwerp van je zaak en de
            keukenapparatuur kunnen van jou, je ontwerper of je leverancier
            komen. Wij doen de bouwkundige uitvoering en de afwerking, en zorgen
            dat het werk van iedereen in de goede volgorde gebeurt.
          </p>
        </div>
      </section>

      {/* 4 — CASES */}
      <section id="cases" className="scroll-mt-24 bg-paper">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow text-stone">03 — Twee projecten</p>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">De Broodbode in Zwolle en Apeldoorn</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Dezelfde opdrachtgever, twee heel verschillende panden. In Zwolle
            begonnen we met een lege betonnen doos, in Apeldoorn met een oud
            winkelpand dat eerst deels gesloopt moest worden.
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {CASES.map((c) => (
              <article key={c.href} className="flex flex-col border border-mist bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <Image src={c.img} alt={c.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <h3 className="text-2xl font-semibold md:text-3xl">{c.title}</h3>
                  <p className="mt-2 text-sm text-stone">{c.meta}</p>
                  <dl className="mt-6 flex-1 divide-y divide-mist border-y border-mist">
                    {c.rows.map(([k, v]) => (
                      <div key={k} className="grid gap-1 py-3 sm:grid-cols-[8.5rem_1fr] sm:gap-4">
                        <dt className="label-mono pt-0.5 text-stone">{k}</dt>
                        <dd className="text-[15px] leading-relaxed text-ink">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link
                    href={c.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-ink underline decoration-lime decoration-2 underline-offset-4 hover:decoration-ink"
                  >
                    Lees het hele project →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Tijdens en na: zelfde wandkast in Zwolle */}
          <figure className="mx-auto mt-16 max-w-4xl border border-mist bg-white p-5 md:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  label: "Tijdens",
                  img: "/images/projects/broodbode-zwolle-lunchroom/02.jpg",
                  alt: "Vakman richt de houten wandkast in tijdens de afbouw van De Broodbode in Zwolle",
                },
                {
                  label: "Na",
                  img: "/images/projects/broodbode-zwolle-lunchroom/cover.jpg",
                  alt: "Dezelfde wandkast na de oplevering, met hanglamp en lange tafel, bij De Broodbode in Zwolle",
                },
              ].map((f) => (
                <div key={f.label} className="relative aspect-[4/5] overflow-hidden bg-ink">
                  <Image src={f.img} alt={f.alt} fill sizes="(max-width: 640px) 100vw, 40vw" className="object-cover" />
                  <span className="absolute left-3 top-3 bg-ink px-2.5 py-1 text-[11px] font-semibold text-white">{f.label}</span>
                </div>
              ))}
            </div>
            <figcaption className="mt-4 text-sm leading-relaxed text-stone">
              De Broodbode Zwolle: de houten wandkast tijdens het inrichten en na
              de oplevering. Echte foto&apos;s van het project, niet vanuit
              precies dezelfde hoek.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* 5 — PLANNEN NAAR EEN OPENING */}
      <section className="border-y border-mist bg-white">
        <div className="container-page py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-stone">04 — Plannen</p>
              <h2 className="display mt-4 text-4xl md:text-5xl">Plannen naar een opening</h2>
            </div>
            <div className="space-y-4 leading-relaxed text-stone lg:col-span-7">
              <p>
                Een openingsdatum hangt van meer af dan het bouwwerk alleen.
                Ontwerp en materiaalkeuzes moeten rond zijn, apparatuur en
                materialen hebben levertijden, vergunningen hebben hun eigen
                termijnen, en het werk moet in de goede volgorde gebeuren. Aan
                het eind wordt alles getest en samen opgeleverd.
              </p>
              <p>
                Daarom beoordelen we een openingsdatum samen, als die stukken
                bekend zijn. Of de zaak tijdens de werkzaamheden (deels) open
                kan blijven, hangt af van wat er moet gebeuren. In Apeldoorn
                viel het werk in de zomervakantie, zodat de zaak zo kort
                mogelijk dicht hoefde.
              </p>
              <p>
                Welke vergunningen je zaak nodig heeft, verschilt per gemeente.
                Het{" "}
                <a
                  href="https://ondernemersplein.overheid.nl/bedrijf-starten/startsituaties/stappenplan-horecabedrijf-starten/"
                  className="font-semibold text-ink underline hover:text-navy"
                  rel="noopener"
                >
                  stappenplan horecabedrijf starten van Ondernemersplein
                </a>{" "}
                zet de regels op een rij. Of een bouwkundige wijziging
                vergunningplichtig is, check je met de{" "}
                <a
                  href="https://omgevingswet.overheid.nl/checken"
                  className="font-semibold text-ink underline hover:text-navy"
                  rel="noopener"
                >
                  Vergunningcheck van het Omgevingsloket
                </a>
                . Gecontroleerd op 1 november 2026.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <p className="label-mono mb-4 text-stone">Illustratief overzicht · de duur per fase verschilt per zaak</p>
            <PhaseExplorer phases={FASEN} />
          </div>
        </div>
      </section>

      {/* 6 — KOSTEN */}
      <section className="bg-paper">
        <div className="container-page grid gap-10 py-20 md:py-28 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-stone">05 — Kosten</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">Wat bepaalt de kosten?</h2>
            <p className="mt-5 leading-relaxed text-stone">
              Een prijs per vierkante meter zegt bij horeca weinig. Twee zaken
              van dezelfde grootte kunnen heel anders uitvallen. Dit zijn de
              factoren die het verschil maken.
            </p>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid gap-px border-l border-t border-mist sm:grid-cols-2">
              {KOSTEN.map((k) => (
                <li key={k} className="border-b border-r border-mist bg-white px-5 py-4 text-[15px] text-ink">
                  {k}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-stone">
              Na de opname op locatie maken we de offerte op. {facts.offerte.standaard}{" "}
              Meerwerk voeren we alleen uit na jouw akkoord.
            </p>
          </div>
        </div>
      </section>

      {/* 7 — VRAGEN */}
      <FaqAccordion items={faqHoreca} eyebrow="06 — Veelgesteld" title="Vragen die bij een horeca-intake horen" />

      {/* 8 — LOKAAL EN VERDIEPING */}
      <section className="border-t border-mist bg-white">
        <div className="container-page grid gap-10 py-16 md:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-stone">Lokaal</p>
            <p className="mt-4 leading-relaxed text-stone">
              We werken vanuit Enschede voor horecaondernemers in heel Twente.
              Kijk ook bij{" "}
              <Link href="/aannemer-enschede" className="font-semibold text-ink underline hover:text-navy">
                ons werkgebied in Enschede
              </Link>{" "}
              of{" "}
              <Link href="/aannemer-twente" className="font-semibold text-ink underline hover:text-navy">
                ons werkgebied in Twente
              </Link>
              .
            </p>
          </div>
          <div>
            <p className="eyebrow text-stone">Verder lezen</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/kennisbank/lunchroom-beginnen-van-leeg-pand-tot-opening" className="font-semibold text-ink underline hover:text-navy">
                  Een lunchroom beginnen: van leeg pand tot opening
                </Link>
              </li>
              <li>
                <Link href="/projecten/broodbode-zwolle-lunchroom" className="font-semibold text-ink underline hover:text-navy">
                  Project: De Broodbode Zwolle
                </Link>
              </li>
              <li>
                <Link href="/projecten/broodbode-apeldoorn-lunchroom" className="font-semibold text-ink underline hover:text-navy">
                  Project: De Broodbode Apeldoorn
                </Link>
              </li>
              <li>
                <Link href="/zakelijk" className="font-semibold text-ink underline hover:text-navy">
                  Alles over zakelijk verbouwen bij MTB Bouw
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <ZakelijkContact
        title="Laat ons meekijken naar je pand"
        intro="Vertel waar je zaak komt, wat er nu staat en wanneer je open wilt. We komen kijken en maken daarna een gespecificeerde offerte."
        cta="Bespreek je horecaplan"
      />
    </>
  );
}
