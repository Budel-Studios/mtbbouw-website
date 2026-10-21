import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { kennisbank } from "#site/content";
import { categoryLabel } from "@/lib/kennisbank-taxonomy";
import { getAsset } from "@/lib/assets";
import { WebSiteJsonLd } from "@/components/json-ld";
import { publishedProjects, toProjectCard } from "@/lib/projects";
import { ProjectCards } from "@/components/project/project-cards";
import { QuoteButton } from "@/components/ui/quote-button";

/**
 * Homepage — minimalistische, architectonische opzet: grote displaykop,
 * één full-bleed foto, vier expertises met beeld, recent werk als
 * foto-eerst raster, over ons, waarom, partners en de kennisbank.
 * De afsluitende "Klaar om te bouwen?" staat in de (navy) footer.
 */

function ArrowRight({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ArrowUpRight({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
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
  "BMN Bouwmaterialen",
  "De Kozijnstudio",
  "RN Afbouw",
  "Gevelaar",
  "Zebrano Studio",
  "Meuleman Hoveniers",
  "Jongeneel Hengelo",
  "Voskamp Bouw & Industrie",
  "Rouwmaat Beton",
  "KUality Schilders",
  "Het Vloerenhof",
  "Kamphuis Dakbedekking",
  "Brouwer Containers",
  "Dukato",
];

/* ------------------------------ Bouwstenen ----------------------------- */

function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  if (!intro) {
    return (
      <div>
        <p className="label-mono text-navy">{eyebrow}</p>
        <h2 className="display mt-4 text-4xl md:text-6xl">{title}</h2>
      </div>
    );
  }
  return (
    <div className="grid gap-6 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <p className="label-mono text-navy">{eyebrow}</p>
        <h2 className="display mt-4 text-4xl md:text-6xl">{title}</h2>
      </div>
      <p className="max-w-md text-base leading-relaxed text-stone md:col-span-4 md:col-start-9">
        {intro}
      </p>
    </div>
  );
}

/* ---------------------------------- Page --------------------------------- */

/**
 * Eigen metadata voor de homepage. Zonder deze export erfde de belangrijkste
 * pagina van de site de generieke standaardtitel uit de layout (76 tekens,
 * dus afgekapt in Google) en de sitebrede omschrijving.
 */
export const metadata: Metadata = {
  title: {
    absolute: "Aannemer in Enschede & Twente | MTB Bouw",
  },
  description:
    "Aannemer uit Enschede voor verbouwing, aanbouw, renovatie en zakelijke afbouw in heel Twente. Vaste prijs vooraf, één aanspreekpunt, intake bij je op locatie.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "MTB Bouw — aannemer in Enschede & Twente",
    description:
      "Verbouwing, aanbouw, renovatie en zakelijke afbouw. Eén team, één planning, één aanspreekpunt.",
    url: "/",
  },
};

export default async function HomePage() {
  // Hero-foto is wisselbaar via Supabase (site_assets → "home-hero");
  // zonder die asset tonen we de gerenoveerde schuur.
  const hero = await getAsset(
    "home-hero",
    "/images/projects/renovatie-schuur-behoud-karakter/cover.jpg",
    "Gerenoveerde houten schuur in Twente, met behoud van karakter, door MTB Bouw"
  );
  const latestArticles = kennisbank
    .filter((a) => !a.draft)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);
  const recent = publishedProjects().slice(0, 5).map(toProjectCard);

  return (
    <>
      <WebSiteJsonLd />

      {/* INTRO — grote displaykop links, tekst + knoppen rechts */}
      <section className="container-page pb-12 pt-16 md:pb-16 md:pt-24">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="animate-fade-up md:col-span-8">
            <p className="label-mono text-navy">Bouwbedrijf in Enschede &amp; Twente</p>
            <h1 className="display mt-6 text-6xl md:text-8xl lg:text-[8.5rem]">
              Bouwen doen we <span className="text-navy">samen.</span>
            </h1>
          </div>
          <div className="animate-fade-up md:col-span-4" style={{ animationDelay: "120ms" }}>
            <p className="max-w-md text-base leading-relaxed text-stone">
              Van een verbouwing thuis tot de complete afbouw van een
              bedrijfspand. MTB Bouw brengt vakmanschap, betrouwbare partners
              en heldere communicatie samen — onder één dak.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projecten"
                className="label-mono inline-flex items-center gap-2 bg-navy px-5 py-3.5 text-white transition-colors hover:bg-navy-dark"
              >
                Bekijk projecten <ArrowRight />
              </Link>
              <a
                href="#expertises"
                className="label-mono inline-flex items-center gap-2 border border-navy px-5 py-3.5 text-navy transition-colors hover:bg-navy hover:text-white"
              >
                Onze expertises
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HEROFOTO — full-bleed */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-mist md:aspect-[16/7] md:max-h-[80vh]">
        <Image
          src={hero.url}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

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

      {/* EXPERTISES — vier labels met beeld */}
      <section id="expertises" className="container-page scroll-mt-20 py-24 md:py-32">
        <SectionHeading
          eyebrow="Wat we bouwen"
          title="Vier expertises, één aanspreekpunt."
          intro="Elk label heeft z'n eigen specialisme — maar de manier van werken is overal hetzelfde: vakmanschap, transparantie en korte lijnen."
        />
        <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {EXPERTISES.map((e) => (
            <li key={e.title}>
              <Link href={e.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                  <Image
                    src={e.image.src}
                    alt={e.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="img-zoom object-cover"
                  />
                </div>
                <p className="label-mono mt-5 text-stone">{e.eyebrow}</p>
                <h3 className="display mt-3 flex items-center justify-between gap-3 text-2xl transition-colors group-hover:text-navy md:text-3xl">
                  {e.title}
                  <ArrowUpRight className="size-5 shrink-0 text-navy transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">{e.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* PROJECTEN — foto-eerst raster */}
      <section id="projecten" className="scroll-mt-20 border-t border-mist">
        <div className="container-page py-24 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Projecten" title="Recent werk uit Twente." />
            <Link
              href="/projecten"
              className="label-mono inline-flex items-center gap-2 bg-navy px-5 py-3.5 text-white transition-colors hover:bg-navy-dark"
            >
              Bekijk alle projecten <ArrowRight />
            </Link>
          </div>
          <div className="mt-14">
            <ProjectCards items={recent} headingLevel="h3" priorityCount={0} />
          </div>
        </div>
      </section>

      {/* OVER MTB BOUW */}
      <section id="over" className="scroll-mt-20 border-t border-mist">
        <div className="container-page grid gap-14 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-5">
            <p className="label-mono text-navy">Over MTB Bouw</p>
            <h2 className="display mt-4 text-4xl md:text-6xl">
              Eén bouwbedrijf, <span className="text-stone">vier expertises,</span>{" "}
              honderden vertrouwde handen.
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2">
              {["Persoonlijk", "Lokaal", "Betrouwbaar", "Nuchter"].map((p) => (
                <li key={p} className="label-mono border border-mist px-3 py-1.5 text-ink">
                  {p}
                </li>
              ))}
            </ul>
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
          </div>
        </div>
      </section>

      {/* WAAROM MTB BOUW */}
      <section className="container-page pb-24 md:pb-32">
        <SectionHeading eyebrow="Waarom MTB Bouw" title="Bouwen zoals het hoort." />
        <ul className="mt-14 grid border-l border-t border-mist sm:grid-cols-2 lg:grid-cols-3">
          {WHY_ITEMS.map((r, i) => (
            <li key={r.title} className="border-b border-r border-mist p-6 md:p-8">
              <span className="label-mono text-navy">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] md:text-2xl">
                {r.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{r.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* PARTNERS */}
      <section className="border-t border-mist">
        <div className="container-page py-24 md:py-32">
          <SectionHeading
            eyebrow="Onze partners"
            title="Sterk door lokale samenwerking."
            intro="Kwaliteit komt niet uit één set handen — het komt uit een goed netwerk. Wij bouwen met vaste, regionale partners die net zo scherp op hun vak zijn als wij."
          />
          <ul className="mt-14 grid grid-cols-2 border-l border-t border-mist md:grid-cols-4 lg:grid-cols-5">
            {PARTNERS.map((name) => (
              <li
                key={name}
                className="flex min-h-28 flex-col justify-between border-b border-r border-mist p-5 md:p-6"
              >
                <span className="label-mono text-stone">Partner</span>
                <span className="mt-6 text-base tracking-[-0.02em] md:text-lg">{name}</span>
              </li>
            ))}
            <li className="border-b border-r border-mist">
              <Link
                href="/regionale-partners"
                className="group flex h-full min-h-28 flex-col justify-between bg-navy p-5 text-white transition-colors hover:bg-navy-dark md:p-6"
              >
                <span className="label-mono text-white/70">Meer</span>
                <span className="mt-6 inline-flex items-center gap-2 text-base tracking-[-0.02em] md:text-lg">
                  Ontmoet al onze partners
                  <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* KENNISBANK */}
      {latestArticles.length > 0 && (
        <section id="kennisbank" className="container-page scroll-mt-20 pb-24 md:pb-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Inspiratie & kennis" title="Kennisbank." />
            <Link
              href="/kennisbank"
              className="label-mono link-line inline-flex items-center gap-2 text-navy"
            >
              Alle artikelen <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
          <ul className="mt-14 grid border-t border-ink md:grid-cols-3">
            {latestArticles.map((a) => (
              <li key={a.slug} className="border-b border-mist md:border-r md:last:border-r-0">
                <Link
                  href={a.permalink}
                  className="group flex h-full flex-col p-6 transition-colors hover:bg-white md:p-8"
                >
                  {a.category && (
                    <span className="label-mono text-navy">{categoryLabel(a.category)}</span>
                  )}
                  <h3 className="mt-6 text-xl font-semibold leading-snug tracking-[-0.02em] transition-colors group-hover:text-navy">
                    {a.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{a.description}</p>
                  <span className="label-mono mt-8 inline-flex items-center gap-2 text-navy">
                    Lees artikel
                    <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* INTAKE — korte regel boven de footer, opent de offerte-drawer */}
      <section id="contact" className="container-page scroll-mt-20 pb-24 md:pb-32">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-mist pt-10 md:flex-row md:items-center">
          <p className="max-w-2xl text-2xl leading-snug tracking-[-0.02em] md:text-3xl">
            Een idee of al een concreet plan? We komen graag langs voor een
            intake op locatie.
          </p>
          <QuoteButton>Vraag kennismaking aan</QuoteButton>
        </div>
      </section>
    </>
  );
}
