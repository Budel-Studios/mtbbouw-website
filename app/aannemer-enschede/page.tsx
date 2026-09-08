import type { Metadata } from "next";
import Link from "next/link";
import { portfolio } from "#site/content";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { RelatedContent } from "@/components/sections/related-content";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { NearbyPlaces } from "@/components/sections/nearby-places";
import { QuoteButton } from "@/components/ui/quote-button";
import { UsersIcon, EuroIcon, ClockIcon, HammerIcon, HouseIcon, WindowIcon, LayersIcon } from "@/components/icons";
import { faqAannemerEnschede } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Aannemer in Enschede — verbouw & renovatie | MTB Bouw" },
  description:
    "Aannemer in Enschede voor renovatie, aanbouw, uitbouw en kozijnen. Intake bij jou op locatie, een vaste prijs en één vast aanspreekpunt.",
  alternates: { canonical: "/aannemer-enschede" },
  openGraph: {
    type: "website",
    title: "Aannemer in Enschede — verbouw & renovatie | MTB Bouw",
    description: "Aannemer in Enschede voor renovatie, aanbouw, uitbouw en kozijnen. Intake bij jou op locatie, een vaste prijs en één vast aanspreekpunt.",
    url: "/aannemer-enschede",
  },
};

const DIENSTEN = [
  {
    icon: HammerIcon,
    title: "Renovatie & verbouw",
    text: "Van badkamer en keuken tot complete woningrenovatie — met oog voor het karakter van je huis.",
    href: "/verbouwing",
  },
  {
    icon: HouseIcon,
    title: "Aanbouw & uitbouw",
    text: "Meer ruimte zonder te verhuizen. Traditioneel gemetseld of prefab — de ruwbouw staat dan vaak binnen een week.",
    href: "/aanbouw-uitbouw",
  },
  {
    icon: WindowIcon,
    title: "Kozijnen",
    text: "Via ons eigen label De Kozijnstudio: hout, kunststof of aluminium, met eerlijk advies.",
    href: "/kozijnen",
  },
  {
    icon: LayersIcon,
    title: "Prefab bouwen",
    text: "Houtskeletbouw, prefab daken en wanden en overkappingen — snel geplaatst, weinig overlast.",
    href: "/prefab",
  },
];

export default function AannemerEnschedePage() {
  const projects = portfolio
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Aannemer in Enschede", url: "/aannemer-enschede" },
        ]}
      />
      <ServiceJsonLd
        name="Aannemer in Enschede"
        description="Aannemersbedrijf gevestigd in Enschede voor verbouw, renovatie, aanbouw, uitbouw en kozijnen. Vaste prijs en één aanspreekpunt."
        url="/aannemer-enschede"
        serviceType="Aannemer"
      />
      <FaqJsonLd items={faqAannemerEnschede} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/project-1.jpg",
          alt: "Verbouwing door aannemer MTB Bouw in Enschede",
        }}
        eyebrow="Aannemer Enschede"
        title="Aannemer in Enschede voor verbouw, aanbouw en renovatie"
        intro="MTB Bouw is een aannemersbedrijf uit Enschede. Wij verbouwen woningen door de hele stad — van Twekkelerveld tot Glanerbrug — met een vast team, een vaste prijs en één aanspreekpunt. We komen graag bij je langs voor een intake op locatie."
        cta={<QuoteButton />}
      />

      {/* DIENSTEN IN ENSCHEDE */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
            Wat we voor je doen
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Verbouwen in Enschede — alles onder één dak
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Als aannemer in Enschede nemen we het hele traject uit handen: van
            eerste schets en vergunningscheck tot uitvoering en oplevering.
            Deze diensten voeren we het meest uit:
          </p>
          <div className="mt-12 grid gap-px border-l border-t border-mist sm:grid-cols-2">
            {DIENSTEN.map(({ icon: Icon, title, text, href }) => (
              <Link
                key={title}
                href={href}
                className="group border-b border-r border-mist bg-white p-8 transition-colors hover:bg-paper"
              >
                <Icon className="h-7 w-7 text-lime-dark" />
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone">{text}</p>
                <span className="mt-4 inline-block text-sm font-bold group-hover:text-lime-dark">
                  Meer info →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* VERGUNNING & LOKALE KENNIS */}
      <section className="border-y border-mist bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
                Vergunningen in Enschede
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Wij kennen de regels van de gemeente
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Veel aanbouwen aan het achtererf zijn vergunningvrij, maar bij
                een dakopbouw, een wijziging aan de voorgevel of een woning in
                een beschermd stadsgezicht gelden regels van de gemeente
                Enschede. Wij toetsen jouw plan standaard in het voortraject en
                verzorgen waar nodig de omgevingsvergunning — zodat je niet
                voor verrassingen komt te staan.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
                Kosten
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Vaste prijs, vooraf helder
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Geen uurtje-factuurtje: na een vrijblijvende kennismaking en een
                opname bij jou thuis ontvang je een offerte met een vaste
                aanneemsom en een realistische planning. Eventuele stelposten
                benoemen we transparant. Zo weet je vóór de eerste hamerslag
                waar je aan toe bent. Tip: bekijk ook onze{" "}
                <Link href="/kennisbank/wat-kost-een-aanbouw-2026" className="font-semibold text-ink underline hover:text-lime-dark">
                  kostengids voor aanbouwen
                </Link>{" "}
                en{" "}
                <Link href="/verduurzamen-enschede" className="font-semibold text-ink underline hover:text-lime-dark">
                  verduurzamen tijdens de verbouwing
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAAROM */}
      <FeatureGrid
        items={[
          {
            icon: UsersIcon,
            title: "Eén aanspreekpunt",
            text: "Mathijs of Robbert is jouw vaste contact, van kennismaking tot nazorg.",
          },
          {
            icon: EuroIcon,
            title: "Vaste prijs",
            text: "Heldere offerte vooraf, geen meerwerk-verrassingen achteraf.",
          },
          {
            icon: ClockIcon,
            title: "Lokaal en snel",
            text: "Gevestigd in Enschede: korte lijnen, snel ter plaatse en bekend met de stad.",
          },
        ]}
      />

      <RelatedContent
        projects={projects}
        eyebrow="Eerder werk"
        title="Recente projecten in Enschede en omgeving"
      />

      <FaqAccordion
        items={faqAannemerEnschede}
        eyebrow="Veelgesteld"
        title="Vragen aan een aannemer in Enschede"
      />

      <NearbyPlaces currentSlug="aannemer-enschede" />

      <CtaBanner
        eyebrow="Vrijblijvend kennismaken"
        title="Verbouwplannen in Enschede?"
        text="Bel, app of mail — we komen langs, denken mee en je ontvangt een offerte met vaste prijs."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
