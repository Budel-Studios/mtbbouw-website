import type { Metadata } from "next";
import Link from "next/link";
import { portfolio } from "#site/content";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { CityMapHero } from "@/components/twente-map/city-map-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { RelatedContent } from "@/components/sections/related-content";
import { NearbyPlaces } from "@/components/sections/nearby-places";
import { CityServices } from "@/components/sections/city-services";
import { LocalPartners } from "@/components/sections/local-partners";
import { CityStory } from "@/components/sections/city-story";
import { KennisbankBlock } from "@/components/kennisbank/kennisbank-block";
import { faqAannemerHengelo } from "@/lib/faq";

const title = "Aannemer Hengelo | verbouw, uitbouw & renovatie | MTB Bouw";
const description =
  "Bouwbedrijf voor Hengelo: renovatie, uitbouw, kozijnen en verduurzamen. Vast team uit Enschede, een kwartier rijden. Vaste prijs, geen voorrijkosten.";
const ogImage = "/images/projects/renovatie-villa-zantinge-enschede/06.jpg";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/aannemer-hengelo" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/aannemer-hengelo",
    images: [
      {
        url: ogImage,
        alt: "Gerenoveerde Van Zantinge-villa met nieuwe keuken en glazen patio, door MTB Bouw",
      },
    ],
  },
};

const linkClass = "font-semibold text-ink underline hover:text-navy";

/** Echte projecten uit de buurt; er staat nog geen Hengelose klus in de portfolio. */
const projectSlugs = [
  "renovatie-villa-zantinge-enschede",
  "uitbouw-houtskeletbouw-enschede",
  "bedrijfshal-borne",
];

