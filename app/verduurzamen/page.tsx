import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { QuoteButton } from "@/components/ui/quote-button";
import { HouseIcon, WindowIcon, LayersIcon, RecycleIcon } from "@/components/icons";
import { faqVerduurzamen } from "@/lib/faq";
import { KennisbankBlock } from "@/components/kennisbank/kennisbank-block";
import { RelatedContent } from "@/components/sections/related-content";
import { ServiceAreaLinks } from "@/components/sections/service-area-links";
import { portfolio } from "#site/content";

export const metadata: Metadata = {
  title: { absolute: "Woning verduurzamen in Enschede & Twente | MTB Bouw" },
  description:
    "Woning verduurzamen in Enschede en Twente: isolatie, HR++ glas en dakrenovatie gecombineerd met je verbouwing. Inclusief hulp bij de ISDE-subsidie.",
  alternates: { canonical: "/verduurzamen" },
  openGraph: {
    type: "website",
    title: "Woning verduurzamen in Enschede & Twente | MTB Bouw",
    description:
      "Isolatie, HR++ of triple glas en dakrenovatie, gecombineerd met je verbouwing. Eén planning, één vaste prijs, hulp bij de ISDE-subsidie.",
    url: "/verduurzamen",
    images: [
      {
        url: "/images/projects/renovatie-villa-zantinge-enschede/03.jpg",
        alt: "Woonruimte met nieuwe glazen pui en vloerverwarming in een gerenoveerde villa in Enschede",
      },
    ],
  },
};

const MAATREGELEN = [
  {
    icon: HouseIcon,
    title: "Isolatie van dak, gevel en vloer",
    text: "De basis van elke verduurzaming. Nemen we het voordeligst mee als het dak of de gevel tijdens de verbouwing toch open ligt.",
  },
  {
    icon: WindowIcon,
    title: "HR++ of triple glas en kozijnen",
    text: "Via ons eigen label De Kozijnstudio: nieuwe kozijnen met isolerend glas — direct minder tocht, geluid en stookkosten.",
  },
  {
    icon: LayersIcon,
    title: "Verduurzamen bij aan- of uitbouw",
    text: "Een nieuwe aanbouw bouwen we standaard goed geïsoleerd (Rc 4,7+); tegelijk pakken we de bestaande schil aan.",
  },
  {
    icon: RecycleIcon,
    title: "Voorbereid op de toekomst",
    text: "Goed geïsoleerd is de voorwaarde voor een (hybride) warmtepomp later — wij bouwen zo dat die stap klein wordt.",
  },
];

export default function VerduurzamenPage() {
  const projects = ["renovatie-villa-zantinge-enschede", "uitbouw-houtskeletbouw-enschede", "renovatie-schuur-behoud-karakter"]
    .map((slug) => portfolio.find((p) => p.slug === slug && !p.draft))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Verduurzamen", url: "/verduurzamen" },
        ]}
      />
      <ServiceJsonLd
        name="Woning verduurzamen in Enschede en Twente"
        description="Verduurzaming van woningen in Enschede en Twente: isolatie, HR++/triple glas en kozijnen, gecombineerd met verbouw of renovatie."
        url="/verduurzamen"
        serviceType="Woningverduurzaming"
      />
      <FaqJsonLd items={faqVerduurzamen} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/renovatie-villa-zantinge-enschede/03.jpg",
          alt: "Woonruimte met nieuwe glazen pui, dekvloer en vloerverwarming in een gerenoveerde villa in Enschede",
        }}
        eyebrow="Verduurzamen · Enschede & Twente"
        title="Woning verduurzamen in Enschede en Twente — het slimst tijdens je verbouwing"
        intro="Verduurzamen is het voordeligst op het moment dat de aannemer er toch al is. MTB Bouw combineert isolatie, beter glas en dakrenovatie met je verbouwing of aanbouw — één planning, één vaste prijs, en hulp bij de ISDE-subsidieaanvraag waar die van toepassing is."
        cta={<QuoteButton />}
      />

      {/* MAATREGELEN */}
      <section className="bg-paper">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow text-stone">
            Wat we doen
          </p>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">
            Verduurzamen met bouwkundige logica
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            De juiste volgorde: eerst de schil (isolatie en glas), dan pas de
            installaties. Zo wordt elke vervolgstap kleiner en goedkoper.
          </p>
          <div className="mt-12 grid gap-px border-l border-t border-mist md:grid-cols-2">
            {MAATREGELEN.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-b border-r border-mist bg-white p-8 md:p-10">
                <Icon className="h-8 w-8 text-navy" />
                <h3 className="mt-6 text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSIDIE */}
      <section className="border-y border-mist bg-white">
        <div className="container-page py-20 md:py-28">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow text-stone">
                Subsidie
              </p>
              <h2 className="display mt-4 text-4xl md:text-5xl">
                ISDE: subsidie op isolatie en glas
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Voor isolatiemaatregelen en isolerend glas bestaat de
                ISDE-regeling. De voorwaarden en bedragen wijzigen regelmatig —
                controleer daarom altijd de actuele regeling op{" "}
                <a
                  href="https://www.rvo.nl/subsidies-financiering/isde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-ink underline hover:text-navy"
                >
                  rvo.nl
                </a>
                . Wij denken mee over welke maatregelen in aanmerking komen en
                helpen bij de aanvraag. Lees ook onze{" "}
                <Link href="/kennisbank/isde-subsidie-uitgelegd#verbouwen-en-verduurzamen-tegelijk" className="font-semibold text-ink underline hover:text-navy">
                  gids over verbouwen en verduurzamen tegelijk
                </Link>
                .
              </p>
            </div>
            <div>
              <p className="eyebrow text-stone">
                Waarom combineren
              </p>
              <h2 className="display mt-4 text-4xl md:text-5xl">
                Eén bouwstroom, dubbele winst
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Ligt het dak open voor een dakkapel of wordt de gevel
                aangepakt bij een <Link href="/aanbouw-uitbouw" className="font-semibold text-ink underline hover:text-navy">aanbouw</Link>?
                Dan zijn de meerkosten van isolatie een fractie van wat een
                losse verduurzamingsklus later kost: de steiger, de aannemer en
                het sloopwerk zijn er al. Daarom nemen we verduurzaming
                standaard mee in elk <Link href="/verbouwing" className="font-semibold text-ink underline hover:text-navy">verbouwadvies</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedContent
        projects={projects}
        eyebrow="Ons werk"
        title="Isoleren en verduurzamen in onze projecten"
      />

      <FaqAccordion
        items={faqVerduurzamen}
        eyebrow="Veelgesteld"
        title="Vragen over verduurzamen"
      />

      <KennisbankBlock
        match={{ categories: ["installaties-energie"], subcategories: ["daken", "vloeren", "kozijnen-glas"], audience: "thuis" }}
        title="Meer over verduurzamen"
      />

      <ServiceAreaLinks
        label="Verduurzamen"
        intro="Vanuit Enschede verduurzamen we woningen in heel Twente. Op de pagina van jouw plaats vind je de huizen en wijken waar we werken."
      />

      <CtaBanner
        eyebrow="Vrijblijvend advies"
        title="Verbouwen én verduurzamen?"
        text="We rekenen eerlijk voor wat combineren je scheelt — inclusief subsidiecheck."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
