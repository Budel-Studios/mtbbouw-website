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

/** De drie sterkste projecten openen de pagina; daarna de vaste volgorde. */
const OPENERS = ["broodbode-zwolle-lunchroom", "luxe-overkapping-twente", "dubbele-uitbouw-enschede"];

export default function ProjectenPage() {
  // Alleen projecten met beeld: dit is een foto-eerst overzicht.
  const all = publishedProjects()
    .map(toProjectCard)
    .filter((p) => p.images.length > 0);
  const projects = [
    ...OPENERS.map((slug) => all.find((p) => p.slug === slug)).filter(
      (p): p is NonNullable<typeof p> => Boolean(p)
    ),
    ...all.filter((p) => !OPENERS.includes(p.slug)),
  ];

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Gerealiseerde projecten", url: "/projecten" },
        ]}
      />

      <section className="container-page pb-10 pt-16 md:pb-14 md:pt-24">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="animate-fade-up md:col-span-8">
            <p className="label-mono text-stone">Ons werk — recent werk uit Twente</p>
            <h1 className="display mt-6 text-[2.5rem] sm:text-6xl lg:text-7xl xl:text-[6.5rem]">
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
      </section>

      <ProjectGrid projects={projects} />

      <CtaBanner
        eyebrow="Zelf iets te bouwen?"
        title="Benieuwd wat we voor jou kunnen betekenen?"
        text="Vertel kort wat je van plan bent — we denken vrijblijvend mee en komen graag bij je langs voor een intake op locatie."
        cta={{ label: "Plan een intake", drawer: true }}
        secondary={{ label: "053 206 50 71", href: "tel:+31532065071" }}
        align="center"
      />
    </>
  );
}
