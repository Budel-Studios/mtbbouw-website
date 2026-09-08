import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import { CheckIcon } from "@/components/icons";
import { faqKantoorHengelo } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Kantoor verbouwen in Hengelo | Afbouwstudio — MTB Bouw" },
  description:
    "Kantoor verbouwen in Hengelo: kantoorafbouw van casco tot turn-key, ook bij bedrijfshallen. Vaste prijs binnen 5 werkdagen na de intake.",
  alternates: { canonical: "/afbouwstudio/kantoor-verbouwen-hengelo" },
};

export default function KantoorHengeloPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Afbouwstudio", url: "/afbouwstudio" },
          { name: "Kantoor verbouwen", url: "/afbouwstudio/kantoor-verbouwen" },
          { name: "Hengelo", url: "/afbouwstudio/kantoor-verbouwen-hengelo" },
        ]}
      />
      <ServiceJsonLd
        name="Kantoor verbouwen in Hengelo"
        description="Kantoorverbouwing en kantoorafbouw in Hengelo door Afbouwstudio (MTB Bouw): herindeling, casco-afbouw en kantoor-in-bedrijfshal met vaste prijs."
        url="/afbouwstudio/kantoor-verbouwen-hengelo"
        serviceType="Kantoorafbouw"
      />
      <FaqJsonLd items={faqKantoorHengelo} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/project-3.jpg",
          alt: "Kantoorafbouw in Hengelo door Afbouwstudio (MTB Bouw)",
        }}
        eyebrow="Afbouwstudio · Hengelo"
        title="Kantoor verbouwen in Hengelo — kantoor én hal in één hand"
        intro="Hengelo is onze directe buurstad: vanaf de werkplaats in Enschede staan we er in een kwartier. Typerend voor Hengelo is de combinatie van kantoor en bedrijfsruimte in één pand — precies waar Afbouwstudio sterk in is: wij bouwen beide af, in één planning en met één vaste prijs."
        cta={
          <>
            <ArrowLink href="#contact" onDark>Plan een intake</ArrowLink>
            <ArrowLink href="/afbouwstudio#cases" onDark>Bekijk onze cases</ArrowLink>
          </>
        }
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
                01 — Waarom Afbouwstudio in Hengelo
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Buurstad-voordeel: snel en flexibel
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Op vijftien minuten van ons eigen pand plannen we intakes en
                schouwen in Hengelo binnen een week. Werkt je team door tijdens
                de verbouwing? We faseren per zone en werken waar nodig buiten
                kantoortijden.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Intake in Hengelo binnen een week",
                  "Vaste prijs binnen 5 werkdagen na de intake",
                  "Kantoor én bedrijfshal in één planning",
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
                Ook kantoor-in-de-hal
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Naast klassieke kantoorafbouw —{" "}
                <Link href="/afbouwstudio/metal-stud-wanden" className="font-semibold text-ink underline hover:text-lime-dark">metal stud-wanden</Link>
                ,{" "}
                <Link href="/afbouwstudio/systeemplafonds" className="font-semibold text-ink underline hover:text-lime-dark">systeemplafonds</Link>
                , vloeren en installaties — bouwen we in Hengelo vaak inpandige
                kantoren in bedrijfshallen. Bekijk daarvoor ook{" "}
                <Link href="/afbouwstudio/bedrijfspand-verbouwen" className="font-semibold text-ink underline hover:text-lime-dark">
                  bedrijfspand verbouwen
                </Link>
                . Kostenindicaties vind je in de{" "}
                <Link href="/kennisbank/kantoor-verbouwen-kosten-2026" className="font-semibold text-ink underline hover:text-lime-dark">
                  kostengids 2026
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion
        items={faqKantoorHengelo}
        eyebrow="03 — Veelgesteld"
        title="Kantoor verbouwen in Hengelo: veelgestelde vragen"
      />

      <section id="contact" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime">
            Persoonlijk contact
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Kantoorplannen in Hengelo?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            We komen binnen een week langs, inventariseren alles met onze app
            en sturen binnen 5 werkdagen een vaste offerte.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:info@mtbbouw.com?subject=Intake%20kantoor%20Hengelo"
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
