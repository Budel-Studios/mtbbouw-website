import type { Metadata } from "next";
import Link from "next/link";
import { portfolio } from "#site/content";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { RelatedContent } from "@/components/sections/related-content";
import { NearbyPlaces } from "@/components/sections/nearby-places";
import { QuoteButton } from "@/components/ui/quote-button";
import { faqAannemerOldenzaal } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Aannemer in Oldenzaal | MTB Bouw — verbouw & renovatie" },
  description:
    "Aannemer in Oldenzaal: renovatie, verbouw, aanbouw en kozijnen, met oog voor karakteristieke woningen. Vaste prijs, geen voorrijkosten.",
  alternates: { canonical: "/aannemer-oldenzaal" },
};

export default function AannemerOldenzaalPage() {
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
          { name: "Oldenzaal", url: "/aannemer-oldenzaal" },
        ]}
      />
      <ServiceJsonLd
        name="Aannemer in Oldenzaal"
        description="Verbouw, renovatie, aanbouw en kozijnen in Oldenzaal door MTB Bouw uit Enschede."
        url="/aannemer-oldenzaal"
        serviceType="Aannemer"
      />
      <FaqJsonLd items={faqAannemerOldenzaal} />

      <PageHero
        eyebrow="Aannemer Oldenzaal"
        title="Aannemer in Oldenzaal — vakwerk met oog voor karakter"
        intro="MTB Bouw verbouwt woningen in Oldenzaal: van de karakteristieke oudere wijken rond de binnenstad tot de nieuwere buurten. Vanaf onze werkplaats in Enschede zijn we er binnen een kwartier — met een vaste prijs en zonder voorrijkosten."
        cta={<QuoteButton />}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
            Verbouwen in Oldenzaal
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Van jaren-30-renovatie tot moderne aanbouw
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Oldenzaal kent veel woningen met karakter — metselwerkdetails,
            kapvormen en profileringen die je bij een verbouwing wilt behouden.
            Wij renoveren en verbouwen mét dat karakter: een{" "}
            <Link href="/verbouwing" className="font-semibold text-ink underline hover:text-lime-dark">renovatie</Link>{" "}
            die past bij het huis, een{" "}
            <Link href="/aanbouw-uitbouw" className="font-semibold text-ink underline hover:text-lime-dark">aanbouw of uitbouw</Link>{" "}
            die aansluit op de bestaande stijl, nieuwe{" "}
            <Link href="/kozijnen" className="font-semibold text-ink underline hover:text-lime-dark">kozijnen</Link>{" "}
            via De Kozijnstudio, of{" "}
            <Link href="/prefab" className="font-semibold text-ink underline hover:text-lime-dark">prefab bouwen</Link>{" "}
            als snelheid telt. Ook{" "}
            <Link href="/verduurzamen-enschede" className="font-semibold text-ink underline hover:text-lime-dark">verduurzamen</Link>{" "}
            nemen we het voordeligst mee tijdens de verbouwing zelf.
          </p>
        </div>
      </section>

      <FaqAccordion
        items={faqAannemerOldenzaal}
        eyebrow="Veelgesteld"
        title="Vragen aan een aannemer in Oldenzaal"
      />

      <RelatedContent
        projects={projects}
        eyebrow="Werk uit de regio"
        title="Recent werk in Twente"
      />

      <NearbyPlaces currentSlug="aannemer-oldenzaal" />

      <CtaBanner
        eyebrow="Vrijblijvend kennismaken"
        title="Verbouwplannen in Oldenzaal?"
        text="We komen langs, denken mee en je ontvangt een offerte met vaste prijs."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
