import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import { ShedIcon, WallIcon, BoltIcon, LayersIcon } from "@/components/icons";
import { faqBedrijfspandVerbouwen } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Bedrijfspand verbouwen in Twente | Afbouwstudio — MTB Bouw" },
  description:
    "Bedrijfshallen, werkplaatsen en utiliteitspanden verbouwen in Twente. Vaste prijs en gefaseerd uitgevoerd, terwijl jouw bedrijf gewoon doordraait.",
  alternates: { canonical: "/afbouwstudio/bedrijfspand-verbouwen" },
};

const WERKZAAMHEDEN = [
  {
    icon: ShedIcon,
    title: "Bedrijfshallen & werkplaatsen",
    text: "Isolatie, vloeren, verlichting en indeling van logistieke hallen en werkplaatsen — beton, staal en afbouw op elkaar afgestemd.",
  },
  {
    icon: WallIcon,
    title: "Inpandig kantoor in de hal",
    text: "Een geïsoleerd kantoor of kantine ín je bedrijfshal: metal stud of HSB-wanden, systeemplafond, klimaat en verlichting.",
  },
  {
    icon: BoltIcon,
    title: "Installaties & verduurzaming",
    text: "Elektra, data, LED-verlichting en klimaat, gecoördineerd met vaste installatiepartners — één planning.",
  },
  {
    icon: LayersIcon,
    title: "Prefab-uitbreiding",
    text: "Extra ruimte nodig? Via ons Prefab-label bouwen we uitbreidingen in houtskeletbouw — snel geplaatst, direct winddicht.",
  },
];

export default function BedrijfspandVerbouwenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Afbouwstudio", url: "/afbouwstudio" },
          { name: "Bedrijfspand verbouwen", url: "/afbouwstudio/bedrijfspand-verbouwen" },
        ]}
      />
      <ServiceJsonLd
        name="Bedrijfspand verbouwen"
        description="Verbouw en afbouw van bedrijfspanden, bedrijfshallen en utiliteit in Enschede, Twente en Oost-Nederland door Afbouwstudio (MTB Bouw)."
        url="/afbouwstudio/bedrijfspand-verbouwen"
        serviceType="Bedrijfspand verbouwen"
      />
      <FaqJsonLd items={faqBedrijfspandVerbouwen} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/bedrijfshal-borne.webp",
          alt: "Verbouwd bedrijfspand in Borne door Afbouwstudio (MTB Bouw)",
        }}
        eyebrow="Afbouwstudio · Bedrijfspanden"
        title="Bedrijfspand verbouwen in Twente — zonder dat je bedrijf stilvalt"
        intro="Een bedrijfspand verbouwen betekent bij Afbouwstudio: gefaseerd werken terwijl jouw bedrijfsvoering doordraait, met een vaste prijs binnen vijf werkdagen na de intake. Van bedrijfshal tot utiliteitspand, in Enschede, Twente en heel Oost-Nederland."
        cta={
          <>
            <ArrowLink href="#contact" onDark>Plan een intake</ArrowLink>
            <ArrowLink href="/projecten" onDark>Bekijk projecten</ArrowLink>
          </>
        }
      />

      {/* WERKZAAMHEDEN */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
            01 — Wat we doen
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Van hal tot kantoor: alles in één hand
          </h2>
          <div className="mt-12 grid gap-px border-l border-t border-mist md:grid-cols-2">
            {WERKZAAMHEDEN.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-b border-r border-mist bg-white p-8 md:p-10">
                <Icon className="h-8 w-8 text-lime-dark" />
                <h3 className="mt-6 text-2xl font-extrabold">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEDRIJFSHAL → KANTOOR (long-tail) */}
      <section className="border-y border-mist bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
                02 — Veelgevraagd
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Bedrijfshal verbouwen tot kantoor
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Steeds meer ondernemers bouwen een deel van hun hal om tot
                volwaardige kantoor- of kantineruimte. Wij combineren daarvoor
                twee specialismen: de afbouw (metal stud-wanden, systeemplafonds,
                verlichting) en ons <Link href="/prefab" className="font-semibold text-ink underline hover:text-lime-dark">Prefab-label</Link>{" "}
                voor geïsoleerde HSB-wanden die snel en maatvast worden
                geplaatst. Resultaat: een comfortabele werkruimte ín je hal,
                zonder wekenlange bouwoverlast.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
                03 — Kosten
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Wat kost het?
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Als marktindicatie (2026, excl. btw): een opknapbeurt begint
                rond €150–400 per m², een complete casco-afbouw loopt tot
                €600–1.500 per m² — afhankelijk van installaties en afwerking.
                Lees ook onze{" "}
                <Link href="/kennisbank/kantoor-verbouwen-kosten-2026" className="font-semibold text-ink underline hover:text-lime-dark">
                  kostengids voor zakelijke verbouwingen
                </Link>
                . Na één intake met onze inventarisatie-app ontvang je binnen
                vijf werkdagen een vaste prijs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion
        items={faqBedrijfspandVerbouwen}
        eyebrow="04 — Veelgesteld"
        title="Vragen over bedrijfspanden verbouwen"
      />

      {/* CTA */}
      <section id="contact" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime">
            Persoonlijk contact
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Plannen met je pand?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            We komen langs met onze app, leggen elke wand, vloer en plafond vast
            en sturen binnen 5 werkdagen een vaste offerte. Bekijk ook{" "}
            <Link href="/afbouwstudio" className="underline hover:text-white">
              alles over Afbouwstudio
            </Link>
            .
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:info@mtbbouw.com?subject=Intake%20bedrijfspand"
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
