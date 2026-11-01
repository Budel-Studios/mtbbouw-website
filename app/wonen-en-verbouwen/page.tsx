import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { portfolio } from "#site/content";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { RelatedContent } from "@/components/sections/related-content";
import { ServiceAreaLinks } from "@/components/sections/service-area-links";
import { CtaBanner } from "@/components/sections/cta-banner";
import { HammerIcon, HouseIcon, WallIcon } from "@/components/icons";
import { KennisbankBlock } from "@/components/kennisbank/kennisbank-block";

const title = "Verbouwen in Twente | Wonen & Verbouwen van MTB Bouw";
const description =
  "Renovatie, aanbouw, uitbouw en nieuwbouw voor particulieren in Twente. Eén vast team uit Enschede, één aanspreekpunt en een gespecificeerde offerte.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/wonen-en-verbouwen" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/wonen-en-verbouwen",
    images: [
      {
        url: "/images/projects/renovatie-villa-zantinge-enschede/03.jpg",
        alt: "Woonruimte met glazen pui en gele baksteen in een gerenoveerde villa in Enschede",
      },
    ],
  },
};

const SUB_ITEMS = [
  {
    icon: HammerIcon,
    title: "Renovatie & verbouw",
    text: "Een nieuwe keuken of badkamer, of de hele woning van binnen en buiten. Wat goed is laten we staan, de rest maken we weer van nu.",
    href: "/verbouwing",
    image: "/images/projects/renovatie-villa-zantinge-enschede/06.jpg",
    alt: "Nieuwe keuken met houten kastenwand en kookeiland in een gerenoveerde villa in Enschede",
  },
  {
    icon: HouseIcon,
    title: "Aanbouw & uitbouw",
    text: "Meer ruimte zonder te verhuizen. Gemetseld of in houtskeletbouw, aangesloten op de stijl van je huis.",
    href: "/aanbouw-uitbouw",
    image: "/images/projects/uitbouw-houtskeletbouw-enschede/01.jpg",
    alt: "Nieuwe uitbouw in houtskeletbouw met Finiplus-gevel en zwarte kozijnen in Enschede",
  },
  {
    icon: WallIcon,
    title: "Nieuwbouw",
    text: "Bouwen vanaf de fundering, met één team van vergunning tot sleutel.",
    href: "/nieuwbouw",
    image: "/images/projects/overkapping-paardenstal-enschede/04.jpg",
    alt: "Nieuwe overkapping met paardenstal in het buitengebied van Enschede, gebouwd door MTB Bouw",
  },
];

const OOK_VOOR_THUIS = [
  { href: "/kozijnen", label: "Kozijnen vervangen" },
  { href: "/verduurzamen", label: "Verduurzamen" },
  { href: "/prefab#overkappingen", label: "Veranda's en overkappingen" },
];

const projectSlugs = [
  "renovatie-villa-zantinge-enschede",
  "uitbouw-houtskeletbouw-enschede",
  "veranda-bouwen-almelo",
];

export default function WonenEnVerbouwenPage() {
  const projects = projectSlugs
    .map((slug) => portfolio.find((p) => p.slug === slug && !p.draft))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Wonen & Verbouwen", url: "/wonen-en-verbouwen" },
        ]}
      />
      <ServiceJsonLd
        name="Wonen & Verbouwen"
        description="Renovatie, verbouw, aanbouw, uitbouw en nieuwbouw voor particulieren in Twente."
        url="/wonen-en-verbouwen"
        serviceType="Verbouw en aanbouw"
      />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/renovatie-villa-zantinge-enschede/03.jpg",
          alt: "Woonruimte met glazen pui, grote vloertegels en gele baksteen in een gerenoveerde villa in Enschede",
        }}
        eyebrow="Wonen & Verbouwen · Voor particulieren"
        title="Wonen en verbouwen in Enschede en Twente — jouw huis, zoals jij het voor ogen hebt"
        intro="Van een nieuwe badkamer tot een complete renovatie of een uitbouw. Eén vast team uit Enschede, één planning en één aanspreekpunt."
      />

      {/* Zo gaat het bij ons */}
      <section className="container-page py-20 md:py-28">
        <p className="eyebrow text-stone">Zo gaat het bij ons</p>
        <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">
          Het begint bij jou thuis
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-stone">
          Mathijs of Robbert komt langs en kijkt met je rond. Elke wand, vloer
          en elk plafond leggen we vast in onze eigen app, zodat je meteen ziet
          wat we voorstellen. Daarna krijg je een gespecificeerde offerte.
        </p>
        <p className="mt-5 max-w-2xl leading-relaxed text-stone">
          We zijn een klein bedrijf met een vast kernteam en vaste partners uit
          de regio. Van offerte tot oplevering heb je hetzelfde aanspreekpunt,
          dus je weet altijd bij wie je moet zijn.
        </p>
      </section>

      <section className="bg-paper">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow text-stone">Onze specialismen</p>
          <h2 className="display mt-4 max-w-2xl text-4xl md:text-5xl">
            Drie manieren om je woning te verbeteren
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SUB_ITEMS.map(({ icon: Icon, title, text, href, image, alt }) => (
              <Link
                key={title}
                href={href}
                className="group block overflow-hidden border border-mist bg-white transition-colors hover:border-ink/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <Icon className="h-7 w-7 text-navy" />
                  <h3 className="mt-5 text-2xl font-semibold">{title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-stone">{text}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold">
                    Meer info
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="text-sm font-semibold text-ink">Ook voor thuis:</span>
            {OOK_VOOR_THUIS.map((o) => (
              <Link
                key={o.href}
                href={o.href}
                className="border border-mist bg-white px-4 py-2 text-sm font-semibold text-ink hover:border-ink/30 hover:text-navy"
              >
                {o.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedContent
        projects={projects}
        eyebrow="Ons werk"
        title="Verbouwingen uit Twente"
      />

      <KennisbankBlock
        match={{ categories: ["bouwvoorbereiding", "tijdens-na-de-bouw"], audience: "thuis" }}
        title="Lees je in voor je gaat verbouwen"
        tone="plain"
      />

      <ServiceAreaLinks
        label="Verbouwen"
        intro="Vanuit Enschede verbouwen we woningen in heel Twente. Op de pagina van jouw plaats vind je projecten, regels en vragen uit de buurt."
      />

      <CtaBanner
        eyebrow="Vrijblijvend kennismaken"
        title="Plannen voor je huis?"
        text="We komen langs, denken mee en je ontvangt een gespecificeerde offerte."
        cta={{ label: "Ontvang offerte", drawer: true }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
