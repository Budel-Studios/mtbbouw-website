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
import { QuoteButton } from "@/components/ui/quote-button";
import { HammerIcon, ShieldIcon, LayersIcon } from "@/components/icons";
import { faqNieuwbouw } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Nieuwbouw in Enschede en Twente",
  description:
    "Bouwen vanaf nul met één team en één aanspreekpunt. Energiezuinige nieuwbouw (BENG) met vaste aanneemsom, vaste opleverdatum en garanties tot 20 jaar op de constructie.",
  alternates: { canonical: "/nieuwbouw" },
};

export default function NieuwbouwPage() {
  const relatedProjects = portfolio
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

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
            title: "Vaste prijs én opleverdatum",
            text: "Een aannemingsovereenkomst met vaste aanneemsom, vaste opleverdatum en garanties tot 20 jaar op de constructie.",
          },
          {
            icon: LayersIcon,
            title: "Energiezuinig standaard",
            text: "Nieuwbouw voldoet aan BENG: warmtepomp, triple glas, balansventilatie en isolatiewaarden vanaf Rc 6,3.",
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
        image={{ src: "/images/projects/project-1.jpg", alt: "Bouwfase nieuwbouwwoning" }}
      >
        <p>
          <strong>Vergunningen.</strong> De omgevingsvergunning heeft een
          doorlooptijd van 8 tot 26 weken. Wij begeleiden de aanvraag en stemmen
          het ontwerp af op het bestemmingsplan.
        </p>
        <p>
          <strong>Garanties.</strong> 6 jaar op verborgen gebreken, 20 jaar op
          de constructie en 5 jaar op installaties. Optioneel bouwen we onder
          Woningborg-garantie.
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
        title="Recente projecten"
      />

      <FaqAccordion
        items={faqNieuwbouw}
        title="Veelgestelde vragen over nieuwbouw"
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
