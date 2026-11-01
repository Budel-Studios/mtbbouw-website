import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/sections/breadcrumbs";
import Link from "next/link";
import { portfolio } from "#site/content";
import { ServiceJsonLd } from "@/components/json-ld";
import { CityStory } from "@/components/sections/city-story";
import { RelatedContent } from "@/components/sections/related-content";
import { ServiceAreaLinks } from "@/components/sections/service-area-links";
import { PageHero } from "@/components/sections/page-hero";
import { ArrowLink } from "@/components/ui/button";
import { WindowIcon, CheckIcon, EuroIcon } from "@/components/icons";
import { KennisbankBlock } from "@/components/kennisbank/kennisbank-block";

export const metadata: Metadata = {
  title: { absolute: "Kozijnen vervangen in Enschede & Twente | De Kozijnstudio" },
  description:
    "Hout, kunststof of aluminium kozijnen in Twente via De Kozijnstudio, het kozijnenlabel van MTB Bouw. Eerlijk advies, all-in prijs, hulp bij ISDE-subsidie.",
  alternates: { canonical: "/kozijnen" },
  openGraph: {
    type: "website",
    title: "Kozijnen vervangen in Enschede & Twente | De Kozijnstudio",
    description:
      "Hout, kunststof en aluminium kozijnen met eerlijk advies. Volledig aanbod op kozijnstudio.com.",
    url: "/kozijnen",
    images: [
      {
        url: "/images/projects/uitbouw-houtskeletbouw-enschede/02.jpg",
        alt: "Zwarte houten kozijnen met triple glas in een uitbouw in Enschede, door MTB Bouw",
      },
    ],
  },
};

const linkClass = "font-semibold text-ink underline hover:text-navy";

const HIGHLIGHTS = [
  {
    title: "Hout, kunststof of aluminium",
    body: "Elk materiaal heeft zijn eigen uitstraling en onderhoud — De Kozijnstudio adviseert eerlijk wat bij jouw woning past.",
  },
  {
    title: "HR++ of triple glas",
    body: "Warmer wonen en minder geluid, met glas dat past bij je situatie en budget.",
  },
  {
    title: "ISDE-subsidie",
    body: "De Kozijnstudio regelt de subsidieaanvraag voor je mee, waar van toepassing.",
  },
];

export default function KozijnenPage() {
  const projects = ["uitbouw-houtskeletbouw-enschede", "renovatie-villa-zantinge-enschede"]
    .map((slug) => portfolio.find((p) => p.slug === slug && !p.draft))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <ServiceJsonLd
        name="Kozijnen vervangen"
        description="Hout, kunststof en aluminium kozijnen vervangen in Twente via De Kozijnstudio, het kozijnenlabel van MTB Bouw."
        url="/kozijnen"
        serviceType="Kozijnen vervangen"
      />
      <Breadcrumbs
        items={[
          { name: "Home", url: "/" },
          { name: "Kozijnen", url: "/kozijnen" },
        ]}
      />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/uitbouw-houtskeletbouw-enschede/02.jpg",
          alt: "Hoekpartij met zwarte houten kozijnen en triple glas in een uitbouw in Enschede",
        }}
        eyebrow="De Kozijnstudio · het kozijnenlabel van MTB Bouw"
        title="Kozijnen vervangen in Enschede en Twente"
        intro="Tochtende kozijnen, slecht sluitende ramen, oude enkelglas? De Kozijnstudio is het label van MTB Bouw dat zich volledig richt op kozijnen — met eerlijk advies en een heldere prijsopgave, geen wilde marges."
        cta={
          <ArrowLink href="https://kozijnstudio.com" onDark>
            Bekijk De Kozijnstudio
          </ArrowLink>
        }
      />

      <section className="bg-paper">
        <div className="container-page py-20 md:py-28">
          <p className="eyebrow text-stone">
            Waarom De Kozijnstudio
          </p>
          <h2 className="display mt-4 max-w-3xl text-4xl md:text-5xl">
            Eén specialist, volledig gericht op kozijnen
          </h2>
          <div className="mt-12 grid gap-px border-l border-t border-mist md:grid-cols-3">
            {HIGHLIGHTS.map(({ title, body }) => (
              <div key={title} className="border-b border-r border-mist bg-white p-8">
                <CheckIcon className="h-7 w-7 text-navy" />
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CityStory
        eyebrow="Hoe De Kozijnstudio begon"
        title="Zoveel kozijnen geplaatst dat we er een eigen label voor startten"
        image={{
          src: "/images/projects/renovatie-villa-zantinge-enschede/01.jpg",
          alt: "Glazen patio met zelfgemaakte zwarte kozijnen en een olijfboom in een Van Zantinge-villa in Enschede",
          caption: "De kozijnen van deze glazen patio zaagde en maakte Mathijs zelf",
        }}
      >
        <p>
          Bij verbouwingen en uitbouwen plaatsten we zoveel kozijnen, dat we er
          een eigen label voor begonnen: De Kozijnstudio. Hout, kunststof of
          aluminium, we leggen ons niet vast op één materiaal. Het plaatsen is
          hetzelfde vakwerk, alleen de inkoop verschilt. Zelf hebben we wel een
          zwak voor hout.
        </p>
        <p>
          Soms maken we ze zelfs zelf. Bij{" "}
          <Link href="/projecten/renovatie-villa-zantinge-enschede" className={linkClass}>
            de Van Zantinge-villa in Enschede
          </Link>{" "}
          zaagde en maakte Mathijs de kozijnen van de glazen patio met de hand.
        </p>
      </CityStory>

      <RelatedContent
        projects={projects}
        eyebrow="Ons werk"
        title="Kozijnen in onze projecten"
      />

      <KennisbankBlock
        match={{ subcategories: ["kozijnen-glas"], audience: "thuis" }}
        title="Meer over kozijnen en glas"
        tone="plain"
      />

      <section className="border-y border-mist bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-24">
          <WindowIcon className="mx-auto h-10 w-10 text-navy" />
          <h2 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
            Vraag advies of een offerte aan bij De Kozijnstudio
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-stone">
            Op kozijnstudio.com vind je het volledige aanbod, prijzen en
            voorbeeldprojecten van MTB Bouw&apos;s kozijnen-specialist.
          </p>
          <div className="mt-9 flex justify-center gap-2">
            <a
              href="https://kozijnstudio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono inline-flex items-center justify-center gap-2 border border-navy bg-navy px-5 py-3.5 text-white transition-colors hover:border-navy-dark hover:bg-navy-dark"
            >
              <EuroIcon className="h-4 w-4" />
              Naar kozijnstudio.com
            </a>
          </div>
        </div>
      </section>

      <ServiceAreaLinks
        label="Kozijnen"
        intro="Vanuit Enschede plaatsen we kozijnen in heel Twente. Op de pagina van jouw plaats vind je projecten en vragen uit de buurt."
      />
    </>
  );
}
