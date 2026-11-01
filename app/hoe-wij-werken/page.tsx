import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/json-ld";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { QuoteButton } from "@/components/ui/quote-button";
import { ShieldIcon } from "@/components/icons";
import { KennisbankBlock } from "@/components/kennisbank/kennisbank-block";
import { site } from "@/lib/site";
import { facts } from "@/lib/facts";

const description =
  "Zo verloopt bouwen met MTB Bouw: gratis intake op locatie, inmeten, een volledig gespecificeerde offerte, projectplan, bouwen en nazorg.";

export const metadata: Metadata = {
  title: "Hoe wij werken: van gratis intake tot oplevering",
  description,
  alternates: { canonical: "/hoe-wij-werken" },
  openGraph: {
    type: "website",
    title: "Hoe wij werken: van gratis intake tot oplevering | MTB Bouw",
    description,
    url: "/hoe-wij-werken",
  },
};

type Step = {
  id: string;
  title: string;
  tag?: string;
  text: string[];
  links?: { href: string; label: string }[];
};

/** De klantreis: van de eerste kop koffie tot na de oplevering. */
const steps: Step[] = [
  {
    id: "intake",
    title: "Intake op locatie",
    tag: "Gratis",
    text: [
      "We komen bij je langs, thuis of op de zaak. We lopen samen rond, luisteren naar wat je wilt en vertellen eerlijk wat er kan en wat niet.",
      "Dat uitgebreide advies kost je niets. Eerlijk is eerlijk: dit is onze marketing. We zitten liever een uur aan je keukentafel dan dat we een advertentie kopen.",
    ],
  },
  {
    id: "inmeten",
    title: "Inmeten en uittekenen",
    text: [
      "Daarna meten we alles in. Elke wand, vloer en elk plafond leggen we vast in onze eigen app, en we tekenen de bestaande situatie uit. Zo weten we allebei precies waar we het over hebben, en voorkomen we verrassingen later.",
    ],
  },
  {
    id: "offerte",
    title: "Een offerte die je kunt volgen",
    text: [
      "Je krijgt een volledig gespecificeerde offerte. Geen ronde bedragen, maar hoeveelheden: zoveel m² wand, zoveel m² dak, kozijnen per stuk en de uren werkvoorbereiding. Zo zie je wat elk onderdeel kost en kun je eerlijk vergelijken.",
      "Vraag gerust ook bij een ander een offerte op. Dat raden we zelf aan.",
    ],
    links: [
      { href: "/kennisbank/offertes-vergelijken-verbouwing", label: "Offertes vergelijken: zo doe je dat" },
      { href: "/kennisbank/wat-kost-een-aanbouw-2026", label: "Wat kost een aanbouw?" },
      { href: "/kennisbank/kantoor-verbouwen-kosten-2026", label: "Wat kost een kantoorverbouwing?" },
    ],
  },
  {
    id: "projectplan",
    title: "Projectplan en Mijn Blauwdruk",
    text: [
      "Ga je akkoord, dan volgt het projectplan: planning, afspraken, veiligheid en garanties, zwart op wit.",
      "In Blauwdruk, onze eigen app, leggen we tekeningen, keuzes en planning vast. En wat er wel in de offerte zit, maar ook wat niet. Dat is net zo belangrijk. Mijn Blauwdruk, de online omgeving waarin je dat zelf kunt volgen, komt binnenkort.",
    ],
    links: [{ href: "/mijn-blauwdruk", label: "Over Mijn Blauwdruk" }],
  },
  {
    id: "bouwen",
    title: "Bouwen",
    text: [
      "Dan gaan we bouwen. Je hebt één vast aanspreekpunt, Mathijs of Robbert, en op de bouw staat ons vaste team met partners uit de regio die we al jaren kennen.",
      "Gebeurt er iets onverwachts? Dan hoor je het meteen, en bespreken we samen hoe we verder gaan.",
    ],
    links: [
      { href: "/over-ons", label: "Wie we zijn" },
      { href: "/regionale-partners", label: "Onze partners" },
    ],
  },
  {
    id: "oplevering",
    title: "Oplevering en nazorg",
    text: [
      `We lopen samen alle punten na, leggen ze vast en tekenen af. ${facts.garantie.uitvoering} ${facts.garantie.materialen} ${facts.garantie.wettelijk} ${facts.nazorg.nabellen}`,
    ],
    links: [{ href: "/veelgestelde-vragen", label: "Veelgestelde vragen" }],
  },
];

const procesFaq = [
  {
    question: "Wat kost een intake?",
    answer:
      "Niets. De kennismaking en intake op locatie zijn kosteloos en vrijblijvend.",
  },
  {
    question: "Werken jullie met een vaste prijs?",
    answer:
      "In 99% van onze projecten werken we met een vaste aanneemsom. Eventuele stelposten benoemen we transparant in de offerte.",
  },
  {
    question: "Doen jullie ook totaalprojecten?",
    answer:
      "Ja. Met ons vaste netwerk van partners en onderaannemers regelen we het complete traject, van constructie tot installaties en afwerking.",
  },
  {
    question: "Kan ik thuis blijven wonen tijdens de bouw?",
    answer:
      "Meestal wel. We bespreken dit vooraf en plannen het werk zo dat de overlast beperkt blijft.",
  },
];

