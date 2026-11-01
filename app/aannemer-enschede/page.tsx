import type { Metadata } from "next";
import Link from "next/link";
import { portfolio } from "#site/content";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { CityMapHero } from "@/components/twente-map/city-map-hero";
import { LocalPartners } from "@/components/sections/local-partners";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { RelatedContent } from "@/components/sections/related-content";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { NearbyPlaces } from "@/components/sections/nearby-places";
import { UsersIcon, EuroIcon, ClockIcon } from "@/components/icons";
import { CityServices } from "@/components/sections/city-services";
import { faqAannemerEnschede } from "@/lib/faq";
import { KennisbankBlock } from "@/components/kennisbank/kennisbank-block";

export const metadata: Metadata = {
  title: { absolute: "Aannemer Enschede | verbouw, uitbouw & renovatie | MTB Bouw" },
  description:
    "Aannemer in Enschede voor renovatie, aanbouw, uitbouw en kozijnen. Intake bij jou op locatie, een gespecificeerde offerte en één vast aanspreekpunt.",
  alternates: { canonical: "/aannemer-enschede" },
  openGraph: {
    type: "website",
    title: "Aannemer Enschede | verbouw, uitbouw & renovatie | MTB Bouw",
    description:
      "Aannemer in Enschede voor renovatie, aanbouw, uitbouw en kozijnen. Intake bij jou op locatie, een gespecificeerde offerte en één vast aanspreekpunt.",
    url: "/aannemer-enschede",
    images: [{ url: "/images/projects/uitbouw-houtskeletbouw-enschede/01.jpg", alt: "Nieuwe uitbouw in houtskeletbouw met zwarte kozijnen in Enschede, door MTB Bouw" }],
  },
};

