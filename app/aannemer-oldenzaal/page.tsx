import type { Metadata } from "next";
import Link from "next/link";
import { portfolio } from "#site/content";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { RelatedContent } from "@/components/sections/related-content";
import { NearbyPlaces } from "@/components/sections/nearby-places";
import { CityServices } from "@/components/sections/city-services";
import { LocalPartners } from "@/components/sections/local-partners";
import { CityStory } from "@/components/sections/city-story";
import { QuoteButton } from "@/components/ui/quote-button";
import { KennisbankBlock } from "@/components/kennisbank/kennisbank-block";
import { faqAannemerOldenzaal } from "@/lib/faq";

const title = "Aannemer Oldenzaal | renovatie, verbouw & uitbouw | MTB Bouw";
const description =
  "Bouwbedrijf voor Oldenzaal: renovatie en verbouw met behoud van karakter, uitbouw en kozijnen. Vast team uit Enschede. Vaste prijs, geen voorrijkosten.";
const ogImage = "/images/projects/renovatie-schuur-behoud-karakter/cover.jpg";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/aannemer-oldenzaal" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/aannemer-oldenzaal",
    images: [
      {
        url: ogImage,
        alt: "Gerenoveerde schuur met behoud van het originele karakter, door MTB Bouw in Twente",
      },
    ],
  },
};

const linkClass = "font-semibold text-ink underline hover:text-navy";

/** Echte projecten met karakter; er staat nog geen Oldenzaalse klus in de portfolio. */
const projectSlugs = [
  "renovatie-villa-zantinge-enschede",
  "renovatie-schuur-behoud-karakter",
  "uitbouw-houtskeletbouw-enschede",
];

