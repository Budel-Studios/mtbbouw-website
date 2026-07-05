import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArrowLink } from "@/components/ui/button";
import { CupIcon, ClockIcon, PaintIcon, ShieldIcon, MapPinIcon } from "@/components/icons";
import { faqHorecaVerbouwen } from "@/lib/faq";

export const metadata: Metadata = {
  title: { absolute: "Horeca verbouwen | Afbouwstudio — MTB Bouw | Twente & Oost-NL" },
  description:
    "Horecazaak verbouwen? Afbouwstudio (MTB Bouw) bouwt lunchrooms, restaurants en cafés af — van casco tot opening, met minimale sluitingstijd. Bekijk de Broodbode-cases in Zwolle en Apeldoorn.",
  alternates: { canonical: "/afbouwstudio/horeca-verbouwen" },
};

const PIJLERS = [
  {
    icon: ClockIcon,
    title: "Minimale sluitingstijd",
    text: "We plannen terug vanaf je (her)openingsdatum en werken in fasen of 's nachts. Broodbode Apeldoorn was maar 10 dagen dicht.",
  },
  {
    icon: CupIcon,
    title: "Van bar tot achterkeuken",
    text: "Maatwerk counters, keukenblok-installatie, tegelwerk, sanitair en akoestiek — de complete zaak uit één hand.",
  },
  {
    icon: PaintIcon,
    title: "Sfeer die je merk versterkt",
    text: "We vertalen jouw concept naar materialen, licht en afwerking — twee panden, één signatuur als het moet.",
  },
  {
    icon: ShieldIcon,
    title: "Conform de regels",
    text: "Ventilatie, vluchtwegen en brandwerendheid: we bouwen volgens de eisen en stemmen af met gemeente en brandweer.",
  },
];

export default function HorecaVerbouwenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Afbouwstudio", url: "/afbouwstudio" },
          { name: "Horeca verbouwen", url: "/afbouwstudio/horeca-verbouwen" },
        ]}
      />
      <ServiceJsonLd
        name="Horeca verbouwen"
        description="Verbouw en afbouw van horecazaken — lunchrooms, restaurants, cafés en bakkerijen — in Twente en Oost-Nederland door Afbouwstudio (MTB Bouw)."
        url="/afbouwstudio/horeca-verbouwen"
        serviceType="Horecaverbouwing"
      />
      <FaqJsonLd items={faqHorecaVerbouwen} />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/project-2.jpg",
          alt: "Horeca-afbouw van De Broodbode door Afbouwstudio (MTB Bouw)",
        }}
        eyebrow="Afbouwstudio · Horeca"
        title="Horeca verbouwen: open op de datum die jij belooft"
        intro="Een horecaverbouwing draait om één ding: zo snel mogelijk (weer) open, met een zaak die klopt tot in de laatste hoek. Afbouwstudio bouwde voor De Broodbode complete lunchrooms af in Zwolle en Apeldoorn — van casco pand tot sfeervolle zaak, en van restyling met maar 10 dagen sluitingstijd."
        cta={
          <>
            <ArrowLink href="#contact" onDark>Plan een intake</ArrowLink>
            <ArrowLink href="/afbouwstudio#cases" onDark>Bekijk de Broodbode-cases</ArrowLink>
          </>
        }
      />

      {/* PIJLERS */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
            01 — Waarom Afbouwstudio
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Gebouwd rond jouw openingstijden
          </h2>
          <div className="mt-12 grid gap-px border-l border-t border-mist md:grid-cols-2">
            {PIJLERS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-b border-r border-mist bg-white p-8 md:p-10">
                <Icon className="h-8 w-8 text-lime-dark" />
                <h3 className="mt-6 text-2xl font-extrabold">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE-VERWIJZING */}
      <section className="border-y border-mist bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden bg-ink">
              <Image
                src="/images/projects/project-1.jpg"
                alt="Interieur van lunchroom De Broodbode, afgebouwd door Afbouwstudio"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 bg-lime px-2.5 py-1 text-[11px] font-semibold text-ink">
                Case: De Broodbode
              </span>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
                02 — Bewezen in de praktijk
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Twee zaken, één signatuur
              </h2>
              <p className="mt-5 leading-relaxed text-stone">
                Voor De Broodbode bouwden we in <strong>Zwolle</strong> een leeg
                casco-pand in 7 weken om tot complete lunchroom — keukenblok,
                counter met etalage, zitruimte en sanitair. In{" "}
                <strong>Apeldoorn</strong> kreeg de bestaande zaak een complete
                restyling met maar 10 dagen sluitingstijd: de rest deden we
                &apos;s nachts en in fasen.
              </p>
              <div className="mt-7 flex items-center gap-6">
                <span className="flex items-center gap-1.5 text-sm text-stone">
                  <MapPinIcon className="h-4 w-4 text-lime-dark" /> Zwolle · 7 weken
                </span>
                <span className="flex items-center gap-1.5 text-sm text-stone">
                  <MapPinIcon className="h-4 w-4 text-lime-dark" /> Apeldoorn · 10 dagen dicht
                </span>
              </div>
              <div className="mt-8">
                <ArrowLink href="/afbouwstudio#cases">Lees de volledige case</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqAccordion
        items={faqHorecaVerbouwen}
        eyebrow="03 — Veelgesteld"
        title="Vragen over horeca verbouwen"
      />

      {/* CTA */}
      <section id="contact" className="scroll-mt-24 bg-ink text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-lime">
            Persoonlijk contact
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Wanneer wil je open?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Vertel ons je openingsdatum — wij plannen terug. Intake binnen 7
            dagen, vaste offerte binnen 5 werkdagen. Bekijk ook{" "}
            <Link href="/afbouwstudio" className="underline hover:text-white">
              alles over Afbouwstudio
            </Link>
            .
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:info@mtbbouw.com?subject=Intake%20horecaverbouwing"
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
