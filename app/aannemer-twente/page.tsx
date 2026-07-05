import type { Metadata } from "next";
import Link from "next/link";
import { portfolio } from "#site/content";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { SplitSection } from "@/components/sections/split-section";
import { RelatedContent } from "@/components/sections/related-content";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { QuoteButton } from "@/components/ui/quote-button";
import { MapPinIcon } from "@/components/icons";
import { faqAannemerTwente } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Aannemer in Twente | MTB Bouw — verbouwen in de hele regio" },
  description:
    "Aannemer nodig in Twente? MTB Bouw uit Enschede verbouwt in Hengelo, Almelo, Oldenzaal, Borne, Haaksbergen en Losser. Vast team, vaste prijs, regionale partners.",
  alternates: { canonical: "/aannemer-twente" },
};

const PLAATSEN: { name: string; href?: string }[] = [
  { name: "Enschede", href: "/aannemer-enschede" },
  { name: "Hengelo" },
  { name: "Almelo" },
  { name: "Oldenzaal", href: "/aannemer-oldenzaal" },
  { name: "Borne", href: "/aannemer-borne" },
  { name: "Haaksbergen", href: "/aannemer-haaksbergen" },
  { name: "Losser", href: "/aannemer-losser" },
  { name: "Glanerbrug" },
  { name: "Boekelo" },
  { name: "Denekamp" },
  { name: "Delden" },
  { name: "Goor" },
];

export default function AannemerTwentePage() {
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
        ]}
      />
      <ServiceJsonLd
        name="Aannemer in Twente"
        description="Aannemersbedrijf uit Enschede, werkzaam in heel Twente: verbouw, renovatie, aanbouw, kozijnen en prefab bouwen."
        url="/aannemer-twente"
        serviceType="Aannemer"
      />
      <FaqJsonLd items={faqAannemerTwente} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/project-2.jpg",
          alt: "Verbouwing door aannemer MTB Bouw in Twente",
        }}
        eyebrow="Aannemer Twente"
        title="Aannemer in Twente — verbouwen met een vast team uit Enschede"
        intro="MTB Bouw is een aannemersbedrijf uit Enschede dat in heel Twente verbouwt: van renovatie en aanbouw tot kozijnen en prefab. Met vaste regionale partners, een vaste prijs en één aanspreekpunt — waar in de regio je ook woont."
        cta={<QuoteButton />}
      />

      {/* WERKGEBIED */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
            Werkgebied
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Actief in heel Twente
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Vanuit onze werkplaats in Enschede zijn we overal in de regio snel
            ter plaatse. We verbouwen woningen in onder meer:
          </p>
          <ul className="mt-8 flex max-w-3xl flex-wrap gap-2.5">
            {PLAATSEN.map((p) => (
              <li key={p.name}>
                {p.href ? (
                  <Link
                    href={p.href}
                    className="flex items-center gap-1.5 border border-ink/15 bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-lime-dark hover:bg-lime"
                  >
                    <MapPinIcon className="h-3.5 w-3.5 text-lime-dark" />
                    {p.name}
                  </Link>
                ) : (
                  <span className="flex items-center gap-1.5 border border-ink/15 bg-white px-4 py-2 text-sm font-medium text-ink">
                    <MapPinIcon className="h-3.5 w-3.5 text-lime-dark" />
                    {p.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-stone">
            In Enschede zelf? Bekijk dan ook onze pagina{" "}
            <Link href="/aannemer-enschede" className="font-semibold text-ink underline hover:text-lime-dark">
              aannemer in Enschede
            </Link>
            . Zakelijk project buiten Twente? Voor kantoor- en horeca-afbouw
            werken we in heel Oost-Nederland —{" "}
            <Link href="/afbouwstudio/kantoor-verbouwen" className="font-semibold text-ink underline hover:text-lime-dark">
              lees meer over kantoor verbouwen
            </Link>
            .
          </p>
        </div>
      </section>

      {/* REGIONALE PARTNERS */}
      <SplitSection
        eyebrow="Regionaal netwerk"
        title="Sterk door Twentse samenwerking"
        image={{ src: "/images/projects/project-3.jpg", alt: "Samenwerking op de bouwplaats in Twente" }}
        cta={{ href: "/regionale-partners", label: "Ontmoet onze regionale partners" }}
      >
        <p>
          Kwaliteit komt uit een goed netwerk. We werken al jaren met vaste
          partners uit de regio — van bouwmaterialen (BMN) en gevelwerk
          (Gevelaar) tot interieur (Zebrano Studio) en hoveniers (Meuleman).
          Dat betekent korte lijnen, snelle levering en vakmensen die elkaar
          kennen.
        </p>
        <p>
          En omdat we óók prefab bouwen, kan de ruwbouw van een aanbouw in
          Twente vaak al binnen een week staan — met minder bouwverkeer en
          minder overlast voor jou en je buren.
        </p>
      </SplitSection>

      <RelatedContent
        projects={projects}
        eyebrow="Gerealiseerd"
        title="Recente projecten in Twente"
      />

      <FaqAccordion
        items={faqAannemerTwente}
        eyebrow="Veelgesteld"
        title="Vragen aan een aannemer in Twente"
      />

      <CtaBanner
        eyebrow="Vrijblijvend advies"
        title="Verbouwplannen in Twente?"
        text="Waar je ook woont in de regio: we komen langs, denken mee en je ontvangt een offerte met vaste prijs."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
