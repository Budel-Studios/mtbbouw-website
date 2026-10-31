import type { Metadata } from "next";
import Link from "next/link";
import { portfolio } from "#site/content";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { CityMapHero } from "@/components/twente-map/city-map-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { RelatedContent } from "@/components/sections/related-content";
import { NearbyPlaces } from "@/components/sections/nearby-places";
import { faqAannemerLosser } from "@/lib/faq";
import { KennisbankBlock } from "@/components/kennisbank/kennisbank-block";

export const metadata: Metadata = {
  title: { absolute: "Aannemer in Losser | MTB Bouw — ook De Lutte & Overdinkel" },
  description:
    "Aannemer in Losser, Overdinkel en De Lutte. MTB Bouw uit Enschede doet renovatie, aanbouw, kozijnen en prefab. Vaste prijs, geen voorrijkosten.",
  alternates: { canonical: "/aannemer-losser" },
};

export default function AannemerLosserPage() {
  // Echte projecten uit de regio — geen verzonnen lokale referenties.
  const projects = portfolio
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Aannemer in Twente", url: "/aannemer-twente" },
          { name: "Losser", url: "/aannemer-losser" },
        ]}
      />
      <ServiceJsonLd
        name="Aannemer in Losser"
        description="Verbouw, renovatie, aanbouw, kozijnen en verduurzaming in Losser, Overdinkel, De Lutte en Beuningen door MTB Bouw."
        url="/aannemer-losser"
        serviceType="Aannemer"
      />
      <FaqJsonLd items={faqAannemerLosser} />

      <CityMapHero
        slug="losser"
        eyebrow="Aannemer Losser"
        title="Aannemer in Losser en de kerkdorpen — dichtbij en vertrouwd"
        kernen={["Losser", "Overdinkel", "Glane", "De Lutte", "Beuningen"]}
      >
        <p>
          De gemeente Losser ligt tegen de Duitse grens, en dat zie je aan de dorpen. Overdinkel en Glane groeiden rond 1900 met mensen die in de textielfabrieken over de grens werkten. De Lutte en Beuningen hielden hun agrarische karakter.
        </p>
        <p>
          Losser zelf was lang een esdorp met boerderijen, tot in 1926 de fabriek van Van Heek kwam. Oude boerderijen, arbeiderswoningen en nieuwere rijtjes: elke verbouwing is hier anders, dus we kijken eerst wat er staat.
        </p>
      </CityMapHero>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="eyebrow text-stone">
            Verbouwen in Losser
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
            Alles voor je woning, dichtbij geregeld
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Van dorpswoning tot vrijstaand huis in het buitengebied: we doen{" "}
            <Link href="/verbouwing" className="font-semibold text-ink underline hover:text-navy">renovatie en verbouw</Link>
            ,{" "}
            <Link href="/aanbouw-uitbouw" className="font-semibold text-ink underline hover:text-navy">aanbouwen en uitbouwen</Link>
            ,{" "}
            <Link href="/kozijnen" className="font-semibold text-ink underline hover:text-navy">kozijnen</Link>{" "}
            via De Kozijnstudio en{" "}
            <Link href="/prefab" className="font-semibold text-ink underline hover:text-navy">prefab bouwen</Link>
            . Slim:{" "}
            <Link href="/verduurzamen-enschede" className="font-semibold text-ink underline hover:text-navy">
              verduurzamen tijdens de verbouwing
            </Link>{" "}
            — isolatie en beter glas zijn dan het voordeligst, inclusief hulp
            bij de ISDE-aanvraag.
          </p>
        </div>
      </section>

      <FaqAccordion
        items={faqAannemerLosser}
        eyebrow="Veelgesteld"
        title="Vragen aan een aannemer in Losser"
      />

      <RelatedContent
        projects={projects}
        eyebrow="Werk uit de regio"
        title="Recent werk in Twente"
      />

      <KennisbankBlock
        match={{ audience: "thuis" }}
        title="Lees je in voor je gaat verbouwen"
      />

      <NearbyPlaces currentSlug="aannemer-losser" />

      <CtaBanner
        eyebrow="Vrijblijvend kennismaken"
        title="Bouwplannen in Losser?"
        text="We komen langs, denken mee en je ontvangt een offerte met vaste prijs."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
