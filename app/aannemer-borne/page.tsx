import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { QuoteButton } from "@/components/ui/quote-button";
import { faqAannemerBorne } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Aannemer in Borne | MTB Bouw — wonen & zakelijk" },
  description:
    "Aannemer nodig in Borne? MTB Bouw bouwde er al een bedrijfshal af en verbouwt woningen in heel Borne en Zenderen. Renovatie, aanbouw, kozijnen en prefab — vaste prijs, geen voorrijkosten.",
  alternates: { canonical: "/aannemer-borne" },
};

export default function AannemerBornePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Aannemer in Twente", url: "/aannemer-twente" },
          { name: "Borne", url: "/aannemer-borne" },
        ]}
      />
      <ServiceJsonLd
        name="Aannemer in Borne"
        description="Verbouw, renovatie, aanbouw en zakelijke bouw in Borne door MTB Bouw uit Enschede — inclusief gerealiseerde bedrijfshal in Borne."
        url="/aannemer-borne"
        serviceType="Aannemer"
      />
      <FaqJsonLd items={faqAannemerBorne} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/bedrijfshal-borne.webp",
          alt: "Door MTB Bouw afgebouwde bedrijfshal in Borne",
        }}
        eyebrow="Aannemer Borne"
        title="Aannemer in Borne — we hebben er al gebouwd"
        intro="In Borne is ons werk te zien: wij bouwden er een complete bedrijfshal af. Diezelfde vakmensen verbouwen woningen in Borne en Zenderen — renovatie, aanbouw, kozijnen en prefab, met een vaste prijs en zonder voorrijkosten."
        cta={<QuoteButton />}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
            Verbouwen in Borne
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Wonen én zakelijk, met lokaal bewijs
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Borne ligt precies tussen Hengelo en Almelo — vanaf onze werkplaats
            in Enschede zijn we er in zo&apos;n 20 minuten. Bekijk{" "}
            <Link href="/projecten/bedrijfshal-borne" className="font-semibold text-ink underline hover:text-lime-dark">
              de bedrijfshal die we in Borne afbouwden
            </Link>{" "}
            of vraag ons naar de mogelijkheden voor jouw woning: van{" "}
            <Link href="/verbouwing" className="font-semibold text-ink underline hover:text-lime-dark">renovatie</Link>{" "}
            en{" "}
            <Link href="/aanbouw-uitbouw" className="font-semibold text-ink underline hover:text-lime-dark">aanbouw</Link>{" "}
            tot{" "}
            <Link href="/kozijnen" className="font-semibold text-ink underline hover:text-lime-dark">kozijnen</Link>{" "}
            en een snelle{" "}
            <Link href="/prefab" className="font-semibold text-ink underline hover:text-lime-dark">prefab uitbouw</Link>
            . Zakelijk pand in Borne? Dan is{" "}
            <Link href="/afbouwstudio/bedrijfspand-verbouwen" className="font-semibold text-ink underline hover:text-lime-dark">
              Afbouwstudio
            </Link>{" "}
            je aanspreekpunt.
          </p>
        </div>
      </section>

      <FaqAccordion
        items={faqAannemerBorne}
        eyebrow="Veelgesteld"
        title="Vragen aan een aannemer in Borne"
      />

      <CtaBanner
        eyebrow="Vrijblijvend kennismaken"
        title="Bouwplannen in Borne?"
        text="We komen langs, denken mee en je ontvangt een offerte met vaste prijs."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
