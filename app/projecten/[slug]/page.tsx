import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { portfolio } from "#site/content";
import {
  BreadcrumbJsonLd,
  ProjectJsonLd,
  FaqJsonLd,
} from "@/components/json-ld";
import { PartnerCards } from "@/components/project/partner-cards";
import { ProjectVisuals } from "@/components/project/project-gallery";
import { publishedProjects, toProjectCard } from "@/lib/projects";
import { CardSlider } from "@/components/sections/card-slider";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqAccordion } from "@/components/sections/faq-accordion";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return portfolio.filter((p) => !p.draft).map((p) => ({ slug: p.slug }));
}

function getProject(slug: string) {
  return portfolio.find((p) => p.slug === slug && !p.draft);
}

/**
 * Bouwt lokale SEO-keywords op basis van het projecttype + de locatie —
 * alleen combinaties die logisch bij dit project passen, geen keyword
 * stuffing. Categorie wordt losjes gematcht (bv. "Uitbouw" of "Aanbouw &
 * Uitbouw" vinden allebei de term "uitbouw").
 */
function localSeoKeywords(category?: string, location?: string): string[] {
  const cat = (category || "").toLowerCase();
  const terms: string[] = [];

  if (location) {
    terms.push(`bouwbedrijf ${location}`, `aannemer ${location}`);
    if (cat.includes("renovatie")) terms.push(`renovatie ${location}`);
    if (cat.includes("uitbouw") || cat.includes("aanbouw"))
      terms.push(`uitbouw ${location}`);
    if (cat.includes("verbouw")) terms.push(`verbouwing ${location}`);
  }
  terms.push("aannemer Twente");
  if (cat.includes("verbouw")) terms.push("verbouwing Twente");
  if (cat.includes("prefab")) terms.push("prefab aanbouw Twente");

  return [...new Set(terms)];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const keywords = [
    project.category,
    project.location,
    project.category && project.location
      ? `${project.category} ${project.location}`
      : undefined,
    ...localSeoKeywords(project.category, project.location),
  ].filter((k): k is string => !!k);

  return {
    title: project.title,
    description: project.description,
    keywords,
    alternates: { canonical: project.permalink },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.description,
      url: project.permalink,
      ...(project.cover && { images: [project.cover] }),
    },
  };
}