export default function AannemerEnschedePage() {
  // Echte projecten uit Enschede.
  const projects = ["renovatie-villa-zantinge-enschede", "uitbouw-houtskeletbouw-enschede", "dubbele-uitbouw-enschede"]
    .map((slug) => portfolio.find((p) => p.slug === slug && !p.draft))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Aannemer in Enschede", url: "/aannemer-enschede" },
        ]}
      />
      <ServiceJsonLd
        name="Aannemer in Enschede"
        description="Aannemersbedrijf gevestigd in Enschede voor verbouw, renovatie, aanbouw, uitbouw en kozijnen. Gespecificeerde offerte en één aanspreekpunt."
        url="/aannemer-enschede"
        serviceType="Aannemer"
        city="Enschede"
      />
      <FaqJsonLd items={faqAannemerEnschede} />

      <CityMapHero
        slug="enschede"
        eyebrow="Aannemer Enschede"
        title="Aannemer in Enschede — onze thuisbasis"
        kernen={["Pathmos", "Getfert", "Hogeland", "Dolphia", "Wesselerbrink", "Stroinkslanden", "Glanerbrug", "Boekelo", "Lonneker"]}
      >
        <p>
          Enschede is onze thuisbasis, en elke wijk vraagt hier iets anders. In Pathmos, het tuindorp dat vanaf 1914 voor textielarbeiders werd gebouwd, draait een verbouwing om behoud van karakter. Een deel van de woningen is er gemeentelijk monument.
        </p>
        <p>
          Langs de singel en in wijken als het Getfert, Hogeland en Dolphia staan de erkerwoningen uit de jaren dertig. Aan de Lasondersingel staan villa&apos;s uit dezelfde tijd. Mooie huizen, maar na bijna honderd jaar zijn kozijnen, daken en isolatie vaak aan vervanging toe.
        </p>
        <p>
          In de wijken uit de jaren zestig tot tachtig, zoals de Wesselerbrink en de Stroinkslanden, gaat het vooral om isoleren, nieuwe kozijnen en een uitbouw voor meer ruimte.
        </p>
      </CityMapHero>

      {/* DIENSTEN IN ENSCHEDE */}
      <CityServices
        eyebrow="Wat we in Enschede doen"
        title="Verbouwen in Enschede, alles onder één dak"
        intro="Eén vast team voor het hele traject, van de eerste schets tot de oplevering."
        items={[
          {
            href: "/verbouwing",
            label: "Renovatie & verbouw",
            text: "Van badkamer tot hele woning, met oog voor het karakter van je huis.",
          },
          {
            href: "/aanbouw-uitbouw",
            label: "Aanbouw & uitbouw",
            text: "Meer ruimte aan de achterkant, gemetseld of in houtskeletbouw.",
          },
          {
            href: "/kozijnen",
            label: "Kozijnen",
            text: "Hout, kunststof of aluminium via ons eigen label De Kozijnstudio.",
          },
          {
            href: "/verduurzamen",
            label: "Verduurzamen",
            text: "Dak, vloer en gevel isoleren, het liefst in dezelfde verbouwing.",
          },
          {
            href: "/prefab",
            label: "Prefab & houtskeletbouw",
            text: "Vooraf gemaakt in de werkplaats, snel geplaatst en weinig overlast.",
          },
          {
            href: "/afbouwstudio/kantoor-verbouwen-enschede",
            label: "Kantoor verbouwen in Enschede",
            text: "Voor bedrijven: kantoren en bedrijfspanden, van casco tot sleutelklaar.",
          },
        ]}
      />

      {/* VERGUNNING & LOKALE KENNIS */}
      <section className="border-y border-mist bg-white">
        <div className="container-page py-20 md:py-28">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow text-stone">
                Vergunningen in Enschede
              </p>
              <h2 className="display mt-4 text-4xl md:text-5xl">
                Wij kennen de regels van de gemeente
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Veel aanbouwen aan het achtererf zijn vergunningvrij, maar bij
                een dakopbouw, een wijziging aan de voorgevel of een woning in
                een beschermd stadsgezicht gelden regels van de gemeente
                Enschede. Wij toetsen jouw plan standaard in het voortraject en
                verzorgen waar nodig de omgevingsvergunning — zodat je niet
                voor verrassingen komt te staan.
              </p>
            </div>
            <div>
              <p className="eyebrow text-stone">
                Kosten
              </p>
              <h2 className="display mt-4 text-4xl md:text-5xl">
                Vooraf weten waar je aan toe bent
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Geen uurtje-factuurtje: na een vrijblijvende kennismaking en een
                opname bij jou thuis ontvang je een gespecificeerde offerte en een
                realistische planning. Stelposten en uitsluitingen staan er
                duidelijk in, en meerwerk doen we alleen na jouw akkoord. Zo weet je vóór de eerste hamerslag
                waar je aan toe bent. Tip: bekijk ook onze{" "}
                <Link href="/kennisbank/wat-kost-een-aanbouw-2026" className="font-semibold text-ink underline hover:text-navy">
                  kostengids voor aanbouwen
                </Link>{" "}
                en{" "}
                <Link href="/verduurzamen" className="font-semibold text-ink underline hover:text-navy">
                  verduurzamen tijdens de verbouwing
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAAROM */}
      <FeatureGrid
        items={[
          {
            icon: UsersIcon,
            title: "Eén aanspreekpunt",
            text: "Mathijs of Robbert is jouw vaste contact, van kennismaking tot nazorg.",
          },
          {
            icon: EuroIcon,
            title: "Heldere offerte",
            text: "Gespecificeerde offerte vooraf. Meerwerk alleen na jouw akkoord.",
          },
          {
            icon: ClockIcon,
            title: "Lokaal en snel",
            text: "Gevestigd in Enschede: korte lijnen, snel ter plaatse en bekend met de stad.",
          },
        ]}
      />

      <RelatedContent
        projects={projects}
        eyebrow="Eerder werk"
        title="Projecten in Enschede"
      />

      <LocalPartners
        title="Partners uit Enschede"
        intro="Onze schilder, vloerenspecialist, dakdekker en badkamerzaak komen allemaal uit Enschede. Korte lijnen, met mensen die we kennen van de bouw en niet van een lijstje."
        names={["KUality Schilders", "Het Vloerenhof", "Kamphuis Dakbedekking", "Gevelaar"]}
      />

      <FaqAccordion
        items={faqAannemerEnschede}
        eyebrow="Veelgesteld"
        title="Vragen aan een aannemer in Enschede"
      />

      <KennisbankBlock
        match={{ audience: "thuis" }}
        title="Lees je in voor je gaat verbouwen"
      />

      <NearbyPlaces currentSlug="aannemer-enschede" />

      <CtaBanner
        eyebrow="Vrijblijvend kennismaken"
        title="Verbouwplannen in Enschede?"
        text="Bel, app of mail — we komen langs, denken mee en je ontvangt een gespecificeerde offerte."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
