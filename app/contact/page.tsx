import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { QuoteButton } from "@/components/ui/quote-button";

export const metadata: Metadata = {
  title: "Contact",
  description: `Neem contact op met ${site.name} in Enschede voor een vrijblijvend advies of offerte. Bel ${site.telephone} of mail ${site.email}.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    title: "Contact — MTB Bouw, aannemer in Enschede",
    description: `Neem contact op met ${site.name} in Enschede voor een vrijblijvend advies of offerte.`,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="container-page py-20 md:py-28">
      <Breadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />

      <p className="eyebrow text-stone">Contact</p>
      <h1 className="display mt-6 text-5xl md:text-7xl">Neem contact op</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">
        Vrijblijvend in gesprek over je plan? Doe een aanvraag, bel of mail.
        We denken graag mee.
      </p>
      <p className="mt-4 max-w-2xl leading-relaxed text-stone">
        We zitten aan de Heersenkampweg in Enschede en komen voor een intake
        bij je langs, in Enschede, Hengelo, Almelo, Oldenzaal of elders in
        Twente. Handig om alvast te hebben: foto&apos;s, een plattegrond of
        tekening en een idee van wanneer je wilt starten.
      </p>

      <div className="mt-14 grid gap-12 border-t border-ink pt-10 lg:grid-cols-2">
        {/* Gegevens */}
        <div className="space-y-8">
          <div>
            <h2 className="label-mono text-stone">
              {site.legalName}
            </h2>
            <p className="mt-3 text-lg leading-relaxed">
              Wij komen graag bij je langs voor een intake op locatie. Zo
              bekijken we de situatie direct goed en kunnen we gericht
              adviseren.
            </p>
            <p className="mt-2 text-base text-stone">
              Werkgebied: {site.address.addressLocality}, Twente en heel
              Oost-Nederland.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <dl className="space-y-4 text-lg">
            <div>
              <dt className="label-mono text-stone">
                Adres
              </dt>
              <dd>
                <address className="not-italic">
                  {site.address.streetAddress}
                  <br />
                  {site.address.postalCode} {site.address.addressLocality}
                </address>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${site.legalName}, ${site.address.streetAddress}, ${site.address.postalCode} ${site.address.addressLocality}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-stone underline hover:text-navy"
                >
                  Route plannen
                </a>
              </dd>
            </div>
            <div>
              <dt className="label-mono text-stone">
                Telefoon
              </dt>
              <dd>
                <a
                  href={`tel:${site.telephoneHref}`}
                  className="font-semibold hover:text-navy"
                >
                  {site.telephone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label-mono text-stone">
                E-mail
              </dt>
              <dd>
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold hover:text-navy"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label-mono text-stone">
                Openingstijden
              </dt>
              <dd className="text-base text-stone">
                Maandag – Vrijdag: 08:00–17:00
                <br />
                Zaterdag – Zondag: gesloten
              </dd>
            </div>
          </dl>

          <p className="text-xs text-stone">
            KVK {site.kvk} · {site.sbb}
          </p>
        </div>
      </div>

      {/* Onderin: dezelfde aanvraag als "Neem contact op" rechtsboven */}
      <div className="mt-16 flex flex-col gap-6 border-t border-mist pt-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="display text-3xl md:text-4xl">Liever meteen een aanvraag doen?</h2>
          <p className="mt-2 text-stone">Binnen 2 minuten ingevuld. We bellen je zo snel mogelijk terug.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <QuoteButton>Neem contact op</QuoteButton>
          <Button href={`tel:${site.telephoneHref}`} variant="outline-dark">
            Bel {site.telephone}
          </Button>
          <Button
            href={`https://wa.me/${site.whatsapp.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline-dark"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}
