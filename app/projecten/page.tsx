import type { Metadata } from "next";
import { portfolio } from "#site/content";
import { ProjectGrid } from "@/components/project-grid";
import { ProjectSpotlight } from "@/components/sections/project-spotlight";
import { CtaBanner } from "@/components/sections/cta-banner";
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
  const live = portfolio
    .filter((p) => !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));

  // Spotlight = nieuwste uitgelichte project met beeld.
  const s = live.find((p) => p.featured && (p.cover || p.coverVideo));
  const spotlight = s
    ? {
        permalink: s.permalink,
        title: s.title,
        intro: s.intro || s.description,
        cover: s.cover,
        coverAlt: s.coverAlt,
        coverVideo: s.coverVideo,
        category: s.category,
        location: s.location,
        duration: s.duration,
        clientType: s.clientType,
        status: s.status,
        // Quotes staan uit tot er een échte klantquote is; zet deze regel aan
        // zodra die er is: testimonial: s.testimonial,
      }
    : undefined;

  const projects = live
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
        featured: p.featured,
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
      {/* De uitgelichte case ís de header van deze pagina */}
      <ProjectSpotlight
        eyebrow="Ons werk"
        pageTitle={
          <>
            Gerealiseerde
            <br />
            projecten
          </>
        }
        project={spotlight}
      />

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 md:px-16 md:pb-24 md:pt-16">
        <h2 className="mb-8 font-display text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
          Alle projecten
        </h2>
        <ProjectGrid
          projects={projects}
          intro={INTRO}
          spotlightSlug={s?.slug}
        />
      </div>

      <CtaBanner
        eyebrow="Zelf iets te bouwen?"
        title="Benieuwd wat we voor jou kunnen betekenen?"
        text="Vertel kort wat je van plan bent — we denken vrijblijvend mee en komen graag bij je langs voor een intake op locatie."
        cta={{ label: "Vraag een offerte aan", drawer: true }}
        secondary={{ label: "Neem contact op", href: "/contact" }}
        align="center"
      />
    </div>
  );
}
