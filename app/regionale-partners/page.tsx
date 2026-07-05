import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { RegionalePartnersBrowser } from "@/components/regionale-partners-browser";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Regionale partners — samen bouwen met de regio",
  description:
    "MTB Bouw werkt samen met een vast netwerk van regionale vakmensen en leveranciers in Twente. Korte lijnen, hoge kwaliteit en lokaal verankerd. Bekijk onze partners.",
  alternates: { canonical: "/regionale-partners" },
  openGraph: {
    type: "website",
    title: "Samen bouwen met de regio — MTB Bouw",
    description:
      "MTB Bouw werkt samen met een vast netwerk van regionale vakmensen en leveranciers in Twente. Korte lijnen, hoge kwaliteit en lokaal verankerd.",
    url: "/regionale-partners",
  },
};

export default function RegionalePartnersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Regionale partners", url: "/regionale-partners" },
        ]}
      />

      <PageHero
        eyebrow="Ons netwerk in Twente"
        title="Samen bouwen met de regio"
        intro="Wij werken met korte lijnen en vertrouwde lokale vakmensen. Door samen op te trekken met mensen uit de regio houden we de flexibiliteit hoog en de kwaliteit gegarandeerd — van de eerste schop tot het laatste verfstreekje."
      />

      <RegionalePartnersBrowser />

      {/* Word partner van MTB — opvallend lime-blok */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <a
          href="mailto:info@mtbbouw.com?subject=Partner%20van%20MTB%20worden"
          className="group block border border-lime-dark/20 bg-lime transition-colors hover:bg-lime-dark"
        >
          <div className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:gap-10 md:p-12">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center bg-ink text-lime md:h-24 md:w-24">
              <svg
                className="h-10 w-10 md:h-12 md:w-12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                <path d="m21 3 1 11h-2" />
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                <path d="M3 4h8" />
              </svg>
            </div>
            <div className="flex-1">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/70">
                Open plek in ons netwerk
              </span>
              <h2 className="mt-2 font-display text-3xl font-extrabold leading-[1.05] text-ink sm:text-4xl">
                Word partner van MTB
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink/80">
                Ben je vakman, onderaannemer of leverancier in Twente en wil je
                met ons meebouwen? We horen graag van je.
              </p>
            </div>
            <div className="inline-flex shrink-0 items-center gap-2 bg-ink px-6 py-3.5 font-semibold text-white transition-colors group-hover:bg-white group-hover:text-ink">
              Neem contact op
              <svg
                className="h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M2 8h11M9 3.5 13.5 8 9 12.5" />
              </svg>
            </div>
          </div>
        </a>
      </section>

      <CtaBanner
        eyebrow="Samen bouwen"
        title="Bouwen met een betrouwbaar regionaal team"
        text="Benieuwd wat we samen voor jouw project kunnen betekenen? Neem vrijblijvend contact op."
        cta={{ label: "Bespreek jouw project", href: "/contact" }}
        secondary={{ label: `Bel ${site.telephone}`, href: `tel:${site.telephoneHref}` }}
      />
    </>
  );
}
