import type { Metadata } from "next";
import { ProjectGrid } from "@/components/project-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { publishedProjects, toProjectCard } from "@/lib/projects";

const INTRO =
  "Ontdek een selectie van onze gerealiseerde projecten en zie hoe wij bouwen in de praktijk. Van renovaties en uitbouwen tot complete woningen, kozijnen en bedrijfspanden: elk project laat zien hoe wij kwaliteit, vakmanschap en duidelijke communicatie samenbrengen. Laat je inspireren door onze aanpak en ontdek wat er mogelijk is voor jouw woning of bedrijfsruimte.";

export const metadata: Metadata = {
  title: "Gerealiseerde projecten",
  description:
    "Ontdek een selectie van onze gerealiseerde projecten: van renovaties en uitbouwen tot complete woningen, kozijnen en bedrijfspanden in Twente en Oost-Nederland.",
  alternates: { canonical: "/projecten" },
  openGraph: {
    type: "website",
    title: "Gerealiseerde projecten | MTB Bouw",
    description: "Ontdek een selectie van onze gerealiseerde projecten: van renovaties en uitbouwen tot complete woningen, kozijnen en bedrijfspanden in Twente en Oost-Nederland.",
    url: "/projecten",
  },
};

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="border-r border-mist py-6 pr-4 last:border-r-0 md:py-8 [&:not(:first-child)]:pl-4 md:[&:not(:first-child)]:pl-8">
      <dd className="display text-3xl md:text-5xl">{String(value).padStart(2, "0")}</dd>
      <dt className="label-mono mt-3 text-stone">{label}</dt>
    </div>
  );
}

export default function ProjectenPage() {
  // Alleen projecten met beeld: dit is een foto-eerst overzicht.
  const projects = publishedProjects()
    .map(toProjectCard)
    .filter((p) => p.images.length > 0);

  const places = new Set(
    projects.map((p) => p.location?.replace(/\s*\(.*\)$/, "")).filter(Boolean)
  ).size;
  const kinds = new Set(projects.map((p) => p.category).filter(Boolean)).size;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Gerealiseerde projecten", url: "/projecten" },
        ]}
      />

      <section className="container-page pb-14 pt-16 md:pb-20 md:pt-24">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="animate-fade-up md:col-span-8">
            <p className="label-mono text-navy">Ons werk — recent werk uit Twente</p>
            <h1 className="display mt-6 text-[2.75rem] sm:text-6xl md:text-6xl lg:text-8xl xl:text-[7.5rem]">
              Gerealiseerde projecten
            </h1>
          </div>
          <p
            className="animate-fade-up max-w-md text-base leading-relaxed text-stone md:col-span-4"
            style={{ animationDelay: "120ms" }}
          >
            {INTRO}
          </p>
        </div>

        <dl className="mt-16 grid grid-cols-3 border-t border-mist">
          <Stat value={projects.length} label="Projecten" />
          <Stat value={places} label="Plaatsen" />
          <Stat value={kinds} label="Soorten werk" />
        </dl>
      </section>

      <ProjectGrid projects={projects} />

      <CtaBanner
        eyebrow="Zelf iets te bouwen?"
        title="Benieuwd wat we voor jou kunnen betekenen?"
        text="Vertel kort wat je van plan bent — we denken vrijblijvend mee en komen graag bij je langs voor een intake op locatie."
        cta={{ label: "Vraag een offerte aan", drawer: true }}
        secondary={{ label: "Neem contact op", href: "/contact" }}
        align="center"
      />
    </>
  );
}
