import type { Metadata } from "next";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: `Neem contact op met ${site.name} in Enschede voor een vrijblijvend advies of offerte. Bel ${site.telephone} of mail ${site.email}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
        Contact
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight">
        Neem contact op
      </h1>
      <p className="mt-3 max-w-2xl text-stone">
        Vrijblijvend in gesprek over jullie plan? Bel, mail of stuur een bericht
        — we denken graag mee.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        {/* Gegevens */}
        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-stone">
              Bouwbedrijf MTB Bouw
            </h2>
            <address className="mt-3 not-italic text-lg leading-relaxed">
              {site.address.streetAddress}
              <br />
              {site.address.postalCode} {site.address.addressLocality}
            </address>
          </div>

          <dl className="space-y-4 text-lg">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-stone">
                Telefoon
              </dt>
              <dd>
                <a
                  href={`tel:${site.telephoneHref}`}
                  className="font-semibold hover:text-lime-dark"
                >
                  {site.telephone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-stone">
                E-mail
              </dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold hover:text-lime-dark"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-stone">
                Openingstijden
              </dt>
              <dd className="text-base text-stone">
                Maandag – Vrijdag: 08:00–17:00
                <br />
                Zaterdag – Zondag: gesloten
              </dd>
            </div>
          </dl>

          <div className="flex gap-4">
            <Button
              href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </Button>
            <Button href={`tel:${site.telephoneHref}`} variant="outline-dark">
              Bel direct
            </Button>
          </div>

          <p className="text-xs text-stone">{site.sbb}</p>
        </div>

        {/* Formulier */}
        <div className="border border-mist bg-white p-8">
          <h2 className="text-xl font-bold">Stuur een bericht</h2>
          <p className="mt-1 text-sm text-stone">
            We reageren doorgaans binnen één werkdag.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
