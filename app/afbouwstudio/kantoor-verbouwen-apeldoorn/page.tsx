import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import { CheckIcon } from "@/components/icons";
import { faqKantoorApeldoorn } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Kantoor verbouwen in Apeldoorn | Afbouwstudio — MTB Bouw" },
  description:
    "Kantoor verbouwen in Apeldoorn? Afbouwstudio verbouwde er De Broodbode met maar 10 dagen sluitingstijd. Kantoorafbouw van casco tot turn-key — gefaseerd, 's avonds of in het weekend, vaste prijs.",
  alternates: { canonical: "/afbouwstudio/kantoor-verbouwen-apeldoorn" },
};

export default function KantoorApeldoornPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Afbouwstudio", url: "/afbouwstudio" },
          { name: "Kantoor verbouwen", url: "/afbouwstudio/kantoor-verbouwen" },
          { name: "Apeldoorn", url: "/afbouwstudio/kantoor-verbouwen-apeldoorn" },
        ]}
      />
      <ServiceJsonLd
        name="Kantoor verbouwen in Apeldoorn"
        description="Kantoorverbouwing en kantoorafbouw in Apeldoorn door Afbouwstudio (MTB Bouw): gefaseerd verbouwen terwijl het werk doorgaat, met vaste prijs."
        url="/afbouwstudio/kantoor-verbouwen-apeldoorn"
        serviceType="Kantoorafbouw"
      />
      <FaqJsonLd items={faqKantoorApeldoorn} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/project-1.jpg",
          alt: "Verbouwing van De Broodbode in Apeldoorn door Afbouwstudio",
        }}
        eyebrow="Afbouwstudio · Apeldoorn"
        title="Kantoor verbouwen in Apeldoorn — met minimale verstoring van je werk"
        intro="In het centrum van Apeldoorn verbouwden we De Broodbode met maar 10 dagen sluitingstijd: gefaseerd en 's nachts doorwerken. Diezelfde aanpak gebruiken we voor kantoren in Apeldoorn — je team werkt door terwijl wij verbouwen, tegen een vaste prijs."
        cta={
          <>
            <ArrowLink href="#contact" onDark>Plan een intake in Apeldoorn</ArrowLink>
            <ArrowLink href="/afbouwstudio#cases" onDark>Bekijk de Apeldoorn-case</ArrowLink>
          </>
        }
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
                01 — Waarom Afbouwstudio in Apeldoorn
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Verbouwen zonder dat de zaak stilvalt
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Onze kracht in Apeldoorn is bewezen: bij De Broodbode planden we
                de restyling zo dat de zaak maar 10 dagen dicht hoefde — de
                rest gebeurde &apos;s nachts en in fasen. Voor kantoren
                betekent dat: werkplekken blijven bereikbaar, deadlines staan
                vast, en je krijgt vooraf een vaste prijs.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Bewezen referentie in het centrum van Apeldoorn",
                  "Gefaseerd, 's avonds of in het weekend werken",
                  "Vaste prijs binnen 5 werkdagen na de intake",
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
                Van herindeling tot casco-afbouw
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Nieuwe indeling met{" "}
                <Link href="/afbouwstudio/metal-stud-wanden" className="font-semibold text-ink underline hover:text-lime-dark">metal stud-wanden</Link>
                ,{" "}
                <Link href="/afbouwstudio/systeemplafonds" className="font-semibold text-ink underline hover:text-lime-dark">systeemplafonds</Link>{" "}
                met LED, vloeren, pantry en installaties. Alle kostenindicaties
                staan op de{" "}
                <Link href="/afbouwstudio/kantoor-verbouwen" className="font-semibold text-ink underline hover:text-lime-dark">
                  hoofdpagina kantoor verbouwen
                </Link>{" "}
                en in de{" "}
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
        items={faqKantoorApeldoorn}
        eyebrow="03 — Veelgesteld"
        title="Kantoor verbouwen in Apeldoorn: veelgestelde vragen"
      />

      <section id="contact" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime">
            Persoonlijk contact
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Kantoorplannen in Apeldoorn?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            We komen binnen 7 dagen langs, inventariseren alles met onze app en
            sturen binnen 5 werkdagen een vaste offerte.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:info@mtbbouw.com?subject=Intake%20kantoor%20Apeldoorn"
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
