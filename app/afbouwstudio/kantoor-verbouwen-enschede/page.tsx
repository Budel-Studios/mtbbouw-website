import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import { CheckIcon } from "@/components/icons";
import { faqKantoorEnschede } from "@/lib/faq";
import { KennisbankBlock } from "@/components/kennisbank/kennisbank-block";
import { ContactDrawerButton } from "@/components/contact-drawer";

export const metadata: Metadata = {
  title: { absolute: "Kantoor verbouwen in Enschede | Afbouwstudio — MTB Bouw" },
  description:
    "Kantoor verbouwen in Enschede door Afbouwstudio, het zakelijke label van MTB Bouw. Casco tot turn-key, met een gespecificeerde offerte na de intake.",
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
        description="Kantoorverbouwing en kantoorafbouw in Enschede door Afbouwstudio (MTB Bouw), gevestigd in Enschede: van herindeling tot complete casco-afbouw met een gespecificeerde offerte."
        url="/afbouwstudio/kantoor-verbouwen-enschede"
        serviceType="Kantoorafbouw"
      />
      <FaqJsonLd items={faqKantoorEnschede} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/broodbode-zwolle-lunchroom/03.jpg",
          alt: "Lunchroom van De Broodbode in Zwolle, door MTB Bouw afgebouwd vanuit een casco pand",
        }}
        eyebrow="Afbouwstudio · Enschede"
        title="Kantoor verbouwen in Enschede — met de afbouwer uit je eigen stad"
        intro="Afbouwstudio is het zakelijke label van MTB Bouw uit Enschede. Voor kantoren in onze eigen stad betekent dat: intake bij jou op locatie, snel schakelen tijdens de bouw en één vast aanspreekpunt om de hoek, met een gespecificeerde offerte na de intake."
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
                01 — Waarom lokaal telt
              </p>
              <h2 className="display mt-4 text-4xl md:text-5xl">
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
                  "Gevestigd in Enschede, intake op locatie",
                  "Gespecificeerde offerte na de intake",
                  "Gefaseerd werken, zodat je team zoveel mogelijk door kan werken",
                  "Ook kleinere kantooraanpassingen",
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
                Van één vergaderruimte tot complete casco-afbouw
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Herindeling met{" "}
                <Link href="/afbouwstudio/metal-stud-wanden" className="font-semibold text-ink underline hover:text-navy">metal stud-wanden</Link>{" "}
                en glaswanden,{" "}
                <Link href="/afbouwstudio/systeemplafonds" className="font-semibold text-ink underline hover:text-navy">systeemplafonds</Link>{" "}
                met LED, vloeren, pantry en installaties — of de complete
                afbouw van casco gehuurde kantoorruimte. Hoe we werken en waar de
                kosten van afhangen, lees je op de{" "}
                <Link href="/afbouwstudio/kantoor-verbouwen" className="font-semibold text-ink underline hover:text-navy">
                  hoofdpagina kantoor verbouwen
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
            Kantoorplannen in Enschede?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            We komen langs, inventariseren alles met onze app en
            sturen daarna een gespecificeerde offerte.
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
