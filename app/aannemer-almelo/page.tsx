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
import { faqAannemerAlmelo } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Aannemer in Almelo | MTB Bouw — verbouw & renovatie" },
  description:
    "Aannemer in Almelo: verbouw, renovatie, aanbouw en kozijnen voor woningen in Almelo en omgeving. Vast team, vaste prijs, geen voorrijkosten.",
  alternates: { canonical: "/aannemer-almelo" },
};

const linkClass = "font-semibold text-ink underline hover:text-lime-dark";

export default function AannemerAlmeloPage() {
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
          { name: "Almelo", url: "/aannemer-almelo" },
        ]}
      />
      <ServiceJsonLd
        name="Aannemer in Almelo"
        description="Verbouw, renovatie, aanbouw en kozijnen in Almelo door MTB Bouw uit Enschede."
        url="/aannemer-almelo"
        serviceType="Aannemer"
      />
      <FaqJsonLd items={faqAannemerAlmelo} />

      <PageHero
        eyebrow="Aannemer Almelo"
        title="Aannemer in Almelo — één vast team, één vaste prijs"
        intro="Almelo hoort bij ons vaste Twentse werkgebied. Vanaf onze werkplaats in Enschede zijn we er in zo'n halfuur. We verbouwen, renoveren en bouwen aan voor woningen in Almelo en de kernen eromheen, met een vaste prijs en zonder voorrijkosten."
        cta={<QuoteButton />}
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
            Verbouwen in Almelo
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Meer ruimte, meer licht, minder energie
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Of je nu in een rijwoning in een van de oudere wijken woont of in een
            nieuwer huis aan de rand van de stad: de vraag is vaak dezelfde. Meer
            ruimte, meer licht, of een huis dat minder energie kost. Daar helpen
            we bij met een{" "}
            <Link href="/verbouwing" className={linkClass}>renovatie</Link>, een{" "}
            <Link href="/aanbouw-uitbouw" className={linkClass}>aanbouw of uitbouw</Link>,
            nieuwe{" "}
            <Link href="/kozijnen" className={linkClass}>kozijnen</Link>{" "}
            via De Kozijnstudio, of{" "}
            <Link href="/prefab" className={linkClass}>prefab bouwen</Link>.{" "}
            <Link href="/verduurzamen-enschede" className={linkClass}>Verduurzamen</Link>{" "}
            nemen we mee in hetzelfde plan, zodat je maar één keer de bouw over
            de vloer hebt.
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Ook in Almelo gaan we eerst bij je langs voor een intake op locatie.
            We kijken dan ook welke regels uit het omgevingsplan voor jouw klus
            gelden. Daarna ontvang je een offerte met een vaste prijs. Zoek je een
            aannemer voor je kantoor of bedrijfspand? Kijk dan bij{" "}
            <Link href="/afbouwstudio/kantoor-verbouwen-almelo" className={linkClass}>
              kantoor verbouwen in Almelo
            </Link>
            .
          </p>
        </div>
      </section>

      <FaqAccordion
        items={faqAannemerAlmelo}
        eyebrow="Veelgesteld"
        title="Vragen aan een aannemer in Almelo"
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

      <NearbyPlaces currentSlug="aannemer-almelo" />

      <CtaBanner
        eyebrow="Vrijblijvend kennismaken"
        title="Verbouwplannen in Almelo?"
        text="We komen langs, denken mee en je ontvangt een offerte met vaste prijs."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
