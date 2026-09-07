import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import { CheckIcon } from "@/components/icons";
import { faqKantoorEnschede } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Kantoor verbouwen in Enschede | Afbouwstudio — MTB Bouw" },
  description:
    "Kantoor verbouwen in Enschede? Afbouwstudio is het zakelijke label van MTB Bouw uit Enschede. Kantoorafbouw van casco tot turn-key — lokaal, snel schakelen, vaste prijs binnen 5 werkdagen.",
  alternates: { canonical: "/afbouwstudio/kantoor-verbouwen-enschede" },
};

export default function KantoorEnschedePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Afbouwstudio", url: "/afbouwstudio" },
          { name: "Kantoor verbouwen", url: "/afbouwstudio/kantoor-verbouwen" },
          { name: "Enschede", url: "/afbouwstudio/kantoor-verbouwen-enschede" },
        ]}
      />
      <ServiceJsonLd
        name="Kantoor verbouwen in Enschede"
        description="Kantoorverbouwing en kantoorafbouw in Enschede door Afbouwstudio (MTB Bouw), gevestigd in Enschede: van herindeling tot complete casco-afbouw met vaste prijs."
        url="/afbouwstudio/kantoor-verbouwen-enschede"
        serviceType="Kantoorafbouw"
      />
      <FaqJsonLd items={faqKantoorEnschede} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/bedrijfshal-borne.webp",
          alt: "Kantoorafbouw in Enschede door Afbouwstudio (MTB Bouw)",
        }}
        eyebrow="Afbouwstudio · Enschede"
        title="Kantoor verbouwen in Enschede — met de afbouwer uit je eigen stad"
        intro="Afbouwstudio is het zakelijke label van MTB Bouw uit Enschede. Voor kantoren in onze eigen stad betekent dat: intake bij jou op locatie, vaak nog dezelfde week, snel schakelen tijdens de bouw en één vast aanspreekpunt om de hoek — met een vaste prijs binnen vijf werkdagen."
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
                01 — Waarom lokaal telt
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Je afbouwer om de hoek
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Van het Kennispark tot de binnenstad en de bedrijventerreinen:
                in Enschede zijn we overal binnen tien minuten. Dat merk je in
                het hele traject — een schouw is snel gepland, materiaal komt
                via onze vaste regionale leveranciers, en bij vragen staat
                Mathijs of Robbert gewoon op de stoep.
              </p>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Gevestigd in Enschede — intake dezelfde week",
                  "Vaste prijs binnen 5 werkdagen na de intake",
                  "Gefaseerd werken — je team werkt door",
                  "Ook kleinere kantooraanpassingen",
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
                Van één vergaderruimte tot complete casco-afbouw
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Herindeling met{" "}
                <Link href="/afbouwstudio/metal-stud-wanden" className="font-semibold text-ink underline hover:text-lime-dark">metal stud-wanden</Link>{" "}
                en glaswanden,{" "}
                <Link href="/afbouwstudio/systeemplafonds" className="font-semibold text-ink underline hover:text-lime-dark">systeemplafonds</Link>{" "}
                met LED, vloeren, pantry en installaties — of de complete
                afbouw van casco gehuurde kantoorruimte. Kostenindicaties staan
                op de{" "}
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
        items={faqKantoorEnschede}
        eyebrow="03 — Veelgesteld"
        title="Kantoor verbouwen in Enschede: veelgestelde vragen"
      />

      <section id="contact" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime">
            Persoonlijk contact
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Kantoorplannen in Enschede?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            We komen deze week nog langs, inventariseren alles met onze app en
            sturen binnen 5 werkdagen een vaste offerte.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:info@mtbbouw.com?subject=Intake%20kantoor%20Enschede"
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
