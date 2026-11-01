import type { Metadata } from "next";
import Link from "next/link";
import { portfolio } from "#site/content";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { CityMapHero } from "@/components/twente-map/city-map-hero";
import { LocalPartners } from "@/components/sections/local-partners";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { RelatedContent } from "@/components/sections/related-content";
import { NearbyPlaces } from "@/components/sections/nearby-places";
import { faqAannemerBorne } from "@/lib/faq";
import { KennisbankBlock } from "@/components/kennisbank/kennisbank-block";

export const metadata: Metadata = {
  title: { absolute: "Aannemer Borne | verbouw & bedrijfspanden | MTB Bouw" },
  description:
    "Aannemer in Borne en Zenderen: renovatie, aanbouw, kozijnen en prefab. Vanuit Enschede in zo'n 20 minuten ter plaatse. Heldere offerte, geen voorrijkosten.",
  alternates: { canonical: "/aannemer-borne" },
  openGraph: {
    type: "website",
    title: "Aannemer Borne | verbouw & bedrijfspanden | MTB Bouw",
    description:
      "Aannemer in Borne en Zenderen: renovatie, aanbouw, kozijnen en prefab. Vanuit Enschede in zo'n 20 minuten ter plaatse. Heldere offerte, geen voorrijkosten.",
    url: "/aannemer-borne",
    images: [{ url: "/images/mtb-bouw-bus.webp", alt: "Bedrijfsbus van MTB Bouw uit Enschede" }],
  },
};

export default function AannemerBornePage() {
  // Echte projecten: eventuele Borne-projecten voorop, aangevuld met recent
  // regiowerk. Geen verzonnen lokale referenties.
  const live = portfolio.filter((p) => !p.draft);
  const inBorne = live.filter((p) => p.location?.includes("Borne"));
  const projects = [
    ...inBorne,
    ...live
      .filter((p) => !inBorne.includes(p))
      .sort((a, b) => b.date.localeCompare(a.date)),
  ].slice(0, 3);

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
        description="Verbouw, renovatie, aanbouw en zakelijke bouw in Borne door MTB Bouw uit Enschede."
        url="/aannemer-borne"
        serviceType="Aannemer"
        city="Borne"
      />
      <FaqJsonLd items={faqAannemerBorne} />

      <CityMapHero
        slug="borne"
        eyebrow="Aannemer Borne"
        title="Aannemer in Borne — we hebben er al gebouwd"
        kernen={["Oud Borne", "Bornsche Maten", "Zenderen", "Hertme"]}
      >
        <p>
          Borne geldt als de bakermat van de Twentse textielindustrie. Oud Borne, rond de kerk en de Meiershof, is een beschermd dorpsgezicht: kleine huizen van één laag met een kap, Twentse boerderijen en panden uit het textielverleden.
        </p>
        <p>
          Daar tegenover staat de Bornsche Maten, de nieuwe wijk die vanaf 2002 is gepland, met buurten als Nieuw Borne, Tuinstad en Singelwonen. Daar vraagt men eerder om een uitbouw, een overkapping of nieuwe kozijnen. In Borne bouwden we ook een complete bedrijfshal.
        </p>
      </CityMapHero>

      <section className="bg-paper">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow text-stone">
            Verbouwen in Borne
          </p>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">
            Wonen én zakelijk, dichtbij
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Borne ligt precies tussen Hengelo en Almelo — vanaf onze werkplaats
            in Enschede zijn we er in zo&apos;n 20 minuten. Vraag ons naar de
            mogelijkheden voor jouw woning of bedrijfspand: van{" "}
            <Link href="/verbouwing" className="font-semibold text-ink underline hover:text-navy">renovatie</Link>{" "}
            en{" "}
            <Link href="/aanbouw-uitbouw" className="font-semibold text-ink underline hover:text-navy">aanbouw</Link>{" "}
            tot{" "}
            <Link href="/kozijnen" className="font-semibold text-ink underline hover:text-navy">kozijnen</Link>{" "}
            en een snelle{" "}
            <Link href="/prefab" className="font-semibold text-ink underline hover:text-navy">prefab uitbouw</Link>
            . Zakelijk pand in Borne? Dan is{" "}
            <Link href="/afbouwstudio/bedrijfspand-verbouwen" className="font-semibold text-ink underline hover:text-navy">
              Afbouwstudio
            </Link>{" "}
            je aanspreekpunt.
          </p>
        </div>
      </section>

      <LocalPartners
        title="Dezelfde vaste partners"
        intro="In Borne bouwen we met dezelfde vaste partners als in de rest van Twente. Zo weet iedereen wat de ander doet, en blijft de planning strak."
        names={["Kamphuis Dakbedekking", "BMN Bouwmaterialen", "Rouwmaat Betoncentrale", "Brouwer Containers"]}
      />

      <FaqAccordion
        items={faqAannemerBorne}
        eyebrow="Veelgesteld"
        title="Vragen aan een aannemer in Borne"
      />

      <RelatedContent
        projects={projects}
        eyebrow="Werk uit de regio"
        title="Recent werk in Borne en omgeving"
      />

      <KennisbankBlock
        match={{ audience: "thuis" }}
        title="Lees je in voor je gaat verbouwen"
        tone="plain"
      />

      <NearbyPlaces currentSlug="aannemer-borne" />

      <CtaBanner
        eyebrow="Vrijblijvend kennismaken"
        title="Bouwplannen in Borne?"
        text="We komen langs, denken mee en je ontvangt een gespecificeerde offerte."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
