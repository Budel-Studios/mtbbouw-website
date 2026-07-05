import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { QuoteButton } from "@/components/ui/quote-button";
import { faqAannemerHaaksbergen } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Aannemer in Haaksbergen | MTB Bouw — dorp & buitengebied" },
  description:
    "Aannemer nodig in Haaksbergen? MTB Bouw verbouwt woningen in het dorp én het buitengebied: renovatie, aanbouw, overkappingen en prefab bijgebouwen. Vaste prijs, geen voorrijkosten.",
  alternates: { canonical: "/aannemer-haaksbergen" },
};

export default function AannemerHaaksbergenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Aannemer in Twente", url: "/aannemer-twente" },
          { name: "Haaksbergen", url: "/aannemer-haaksbergen" },
        ]}
      />
      <ServiceJsonLd
        name="Aannemer in Haaksbergen"
        description="Verbouw, renovatie, aanbouw, overkappingen en prefab bijgebouwen in Haaksbergen en het buitengebied door MTB Bouw."
        url="/aannemer-haaksbergen"
        serviceType="Aannemer"
      />
      <FaqJsonLd items={faqAannemerHaaksbergen} />

      <PageHero
        eyebrow="Aannemer Haaksbergen"
        title="Aannemer in Haaksbergen — van dorpswoning tot erf in het buitengebied"
        intro="MTB Bouw verbouwt in Haaksbergen en de omliggende buurtschappen: woningen in het dorp én erven in het buitengebied, waar aanbouwen, overkappingen en bijgebouwen goed tot hun recht komen. Vanaf Enschede zijn we er in een kwartier."
        cta={<QuoteButton />}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
            Verbouwen in Haaksbergen
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ruimte om het huis? Ruimte voor plannen.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Juist rond Haaksbergen — met veel vrijstaande woningen en erven —
            zijn{" "}
            <Link href="/aanbouw-uitbouw" className="font-semibold text-ink underline hover:text-lime-dark">aanbouwen</Link>
            , tuinkamers en{" "}
            <Link href="/prefab#overkappingen" className="font-semibold text-ink underline hover:text-lime-dark">
              overkappingen en bijgebouwen
            </Link>{" "}
            populair. Via ons Prefab-label staan die maatvast en in een paar
            dagen op het erf. Daarnaast doen we{" "}
            <Link href="/verbouwing" className="font-semibold text-ink underline hover:text-lime-dark">renovaties</Link>
            ,{" "}
            <Link href="/kozijnen" className="font-semibold text-ink underline hover:text-lime-dark">kozijnen</Link>{" "}
            en{" "}
            <Link href="/verduurzamen-enschede" className="font-semibold text-ink underline hover:text-lime-dark">verduurzaming</Link>{" "}
            — het voordeligst gecombineerd met de verbouwing zelf.
          </p>
        </div>
      </section>

      <FaqAccordion
        items={faqAannemerHaaksbergen}
        eyebrow="Veelgesteld"
        title="Vragen aan een aannemer in Haaksbergen"
      />

      <CtaBanner
        eyebrow="Vrijblijvend kennismaken"
        title="Bouwplannen in Haaksbergen?"
        text="We komen langs, denken mee en je ontvangt een offerte met vaste prijs."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
