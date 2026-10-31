import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import { CheckIcon } from "@/components/icons";
import { faqKantoorZwolle } from "@/lib/faq";
import { KennisbankBlock } from "@/components/kennisbank/kennisbank-block";
import { ContactDrawerButton } from "@/components/contact-drawer";

export const metadata: Metadata = {
  title: { absolute: "Kantoor verbouwen in Zwolle | Afbouwstudio — MTB Bouw" },
  description:
    "Kantoor verbouwen in Zwolle: we bouwden er een compleet casco-pand af voor De Broodbode. Casco tot turn-key, vaste prijs binnen 5 werkdagen.",
  alternates: { canonical: "/afbouwstudio/kantoor-verbouwen-zwolle" },
};

export default function KantoorZwollePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Afbouwstudio", url: "/afbouwstudio" },
          { name: "Kantoor verbouwen", url: "/afbouwstudio/kantoor-verbouwen" },
          { name: "Zwolle", url: "/afbouwstudio/kantoor-verbouwen-zwolle" },
        ]}
      />
      <ServiceJsonLd
        name="Kantoor verbouwen in Zwolle"
        description="Kantoorverbouwing en casco-afbouw in Zwolle door Afbouwstudio (MTB Bouw): metal stud, systeemplafonds, installaties en afwerking met vaste prijs."
        url="/afbouwstudio/kantoor-verbouwen-zwolle"
        serviceType="Kantoorafbouw"
      />
      <FaqJsonLd items={faqKantoorZwolle} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/project-2.jpg",
          alt: "Casco-afbouw van De Broodbode in Zwolle door Afbouwstudio",
        }}
        eyebrow="Afbouwstudio · Zwolle"
        title="Kantoor verbouwen in Zwolle — bewezen met een compleet casco-project"
        intro="In de Zwolse wijk Wezenlanden bouwden we een leeg casco-pand in 7 weken om tot een complete, werkende zaak. Datzelfde casco-naar-turn-key-traject voeren we uit voor kantoren in Zwolle: wanden, plafonds, vloeren, installaties en afwerking — één team, één vaste prijs."
        cta={
          <>
            <ArrowLink drawer onDark>Plan een intake in Zwolle</ArrowLink>
            <ArrowLink href="/afbouwstudio#cases" onDark>Bekijk de Zwolle-case</ArrowLink>
          </>
        }
      />

      <section className="bg-paper">
        <div className="container-page py-20 md:py-28">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow text-stone">
                01 — Waarom Afbouwstudio in Zwolle
              </p>
              <h2 className="display mt-4 text-4xl md:text-5xl">
                Twentse nuchterheid, bewezen in Zwolle
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Afbouwstudio is het zakelijke label van MTB Bouw uit Enschede.
                Voor De Broodbode bouwden we in Zwolle een casco-pand volledig
                af — keuken, counter, sanitair, akoestisch plafond — binnen de
                afgesproken 7 weken. Onze teams werken projectmatig op locatie,
                dus de afstand merk je niet in planning of prijs.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Intake in Zwolle binnen 7 dagen",
                  "Vaste prijs binnen 5 werkdagen na de intake",
                  "Gefaseerd werken — je kantoor blijft bereikbaar",
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
                <Link href="/afbouwstudio/metal-stud-wanden" className="font-semibold text-ink underline hover:text-navy">Metal stud-wanden</Link>{" "}
                en glaswanden,{" "}
                <Link href="/afbouwstudio/systeemplafonds" className="font-semibold text-ink underline hover:text-navy">systeemplafonds</Link>{" "}
                met verlichting, vloeren, installaties, pantry en sanitair.
                Kostenindicaties en het volledige verhaal vind je op onze{" "}
                <Link href="/afbouwstudio/kantoor-verbouwen" className="font-semibold text-ink underline hover:text-navy">
                  kantoor verbouwen-pagina
                </Link>{" "}
                en in de{" "}
                <Link href="/kennisbank/kantoor-verbouwen-kosten-2026" className="font-semibold text-ink underline hover:text-navy">
                  kostengids 2026
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion
        items={faqKantoorZwolle}
        eyebrow="03 — Veelgesteld"
        title="Kantoor verbouwen in Zwolle: veelgestelde vragen"
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
            Kantoorplannen in Zwolle?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            We komen binnen 7 dagen langs, inventariseren alles met onze app en
            sturen binnen 5 werkdagen een vaste offerte.
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
