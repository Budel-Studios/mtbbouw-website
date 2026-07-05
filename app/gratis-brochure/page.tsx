import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { BrochureForm } from "@/components/brochure-form";
import { CheckIcon, EuroIcon, ClockIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Gratis brochure — zo pak je jouw (ver)bouwproject aan",
  description:
    "Vraag de gratis brochure van MTB Bouw aan: hoe een bouwtraject werkt, hoe kosten zijn opgebouwd en waar je op moet letten. Binnen een minuut aangevraagd.",
  alternates: { canonical: "/gratis-brochure" },
};

export default function GratisBrochurePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Gratis brochure", url: "/gratis-brochure" },
        ]}
      />

      <PageHero
        eyebrow="Gratis brochure"
        title="Zo pak je jouw (ver)bouwproject aan"
        intro="Duidelijkheid, planning en vakmanschap in elke fase — nu alvast op papier. Vraag de brochure aan en begin goed voorbereid."
      />

      {/* Tekst + formulier naast elkaar */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
              Wat je leert
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Goed voorbereid begint bij overzicht
            </h2>
            <div className="mt-5 max-w-lg space-y-4 leading-relaxed text-stone">
              <p>
                Verbouwen of bouwen begint niet met een schep in de grond, maar
                met de juiste vragen. In de brochure lees je hoe een bouwtraject
                bij ons werkt — van intake tot nazorg — en waar je zelf op moet
                letten.
              </p>
              <p>
                Zo weet je vooraf hoe kosten zijn opgebouwd, welke keuzes je
                wanneer maakt en hoe je verrassingen voorkomt.
              </p>
            </div>
          </div>
          <BrochureForm />
        </div>
      </section>

      <FeatureGrid
        eyebrow="In de brochure"
        title="Drie dingen die je meeneemt"
        items={[
          {
            icon: ClockIcon,
            title: "Het proces stap voor stap",
            text: "Van kennismaking tot oplevering: wat er wanneer gebeurt en wat wij van jou nodig hebben.",
          },
          {
            icon: EuroIcon,
            title: "Hoe kosten zijn opgebouwd",
            text: "Wat zit er in een offerte, wat zijn stelposten en hoe houd je grip op je budget.",
          },
          {
            icon: CheckIcon,
            title: "Checklists per fase",
            text: "Praktische checklists zodat je niets vergeet — van vergunning tot verzekering.",
          },
        ]}
      />

      <CtaBanner
        eyebrow="Liever direct in gesprek?"
        title="Een intake zegt meer dan duizend brochures"
        text="Plan een vrijblijvende kennismaking — dan bespreken we jouw plan meteen concreet."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
