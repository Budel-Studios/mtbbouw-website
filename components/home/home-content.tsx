import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { kennisbank } from "#site/content";
import { categoryLabel } from "@/lib/kennisbank-taxonomy";
import { getAsset } from "@/lib/assets";
import { WebSiteJsonLd } from "@/components/json-ld";
import { publishedProjects, toProjectCard } from "@/lib/projects";
import { ProjectCard } from "@/components/project/project-cards";
import { Slider } from "@/components/slider";
import { HomeHero } from "@/components/home/home-hero";
import { ContactDrawerButton } from "@/components/contact-drawer";
import {
  HandNote,
  PlacesMarquee,
  SpinBadge,
  Sticker,
} from "@/components/home/playful";

/**
 * Inhoud van de homepage — 1:1 de opzet en styling van het Lovable-ontwerp
 * "Bouwprojecten Showcase": ingekaderde hero met foto/video, trustpunten,
 * expertises, recent werk (slider), over ons, een donkere "waarom"-sectie,
 * een partnermuur en de kennisbank. Teksten, links en SEO zijn die van
 * mtbbouw.com.
 *
 * Met `playful` (alleen op /test-speels) komen er speelse accenten bij.
 */

function ArrowRight({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowUpRight({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

/* ------------------------------- Inhoud ------------------------------- */

const TRUST_POINTS = [
  "SBB-erkend leerbedrijf",
  "Vaste prijs, geen verrassingen",
  "Werkzaam in heel Twente",
  "Eigen kernteam + lokale partners",
];

const EXPERTISES = [
  {
    sticker: "thuis",
    eyebrow: "Voor thuis",
    title: "Wonen & Verbouwen",
    desc: "Renovatie, verbouw, aanbouw, uitbouw en onderhoud — met oog voor hoe jullie echt wonen.",
    href: "/wonen-en-verbouwen",
    image: {
      src: "/images/projects/luxe-overkapping-twente/03.jpg",
      alt: "Luxe overkapping in een tuin in Twente, gebouwd door MTB Bouw",
    },
  },
  {
    sticker: "zakelijk",
    eyebrow: "Voor bedrijven",
    title: "Afbouwstudio",
    desc: "Complete zakelijke afbouw van kantoren, winkels en horeca — van casco tot turn-key.",
    href: "/afbouwstudio",
    image: {
      src: "/images/projects/broodbode-apeldoorn/04.jpg",
      alt: "Maatwerk zitbanken bij De Broodbode Apeldoorn",
    },
  },
  {
    sticker: "eigen merk",
    eyebrow: "Specialistisch merk",
    title: "Kozijnstudio",
    desc: "Ons eigen specialistische label voor kozijnvervanging — all-in en volledig transparant.",
    href: "/kozijnen",
    image: {
      src: "/images/projects/luxe-overkapping-twente/05.jpg",
      alt: "Vakman van MTB Bouw plaatst een glazen pui",
    },
  },
  {
    sticker: "snel!",
    eyebrow: "Slim & snel",
    title: "Prefab Bouwen",
    desc: "Houtskeletbouw, prefab daken en wanden — snel op de bouw, weinig overlast.",
    href: "/prefab",
    image: {
      src: "/images/projects/overkapping-paardenstal-enschede/04.jpg",
      alt: "Houten overkapping met paardenstal in het buitengebied van Enschede",
    },
  },
];

const WHY_ITEMS = [
  { title: "Eén aanspreekpunt", desc: "Mathijs of Robbert — je vaste contact van eerste bezoek tot nazorg." },
  { title: "Eigen vakmensen", desc: "Een vast kernteam dat elkaar en het werk door en door kent." },
  { title: "Sterk regionaal netwerk", desc: "We werken met vaste, lokale partners uit heel Twente." },
  { title: "Heldere communicatie", desc: "Korte lijnen, snelle antwoorden — bel, app of mail." },
  { title: "Transparante offertes", desc: "Vaste prijs vooraf. Geen meerwerk-verrassingen achteraf." },
  { title: "Hoogwaardige afwerking", desc: "We leveren pas op als het klopt tot in de laatste hoek." },
];

const PARTNERS = [
  { name: "BMN Bouwmaterialen", role: "Bouwmaterialen" },
  { name: "De Kozijnstudio", role: "Kozijnen" },
  { name: "RN Afbouw", role: "Afbouw" },
  { name: "Gevelaar", role: "Gevels" },
  { name: "Zebrano Studio", role: "Interieur" },
  { name: "Meuleman Hoveniers", role: "Tuin & buitenruimte" },
  { name: "Jongeneel Hengelo", role: "Bouwmaterialen" },
  { name: "Voskamp Bouw & Industrie", role: "Bouwmaterialen" },
  { name: "Rouwmaat Beton", role: "Beton" },
  { name: "KUality Schilders", role: "Schilderwerk" },
  { name: "Het Vloerenhof", role: "Vloeren & coatings" },
  { name: "Kamphuis Dakbedekking", role: "Dakwerk" },
  { name: "Brouwer Containers", role: "Afvoer & containers" },
  { name: "Dukato", role: "Partner" },
];

/* ------------------------------ Bouwstenen ----------------------------- */

function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "default",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  tone?: "default" | "inverse";
}) {
  const heading = (
    <>
      <p className={`eyebrow ${tone === "inverse" ? "text-inverse-muted" : "text-stone"}`}>{eyebrow}</p>
      <h2 className="display mt-4 text-4xl md:text-6xl">{title}</h2>
    </>
  );
  if (!intro) return <div>{heading}</div>;
  return (
    <div className="grid gap-6 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">{heading}</div>
      <p
        className={`max-w-md text-base leading-relaxed md:col-span-4 md:col-start-9 ${
          tone === "inverse" ? "text-inverse-muted" : "text-stone"
        }`}
      >
        {intro}
      </p>
    </div>
  );
}

/* ---------------------------------- Page --------------------------------- */

export async function HomeContent({
  playful = false,
  hand = "",
}: {
  /** Speelse accenten tonen (alleen op de testpagina). */
  playful?: boolean;
  /** className van het handschriftfont, nodig als playful aan staat. */
  hand?: string;
}) {
  // Herobeeld is wisselbaar via Supabase (site_assets → "home-hero");
  // zonder die asset tonen we de luxe overkapping.
  const hero = await getAsset(
    "home-hero",
    "/images/projects/luxe-overkapping-twente/cover.jpg",
    "Luxe glazen overkapping in een tuin in Twente, gebouwd door MTB Bouw"
  );
  // Optionele video-loop: Supabase-asset "home-hero-video", anders
  // public/images/home/hero-loop.mp4 (alleen als dat bestand bestaat).
  const localVideo = "/images/home/hero-loop.mp4";
  const heroVideo = await getAsset(
    "home-hero-video",
    existsSync(path.join(process.cwd(), "public", localVideo)) ? localVideo : ""
  );
  const latestArticles = kennisbank
    .filter((a) => !a.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);
  const projects = publishedProjects().map(toProjectCard).filter((p) => p.images.length > 0);

  // Partnermuur: rijen van 3 (vanaf sm) of 2 (mobiel), om en om ingesprongen.
  const rows = (size: number) =>
    Array.from({ length: Math.ceil(PARTNERS.length / size) }, (_, r) =>
      PARTNERS.slice(r * size, r * size + size)
    );

  return (
    <>
      <WebSiteJsonLd />

      <HomeHero
        image={{ src: hero.url, alt: hero.alt }}
        video={heroVideo.url ? { mp4: heroVideo.url } : undefined}
        project={{ href: "/projecten/luxe-overkapping-twente", title: "Luxe overkapping", city: "Twente" }}
        badge={
          playful ? (
            <SpinBadge className="absolute right-6 top-1/2 hidden -translate-y-1/2 md:block md:right-14" />
          ) : undefined
        }
      />

      {playful && <PlacesMarquee />}

      {/* TRUST-STRIP */}
      <section className="container-page">
        <ul className="grid grid-cols-2 border-b border-mist md:grid-cols-4">
          {TRUST_POINTS.map((t, i) => (
            <li
              key={t}
              className="border-mist py-6 pr-4 md:border-r md:py-8 md:last:border-r-0 md:[&:not(:first-child)]:pl-8"
            >
              <span className="label-mono text-navy">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-base tracking-[-0.01em] md:text-lg">{t}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* EXPERTISES */}
      <section id="expertises" className="container-page scroll-mt-20 py-24 md:py-32">
        <SectionHeading
          eyebrow="Wat we bouwen"
          title="Vier expertises, één aanspreekpunt."
          intro="Elk label heeft z'n eigen specialisme — maar de manier van werken is overal hetzelfde: vakmanschap, transparantie en korte lijnen."
        />
        <div className="mt-14">
          <Slider label="Expertises" until="lg" className="lg:grid-cols-4">
            {EXPERTISES.map((e, i) => (
              <li key={e.title} className="w-[78%] shrink-0 snap-start sm:w-[45%] lg:w-auto">
                <Link href={e.href} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                    <Image
                      src={e.image.src}
                      alt={e.image.alt}
                      fill
                      sizes="(max-width: 640px) 78vw, (max-width: 1024px) 45vw, 25vw"
                      className="img-zoom object-cover"
                    />
                    <span
                      className="absolute bottom-0 left-0 h-1 w-0 bg-lime transition-[width] duration-700 group-hover:w-full"
                      aria-hidden="true"
                    />
                    {playful && (
                      <Sticker
                        tone={(["lime", "white", "sky", "lime"] as const)[i]}
                        rotate={i % 2 ? "rotate-3" : "-rotate-6"}
                        className="absolute left-4 top-4"
                      >
                        {e.sticker}
                      </Sticker>
                    )}
                  </div>
                  <p className="label-mono mt-5 text-stone">{e.eyebrow}</p>
                  <h3 className="display mt-3 flex items-center justify-between gap-3 text-2xl md:text-3xl">
                    {e.title}
                    <ArrowUpRight className="size-5 shrink-0 text-stone transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{e.desc}</p>
                </Link>
              </li>
            ))}
          </Slider>
        </div>
      </section>

      {/* RECENT WERK — slider op warmgrijs */}
      <section id="projecten" className="scroll-mt-20 bg-tint">
        <div className="container-page py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="relative">
              <SectionHeading eyebrow="Projecten" title="Recent werk uit Twente." />
              {playful && (
                <HandNote hand={hand} arrow="down-left" className="absolute -bottom-12 left-6 rotate-2 md:left-40">
                  swipe door ons werk
                </HandNote>
              )}
            </div>
            <Link
              href="/projecten"
              className="label-mono group inline-flex items-center gap-2 border border-ink px-5 py-3.5 transition-colors hover:bg-ink hover:text-paper"
            >
              Bekijk alle {projects.length} projecten
              <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className={playful ? "mt-20" : "mt-14"}>
            <Slider label="Recente projecten">
              {projects.map((p) => (
                <li key={p.slug} className="w-[82%] shrink-0 snap-start sm:w-[55%] lg:w-[38%]">
                  <ProjectCard project={p} />
                </li>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* OVER MTB BOUW */}
      <section id="over" className="scroll-mt-20">
        <div className="container-page grid gap-14 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-5">
            <p className="eyebrow text-stone">Over MTB Bouw</p>
            <h2 className="display mt-4 text-4xl md:text-6xl">
              Eén bouwbedrijf, vier expertises, honderden vertrouwde handen.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-[1.75] text-stone md:col-span-6 md:col-start-7 md:pt-10">
            <p className="text-2xl leading-snug tracking-[-0.02em] text-ink md:text-[1.9rem]">
              MTB Bouw begon als klassieke aannemer in Enschede en groeide uit
              tot het overkoepelende merk voor alles wat we bouwen.
            </p>
            <p>
              Onder ons dak werken vier specialistische labels samen — met
              korte lijnen, één vast aanspreekpunt en heldere afspraken vooraf.
            </p>
            <p>
              Of je nu je woning wil verbouwen, een bedrijfspand casco op wil
              laten leveren of prefab wil bouwen: bij MTB kom je binnen op één
              plek en werk je met mensen die luisteren, meedenken en doen wat ze
              beloven.
            </p>
            {playful && (
              <HandNote hand={hand} className="-rotate-2 pt-2">
                — Mathijs &amp; Robbert
              </HandNote>
            )}
          </div>
        </div>
      </section>

      {/* WAAROM MTB BOUW — donker */}
      <section className="bg-inverse text-white">
        <div className="container-page py-24 md:py-32">
          <SectionHeading eyebrow="Waarom MTB Bouw" title="Bouwen zoals het hoort." tone="inverse" />
          <div className="mt-14">
            <Slider
              label="Waarom MTB Bouw"
              until="lg"
              tone="inverse"
              className="lg:grid-cols-3 lg:gap-0 lg:border-l lg:border-t lg:border-inverse-border"
            >
              {WHY_ITEMS.map((r, i) => (
                <li
                  key={r.title}
                  className="group w-[80%] shrink-0 snap-start border border-inverse-border p-6 transition-colors duration-500 hover:bg-white/[0.04] sm:w-[45%] md:p-8 lg:w-auto lg:border-l-0 lg:border-t-0"
                >
                  <span className="label-mono text-lime">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] md:text-2xl">{r.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-inverse-muted">{r.desc}</p>
                </li>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* PARTNERS — muur van blokken */}
      <section className="bg-white">
        <div className="container-page py-24 md:py-32">
          <SectionHeading
            eyebrow="Onze partners"
            title="Sterk door lokale samenwerking."
            intro="Kwaliteit komt niet uit één set handen — het komt uit een goed netwerk. Wij bouwen met vaste, regionale partners die net zo scherp op hun vak zijn als wij."
          />
          <div className="mt-16 flex flex-col-reverse gap-2 md:gap-3">
            {[2, 3].map((size) => (
              <div
                key={size}
                className={`flex-col-reverse gap-2 md:gap-3 ${size === 2 ? "flex sm:hidden" : "hidden sm:flex"}`}
              >
                {rows(size).map((row, r) => (
                  <ul
                    key={r}
                    className={`grid gap-2 md:gap-3 ${size === 2 ? "grid-cols-2" : "grid-cols-3"} ${
                      r % 2 === 1 ? "ml-8 sm:ml-[16.66%]" : "mr-8 sm:mr-[16.66%]"
                    }`}
                  >
                    {row.map((p, i) => (
                      <li
                        key={p.name}
                        className="animate-fade-up"
                        style={{ animationDelay: `${(r * size + i) * 90}ms` }}
                      >
                        <div className="flex h-full min-h-24 flex-col justify-between border border-mist bg-paper p-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink sm:min-h-28 sm:p-5 md:p-7">
                          <span className="label-mono text-stone">{p.role}</span>
                          <span className="mt-5 text-base leading-tight tracking-[-0.02em] sm:text-lg md:text-xl">
                            {p.name}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            ))}
            <div className="flex flex-wrap items-end justify-between gap-6">
              <ContactDrawerButton className="group flex cursor-pointer items-center gap-4 bg-lime px-5 py-4 text-ink transition-transform duration-500 hover:-translate-y-1.5">
                <span className="label-mono">+ Jouw project</span>
                <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </ContactDrawerButton>
              <span className="flex items-center gap-6">
                <span className="label-mono hidden text-stone sm:block">
                  Blok voor blok gebouwd — {PARTNERS.length} vaste partners
                </span>
                <Link href="/regionale-partners" className="label-mono link-line inline-flex items-center gap-2">
                  Ontmoet al onze partners <ArrowUpRight className="size-3.5" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* KENNISBANK — warmgrijs */}
      {latestArticles.length > 0 && (
        <section id="kennisbank" className="scroll-mt-20 bg-tint">
          <div className="container-page py-24 md:py-32">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading eyebrow="Inspiratie & kennis" title="Kennisbank." />
              <Link href="/kennisbank" className="label-mono link-line inline-flex items-center gap-2">
                Alle artikelen <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
            <div className="mt-14">
              <Slider label="Kennisbank-artikelen" until="md" className="md:grid-cols-3">
                {latestArticles.map((a, i) => (
                  <li key={a.slug} className="relative w-[85%] shrink-0 snap-start sm:w-[60%] md:w-auto">
                    {playful && i === 0 && (
                      <Sticker tone="navy" rotate="rotate-6" className="absolute -top-4 right-6 z-10">
                        nieuw
                      </Sticker>
                    )}
                    <Link
                      href={a.permalink}
                      className="group flex h-full flex-col border-t-2 border-lime bg-paper p-6 transition-colors hover:bg-white md:p-8"
                    >
                      {a.category && (
                        <span className="label-mono text-stone">{categoryLabel(a.category)}</span>
                      )}
                      <h3 className="mt-6 text-xl font-semibold leading-snug tracking-[-0.02em]">
                        {a.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{a.description}</p>
                      <span className="label-mono mt-8 inline-flex items-center gap-2">
                        Lees artikel
                        <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </li>
                ))}
              </Slider>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
