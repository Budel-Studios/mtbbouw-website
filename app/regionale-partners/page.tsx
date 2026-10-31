import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { RegionalePartnersBrowser } from "@/components/regionale-partners-browser";
import { site } from "@/lib/site";
import { projectsByPartner, projectsWithPartners } from "@/lib/partner-projects";
import { CardSlider } from "@/components/sections/card-slider";

const title = "Regionale bouwpartners in Twente | MTB Bouw";
const description =
  "Met deze vaste vakmensen en leveranciers uit Twente bouwt MTB Bouw. Geen wisselende onderaannemers, maar partners uit de buurt die we kennen.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/regionale-partners" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/regionale-partners",
  },
};

export default function RegionalePartnersPage() {
  const byPartner = projectsByPartner();
  const samenGebouwd = projectsWithPartners();

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
        intro="We zijn een klein bouwbedrijf en dat willen we graag zo houden. Voor wat we niet zelf doen, werken we met vaste mensen en bedrijven uit de buurt. Geen wisselende onderaannemers, maar partners die we kennen en die elkaar kennen."
      />

      <RegionalePartnersBrowser projectsByPartner={byPartner} />

      {/* Samen gebouwd — partners gekoppeld aan echte projecten */}
      <CardSlider
        items={samenGebouwd}
        label="Projecten met onze partners"
        eyebrow="Samen gebouwd"
        title="Waar onze partners meebouwden"
        link={{ href: "/projecten", label: "Alle projecten" }}
      />

      {/* Word partner van MTB — opvallend lime-blok */}
      <section className="container-page py-16">
        <a
          href="/contact#formulier"
          className="group block bg-lime text-ink transition-colors hover:bg-lime-dark"
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
              <span className="label-mono text-ink/70">
                Open plek in ons netwerk
              </span>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-[1.05] text-ink sm:text-4xl">
                Word partner van MTB
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink/80">
                Ben je vakman, onderaannemer of leverancier in Twente en wil je
                met ons meebouwen? We horen graag van je.
              </p>
            </div>
            <div className="label-mono inline-flex shrink-0 items-center gap-2 border border-navy bg-navy px-5 py-3.5 text-white transition-colors group-hover:bg-white group-hover:text-navy">
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
        cta={{ label: "Bespreek jouw project", drawer: true }}
        secondary={{ label: `Bel ${site.telephone}`, href: `tel:${site.telephoneHref}` }}
      />
    </>
  );
}