function Arrow() {
  return (
    <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function HoeWijWerkenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Hoe wij werken", url: "/hoe-wij-werken" },
        ]}
      />
      <FaqJsonLd items={procesFaq} />

      {/* Kop en klantreis op tekenpapier dat in- en uitfadet */}
      <section className="blueprint-grid relative">
        <div className="container-page relative pb-20 pt-14 md:pb-28 md:pt-20">
          <p className="eyebrow text-stone">Samen bouwen</p>
          <h1 className="display mt-6 max-w-4xl text-5xl md:text-7xl">
            Hoe wij werken, van intake tot oplevering.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone">
            Verbouwen is spannend. Daarom zetten we elke stap voor je op een
            rij, zodat je vooraf weet wat er gebeurt, wie je over de vloer
            krijgt en wat het kost. Dit is de klantreis bij MTB Bouw.
          </p>

          <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-12">
            {/* Inhoud van de reis, blijft staan tijdens het scrollen */}
            <nav aria-label="Stappen van de klantreis" className="md:col-span-4">
              <div className="md:sticky md:top-24">
                <p className="eyebrow text-stone">De klantreis</p>
                <h2 className="display mt-4 text-3xl md:text-4xl">
                  Zes stappen, één aanspreekpunt
                </h2>
                <ol className="mt-8 border-t border-ink">
                  {steps.map((s, i) => (
                    <li key={s.id} className="border-b border-mist">
                      <a
                        href={`#${s.id}`}
                        className="flex items-baseline gap-4 py-3 text-sm font-semibold text-ink transition-colors hover:text-navy"
                      >
                        <span className="label-num text-navy">{pad(i + 1)}</span>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>

            <ol className="relative border-l border-ink/15 md:col-span-7 md:col-start-6">
              {/* Stap 0: de eerste stap zet jij */}
              <li className="relative pb-14 pl-8 md:pl-12">
                <span aria-hidden="true" className="absolute -left-[6px] top-2 size-3 bg-lime" />
                <div className="border border-ink/15 bg-white p-6 md:p-8">
                  <p className="label-mono text-stone">00 · Jij</p>
                  <h3 className="display mt-3 text-3xl md:text-4xl">De eerste stap zet jij</h3>
                  <p className="mt-4 leading-relaxed text-stone">
                    Bel, app of laat je gegevens achter, dan plannen we de intake.
                    De rest doen we samen.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <QuoteButton>Plan je gratis intake</QuoteButton>
                    <a
                      href={`tel:${site.telephoneHref}`}
                      className="label-mono inline-flex items-center justify-center border border-navy px-5 py-3.5 text-navy transition-colors hover:bg-navy hover:text-white"
                    >
                      Bel {site.telephone}
                    </a>
                  </div>
                </div>
              </li>

              {steps.map((s, i) => (
                <li key={s.id} id={s.id} className="relative scroll-mt-28 pb-14 pl-8 last:pb-0 md:pl-12">
                  <span aria-hidden="true" className="absolute -left-[6px] top-2 size-3 border-2 border-navy bg-white" />
                  <p className="label-mono flex items-center gap-3 text-navy">
                    <span className="label-num">{pad(i + 1)}</span>
                    {s.tag && (
                      <span className="bg-lime px-2 py-0.5 text-ink">{s.tag}</span>
                    )}
                  </p>
                  <h3 className="display mt-3 text-3xl md:text-4xl">{s.title}</h3>
                  <div className="mt-4 max-w-2xl space-y-4 leading-relaxed text-stone">
                    {s.text.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>
                  {s.links && (
                    <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                      {s.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            className="label-mono inline-flex items-center gap-1.5 text-navy underline decoration-lime decoration-2 underline-offset-4 hover:text-navy-dark"
                          >
                            {l.label} <Arrow />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Veilig en verantwoord — vangt ook de oude nav-link op */}
      <section id="veilig-en-verantwoord" className="border-y border-mist bg-white">
        <div className="container-page py-20 md:py-28">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow text-stone">Een stukje veiligheid</p>
              <h2 className="display mt-4 text-4xl md:text-5xl">
                Veiligheid is geen bijzaak
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-stone">
                Op onze bouwplaatsen werken we volgens VCA-richtlijnen: van
                valbeveiliging en bouwhekken tot toolbox-meetings en persoonlijke
                beschermingsmiddelen. Veiligheidseisen leggen we vast in het
                projectplan, zodat iedereen weet waar hij aan toe is.
              </p>
              <Link
                href="/veilig-verantwoord-bouwen"
                className="label-mono mt-6 inline-flex items-center gap-1.5 text-navy underline decoration-lime decoration-2 underline-offset-4"
              >
                Veilig en verantwoord bouwen <Arrow />
              </Link>
            </div>
            <div className="border-t-2 border-lime pt-8">
              <ShieldIcon className="h-7 w-7" />
              <h3 className="mt-4 text-xl font-semibold">SBB-erkend leerbedrijf</h3>
              <p className="mt-2 text-stone">
                MTB Bouw is door SBB erkend als leerbedrijf (ID 100812726). We
                leiden de vakmensen van morgen op, op onze eigen bouwplaatsen en
                onder begeleiding van ervaren collega&apos;s.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion items={procesFaq} title="Veelgestelde vragen over het proces" />

      <KennisbankBlock
        match={{ categories: ["bouwvoorbereiding", "tijdens-na-de-bouw"] }}
        title="Meer over kosten en aanpak"
      />
    </>
  );
}