export default function AannemerOldenzaalPage() {
  const projects = projectSlugs
    .map((slug) => portfolio.find((p) => p.slug === slug && !p.draft))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Aannemer in Twente", url: "/aannemer-twente" },
          { name: "Oldenzaal", url: "/aannemer-oldenzaal" },
        ]}
      />
      <ServiceJsonLd
        name="Aannemer in Oldenzaal"
        description="Renovatie en verbouw met behoud van karakter, uitbouw en kozijnen in Oldenzaal door MTB Bouw uit Enschede."
        url="/aannemer-oldenzaal"
        serviceType="Aannemer"
        city="Oldenzaal"
      />
      <FaqJsonLd items={faqAannemerOldenzaal} />

      <PageHero
        eyebrow="Aannemer Oldenzaal"
        title="Aannemer in Oldenzaal — vakwerk met oog voor karakter"
        intro="Oldenzaal is een oude stad met veel huizen met karakter. Wij verbouwen en renoveren er woningen, van de oudere wijken rond de binnenstad tot de nieuwere buurten. Vanaf onze werkplaats in Enschede, met een vaste prijs en zonder voorrijkosten."
        cta={<QuoteButton />}
      />

      {/* Onze aanpak */}
      <CityStory
        eyebrow="Verbouwen in Oldenzaal"
        title="Eerst kijken wat er is, dan pas slopen"
        image={{
          src: "/images/projects/renovatie-villa-zantinge-enschede/04.jpg",
          alt: "Zitkuil met maatwerk banken, haard en baksteenwand in een gerenoveerde Van Zantinge-villa",
          caption: "De zitkuil met haard bleef behouden bij de renovatie van een Van Zantinge-villa",
        }}
      >
        <p>
          Oldenzaal kent veel woningen met karakter: metselwerkdetails,
          kapvormen en profileringen die je bij een verbouwing wilt houden.
          Daarom beginnen we altijd met kijken. Wat is goed, wat moet weg, en
          hoe laat je het nieuwe aansluiten op het oude?
        </p>
        <p>
          Zo renoveerden we in Enschede{" "}
          <Link href="/projecten/renovatie-villa-zantinge-enschede" className={linkClass}>
            een Van Zantinge-villa
          </Link>
          . Het typische dak en de zitkuil bleven, de rest van de woning werd
          vernieuwd en geïsoleerd. Diezelfde aanpak nemen we mee naar
          Oldenzaal.
        </p>
      </CityStory>

      {/* Woningen in Oldenzaal */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <p className="eyebrow text-stone">Woningen in Oldenzaal</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
          Van de binnenstad tot de nieuwere wijken
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-stone">
          In de oudere wijken rond de binnenstad draait een verbouwing om
          behoud van detail, en om goed isoleren zonder dat het aanzicht
          verandert. In de nieuwere wijken gaat het vaker om een uitbouw,
          nieuwe kozijnen of een extra kamer.
        </p>
        <p className="mt-5 max-w-2xl leading-relaxed text-stone">
          We komen eerst bij je langs voor een intake op locatie. Daarna
          ontvang je een offerte met een vaste prijs.
        </p>
      </section>

      <CityServices
        eyebrow="Wat we in Oldenzaal doen"
        title="Renoveren, uitbouwen en verduurzamen"
        items={[
          {
            href: "/verbouwing",
            label: "Renovatie & verbouw",
            text: "Een oudere woning vernieuwen met behoud van metselwerk, kapvorm en details.",
          },
          {
            href: "/aanbouw-uitbouw",
            label: "Aanbouw & uitbouw",
            text: "Een uitbouw die aansluit op de stijl van het huis.",
          },
          {
            href: "/kozijnen",
            label: "Kozijnen",
            text: "Nieuwe kozijnen in de stijl van het origineel, in hout, kunststof of aluminium.",
          },
          {
            href: "/verduurzamen-enschede",
            label: "Verduurzamen",
            text: "Isoleren zonder dat het aanzicht van je woning verandert.",
          },
          {
            href: "/prefab",
            label: "Prefab & houtskeletbouw",
            text: "Snel op de bouw als het om een uitbouw of bijgebouw gaat.",
          },
          {
            href: "/afbouwstudio",
            label: "Zakelijke afbouw",
            text: "Voor bedrijven: kantoren, winkels en horeca, van casco tot sleutelklaar.",
          },
        ]}
      />

      {/* Regels */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <p className="eyebrow text-stone">Vergunning en regels</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
          Regels in de gemeente Oldenzaal
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-stone">
          Voor veel verbouwingen aan de achterkant heb je geen vergunning
          nodig. Bij een monument, een pand in het centrum of een wijziging
          aan de voorkant kunnen extra regels gelden voor het aanzicht. Die
          staan in het omgevingsplan van de gemeente Oldenzaal. We kijken ze
          met je na voordat we beginnen, en stemmen het plan waar nodig af met
          de gemeente. Zelf alvast kijken kan in het{" "}
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
        eyebrow="Werk met karakter"
        title="Renovaties uit de regio"
      />

      <LocalPartners
        title="Dezelfde vaste partners"
        intro="In Oldenzaal bouwen we met dezelfde vaste partners als in de rest van Twente. Zo weet iedereen wat de ander doet, en blijft de planning strak."
        names={["Kamphuis Dakbedekking", "KUality Schilders", "BMN Bouwmaterialen", "Brouwer Containers"]}
      />

      <FaqAccordion
        items={faqAannemerOldenzaal}
        eyebrow="Veelgesteld"
        title="Vragen aan een aannemer in Oldenzaal"
      />

      <KennisbankBlock
        match={{ categories: ["verduurzamen"], subcategories: ["kozijnen-glas"], audience: "thuis" }}
        title="Lees je in voor je gaat verbouwen"
      />

      <NearbyPlaces currentSlug="aannemer-oldenzaal" />

      <CtaBanner
        eyebrow="Vrijblijvend kennismaken"
        title="Verbouwplannen in Oldenzaal?"
        text="Mathijs of Robbert komt langs, denkt mee en je ontvangt een offerte met vaste prijs."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