/** Markdown-HTML in de huisstijl-prose. */
function Prose({ html }: { html: string }) {
  return (
    <div
      className="prose prose-stone max-w-none text-base leading-[1.75] prose-headings:font-display prose-headings:font-semibold prose-headings:tracking-[-0.02em] prose-a:font-semibold prose-a:text-navy prose-strong:text-ink"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/** Verhaalblok: kleine kop, daaronder de tekst. */
function Block({
  title,
  html,
  children,
}: {
  title: string;
  html?: string;
  children?: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold tracking-[-0.01em] text-ink">{title}</h2>
      {html ? <Prose html={html} /> : children}
    </section>
  );
}

/** Specificatieregel (materialen, onderaannemers, leveranciers). */
function SpecRow({ label, items }: { label: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="grid grid-cols-5 gap-4 border-b border-mist py-5">
      <dt className="label-mono col-span-2 pt-1 text-stone">{label}</dt>
      <dd className="col-span-3 text-base">
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </dd>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const uitgevoerdIn =
    project.executionPeriod ?? (project.year ? String(project.year) : undefined);

  const all = publishedProjects();
  const idx = all.findIndex((p) => p.slug === project.slug);
  // Meer projecten: vanaf het volgende project verder door de lijst.
  const more = all
    .slice(idx + 1)
    .concat(all.slice(0, Math.max(idx, 0)))
    .map(toProjectCard)
    .filter((p) => p.images.length > 0)
    .slice(0, 6);

  const facts = [
    { label: "Locatie", value: project.location },
    { label: "Type werkzaamheden", value: project.category },
    { label: "Klanttype", value: project.clientType },
    { label: "Projectduur", value: project.duration },
    { label: "Uitgevoerd in", value: uitgevoerdIn },
    { label: "Status", value: project.status },
  ].filter((f): f is { label: string; value: string } => !!f.value && f.value.trim().length > 0);

  const hasSpecs =
    project.materials.length > 0 ||
    project.contractors.length > 0 ||
    project.suppliers.length > 0;

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Projecten", url: "/projecten" },
          { name: project.title, url: project.permalink },
        ]}
      />
      <ProjectJsonLd
        title={project.title}
        description={project.description}
        url={project.permalink}
        image={project.cover}
        locality={project.location}
        dateCreated={project.date}
        keywords={[project.category, project.location].filter(
          (k): k is string => !!k
        )}
      />
      {project.faq.length > 0 && <FaqJsonLd items={project.faq} />}

      {/* 1 — TITEL */}
      <header className="container-page pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="flex items-center justify-between">
          <nav aria-label="Kruimelpad" className="label-mono text-stone">
            <Link href="/projecten" className="link-line inline-flex items-center gap-2 hover:text-navy">
              ← Alle projecten
            </Link>
          </nav>
        </div>
        <h1 className="display mt-14 animate-fade-up break-words text-[2.5rem] sm:text-5xl md:mt-20 md:text-7xl lg:text-8xl">
          {project.title}
        </h1>
        <div
          className="mt-10 grid animate-fade-up gap-6 border-t border-mist pt-6 md:grid-cols-12"
          style={{ animationDelay: "120ms" }}
        >
          <p className="label-mono text-navy md:col-span-3">{project.location}</p>
          <p className="label-mono text-stone md:col-span-3">
            {[project.category, project.clientType].filter(Boolean).join(" · ")}
          </p>
          <p className="max-w-md text-base leading-relaxed text-stone md:col-span-6 md:justify-self-end">
            {project.description}
          </p>
        </div>
      </header>

      {/* 2 — BEELD: hero, verhaal, voor/na en galerij */}
      <ProjectVisuals
        hero={project.cover ? { src: project.cover, alt: project.coverAlt || project.title, position: project.coverPosition } : undefined}
        video={project.coverVideo}
        photos={project.gallery}
      >
      {/* 3 — VERHAAL + PROJECTGEGEVENS (tussen hero en galerij) */}
        <section>
        <div className="container-page grid gap-14 py-20 md:grid-cols-12 md:py-28">
        <aside className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <p className="label-mono text-stone">Projectgegevens</p>
            <dl className="mt-6 border-t border-ink">
              {facts.map((f) => (
                <div key={f.label} className="grid grid-cols-5 gap-4 border-b border-mist py-3.5">
                  <dt className="label-mono col-span-2 pt-0.5 text-stone">{f.label}</dt>
                  <dd className="col-span-3 text-sm">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
        <div className="md:col-span-7 md:col-start-6">
          <p className="label-mono text-stone">Over dit project</p>
          {project.intro && (
            <p className="mt-6 text-2xl leading-snug tracking-[-0.02em] md:text-[2.1rem]">
              {project.intro}
            </p>
          )}
          <div className="mt-10 space-y-10 text-stone">
            {/* Uitgebreide omschrijving (document-body) */}
            {project.body && project.body.trim().length > 0 && <Prose html={project.body} />}

            {project.situation && <Block title="De situatie" html={project.situation} />}
            {project.clientRequest && (
              <Block title="De vraag van de klant" html={project.clientRequest} />
            )}
            {(project.challenges || project.approach) && (
              <Block title="Onze aanpak">
                {project.challenges && (
                  <div className="mb-6">
                    <h3 className="label-mono text-stone">Uitdagingen</h3>
                    <div className="mt-2">
                      <Prose html={project.challenges} />
                    </div>
                  </div>
                )}
                {project.approach && <Prose html={project.approach} />}
              </Block>
            )}
            {project.highlights && (
              <Block title="Bijzonderheden tijdens de uitvoering" html={project.highlights} />
            )}
            {project.execution && <Block title="Uitvoering & planning" html={project.execution} />}
            {project.result && <Block title="Het eindresultaat" html={project.result} />}
            {project.learnings && <Block title="Wat hebben we geleerd" html={project.learnings} />}
          </div>
        </div>
        </div>
        </section>

      </ProjectVisuals>

      {/* 4 — KLANTQUOTE */}
      {project.testimonial && (
        <section className="container-page py-24 md:py-32">
          <figure className="grid gap-8 md:grid-cols-12">
            <span className="label-mono text-navy md:col-span-2">Citaat</span>
            <div className="md:col-span-9">
              <blockquote className="display text-2xl not-italic leading-[1.15] md:text-4xl">
                “{project.testimonial.text}”
              </blockquote>
              <figcaption className="label-mono mt-8 text-stone">
                — {project.testimonial.attribution}
              </figcaption>
            </div>
          </figure>
        </section>
      )}

      {/* 5 — PARTNERS & LEVERANCIERS */}
      {project.partners.length > 0 && (
        <section className="container-page pb-24 md:pb-32">
          <div className="flex items-end justify-between gap-6 border-t border-mist pt-14">
            <div>
              <p className="eyebrow text-stone">Samenwerkingen</p>
              <h2 className="display mt-4 text-4xl md:text-6xl">Partners &amp; leveranciers</h2>
            </div>
            <span className="label-mono text-stone">
              {String(project.partners.length).padStart(2, "0")} partners
            </span>
          </div>
          <p className="mt-6 max-w-2xl text-stone">
            Goed bouwen doe je samen. Deze ondernemers en leveranciers werkten
            met ons aan dit project.
          </p>
          <div className="mt-10">
            <PartnerCards partners={project.partners} />
          </div>
        </section>
      )}

      {/* 6 — SPECIFICATIES */}
      {hasSpecs && (
        <section className="container-page pb-24 md:pb-32">
          <p className="eyebrow text-stone">Specificaties</p>
          <h2 className="display mt-4 text-4xl md:text-6xl">Details</h2>
          <dl className="mt-10 grid border-t border-ink md:grid-cols-2 md:gap-x-16">
            <SpecRow label="Gebruikte materialen" items={project.materials} />
            <SpecRow label="Onderaannemers" items={project.contractors} />
            <SpecRow label="Leveranciers" items={project.suppliers} />
          </dl>
        </section>
      )}

      {/* Interne links naar diensten + projectenoverzicht */}
      {project.relatedServices.length > 0 && (
        <section className="container-page pb-16">
          <div className="border-t border-mist pt-10">
            <p className="eyebrow text-stone">Meer over onze diensten</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.relatedServices.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="label-mono inline-flex items-center border border-mist px-4 py-2.5 text-ink transition-colors hover:border-ink hover:text-navy"
                >
                  {svc.label}
                </Link>
              ))}
              <Link
                href="/projecten"
                className="label-mono inline-flex items-center border border-mist px-4 py-2.5 text-ink transition-colors hover:border-ink hover:text-navy"
              >
                Alle projecten
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {project.faq.length > 0 && (
        <div className="bg-tint">
          <FaqAccordion
            items={project.faq}
            eyebrow="Veelgestelde vragen"
            title="Vragen over dit project"
          />
        </div>
      )}

      {/* CTA */}
      <CtaBanner
        eyebrow="Ook een project starten?"
        title="Benieuwd wat wij voor jouw woning of bedrijfspand kunnen betekenen?"
        text="Vertel ons over je plannen — we denken graag mee en zijn duidelijk over prijs en planning."
        cta={{ label: "Plan een intake", drawer: true }}
        secondary={{ label: "053 206 50 71", href: "tel:+31532065071" }}
      />

      {/* Meer projecten */}
      <CardSlider
        items={more}
        label="Meer projecten"
        eyebrow="Volgend project"
        title="Meer van ons werk"
        link={{ href: "/projecten", label: "Alle projecten" }}
      />
    </article>
  );
}
