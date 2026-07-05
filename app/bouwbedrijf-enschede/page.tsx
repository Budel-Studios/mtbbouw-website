import type { Metadata } from "next";
import Link from "next/link";
import { portfolio } from "#site/content";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { RelatedContent } from "@/components/sections/related-content";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { QuoteButton } from "@/components/ui/quote-button";
import { GraduationIcon, UsersIcon, BuildingIcon } from "@/components/icons";
import { expertises } from "@/lib/expertises";
import { faqBouwbedrijfEnschede } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Bouwbedrijf Enschede | MTB Bouw — van verbouwing tot nieuwbouw" },
  description:
    "MTB Bouw is een allround bouwbedrijf in Enschede met vier specialismen: Wonen & Verbouwen, Afbouwstudio (zakelijk), Kozijnen en Prefab Bouwen. SBB-erkend leerbedrijf, vaste prijzen.",
  alternates: { canonical: "/bouwbedrijf-enschede" },
};

export default function BouwbedrijfEnschedePage() {
  const projects = portfolio
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Bouwbedrijf Enschede", url: "/bouwbedrijf-enschede" },
        ]}
      />
      <ServiceJsonLd
        name="Bouwbedrijf in Enschede"
        description="Allround bouwbedrijf in Enschede: verbouw en renovatie voor particulieren, zakelijke afbouw, kozijnen en prefab bouwen."
        url="/bouwbedrijf-enschede"
        serviceType="Bouwbedrijf"
      />
      <FaqJsonLd items={faqBouwbedrijfEnschede} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/bedrijfshal-borne.webp",
          alt: "Bouwproject van bouwbedrijf MTB Bouw uit Enschede",
        }}
        eyebrow="Bouwbedrijf Enschede"
        title="Het bouwbedrijf uit Enschede met vier specialismen onder één dak"
        intro="MTB Bouw is een allround bouwbedrijf, gevestigd aan de Heersenkampweg 5 in Enschede. Particulieren helpen we met verbouw, renovatie en aanbouw; bedrijven met complete afbouw van kantoren, winkels en horeca. Eén team, één planning, één aanspreekpunt."
        cta={<QuoteButton />}
      />

      {/* DE VIER LABELS */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
            Wat we bouwen
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Eén bouwbedrijf, vier expertises
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Onder MTB Bouw werken vier specialistische labels samen. Zo krijg je
            voor elk project de juiste vakmensen — met de korte lijnen van één
            lokaal bedrijf uit Enschede.
          </p>
          <div className="mt-12 grid gap-px border-l border-t border-mist sm:grid-cols-2">
            {expertises.map((e) => (
              <Link
                key={e.id}
                href={e.href}
                className="group border-b border-r border-mist bg-white p-8 transition-colors hover:bg-paper"
              >
                <e.icon className="h-7 w-7 text-lime-dark" />
                <h3 className="mt-5 text-xl font-extrabold">{e.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone">
                  {e.subtitle}
                </p>
                <span className="mt-4 inline-block text-sm font-bold group-hover:text-lime-dark">
                  Bekijk {e.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HET BEDRIJF */}
      <section className="border-y border-mist bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
            Het bedrijf
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Vakmanschap uit Enschede, opgeleid in eigen huis
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="border-t-2 border-lime pt-6">
              <UsersIcon className="h-8 w-8 text-ink" />
              <h3 className="mt-5 text-2xl font-extrabold">Vast kernteam</h3>
              <p className="mt-3 leading-relaxed text-stone">
                Uitvoering, timmerwerk en werkvoorbereiding in eigen hand,
                aangevuld met vaste regionale partners voor installatie en
                afwerking. Dezelfde gezichten op elke klus.
              </p>
            </div>
            <div className="border-t-2 border-lime pt-6">
              <GraduationIcon className="h-8 w-8 text-ink" />
              <h3 className="mt-5 text-2xl font-extrabold">Erkend leerbedrijf</h3>
              <p className="mt-3 leading-relaxed text-stone">
                MTB Bouw B.V. is een door SBB erkend leerbedrijf (ID
                100812726). We leiden jonge vakmensen uit de regio zelf op —
                vakmanschap dat blijft.
              </p>
            </div>
            <div className="border-t-2 border-lime pt-6">
              <BuildingIcon className="h-8 w-8 text-ink" />
              <h3 className="mt-5 text-2xl font-extrabold">Particulier én zakelijk</h3>
              <p className="mt-3 leading-relaxed text-stone">
                Woningen in Enschede en Twente, en zakelijke afbouwprojecten
                tot in Zwolle en Apeldoorn — zoals de lunchrooms van De
                Broodbode.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps compact />

      <RelatedContent
        projects={projects}
        eyebrow="Gerealiseerd"
        title="Recente projecten van ons bouwbedrijf"
      />

      <FaqAccordion
        items={faqBouwbedrijfEnschede}
        eyebrow="Veelgesteld"
        title="Vragen over ons bouwbedrijf"
      />

      <CtaBanner
        eyebrow="Kennismaken"
        title="Op zoek naar een bouwbedrijf in Enschede?"
        text="Plan een vrijblijvende kennismaking — we denken mee over je plan en je krijgt een offerte met vaste prijs."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
