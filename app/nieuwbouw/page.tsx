import type { Metadata } from "next";
import { portfolio } from "#site/content";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { SplitSection } from "@/components/sections/split-section";
import { ProcessSteps } from "@/components/sections/process-steps";
import { RelatedContent } from "@/components/sections/related-content";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ServiceAreaLinks } from "@/components/sections/service-area-links";
import { QuoteButton } from "@/components/ui/quote-button";
import { HammerIcon, ShieldIcon, LayersIcon } from "@/components/icons";
import { faqNieuwbouw } from "@/lib/faq";
import { garantieTekst } from "@/lib/facts";

export const metadata: Metadata = {
  title: "Nieuwbouw in Enschede en Twente",
  description:
    "Bijna energieneutrale nieuwbouw (BENG) in Twente met één aanspreekpunt, een vaste aanneemsom, een afgesproken opleverdatum en heldere garantieafspraken.",
  alternates: { canonical: "/nieuwbouw" },
  openGraph: {
    type: "website",
    title: "Nieuwbouw in Enschede en Twente | MTB Bouw",
    description: "Bijna energieneutrale nieuwbouw (BENG) in Twente met één aanspreekpunt, een vaste aanneemsom, een afgesproken opleverdatum en heldere garantieafspraken.",
    url: "/nieuwbouw",
  },
};

export default function NieuwbouwPage() {
  // Echt bouwwerk van de grond af en grote bouwstromen, niet zomaar de nieuwste drie.
  const relatedProjects = ["bedrijfshal-borne", "uitbouw-houtskeletbouw-enschede", "dubbele-uitbouw-enschede"]
    .map((slug) => portfolio.find((p) => p.slug === slug && !p.draft))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Wat we bouwen", url: "/diensten" },
          { name: "Nieuwbouw", url: "/nieuwbouw" },
        ]}
      />
      <ServiceJsonLd
        name="Nieuwbouw"
        description="Nieuwbouw van woningen en bedrijfspanden in Enschede en Twente — van ontwerp tot sleutelklaar."
        url="/nieuwbouw"
        serviceType="Nieuwbouw"
      />
      <FaqJsonLd items={faqNieuwbouw} />

      <PageHero
        eyebrow="Nieuwbouw"
        title="Nieuwbouw in Enschede en Twente"
        intro="Bouwen vanaf nul is het mooiste wat er is: alles kan nog. Wij houden overzicht van ontwerp tot sleutelklaar — één team, één planning, één aanspreekpunt."
        cta={<QuoteButton>Plan een kennismaking</QuoteButton>}
      />

      <FeatureGrid
        items={[
          {
            icon: ShieldIcon,
            title: "Prijs en opleverdatum op papier",
            text: "Een aannemingsovereenkomst met een vaste aanneemsom, een afgesproken opleverdatum en heldere garantieafspraken.",
          },
          {
            icon: LayersIcon,
            title: "Bijna energieneutraal (BENG)",
            text: "Nieuwbouw moet voldoen aan de BENG-eisen. Welke mix van isolatie, glas, ventilatie en installaties daarbij past, kiezen we per ontwerp.",
          },
          {
            icon: HammerIcon,
            title: "Traditioneel of prefab",
            text: "Traditioneel in 9-14 maanden of met prefab-elementen in 6-9 maanden — we rekenen beide eerlijk voor.",
          },
        ]}
      />

      <SplitSection
        eyebrow="Van kavel tot sleutel"
        title="Eén team dat alles regelt"
        image={{ src: "/images/projects/bedrijfshal-borne.webp", alt: "Nieuwbouwproject van MTB Bouw" }}
        cta={{ href: "/hoe-wij-werken", label: "Zo werken wij" }}
      >
        <p>
          Nieuwbouw betekent honderden keuzes en tientallen partijen. Wij nemen
          je dat uit handen: ontwerp (met onze architectpartner of jouw eigen
          architect), vergunningen, constructie, bouw en afwerking — casco of
          volledig turn-key.
        </p>
        <p>
          Tijdens het traject plannen we 2 à 3 vaste keuzemomenten, zodat je
          grip houdt zonder dat de planning gaat schuiven.
        </p>
      </SplitSection>

      <SplitSection
        eyebrow="Zeker bouwen"
        title="Garanties en vergunningen goed geregeld"
        imageSide="left"
        image={{ src: "/images/projects/bedrijfshal-borne.webp", alt: "Nieuwbouw van een bedrijfshal in Borne, door MTB Bouw van ruwbouw tot oplevering" }}
      >
        <p>
          <strong>Vergunningen.</strong> De omgevingsvergunning heeft een
          doorlooptijd van 8 tot 26 weken. Wij begeleiden de aanvraag en stemmen
          het ontwerp af op het omgevingsplan van de gemeente.
        </p>
        <p>
          <strong>Garanties.</strong> {garantieTekst}
        </p>
        <p>
          <strong>Fundering en grond.</strong> Betonnen strookfundering bij
          vaste grond, hei- of schroefpalen bij slappe grond — het grondonderzoek
          wijst uit wat nodig is.
        </p>
      </SplitSection>

      <ProcessSteps compact />

      <RelatedContent
        projects={relatedProjects}
        eyebrow="Gerealiseerd"
        title="Bouwen vanaf de fundering"
      />

      <FaqAccordion
        items={faqNieuwbouw}
        title="Veelgestelde vragen over nieuwbouw"
      />

      <ServiceAreaLinks
        label="Nieuwbouw"
        intro="Vanuit Enschede bouwen we in heel Twente. Op de pagina van jouw plaats vind je de huizen en wijken waar we werken."
      />

      <CtaBanner
        eyebrow="Vrijblijvend gesprek"
        title="Bouwplannen? Laten we kennismaken."
        text="Vertel ons over je kavel en je wensen — wij vertellen eerlijk wat er kan."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
