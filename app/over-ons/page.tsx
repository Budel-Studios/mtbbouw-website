import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { PageHero } from "@/components/sections/page-hero";
import { SplitSection } from "@/components/sections/split-section";
import { TeamGrid } from "@/components/sections/team-grid";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { ArrowLink } from "@/components/ui/button";
import { site } from "@/lib/site";
import { pillars } from "@/lib/data";
import { AUTHORS } from "@/lib/authors";
import { TeamJsonLd } from "@/components/json-ld";
import { getAsset } from "@/lib/assets";
import { CheckIcon, ChatIcon, HammerIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: { absolute: "Over ons: de mensen achter MTB Bouw in Enschede" },
  description:
    "Maak kennis met Mathijs, Robbert en het vaste team van MTB Bouw uit Enschede. Korte lijnen, één aanspreekpunt en vakmensen uit Twente.",
  alternates: { canonical: "/over-ons" },
  openGraph: {
    type: "website",
    title: "Over ons: de mensen achter MTB Bouw in Enschede",
    description:
      "Maak kennis met Mathijs, Robbert en het vaste team van MTB Bouw uit Enschede. Korte lijnen, één aanspreekpunt en vakmensen uit Twente.",
    url: "/over-ons",
  },
};

const pillarIcons = [CheckIcon, ChatIcon, HammerIcon];

export default async function OverOnsPage() {
  const mathijs = await getAsset(
    "team-mathijs",
    "/images/team/mathijs.webp",
    "Mathijs, projectleider van MTB Bouw"
  );
  return (
    <>
      <TeamJsonLd members={AUTHORS.map((a) => ({ name: a.name, jobTitle: a.role, image: a.image }))} />
      <Breadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Over ons", url: "/over-ons" },
        ]}
      />

      <PageHero
        variant="image"
        image={{ src: "/images/brand/hero.png", alt: "Het team van MTB Bouw aan het werk" }}
        eyebrow="Over ons · Bouw. Samen."
        title="De mensen achter MTB Bouw"
        intro="Achter MTB Bouw staan Mathijs en Robbert, met een vast team en vaste partners uit de regio. Vanuit de Heersenkampweg in Enschede werken we in heel Twente. Geen anonieme aannemer, maar mensen die je leert kennen en die je gewoon kunt bellen."
      />

      <TeamGrid
        eyebrow="Het team"
        title="Dit zijn wij"
        intro="Samen hebben we jaren ervaring in uitvoering, ruwbouw, timmerwerk en installatie, ieder met z'n eigen specialiteit. Op de bouw zie je steeds dezelfde gezichten."
        footer={
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <ArrowLink href="/regionale-partners">Onze partners uit de regio</ArrowLink>
            <ArrowLink href="/werkgenoeg">Werken bij MTB Bouw</ArrowLink>
          </div>
        }
      />

      <SplitSection
        eyebrow="Ons verhaal"
        title="Ontstaan vanuit de praktijk"
        image={{ src: mathijs.url, alt: mathijs.alt || "Mathijs, projectleider van MTB Bouw" }}
        cta={{ href: "/hoe-wij-werken", label: "Zo werken wij" }}
      >
        <p>
          MTB Bouw is ontstaan vanuit de praktijk. Mathijs werkte jarenlang als
          uitvoerder bij Koopmans Bouw en zag van dichtbij waar het in de bouw
          soms beter kan: vakmensen die te weinig ruimte krijgen om hun werk
          goed te doen, onnodige inefficiëntie binnen organisaties en
          communicatie die onderweg niet altijd duidelijk blijft.
        </p>
        <p>Dat wilde hij anders aanpakken.</p>
        <p>
          Met die filosofie werken we stap voor stap aan onze plek in de
          bouwwereld: persoonlijk, nuchter, vakkundig en samen. We werken met
          vaste, erkende partners en zijn een door SBB erkend leerbedrijf (
          {site.sbb.split("· ")[1]}): de vakmensen van morgen leren bij ons het
          vak.
        </p>
      </SplitSection>

      <FeatureGrid
        eyebrow="Waar het bij ons om draait"
        title="Twee dingen waar we niet op inleveren"
        columns={2}
        items={[
          {
            icon: HammerIcon,
            title: "De vakman centraal",
            text: "Goed werk begint met mensen die hun vak verstaan, verantwoordelijkheid krijgen en met goed materiaal kunnen werken. Geen onnodig gedoe, maar duidelijke afspraken, korte lijnen en samen de schouders eronder.",
          },
          {
            icon: ChatIcon,
            title: "Heldere communicatie",
            text: "Voor klanten, collega's en partners moet helder zijn wát we doen, wannéér we het doen en wat zij kunnen verwachten. Zo bouwen we niet alleen aan woningen, verbouwingen en bedrijfsruimtes, maar ook aan vertrouwen.",
          },
        ]}
      />


      <FeatureGrid
        eyebrow="Waar we voor staan"
        title="Drie beloftes"
        items={pillars.map((pillar, i) => ({
          icon: pillarIcons[i],
          title: pillar.title,
          text: pillar.text,
        }))}
      />
    </>
  );
}
