import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { ArrowLink } from "@/components/ui/button";
import { WindowIcon, CheckIcon, EuroIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: { absolute: "Kozijnen | De Kozijnstudio — het kozijnen-label van MTB Bouw" },
  description:
    "Hout, kunststof en aluminium kozijnen via De Kozijnstudio, het kozijnen-label van MTB Bouw. Eerlijk advies, heldere prijzen en uitleg over ISDE-subsidie.",
  alternates: { canonical: "/kozijnen" },
  openGraph: {
    type: "website",
    title: "Kozijnen — De Kozijnstudio, het kozijnen-label van MTB Bouw",
    description:
      "Hout, kunststof en aluminium kozijnen met eerlijk advies. Volledig aanbod op dekozijnstudio.nl.",
    url: "/kozijnen",
  },
};

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
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Kozijnen", url: "/kozijnen" },
        ]}
      />

      <PageHero
        variant="image"
        image={{
          src: "/images/projects/project-3.jpg",
          alt: "Nieuwe kozijnen geplaatst door De Kozijnstudio",
        }}
        eyebrow="Kozijnen · Eigen specialist"
        title="Voor kozijnen heeft MTB Bouw een eigen specialist: De Kozijnstudio."
        intro="Tochtende kozijnen, slecht sluitende ramen, oude enkelglas? De Kozijnstudio is het label van MTB Bouw dat zich volledig richt op kozijnen — met eerlijk advies en een heldere prijsopgave, geen wilde marges."
        cta={
          <ArrowLink href="https://dekozijnstudio.nl" onDark>
            Bekijk De Kozijnstudio
          </ArrowLink>
        }
      />

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone">
            Waarom De Kozijnstudio
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Eén specialist, volledig gericht op kozijnen
          </h2>
          <div className="mt-12 grid gap-px border-l border-t border-mist md:grid-cols-3">
            {HIGHLIGHTS.map(({ title, body }) => (
              <div key={title} className="border-b border-r border-mist bg-white p-8">
                <CheckIcon className="h-7 w-7 text-lime-dark" />
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-stone">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-mist bg-white">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-24">
          <WindowIcon className="mx-auto h-10 w-10 text-lime-dark" />
          <h2 className="mt-6 font-display text-3xl font-extrabold sm:text-4xl">
            Vraag advies of een offerte aan bij De Kozijnstudio
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-stone">
            Op dekozijnstudio.nl vind je het volledige aanbod, prijzen en
            voorbeeldprojecten van MTB Bouw&apos;s kozijnen-specialist.
          </p>
          <div className="mt-9 flex justify-center gap-2">
            <a
              href="https://dekozijnstudio.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-ink px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-ink/85"
            >
              <EuroIcon className="h-4 w-4" />
              Naar dekozijnstudio.nl
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
