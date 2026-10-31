import type { Metadata } from "next";
import { site } from "@/lib/site";
import { QuoteButton } from "@/components/ui/quote-button";
import { Crosshairs, DimensionLine } from "@/components/blueprint/marks";

/**
 * Placeholder voor Mijn Blauwdruk, de online omgeving voor klanten. De app
 * staat nog niet live; zodra die op blauwdruk.mtbbouw.com draait, linkt de
 * header daar direct naartoe en kan deze pagina weg.
 */
export const metadata: Metadata = {
  title: "Mijn Blauwdruk",
  description:
    "Mijn Blauwdruk is de online omgeving voor klanten van MTB Bouw: tekeningen, keuzes en planning van je project op één plek. Binnenkort online.",
  alternates: { canonical: "/mijn-blauwdruk" },
  robots: { index: false, follow: true },
};

export default function MijnBlauwdrukPage() {
  return (
    <section className="blueprint-navy relative overflow-hidden border-b border-white/20 text-white">
      <Crosshairs className="text-white/60" />
      <div className="container-page relative grid gap-12 py-24 md:grid-cols-12 md:py-32">
        <div className="md:col-span-7">
          <p className="eyebrow text-white/80">Mijn Blauwdruk</p>
          <h1 className="display mt-6 text-5xl md:text-7xl">
            Je verbouwing, <span className="mark-lime">helder</span> op één plek.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85">
            Mijn Blauwdruk wordt de online omgeving voor klanten van MTB Bouw.
            Per project zie je de tekeningen, de keuzes die we samen maken en
            de planning. En wat er wel en niet in de offerte zit.
          </p>
          <span className="label-mono mt-8 inline-flex items-center gap-2 border border-white/50 px-3 py-2">
            <span className="block size-2 bg-lime" aria-hidden="true" />
            Binnenkort online
          </span>
        </div>

        <div className="flex flex-col justify-end md:col-span-4 md:col-start-9">
          <div className="border border-white/30 bg-navy/60 p-6 backdrop-blur-sm md:p-8">
            <p className="label-mono text-white/70">Al klant?</p>
            <p className="mt-3 leading-relaxed text-white/90">
              Heb je nu iets nodig voor je project? Bel Mathijs of Robbert, of
              stuur ons een bericht.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <QuoteButton variant="lime">Neem contact op</QuoteButton>
              <a
                href={`tel:${site.telephoneHref}`}
                className="label-mono inline-flex items-center justify-center border border-white/80 px-5 py-3.5 text-white transition-colors hover:bg-white/10"
              >
                Bel {site.telephone}
              </a>
            </div>
          </div>
        </div>

        <DimensionLine label="Blauwdruk · MTB Bouw" className="text-white/50 md:col-span-12" />
      </div>
    </section>
  );
}
