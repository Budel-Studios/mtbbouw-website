import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import { BuildingIcon, BoltIcon, ChatIcon } from "@/components/icons";
import { faqSysteemplafonds } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Systeemplafonds voor kantoren | Afbouwstudio — MTB Bouw" },
  description:
    "Systeemplafonds voor kantoren, winkels en horeca in Twente: akoestisch, met LED-verlichting en klimaat. Geplaatst in dagen, vaste prijs.",
  alternates: { canonical: "/afbouwstudio/systeemplafonds" },
};

export default function SysteemplafondsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Afbouwstudio", url: "/afbouwstudio" },
          { name: "Systeemplafonds", url: "/afbouwstudio/systeemplafonds" },
        ]}
      />
      <ServiceJsonLd
        name="Systeemplafonds plaatsen"
        description="Plaatsing van (akoestische) systeemplafonds met geïntegreerde verlichting en klimaat in kantoren, winkels en horeca in Twente en Oost-Nederland."
        url="/afbouwstudio/systeemplafonds"
        serviceType="Systeemplafonds"
      />
      <FaqJsonLd items={faqSysteemplafonds} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/project-2.jpg",
          alt: "Akoestisch systeemplafond geplaatst door Afbouwstudio (MTB Bouw)",
        }}
        eyebrow="Afbouwstudio · Plafonds"
        title="Systeemplafonds: rust, licht en techniek in één plafond"
        intro="Een systeemplafond is de snelste verbetering van een werkruimte: de galm verdwijnt, de verlichting wordt in één keer goed en alle techniek blijft bereikbaar. Afbouwstudio plaatst (akoestische) systeemplafonds in kantoren, winkels en horeca — zoals het zwarte akoestiekplafond bij De Broodbode."
        cta={<ArrowLink href="#contact" onDark>Vraag een vaste prijs aan</ArrowLink>}
      />

      <FeatureGrid
        items={[
          {
            icon: ChatIcon,
            title: "Akoestiek die werkt",
            text: "Absorberende panelen per ruimte gekozen — direct betere spraakverstaanbaarheid in kantoortuinen en vergaderruimtes.",
          },
          {
            icon: BoltIcon,
            title: "Verlichting geïntegreerd",
            text: "LED-panelen, spots en klimaat nemen we in één keer mee in het plafondplan, samen met onze installatiepartners.",
          },
          {
            icon: BuildingIcon,
            title: "Techniek bereikbaar",
            text: "Alles boven de panelen blijft toegankelijk; beschadigde panelen wissel je los om. Ideaal bij toekomstige aanpassingen.",
          },
        ]}
      />

      <section className="border-y border-mist bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
            Kosten & aanpak
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Wat kost een systeemplafond?
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-stone">
            Als marktindicatie (2026) kost een standaard systeemplafond circa
            €40–80 per m²; inclusief LED-verlichting reken je op €65–120 per
            m². Een gemiddelde kantoorvloer is in enkele dagen voorzien — vaak
            gecombineerd met{" "}
            <Link href="/afbouwstudio/metal-stud-wanden" className="font-semibold text-ink underline hover:text-lime-dark">
              metal stud-wanden
            </Link>{" "}
            in dezelfde planning, als onderdeel van een{" "}
            <Link href="/afbouwstudio/kantoor-verbouwen" className="font-semibold text-ink underline hover:text-lime-dark">
              kantoorverbouwing
            </Link>
            . Zie ook de{" "}
            <Link href="/kennisbank/kantoor-verbouwen-kosten-2026" className="font-semibold text-ink underline hover:text-lime-dark">
              kostengids 2026
            </Link>
            .
          </p>
        </div>
      </section>

      <FaqAccordion
        items={faqSysteemplafonds}
        eyebrow="Veelgesteld"
        title="Vragen over systeemplafonds"
      />

      <section id="contact" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime">
            Vaste prijs
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Plafond aan vervanging toe?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Stuur de oppervlakte en een paar foto&apos;s of plan een intake —
            binnen 5 werkdagen ligt er een vaste prijs.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:info@mtbbouw.com?subject=Offerte%20systeemplafond"
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
