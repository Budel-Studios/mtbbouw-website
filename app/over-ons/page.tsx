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
        title="Luisteren is het halve werk"
        image={{ src: mathijs.url, alt: mathijs.alt || "Mathijs, projectleider van MTB Bouw" }}
        cta={{ href: "/hoe-wij-werken", label: "Zo werken wij" }}
      >
        <p>
          MTB Bouw is het bedrijf van Mathijs, die na jaren als uitvoerder bij
          Koopmans Bouw voor zichzelf begon. Inmiddels leidt hij met een vast
          team grote verbouwingen en bouwprojecten in heel Twente en daarbuiten.
        </p>
        <p>
          Onze filosofie is simpel: luisteren naar de klant vinden we misschien
          wel het allerbelangrijkste. Wie goed luistert, bouwt geen huis maar
          een thuis — en geen pand maar een werkplek die klopt.
        </p>
        <p>
          We werken met vaste, erkende partners en zijn een door SBB erkend
          leerbedrijf ({site.sbb.split("· ")[1]}): de vakmensen van morgen
          leren bij ons het vak.
        </p>
      </SplitSection>

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
        title="Kom eens langs aan de Heersenkampweg"
        text="Of plan een vrijblijvende intake — dan komen wij naar jou."
        cta={{ label: "Neem contact op", href: "/contact" }}
        secondary={{ label: "Werken bij MTB Bouw", href: "/werkgenoeg" }}
      />
    </>
  );
}
