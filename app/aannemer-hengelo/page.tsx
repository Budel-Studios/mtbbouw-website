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
import { KennisbankBlock } from "@/components/kennisbank/kennisbank-block";
import { faqAannemerHengelo } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Aannemer in Hengelo | MTB Bouw — verbouw & renovatie" },
  description:
    "Aannemer in Hengelo: verbouw, renovatie, aanbouw en kozijnen. Vanuit Enschede binnen een kwartier ter plaatse. Vaste prijs, geen voorrijkosten.",
  alternates: { canonical: "/aannemer-hengelo" },
};

const linkClass = "font-semibold text-ink underline hover:text-lime-dark";

export default function AannemerHengeloPage() {
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
          { name: "Hengelo", url: "/aannemer-hengelo" },
        ]}
      />
      <ServiceJsonLd
        name="Aannemer in Hengelo"
        description="Verbouw, renovatie, aanbouw en kozijnen in Hengelo door MTB Bouw uit Enschede."
        url="/aannemer-hengelo"
        serviceType="Aannemer"
      />
      <FaqJsonLd items={faqAannemerHengelo} />

      <PageHero
        eyebrow="Aannemer Hengelo"
        title="Aannemer in Hengelo — vakwerk van de buren"
        intro="Hengelo is onze directe buurstad. Vanaf onze werkplaats in Enschede staan we er binnen een kwartier: korte lijnen en snel ter plaatse. We verbouwen, renoveren en bouwen aan in heel Hengelo, met een vaste prijs en zonder voorrijkosten."
        cta={<QuoteButton />}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
            Verbouwen in Hengelo
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Van karakteristieke woning tot nieuwere wijk
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Hengelo heeft een rijke industriële geschiedenis, en dat zie je terug
            in de woningen: van de karakteristieke huizen in tuindorp &apos;t
            Lansink tot de rijwoningen en nieuwere wijken in de rest van de stad.
            Bij een oudere woning wil je het karakter behouden, bij een nieuwer
            huis gaat het vaak om extra ruimte. We doen het allebei: een{" "}
            <Link href="/verbouwing" className={linkClass}>renovatie</Link>{" "}
            die bij het huis past, een{" "}
            <Link href="/aanbouw-uitbouw" className={linkClass}>aanbouw of uitbouw</Link>,
            nieuwe{" "}
            <Link href="/kozijnen" className={linkClass}>kozijnen</Link>{" "}
            via De Kozijnstudio, of{" "}
            <Link href="/prefab" className={linkClass}>prefab bouwen</Link>{" "}
            als snelheid telt.{" "}
            <Link href="/verduurzamen-enschede" className={linkClass}>Verduurzamen</Link>{" "}
            nemen we het voordeligst mee tijdens de verbouwing zelf.
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Wil je aan de voorkant iets veranderen, zoals kozijnen of een
            dakkapel? Dan gelden de regels uit het omgevingsplan van de gemeente
            Hengelo. Die kijken we met je na voordat we beginnen. Zoek je een
            aannemer voor je kantoor of bedrijfspand? Kijk dan bij{" "}
            <Link href="/afbouwstudio/kantoor-verbouwen-hengelo" className={linkClass}>
              kantoor verbouwen in Hengelo
            </Link>
            .
          </p>
        </div>
      </section>

      <FaqAccordion
        items={faqAannemerHengelo}
        eyebrow="Veelgesteld"
        title="Vragen aan een aannemer in Hengelo"
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

      <NearbyPlaces currentSlug="aannemer-hengelo" />

      <CtaBanner
        eyebrow="Vrijblijvend kennismaken"
        title="Verbouwplannen in Hengelo?"
        text="We komen langs, denken mee en je ontvangt een offerte met vaste prijs."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
