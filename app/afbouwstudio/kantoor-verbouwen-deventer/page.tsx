import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import { CheckIcon } from "@/components/icons";
import { faqKantoorDeventer } from "@/lib/faq";
import { KennisbankBlock } from "@/components/kennisbank/kennisbank-block";
import { ContactDrawerButton } from "@/components/contact-drawer";

export const metadata: Metadata = {
  title: { absolute: "Kantoor verbouwen in Deventer | Afbouwstudio — MTB Bouw" },
  description:
    "Kantoor verbouwen in Deventer: metal stud, systeemplafonds, installaties en afwerking. Van casco tot turn-key, met een gespecificeerde offerte na de intake.",
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
        intro="Een kantoor verbouwen in Deventer betekent bij Afbouwstudio: één team dat wanden, plafonds, vloeren, installaties en afwerking regelt — met een gespecificeerde offerte na de intake. Wij zijn het zakelijke label van MTB Bouw en werken door heel Oost-Nederland, van Twente tot de IJssel."
        cta={
          <>
            <ArrowLink drawer onDark>Plan een intake in Deventer</ArrowLink>
            <ArrowLink href="/afbouwstudio#cases" onDark>Bekijk onze cases</ArrowLink>
          </>
        }
      />

      <section className="bg-paper">
        <div className="container-page py-20 md:py-28">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow text-stone">
                01 — Waarom Afbouwstudio in Deventer
              </p>
              <h2 className="display mt-4 text-4xl md:text-5xl">
                Oost-Nederlands team, korte lijnen
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
                  "Intake op locatie in Deventer",
                  "Gespecificeerde offerte na de intake",
                  "Gefaseerd werken, zodat je kantoor zoveel mogelijk in bedrijf blijft",
                  "Eén aanspreekpunt: Mathijs of Robbert",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] text-ink">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-stone">
                02 — Wat we doen
              </p>
              <h2 className="display mt-4 text-4xl md:text-5xl">
                Complete kantoorafbouw
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Herindeling met{" "}
                <Link href="/afbouwstudio/metal-stud-wanden" className="font-semibold text-ink underline hover:text-navy">metal stud-wanden</Link>{" "}
                en glaswanden,{" "}
                <Link href="/afbouwstudio/systeemplafonds" className="font-semibold text-ink underline hover:text-navy">systeemplafonds</Link>{" "}
                met verlichting, vloeren, pantry, sanitair en installaties —
                ook voor huurders die casco ruimte moeten afbouwen. Bekijk de{" "}
                <Link href="/afbouwstudio/kantoor-verbouwen" className="font-semibold text-ink underline hover:text-navy">
                  hoofdpagina kantoor verbouwen
                </Link>{" "}
                en de{" "}
                <Link href="/kennisbank/kantoor-verbouwen-kosten-2026" className="font-semibold text-ink underline hover:text-navy">
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

      <KennisbankBlock
        match={{ audience: "bedrijven" }}
        title="Kennis voor ondernemers"
      />

      <section id="contact" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="eyebrow text-white/65">
            Persoonlijk contact
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl">
            Kantoorplannen in Deventer?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            We komen langs, inventariseren alles met onze app en
            sturen daarna een gespecificeerde offerte.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ContactDrawerButton className="label-mono inline-flex items-center justify-center gap-2 cursor-pointer border border-lime bg-lime px-5 py-3.5 text-ink transition-colors hover:border-white hover:bg-white">
              Plan intake
            </ContactDrawerButton>
            <a
              href="tel:+31532065071"
              className="label-mono inline-flex items-center justify-center gap-2 border border-white/80 px-5 py-3.5 text-white transition-colors hover:bg-white hover:text-navy"
            >
              Bel direct: 053 206 50 71
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
