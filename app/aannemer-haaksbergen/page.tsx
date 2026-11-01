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
import { faqAannemerHaaksbergen } from "@/lib/faq";
import { KennisbankBlock } from "@/components/kennisbank/kennisbank-block";

export const metadata: Metadata = {
  title: { absolute: "Aannemer Haaksbergen | verbouw, uitbouw & erf | MTB Bouw" },
  description:
    "Aannemer in Haaksbergen, dorp én buitengebied: renovatie, aanbouw, overkappingen en prefab bijgebouwen. Heldere offerte, geen voorrijkosten.",
  alternates: { canonical: "/aannemer-haaksbergen" },
  openGraph: {
    type: "website",
    title: "Aannemer Haaksbergen | verbouw, uitbouw & erf | MTB Bouw",
    description:
      "Aannemer in Haaksbergen, dorp én buitengebied: renovatie, aanbouw, overkappingen en prefab bijgebouwen. Heldere offerte, geen voorrijkosten.",
    url: "/aannemer-haaksbergen",
    images: [{ url: "/images/projects/overkapping-paardenstal-enschede/cover.png", alt: "Grote houten overkapping met paardenstal in het buitengebied, door MTB Bouw" }],
  },
};

export default function AannemerHaaksbergenPage() {
  // Echte projecten die passen bij dorp en buitengebied.
  const projects = ["overkapping-paardenstal-enschede", "renovatie-schuur-behoud-karakter", "luxe-overkapping-twente"]
    .map((slug) => portfolio.find((p) => p.slug === slug && !p.draft))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

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
        city="Haaksbergen"
      />
      <FaqJsonLd items={faqAannemerHaaksbergen} />

      <CityMapHero
        slug="haaksbergen"
        eyebrow="Aannemer Haaksbergen"
        title="Aannemer in Haaksbergen — van dorpswoning tot erf in het buitengebied"
        kernen={["Haaksbergen", "Buurse", "Sint Isidorushoeve"]}
      >
        <p>
          Haaksbergen is een dorp van eengezinswoningen en eigen huizen. Negen op de tien huishoudens wonen in de kern, de rest in Buurse en Sint Isidorushoeve. Daaromheen ligt een groot buitengebied met verspreide boerderijen en vrijstaande woningen.
        </p>
        <p>
          In het dorp gaat het vaak om een uitbouw, nieuwe kozijnen of isoleren. In het buitengebied om het erf: een schuur verbouwen, een overkapping of een bijgebouw dat past bij het landschap.
        </p>
      </CityMapHero>

      <section className="bg-paper">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow text-stone">
            Verbouwen in Haaksbergen
          </p>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">
            Ruimte om het huis? Ruimte voor plannen.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Juist rond Haaksbergen — met veel vrijstaande woningen en erven —
            zijn{" "}
            <Link href="/aanbouw-uitbouw" className="font-semibold text-ink underline hover:text-navy">aanbouwen</Link>
            , tuinkamers en{" "}
            <Link href="/prefab#overkappingen" className="font-semibold text-ink underline hover:text-navy">
              overkappingen en bijgebouwen
            </Link>{" "}
            populair. Via ons Prefab-label staan die maatvast en in een paar
            dagen op het erf. Daarnaast doen we{" "}
            <Link href="/verbouwing" className="font-semibold text-ink underline hover:text-navy">renovaties</Link>
            ,{" "}
            <Link href="/kozijnen" className="font-semibold text-ink underline hover:text-navy">kozijnen</Link>{" "}
            en{" "}
            <Link href="/verduurzamen" className="font-semibold text-ink underline hover:text-navy">verduurzaming</Link>{" "}
            — het voordeligst gecombineerd met de verbouwing zelf.
          </p>
        </div>
      </section>

      <LocalPartners
        title="Dezelfde vaste partners"
        intro="Ook in Haaksbergen bouwen we met vaste partners uit de regio, van dakdekker tot hovenier voor het erf eromheen."
        names={["Meuleman Hoveniers", "Kamphuis Dakbedekking", "BMN Bouwmaterialen", "Brouwer Containers"]}
      />

      <FaqAccordion
        items={faqAannemerHaaksbergen}
        eyebrow="Veelgesteld"
        title="Vragen aan een aannemer in Haaksbergen"
      />

      <RelatedContent
        projects={projects}
        eyebrow="Werk uit de regio"
        title="Erven, schuren en overkappingen"
      />

      <KennisbankBlock
        match={{ audience: "thuis" }}
        title="Lees je in voor je gaat verbouwen"
        tone="plain"
      />

      <NearbyPlaces currentSlug="aannemer-haaksbergen" />

      <CtaBanner
        eyebrow="Vrijblijvend kennismaken"
        title="Bouwplannen in Haaksbergen?"
        text="We komen langs, denken mee en je ontvangt een gespecificeerde offerte."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
