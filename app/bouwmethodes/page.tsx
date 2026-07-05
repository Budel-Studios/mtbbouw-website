import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { SplitSection } from "@/components/sections/split-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { QuoteButton } from "@/components/ui/quote-button";
import { HammerIcon, ShieldIcon, HouseIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Traditioneel bouwen in Twente",
  description:
    "Klassiek bouwen met oog voor detail en duurzaamheid: metselwerk, kalkzandsteen en houtskeletbouw. En eerlijk advies over wanneer prefab de slimmere keuze is.",
  alternates: { canonical: "/bouwmethodes" },
};

export default function BouwmethodesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Traditioneel bouwen", url: "/bouwmethodes" },
        ]}
      />

      <PageHero
        eyebrow="Bouwmethodes"
        title="Traditioneel bouwen in Twente"
        intro="Klassiek bouwen met oog voor detail en duurzaamheid. Steen voor steen, met vakmanschap dat generaties meegaat."
        cta={<QuoteButton />}
      />

      <FeatureGrid
        items={[
          {
            icon: HammerIcon,
            title: "Bewezen vakmanschap",
            text: "Metselwerk, kalkzandsteen en houtskeletbouw: technieken die zich al generaties bewijzen, uitgevoerd door vakmensen.",
          },
          {
            icon: HouseIcon,
            title: "Maximale vrijheid",
            text: "Traditioneel bouwen geeft de meeste ontwerpvrijheid — elke hoek, elke overgang en elk detail kan op maat.",
          },
          {
            icon: ShieldIcon,
            title: "Duurzaam & degelijk",
            text: "Massieve bouw heeft een lange levensduur, goede geluidsisolatie en veel thermische massa.",
          },
        ]}
      />

      <SplitSection
        eyebrow="Wat het inhoudt"
        title="Steen voor steen, op locatie"
        image={{ src: "/images/projects/project-1.jpg", alt: "Traditioneel metselwerk" }}
      >
        <p>
          Bij traditioneel bouwen ontstaat je project volledig op de
          bouwplaats: fundering, metselwerk of kalkzandsteen, verdiepingsvloeren
          en kap. Het is de methode met de meeste flexibiliteit — ontwerpkeuzes
          kunnen relatief laat nog worden aangepast.
        </p>
        <p>
          Wij combineren klassieke technieken met moderne isolatie-eisen:
          spouwisolatie, HR++- of triple-glas en luchtdicht bouwen horen er
          standaard bij.
        </p>
      </SplitSection>

      <SplitSection
        eyebrow="Of toch prefab?"
        title="Eerlijk advies over de beste methode"
        imageSide="left"
        image={{ src: "/images/projects/project-3.jpg", alt: "Prefab bouwelementen" }}
        cta={{ href: "/prefab", label: "Lees meer over prefab bouwen" }}
      >
        <p>
          Traditioneel bouwen is flexibel, maar duurt langer en is vaak
          duurder. Prefab is sneller en maatvaster — maar niet voor elk project
          de beste keuze, zeker bij verbouwingen van bestaande woningen.
        </p>
        <p>
          Omdat wij beide methodes beheersen, adviseren we zonder voorkeur. Per
          project rekenen we de varianten eerlijk voor je door, inclusief
          bouwtijd en kosten.
        </p>
      </SplitSection>

      <CtaBanner
        eyebrow="Advies nodig?"
        title="Welke bouwmethode past bij jouw project?"
        text="Plan een vrijblijvend gesprek — we denken mee over de slimste aanpak."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
