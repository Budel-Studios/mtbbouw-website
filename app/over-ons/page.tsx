import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { SplitSection } from "@/components/sections/split-section";
import { TeamGrid } from "@/components/sections/team-grid";
import { LogoRow } from "@/components/sections/logo-row";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { site } from "@/lib/site";
import { pillars } from "@/lib/data";
import { getAsset } from "@/lib/assets";
import { CheckIcon, ChatIcon, HammerIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: { absolute: "Over ons — het team achter MTB Bouw" },
  description:
    "Al meer dan 10 jaar bouwen we in Overijssel en Gelderland. Maak kennis met het team achter MTB Bouw: een vast team vakmensen met korte lijnen en één filosofie — Bouw. Samen.",
  alternates: { canonical: "/over-ons" },
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
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Over ons", url: "/over-ons" },
        ]}
      />

      <PageHero
        variant="image"
        image={{ src: "/images/brand/hero.png", alt: "Het team van MTB Bouw aan het werk" }}
        eyebrow="Over ons"
        title="Bouw. Samen."
        intro="Al meer dan 10 jaar bouwen we mee aan Overijssel en Gelderland — met een vast team, korte lijnen en oog voor hoe mensen écht wonen en werken."
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

      <TeamGrid
        title="Het team"
        intro="Samen hebben we jaren ervaring in uitvoering, ruwbouw, timmerwerk en installatie — ieder met z'n eigen specialiteit."
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

      <LogoRow />

      <CtaBanner
        eyebrow="Kennismaken?"
        title="We komen graag bij je langs"
        text="Plan een vrijblijvende intake op locatie. Dan bekijken we de situatie direct goed en kunnen we gericht adviseren."
        cta={{ label: "Neem contact op", href: "/contact" }}
        secondary={{ label: "Werken bij MTB Bouw", href: "/werkgenoeg" }}
      />
    </>
  );
}
