import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { QuoteButton } from "@/components/ui/quote-button";
import { faqAannemerLosser } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Aannemer in Losser | MTB Bouw — ook De Lutte & Overdinkel" },
  description:
    "Aannemer in Losser, Overdinkel en De Lutte. MTB Bouw uit Enschede doet renovatie, aanbouw, kozijnen en prefab. Vaste prijs, geen voorrijkosten.",
  alternates: { canonical: "/aannemer-losser" },
};

export default function AannemerLosserPage() {
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

      <PageHero
        eyebrow="Aannemer Losser"
        title="Aannemer in Losser en de kerkdorpen — dichtbij en vertrouwd"
        intro="MTB Bouw verbouwt woningen in de hele gemeente Losser: het dorp zelf, Overdinkel, De Lutte en Beuningen. Vanaf onze werkplaats in Enschede zijn we er binnen een kwartier — met een vaste prijs en zonder voorrijkosten."
        cta={<QuoteButton />}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
            Verbouwen in Losser
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Alles voor je woning, dichtbij geregeld
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Van dorpswoning tot vrijstaand huis in het buitengebied: we doen{" "}
            <Link href="/verbouwing" className="font-semibold text-ink underline hover:text-lime-dark">renovatie en verbouw</Link>
            ,{" "}
            <Link href="/aanbouw-uitbouw" className="font-semibold text-ink underline hover:text-lime-dark">aanbouwen en uitbouwen</Link>
            ,{" "}
            <Link href="/kozijnen" className="font-semibold text-ink underline hover:text-lime-dark">kozijnen</Link>{" "}
            via De Kozijnstudio en{" "}
            <Link href="/prefab" className="font-semibold text-ink underline hover:text-lime-dark">prefab bouwen</Link>
            . Slim:{" "}
            <Link href="/verduurzamen-enschede" className="font-semibold text-ink underline hover:text-lime-dark">
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
