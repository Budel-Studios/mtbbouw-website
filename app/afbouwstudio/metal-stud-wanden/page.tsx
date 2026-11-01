import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import { WallIcon, ClockIcon, BulbIcon } from "@/components/icons";
import { faqMetalStud } from "@/lib/faq";
import { KennisbankBlock } from "@/components/kennisbank/kennisbank-block";
import { ContactDrawerButton } from "@/components/contact-drawer";

export const metadata: Metadata = {
  title: { absolute: "Metal stud-wanden plaatsen | Afbouwstudio — MTB Bouw" },
  description:
    "Metal stud-wanden voor kantoren en bedrijfsruimtes in Twente: snel geplaatst, geluidwerend en eenvoudig aan te passen. Gespecificeerde offerte na een intake.",
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
        cta={<ArrowLink drawer onDark>Vraag een offerte aan</ArrowLink>}
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
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow text-stone">
            Kosten & aanpak
          </p>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">
            Wat kost een metal stud-wand?
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Dat hangt af van de hoogte, de isolatie en geluidseisen, deuren en
            glas, en de afwerking. Een prijs per m² zegt daarom weinig. Wij
            plaatsen metal stud vrijwel altijd als onderdeel van een complete{" "}
            <Link href="/afbouwstudio/kantoor-verbouwen" className="font-semibold text-ink underline hover:text-navy">
              kantoorverbouwing
            </Link>{" "}
            — samen met{" "}
            <Link href="/afbouwstudio/systeemplafonds" className="font-semibold text-ink underline hover:text-navy">
              systeemplafonds
            </Link>{" "}
            en installaties in één planning. Na een intake ontvang je een
            gespecificeerde offerte.
          </p>
        </div>
      </section>

      <FaqAccordion
        items={faqMetalStud}
        eyebrow="Veelgesteld"
        title="Vragen over metal stud-wanden"
      />

      <KennisbankBlock
        match={{ subcategories: ["wanden-plafonds"], audience: "bedrijven" }}
        title="Meer over wanden en plafonds"
      />

      <section id="contact" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="eyebrow text-white/65">
            Offerte
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl">
            Nieuwe indeling nodig?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Stuur een plattegrond of plan een intake. Daarna volgt een gespecificeerde offerte.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <ContactDrawerButton className="label-mono inline-flex items-center justify-center gap-2 cursor-pointer border border-lime bg-lime px-5 py-3.5 text-ink transition-colors hover:border-white hover:bg-white">
              Vraag offerte aan
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
