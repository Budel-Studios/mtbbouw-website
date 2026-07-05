import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import { CheckIcon } from "@/components/icons";
import { faqKantoorDeventer } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Kantoor verbouwen in Deventer | Afbouwstudio — MTB Bouw" },
  description:
    "Kantoor verbouwen in Deventer? Afbouwstudio (MTB Bouw) verzorgt kantoorafbouw van casco tot turn-key: metal stud, systeemplafonds, installaties en afwerking. Vaste prijs binnen 5 werkdagen na de intake.",
  alternates: { canonical: "/afbouwstudio/kantoor-verbouwen-deventer" },
};

export default function KantoorDeventerPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Afbouwstudio", url: "/afbouwstudio" },
          { name: "Kantoor verbouwen", url: "/afbouwstudio/kantoor-verbouwen" },
          { name: "Deventer", url: "/afbouwstudio/kantoor-verbouwen-deventer" },
        ]}
      />
      <ServiceJsonLd
        name="Kantoor verbouwen in Deventer"
        description="Kantoorverbouwing en casco-afbouw in Deventer door Afbouwstudio (MTB Bouw): wanden, plafonds, installaties en afwerking met vaste prijs."
        url="/afbouwstudio/kantoor-verbouwen-deventer"
        serviceType="Kantoorafbouw"
      />
      <FaqJsonLd items={faqKantoorDeventer} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/bedrijfshal-borne.webp",
          alt: "Zakelijke afbouw door Afbouwstudio, het zakelijke label van MTB Bouw",
        }}
        eyebrow="Afbouwstudio · Deventer"
        title="Kantoor verbouwen in Deventer: van casco tot turn-key"
        intro="Een kantoor verbouwen in Deventer betekent bij Afbouwstudio: één team dat wanden, plafonds, vloeren, installaties en afwerking regelt — met een vaste prijs binnen vijf werkdagen na de intake. Wij zijn het zakelijke label van MTB Bouw en werken door heel Oost-Nederland, van Twente tot de IJssel."
        cta={
          <>
            <ArrowLink href="#contact" onDark>Plan een intake in Deventer</ArrowLink>
            <ArrowLink href="/afbouwstudio#cases" onDark>Bekijk onze cases</ArrowLink>
          </>
        }
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
                01 — Waarom Afbouwstudio in Deventer
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Oost-Nederlands team, geen Randstad-tarieven
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Deventer ligt midden in ons werkgebied: onze teams werken
                projectmatig op locatie door heel Oost-Nederland — zo bouwden we
                complete zaken af in Zwolle en Apeldoorn. Je krijgt Twentse
                nuchterheid en tarieven, met de aanpak van een gespecialiseerd
                afbouwbedrijf.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Intake in Deventer binnen 7 dagen",
                  "Vaste prijs binnen 5 werkdagen na de intake",
                  "Gefaseerd werken — je kantoor blijft in bedrijf",
                  "Eén aanspreekpunt: Mathijs of Robbert",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] text-ink">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-lime-dark" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
                02 — Wat we doen
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Complete kantoorafbouw
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Herindeling met{" "}
                <Link href="/afbouwstudio/metal-stud-wanden" className="font-semibold text-ink underline hover:text-lime-dark">metal stud-wanden</Link>{" "}
                en glaswanden,{" "}
                <Link href="/afbouwstudio/systeemplafonds" className="font-semibold text-ink underline hover:text-lime-dark">systeemplafonds</Link>{" "}
                met verlichting, vloeren, pantry, sanitair en installaties —
                ook voor huurders die casco ruimte moeten afbouwen. Bekijk de{" "}
                <Link href="/afbouwstudio/kantoor-verbouwen" className="font-semibold text-ink underline hover:text-lime-dark">
                  hoofdpagina kantoor verbouwen
                </Link>{" "}
                en de{" "}
                <Link href="/kennisbank/kantoor-verbouwen-kosten-2026" className="font-semibold text-ink underline hover:text-lime-dark">
                  kostengids 2026
                </Link>{" "}
                voor m²-prijzen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion
        items={faqKantoorDeventer}
        eyebrow="03 — Veelgesteld"
        title="Kantoor verbouwen in Deventer: veelgestelde vragen"
      />

      <section id="contact" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime">
            Persoonlijk contact
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Kantoorplannen in Deventer?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            We komen binnen 7 dagen langs, inventariseren alles met onze app en
            sturen binnen 5 werkdagen een vaste offerte.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:info@mtbbouw.com?subject=Intake%20kantoor%20Deventer"
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
