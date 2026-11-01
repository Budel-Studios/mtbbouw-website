import type { Metadata } from "next";
import Link from "next/link";
import { portfolio } from "#site/content";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { CityMapHero } from "@/components/twente-map/city-map-hero";
import { SplitSection } from "@/components/sections/split-section";
import { RelatedContent } from "@/components/sections/related-content";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { MapPinIcon } from "@/components/icons";
import { faqAannemerTwente } from "@/lib/faq";
import { KennisbankBlock } from "@/components/kennisbank/kennisbank-block";

export const metadata: Metadata = {
  title: { absolute: "Aannemer in Twente | MTB Bouw — verbouwen in de hele regio" },
  description:
    "Aannemer in Twente: MTB Bouw verbouwt in Hengelo, Almelo, Oldenzaal, Borne, Haaksbergen en Losser. Vast team, vaste prijs, lokale partners.",
  alternates: { canonical: "/aannemer-twente" },
  openGraph: {
    type: "website",
    title: "Aannemer in Twente | MTB Bouw — verbouwen in de hele regio",
    description:
      "Aannemer in Twente: MTB Bouw verbouwt in Hengelo, Almelo, Oldenzaal, Borne, Haaksbergen en Losser. Vast team, vaste prijs, lokale partners.",
    url: "/aannemer-twente",
    images: [{ url: "/images/projects/luxe-overkapping-twente/cover.jpg", alt: "Luxe houten overkapping in een tuin in Twente, gebouwd door MTB Bouw" }],
  },
};

const PLAATSEN: { name: string; href?: string }[] = [
  { name: "Enschede", href: "/aannemer-enschede" },
  { name: "Hengelo", href: "/aannemer-hengelo" },
  { name: "Almelo", href: "/aannemer-almelo" },
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
  // Echte projecten uit Twente.
  const projects = ["renovatie-villa-zantinge-enschede", "veranda-bouwen-almelo", "uitbouw-houtskeletbouw-enschede"]
    .map((slug) => portfolio.find((p) => p.slug === slug && !p.draft))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

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

      <CityMapHero
        eyebrow="Aannemer Twente"
        title="Aannemer in Twente — verbouwen met een vast team uit Enschede"
        kernen={["Enschede", "Hengelo", "Almelo", "Oldenzaal", "Borne", "Haaksbergen", "Losser"]}
      >
        <p>
          Twente is een regio van textielsteden en esdorpen. Van de tuindorpen in Enschede, Hengelo en Almelo tot de boerderijen in het buitengebied: elk huis vraagt iets anders.
        </p>
        <p>
          We zijn een klein bouwbedrijf uit Enschede en werken het liefst dicht bij huis. Kies je plaats op de kaart voor projecten en vragen uit jouw buurt.
        </p>
      </CityMapHero>

      {/* WERKGEBIED */}
      <section className="bg-paper">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow text-stone">
            Werkgebied
          </p>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">
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
                    className="flex items-center gap-1.5 border border-navy/20 bg-white px-4 py-2 text-sm font-medium text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
                  >
                    <MapPinIcon className="h-3.5 w-3.5 text-navy" />
                    {p.name}
                  </Link>
                ) : (
                  <span className="flex items-center gap-1.5 border border-ink/15 bg-white px-4 py-2 text-sm font-medium text-ink">
                    <MapPinIcon className="h-3.5 w-3.5 text-navy" />
                    {p.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-stone">
            In Enschede zelf? Bekijk dan ook onze pagina{" "}
            <Link href="/aannemer-enschede" className="font-semibold text-ink underline hover:text-navy">
              aannemer in Enschede
            </Link>
            . Zakelijk project buiten Twente? Voor kantoor- en horeca-afbouw
            werken we in heel Oost-Nederland —{" "}
            <Link href="/afbouwstudio/kantoor-verbouwen" className="font-semibold text-ink underline hover:text-navy">
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

      <KennisbankBlock
        match={{ audience: "thuis" }}
        title="Lees je in voor je gaat verbouwen"
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