export default function AannemerHengeloPage() {
  const projects = projectSlugs
    .map((slug) => portfolio.find((p) => p.slug === slug && !p.draft))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Aannemer in Twente", url: "/aannemer-twente" },
          { name: "Hengelo", url: "/aannemer-hengelo" },
        ]}
      />
      <ServiceJsonLd
        name="Aannemer in Hengelo"
        description="Renovatie, verbouw, uitbouw, kozijnen en verduurzamen in Hengelo (Overijssel) door MTB Bouw uit Enschede."
        url="/aannemer-hengelo"
        serviceType="Aannemer"
        city="Hengelo"
      />
      <FaqJsonLd items={faqAannemerHengelo} />

      <CityMapHero
        slug="hengelo"
        eyebrow="Aannemer Hengelo"
        title="Aannemer in Hengelo — hier groeiden we op"
        kernen={["'t Lansink", "'t Wilbert", "Berflo Es", "Bloemenbuurt", "Elsbeek", "Beckum", "Oele"]}
      >
        <p>
          Hengelo is groot geworden met Stork, en dat zie je aan de huizen. Tuindorp &apos;t Lansink, vanaf 1911 aangelegd op initiatief van de familie Stork, is een beschermd dorpsgezicht. Wie daar verbouwt, houdt rekening met het aanzicht.
        </p>
        <p>
          In de vooroorlogse wijken als &apos;t Wilbert, Elsbeek en de Bloemenbuurt staan woningen uit de jaren twintig en dertig, van arbeiderswoning tot vrijstaande villa. De Berflo Es groeide al in de negentiende eeuw als arbeiderswijk rond de fabrieken. Na zo&apos;n honderd jaar zijn dak, kozijnen en isolatie daar aan de beurt.
        </p>
      </CityMapHero>

      {/* Ons verhaal */}
      <CityStory
        eyebrow="Ons verhaal in Hengelo"
        title="Een zwak voor huizen met karakter"
        image={{
          src: "/images/projects/renovatie-villa-zantinge-enschede/02.jpg",
          alt: "Hal met houten bekleding onder het flauwe dak en gele baksteen in een Van Zantinge-villa, gerenoveerd door MTB Bouw",
          caption: "Het typische Van Zantinge-dak, behouden en hersteld in een villa in Enschede",
        }}
      >
        <p>
          Wie opgroeit in een huis van Van Zantinge, kijkt anders naar bouwen.
          Het flauwe dak, de baksteen, de details die je pas ziet als je er
          elke dag langs loopt. Daar komt ons zwak voor dit soort huizen
          vandaan, en de gewoonte om karakter niet zomaar weg te breken.
        </p>
        <p>
          Dat zie je terug in ons werk. In Enschede renoveerden we{" "}
          <Link href="/projecten/renovatie-villa-zantinge-enschede" className={linkClass}>
            de villa waar Van Zantinge zelf woonde
          </Link>
          , een klus die veel aannemers niet zagen zitten. Ook in Hengelo
          staan huizen van zijn hand. Wil je verbouwen zonder de ziel eruit te
          halen? Dan denken we graag met je mee.
        </p>
      </CityStory>

      <CityServices
        eyebrow="Wat we in Hengelo doen"
        title="Van renovatie tot nieuwe kozijnen"
        items={[
          {
            href: "/verbouwing",
            label: "Renovatie & verbouw",
            text: "Een oudere woning opknappen met behoud van wat goed is, binnen en buiten.",
          },
          {
            href: "/aanbouw-uitbouw",
            label: "Aanbouw & uitbouw",
            text: "Meer ruimte aan de achterkant, gemetseld of in houtskeletbouw.",
          },
          {
            href: "/kozijnen",
            label: "Kozijnen",
            text: "Hout, kunststof of aluminium via De Kozijnstudio, passend bij de gevel.",
          },
          {
            href: "/verduurzamen-enschede",
            label: "Verduurzamen",
            text: "Isoleren tijdens de verbouwing, zodat je de bouw maar één keer over de vloer hebt.",
          },
          {
            href: "/prefab",
            label: "Prefab & houtskeletbouw",
            text: "Snel op de bouw, weinig overlast voor jou en de buren.",
          },
          {
            href: "/afbouwstudio/kantoor-verbouwen-hengelo",
            label: "Kantoor verbouwen in Hengelo",
            text: "Voor bedrijven: kantoren en bedrijfspanden, van casco tot sleutelklaar.",
          },
        ]}
      />

      {/* Regels */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <p className="eyebrow text-stone">Vergunning en regels</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
          Regels in de gemeente Hengelo
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-stone">
          Voor veel verbouwingen aan de achterkant heb je geen vergunning
          nodig. Wil je aan de voorkant iets veranderen, een dakkapel plaatsen
          of verder uitbouwen dan 4 meter? Dan gelden de regels uit het
          omgevingsplan van de gemeente Hengelo (Overijssel). Die kijken we
          met je na voordat we beginnen, en waar nodig regelen we de aanvraag.
          Zelf alvast kijken kan in het{" "}
          <a
            href="https://omgevingswet.overheid.nl/"
            target="_blank"
            rel="noopener"
            className={linkClass}
          >
            Omgevingsloket
          </a>
          .
        </p>
      </section>

      <RelatedContent
        projects={projects}
        eyebrow="Werk uit de buurt"
        title="Projecten in Enschede en Borne"
      />

      <LocalPartners
        title="Partners uit de buurt"
        intro="We bouwen met vaste mensen uit de regio. Ons hout en plaatmateriaal halen we onder meer bij Jongeneel in Hengelo."
        names={["Jongeneel Hengelo", "Kamphuis Dakbedekking", "BMN Bouwmaterialen", "Brouwer Containers"]}
      />

      <FaqAccordion
        items={faqAannemerHengelo}
        eyebrow="Veelgesteld"
        title="Vragen aan een aannemer in Hengelo"
      />

      <KennisbankBlock
        match={{ subcategories: ["kozijnen-glas", "gevels"], audience: "thuis" }}
        title="Lees je in voor je gaat verbouwen"
      />

      <NearbyPlaces currentSlug="aannemer-hengelo" />

      <CtaBanner
        eyebrow="Vrijblijvend kennismaken"
        title="Verbouwplannen in Hengelo?"
        text="Mathijs of Robbert komt langs, denkt mee en je ontvangt een offerte met vaste prijs."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
