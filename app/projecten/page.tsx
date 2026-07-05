import type { Metadata } from "next";
import { portfolio } from "#site/content";
import { ProjectGrid } from "@/components/project-grid";
import { BreadcrumbJsonLd } from "@/components/json-ld";

const INTRO =
  "Ontdek een selectie van onze gerealiseerde projecten en zie hoe wij bouwen in de praktijk. Van renovaties en uitbouwen tot complete woningen, kozijnen en bedrijfspanden: elk project laat zien hoe wij kwaliteit, vakmanschap en duidelijke communicatie samenbrengen. Laat je inspireren door onze aanpak en ontdek wat er mogelijk is voor jouw woning of bedrijfsruimte.";

export const metadata: Metadata = {
  title: "Gerealiseerde projecten",
  description:
    "Ontdek een selectie van onze gerealiseerde projecten: van renovaties en uitbouwen tot complete woningen, kozijnen en bedrijfspanden in Twente en Oost-Nederland.",
  alternates: { canonical: "/projecten" },
};

export default function ProjectenPage() {
  const projects = portfolio
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((p) => {
      // Hover-diashow: cover eerst, aangevuld met gallery-foto's (ontdubbeld, max 3).
      const images = [
        ...(p.cover ? [{ src: p.cover, alt: p.coverAlt || p.title }] : []),
        ...p.gallery.map((g) => ({ src: g.src, alt: g.alt })),
      ]
        .filter(
          (img, i, arr) => arr.findIndex((x) => x.src === img.src) === i
        )
        .slice(0, 3);

      return {
        slug: p.slug,
        permalink: p.permalink,
        title: p.title,
        description: p.description,
        category: p.category,
        location: p.location,
        images,
      };
    })
    .filter((p) => p.images.length > 0);

  return (
    <div className="bg-canvas">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Gerealiseerde projecten", url: "/projecten" },
        ]}
      />
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-24">
        {/* Hero-titel — replica van de WP-component (Archivo, 2 regels, strak) */}
        <h1
          style={{ fontWeight: 600 }}
          className="mb-8 font-display text-4xl leading-[0.95] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.5rem]"
        >
          Gerealiseerde
          <br />
          projecten
        </h1>

        <ProjectGrid projects={projects} intro={INTRO} />
      </div>
    </div>
  );
}
