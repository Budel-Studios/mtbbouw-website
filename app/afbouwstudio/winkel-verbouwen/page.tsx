import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import { BuildingIcon, ClockIcon, PaintIcon, UsersIcon } from "@/components/icons";
import { faqWinkelVerbouwen } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Winkel verbouwen | Afbouwstudio — MTB Bouw | retail-afbouw Oost-NL" },
  description:
    "Winkel of showroom verbouwen? Afbouwstudio (MTB Bouw) verzorgt retail-afbouw in Twente en Oost-Nederland: klaar vóór je openingsdatum, gefaseerd of buiten openingstijden, vaste prijs.",
  alternates: { canonical: "/afbouwstudio/winkel-verbouwen" },
};

const PIJLERS = [
  {
    icon: ClockIcon,
    title: "Klaar vóór de openingsdatum",
    text: "We plannen terug vanaf jouw opening en zetten waar nodig avond- en weekendploegen in. Geen vertraging, wel resultaat.",
  },
  {
    icon: PaintIcon,
    title: "Formule-getrouw gebouwd",
    text: "We vertalen je winkelconcept of merkboek naar de uitvoering — van vloer tot verlichting, consistent over elke vestiging.",
  },
  {
    icon: BuildingIcon,
    title: "Showrooms & concept stores",
    text: "Winkelpanden, showrooms en concept stores: wij werken samen met retail-architecten en formulebeheerders.",
  },
  {
    icon: UsersIcon,
    title: "Eén team, meerdere vestigingen",
    text: "Meerdere locaties volgens één formule? Eén team dat je concept kent bewaakt de consistentie — zoals bij De Broodbode in Zwolle en Apeldoorn.",
  },
];

export default function WinkelVerbouwenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Afbouwstudio", url: "/afbouwstudio" },
          { name: "Winkel verbouwen", url: "/afbouwstudio/winkel-verbouwen" },
        ]}
      />
      <ServiceJsonLd
        name="Winkel verbouwen"
        description="Retail-afbouw van winkels, showrooms en concept stores in Twente en Oost-Nederland door Afbouwstudio (MTB Bouw)."
        url="/afbouwstudio/winkel-verbouwen"
        serviceType="Winkelverbouwing"
      />
      <FaqJsonLd items={faqWinkelVerbouwen} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/project-3.jpg",
          alt: "Winkelafbouw door Afbouwstudio, het zakelijke label van MTB Bouw",
        }}
        eyebrow="Afbouwstudio · Retail"
        title="Winkel verbouwen — afbouw die klaar is vóór je openingsdatum"
        intro="Bij een winkelverbouwing telt elke dag: elke dag dicht is omzetverlies. Afbouwstudio bouwt winkels, showrooms en concept stores af in Twente en Oost-Nederland — gefaseerd of buiten openingstijden, met een vaste prijs en een planning die staat."
        cta={
          <>
            <ArrowLink href="#contact" onDark>Plan een intake</ArrowLink>
            <ArrowLink href="/afbouwstudio#cases" onDark>Bekijk onze cases</ArrowLink>
          </>
        }
      />

      {/* PIJLERS */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
            01 — Waarom Afbouwstudio
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Retail-afbouw met de klok mee
          </h2>
          <div className="mt-12 grid gap-px border-l border-t border-mist md:grid-cols-2">
            {PIJLERS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-b border-r border-mist bg-white p-8 md:p-10">
                <Icon className="h-8 w-8 text-lime-dark" />
                <h3 className="mt-6 text-2xl font-extrabold">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[15px] text-stone">
            Benieuwd naar de kosten? Lees onze{" "}
            <Link href="/kennisbank/kantoor-verbouwen-kosten-2026" className="font-semibold text-ink underline hover:text-lime-dark">
              kostengids voor zakelijke verbouwingen
            </Link>{" "}
            of vraag direct een vaste prijs aan.
          </p>
        </div>
      </section>

      <FaqAccordion
        items={faqWinkelVerbouwen}
        eyebrow="02 — Veelgesteld"
        title="Vragen over winkels verbouwen"
      />

      {/* CTA */}
      <section id="contact" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime">
            Persoonlijk contact
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Wanneer moet de winkel open?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Vertel ons je deadline — wij plannen terug. Intake binnen 7 dagen,
            vaste offerte binnen 5 werkdagen. Bekijk ook{" "}
            <Link href="/afbouwstudio" className="underline hover:text-white">
              alles over Afbouwstudio
            </Link>
            .
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:info@mtbbouw.com?subject=Intake%20winkelverbouwing"
              className="inline-flex items-center justify-center gap-2 bg-lime px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-lime-dark"
            >
              Plan intake
            </a>
            <a
              href="tel:+31532065071"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Bel direct: 053 206 50 71
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
