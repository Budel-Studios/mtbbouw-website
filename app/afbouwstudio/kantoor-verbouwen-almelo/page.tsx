import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import { CheckIcon } from "@/components/icons";
import { faqKantoorAlmelo } from "@/lib/faq";
import { KennisbankBlock } from "@/components/kennisbank/kennisbank-block";
import { ContactDrawerButton } from "@/components/contact-drawer";

export const metadata: Metadata = {
  title: { absolute: "Kantoor verbouwen in Almelo | Afbouwstudio — MTB Bouw" },
  description:
    "Kantoor verbouwen in Almelo en Noord-Twente: wanden, plafonds, installaties en afwerking. Van casco tot turn-key, met een vaste prijs.",
  alternates: { canonical: "/afbouwstudio/kantoor-verbouwen-almelo" },
};

export default function KantoorAlmeloPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Afbouwstudio", url: "/afbouwstudio" },
          { name: "Kantoor verbouwen", url: "/afbouwstudio/kantoor-verbouwen" },
          { name: "Almelo", url: "/afbouwstudio/kantoor-verbouwen-almelo" },
        ]}
      />
      <ServiceJsonLd
        name="Kantoor verbouwen in Almelo"
        description="Kantoorverbouwing en casco-afbouw in Almelo en Noord-Twente door Afbouwstudio (MTB Bouw): wanden, plafonds, installaties en afwerking met vaste prijs."
        url="/afbouwstudio/kantoor-verbouwen-almelo"
        serviceType="Kantoorafbouw"
      />
      <FaqJsonLd items={faqKantoorAlmelo} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/project-1.jpg",
          alt: "Kantoorafbouw in Almelo door Afbouwstudio (MTB Bouw)",
        }}
        eyebrow="Afbouwstudio · Almelo"
        title="Kantoor verbouwen in Almelo: van casco tot turn-key"
        intro="Voor kantoren in Almelo en Noord-Twente is Afbouwstudio het zakelijke label van MTB Bouw: één team dat wanden, plafonds, vloeren, installaties en afwerking regelt, met een vaste prijs binnen vijf werkdagen na de intake — en werkzaamheden die zich voegen naar jouw openingstijden."
        cta={
          <>
            <ArrowLink drawer onDark>Plan een intake</ArrowLink>
            <ArrowLink href="/afbouwstudio#cases" onDark>Bekijk onze cases</ArrowLink>
          </>
        }
      />

      <section className="bg-paper">
        <div className="container-page py-20 md:py-28">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow text-stone">
                01 — Waarom Afbouwstudio in Almelo
              </p>
              <h2 className="display mt-4 text-4xl md:text-5xl">
                Twents team, Twentse afspraken
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Almelo hoort bij ons vaste werkgebied: op een halfuur van onze
                werkplaats plannen we intakes binnen een week en bouwen we met
                dezelfde vaste vakmensen als in Enschede en Hengelo. Afspraak
                is afspraak — vaste prijs, vaste planning, wekelijkse update.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Intake in Almelo binnen een week",
                  "Vaste prijs binnen 5 werkdagen na de intake",
                  "Gefaseerd of buiten kantoortijden werken",
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
                ook voor huurders die casco kantoorruimte moeten afbouwen.
                Kostenindicaties staan op de{" "}
                <Link href="/afbouwstudio/kantoor-verbouwen" className="font-semibold text-ink underline hover:text-navy">
                  hoofdpagina kantoor verbouwen
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
        items={faqKantoorAlmelo}
        eyebrow="03 — Veelgesteld"
        title="Kantoor verbouwen in Almelo: veelgestelde vragen"
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
            Kantoorplannen in Almelo?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            We komen binnen een week langs, inventariseren alles met onze app
            en sturen binnen 5 werkdagen een vaste offerte.
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
