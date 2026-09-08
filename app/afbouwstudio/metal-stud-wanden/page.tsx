import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import { WallIcon, ClockIcon, BulbIcon } from "@/components/icons";
import { faqMetalStud } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Metal stud-wanden plaatsen | Afbouwstudio — MTB Bouw" },
  description:
    "Metal stud-wanden voor kantoren en bedrijfsruimtes in Twente: snel geplaatst, geluidwerend en eenvoudig aan te passen. Vaste prijs vooraf.",
  alternates: { canonical: "/afbouwstudio/metal-stud-wanden" },
};

export default function MetalStudPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Afbouwstudio", url: "/afbouwstudio" },
          { name: "Metal stud-wanden", url: "/afbouwstudio/metal-stud-wanden" },
        ]}
      />
      <ServiceJsonLd
        name="Metal stud-wanden plaatsen"
        description="Plaatsing van metal stud-scheidingswanden, geluidwerende wanden en glaswanden in kantoren en bedrijfsruimtes in Twente en Oost-Nederland."
        url="/afbouwstudio/metal-stud-wanden"
        serviceType="Metal stud wanden"
      />
      <FaqJsonLd items={faqMetalStud} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/project-3.jpg",
          alt: "Metal stud-wanden geplaatst door Afbouwstudio (MTB Bouw)",
        }}
        eyebrow="Afbouwstudio · Wanden"
        title="Metal stud-wanden: een nieuwe kantoorindeling in dagen"
        intro="Metal stud is dé manier om een kantoor of bedrijfsruimte opnieuw in te delen: licht, snel en droog gebouwd, geluidwerend uit te voeren en later eenvoudig aan te passen. Afbouwstudio plaatst metal stud-wanden inclusief glasstroken, deuren en volledige afwerking."
        cta={<ArrowLink href="#contact" onDark>Vraag een vaste prijs aan</ArrowLink>}
      />

      <FeatureGrid
        items={[
          {
            icon: ClockIcon,
            title: "Dagen, geen weken",
            text: "Geen metselwerk of droogtijd: een complete kantoorindeling staat vaak binnen enkele dagen, inclusief afwerking.",
          },
          {
            icon: WallIcon,
            title: "Geluidwerend op maat",
            text: "Met dubbele beplating en minerale wol geschikt voor vergaderruimtes, spreekkamers en kantoortuinen.",
          },
          {
            icon: BulbIcon,
            title: "Licht en open",
            text: "Glasstroken, glaswanden en elk type deur integreren we in het wandsysteem — privacy zonder donker kantoor.",
          },
        ]}
      />

      <section className="border-y border-mist bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
            Kosten & aanpak
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Wat kost een metal stud-wand?
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Als marktindicatie (2026) kost een standaard metal stud-wand circa
            €70–120 per m² wandoppervlak inclusief afwerking; geluidwerende en
            beglaasde varianten liggen hoger. Wij plaatsen metal stud vrijwel
            altijd als onderdeel van een complete{" "}
            <Link href="/afbouwstudio/kantoor-verbouwen" className="font-semibold text-ink underline hover:text-lime-dark">
              kantoorverbouwing
            </Link>{" "}
            — samen met{" "}
            <Link href="/afbouwstudio/systeemplafonds" className="font-semibold text-ink underline hover:text-lime-dark">
              systeemplafonds
            </Link>{" "}
            en installaties in één planning. Je ontvangt altijd een vaste prijs
            vooraf; zie ook de{" "}
            <Link href="/kennisbank/kantoor-verbouwen-kosten-2026" className="font-semibold text-ink underline hover:text-lime-dark">
              kostengids 2026
            </Link>
            .
          </p>
        </div>
      </section>

      <FaqAccordion
        items={faqMetalStud}
        eyebrow="Veelgesteld"
        title="Vragen over metal stud-wanden"
      />

      <section id="contact" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime">
            Vaste prijs
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Nieuwe indeling nodig?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Stuur een plattegrond of plan een intake — binnen 5 werkdagen ligt
            er een vaste prijs.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:info@mtbbouw.com?subject=Offerte%20metal%20stud-wanden"
              className="inline-flex items-center justify-center gap-2 bg-lime px-7 py-4 text-sm font-semibold text-ink transition-colors hover:bg-lime-dark"
            >
              Vraag offerte aan
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
