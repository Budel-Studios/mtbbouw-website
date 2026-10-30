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
import { faqAannemerAlmelo } from "@/lib/faq";

const title = "Aannemer Almelo | verbouw, uitbouw & veranda's | MTB Bouw";
const description =
  "Bouwbedrijf voor Almelo: verbouw, uitbouw, veranda's en kozijnen. Klein of groot, met een vast team uit Enschede. Vaste prijs, geen voorrijkosten.";
const ogImage = "/images/projects/veranda-almelo/01.jpg";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/aannemer-almelo" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/aannemer-almelo",
    images: [
      {
        url: ogImage,
        alt: "Nieuwe houten veranda met rode dakpannen aan een woning in Almelo, gebouwd door MTB Bouw",
      },
    ],
  },
};

const linkClass = "font-semibold text-ink underline hover:text-navy";

const projectSlugs = [
  "veranda-bouwen-almelo",
  "bedrijfshal-borne",
  "uitbouw-houtskeletbouw-enschede",
];

export default function AannemerAlmeloPage() {
  const projects = projectSlugs
    .map((slug) => portfolio.find((p) => p.slug === slug && !p.draft))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Aannemer in Twente", url: "/aannemer-twente" },
          { name: "Almelo", url: "/aannemer-almelo" },
        ]}
      />
      <ServiceJsonLd
        name="Aannemer in Almelo"
        description="Verbouw, uitbouw, veranda's, kozijnen en verduurzamen in Almelo door MTB Bouw uit Enschede."
        url="/aannemer-almelo"
        serviceType="Aannemer"
        city="Almelo"
      />
      <FaqJsonLd items={faqAannemerAlmelo} />

      <PageHero
        eyebrow="Aannemer Almelo"
        title="Aannemer in Almelo — van veranda tot verbouwing"
        intro="Almelo hoort bij ons vaste werkgebied. Vanaf onze werkplaats in Enschede zijn we er in zo'n halfuur. We bouwen er grote en kleine klussen, voor woningen in Almelo en de dorpen eromheen. Met een vaste prijs en zonder voorrijkosten."
        cta={<QuoteButton />}
      />

      {/* Verhaal uit de praktijk */}
      <CityStory
        eyebrow="Uit de praktijk in Almelo"
        title="Een veranda die er altijd al leek te staan"
        image={{
          src: "/images/projects/veranda-almelo/01.jpg",
          alt: "Nieuwe houten veranda met rode dakpannen in het verlengde van een bakstenen woning in Almelo",
          caption: "De veranda in Almelo, gedekt met gebruikte dakpannen uit Buurse",
        }}
      >
        <p>
          Niet elke klus is groot. In Almelo bouwden we in twee dagen een
          houten veranda in het verlengde van de woning. Om hem echt bij het
          huis te laten passen, haalden we gebruikte dakpannen op in Buurse.
          Nu lijkt het alsof de veranda er altijd al hoorde.
        </p>
        <p>
          Zo kijken we naar elke klus: wat past bij dit huis, en bij deze
          straat? Of het nu gaat om een veranda, een uitbouw of een complete
          renovatie.{" "}
          <Link href="/projecten/veranda-bouwen-almelo" className={linkClass}>
            Bekijk de veranda in Almelo
          </Link>
          .
        </p>
      </CityStory>

      {/* Woningen in Almelo */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <p className="eyebrow text-stone">Verbouwen in Almelo</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
          Meer ruimte, meer licht, minder energie
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-stone">
          Of je nu in een rijwoning in een van de oudere wijken woont of in een
          nieuwer huis aan de rand van de stad: de vraag is vaak dezelfde. Meer
          ruimte, meer licht, of een huis dat minder energie kost. Daarom nemen
          we isoleren graag mee in hetzelfde plan, zodat je maar één keer de
          bouw over de vloer hebt.
        </p>
        <p className="mt-5 max-w-2xl leading-relaxed text-stone">
          Ook in Almelo komen we eerst bij je langs voor een intake op locatie.
          Daarna ontvang je een offerte met een vaste prijs.
        </p>
      </section>

      <CityServices
        eyebrow="Wat we in Almelo doen"
        title="Klein of groot, met dezelfde vaste mensen"
        items={[
          {
            href: "/aanbouw-uitbouw",
            label: "Aanbouw & uitbouw",
            text: "Een grotere keuken of een extra kamer aan de achterkant van je huis.",
          },
          {
            href: "/prefab#overkappingen",
            label: "Veranda's en overkappingen",
            text: "Van een veranda in twee dagen tot een overkapping met schuur.",
          },
          {
            href: "/verbouwing",
            label: "Renovatie & verbouw",
            text: "Badkamer, keuken of de hele woning, met één planning.",
          },
          {
            href: "/kozijnen",
            label: "Kozijnen",
            text: "Hout, kunststof of aluminium, all-in via De Kozijnstudio.",
          },
          {
            href: "/verduurzamen-enschede",
            label: "Verduurzamen",
            text: "Dak, vloer en gevel isoleren, het liefst tijdens de verbouwing.",
          },
          {
            href: "/afbouwstudio/kantoor-verbouwen-almelo",
            label: "Kantoor verbouwen in Almelo",
            text: "Voor bedrijven: kantoren en bedrijfspanden, van casco tot sleutelklaar.",
          },
        ]}
      />

      {/* Regels */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <p className="eyebrow text-stone">Vergunning en regels</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
          Regels in de gemeente Almelo
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-stone">
          Een veranda, overkapping of uitbouw in de achtertuin is vaak
          vergunningvrij, zolang hij binnen de regels voor diepte en hoogte
          blijft. Daarbuiten gelden de regels uit het omgevingsplan van de
          gemeente Almelo. Die kijken we tijdens de intake met je na, en waar
          nodig regelen we de aanvraag. Zelf alvast kijken kan in het{" "}
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
        eyebrow="Werk uit de regio"
        title="Projecten in Almelo en omgeving"
      />

      <LocalPartners
        title="Dezelfde vaste partners"
        intro="In Almelo bouwen we met dezelfde vaste partners als in de rest van Twente. Zo weet iedereen wat de ander doet, en blijft de planning strak."
        names={["Kamphuis Dakbedekking", "BMN Bouwmaterialen", "Rouwmaat Betoncentrale", "Brouwer Containers"]}
      />

      <FaqAccordion
        items={faqAannemerAlmelo}
        eyebrow="Veelgesteld"
        title="Vragen aan een aannemer in Almelo"
      />

      <KennisbankBlock
        match={{ categories: ["regels-vergunningen"], subcategories: ["daken"], audience: "thuis" }}
        title="Lees je in voor je gaat bouwen"
      />

      <NearbyPlaces currentSlug="aannemer-almelo" />

      <CtaBanner
        eyebrow="Vrijblijvend kennismaken"
        title="Bouwplannen in Almelo?"
        text="Mathijs of Robbert komt langs, denkt mee en je ontvangt een offerte met vaste prijs."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
