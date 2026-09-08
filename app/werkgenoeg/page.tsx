import type { Metadata } from "next";
import { portfolio } from "#site/content";
import {
  BreadcrumbJsonLd,
  JobPostingJsonLd,
  FaqJsonLd,
} from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { SplitSection } from "@/components/sections/split-section";
import { TeamGrid } from "@/components/sections/team-grid";
import { JobCard } from "@/components/sections/job-card";
import { DayTimeline } from "@/components/sections/day-timeline";
import { RelatedContent } from "@/components/sections/related-content";
import { TurnkeyFlow } from "@/components/sections/turnkey-flow";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ArrowLink } from "@/components/ui/button";
import {
  ClockIcon,
  VanIcon,
  WrenchIcon,
  GraduationIcon,
  TrendingUpIcon,
  UsersIcon,
  EuroIcon,
  ChatIcon,
  ShieldIcon,
  CupIcon,
} from "@/components/icons";
import { faqWerkenBij } from "@/lib/faq";
import { jobs } from "@/lib/jobs";
import { site } from "@/lib/site";
import { getAsset } from "@/lib/assets";

export const metadata: Metadata = {
  title: { absolute: "Werken bij MTB Bouw — vacature timmerman & BBL Twente" },
  description:
    "Vacature timmerman en BBL-leerling in Enschede en Twente. Klein hecht team, cao-loon, eigen Makita-gereedschap en ruimte om door te groeien.",
  alternates: { canonical: "/werkgenoeg" },
  openGraph: {
    type: "website",
    title: "Werk genoeg. Zin om mee te bouwen? — MTB Bouw",
    description:
      "Vacature timmerman Enschede en BBL bouw Twente. Bij MTB Bouw bouwen we niet alleen panden, we bouwen ook aan mensen.",
    url: "/werkgenoeg",
  },
};

const applyHref = (job?: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(
    job ? `Sollicitatie ${job}` : "Open sollicitatie"
  )}`;

export default async function WerkGenoegPage() {
  const mathijs = await getAsset("team-mathijs", "/images/team/mathijs.webp");
  const projects = portfolio.filter((p) => !p.draft).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Werken bij", url: "/werkgenoeg" },
        ]}
      />
      <FaqJsonLd items={faqWerkenBij} />
      {jobs.map((job) => (
        <JobPostingJsonLd
          key={job.slug}
          title={job.title}
          description={job.intro}
          datePosted={job.datePosted}
          validThrough={job.validThrough}
          employmentType={job.employmentType}
          salaryMin={job.salaryMin}
          salaryMax={job.salaryMax}
        />
      ))}

      {/* HERO */}
      <PageHero
        variant="image"
        image={{
          src: "/images/projects/bedrijfshal-borne.webp",
          alt: "Timmerman van MTB Bouw aan het werk op de bouwplaats",
        }}
        eyebrow="Werken bij MTB Bouw"
        title="Werk genoeg. Zin om mee te bouwen?"
        intro="Bij MTB Bouw bouwen we niet alleen woningen, aanbouwen en bedrijfspanden. We bouwen ook aan mensen."
        cta={
          <>
            <ArrowLink href="#vacatures" onDark>
              Bekijk onze vacatures
            </ArrowLink>
            <ArrowLink href={applyHref()} onDark>
              Solliciteer direct
            </ArrowLink>
          </>
        }
      />

      {/* WAAROM MTB BOUW */}
      <FeatureGrid
        eyebrow="Waarom MTB Bouw"
        title="Waarom werken bij MTB Bouw?"
        intro="Bij MTB Bouw werk je in een klein, hecht team waar je echt verantwoordelijkheid krijgt. Geen onnodige lagen, maar samen bouwen aan mooie projecten, elkaar helpen en trots zijn op het eindresultaat."
        items={[
          {
            icon: EuroIcon,
            title: "Salaris volgens de cao Bouw",
            text: "Circa € 3.000 tot € 4.500 bruto per maand, afhankelijk van je ervaring en functie.",
          },
          {
            icon: WrenchIcon,
            title: "Compleet Makita-gereedschap",
            text: "Van de zaak. Je werkt met goed materieel, niet met wat er toevallig nog in de bus lag.",
          },
          {
            icon: VanIcon,
            title: "Eigen bus",
            text: "Bij een passende functie en ervaring rijd je in je eigen bus.",
          },
          {
            icon: UsersIcon,
            title: "Kleine, hechte teams",
            text: "Zelfsturend en overzichtelijk. Je weet wie je collega's zijn en wat er speelt.",
          },
          {
            icon: ChatIcon,
            title: "Ruimte om mee te denken",
            text: "Zie je het slimmer? Zeg het. Je krijgt de verantwoordelijkheid om het ook zo te doen.",
          },
          {
            icon: TrendingUpIcon,
            title: "Prestatie- en aanbrengbonussen",
            text: "Goed werk en een goede collega aanbrengen worden beloond.",
          },
          {
            icon: GraduationIcon,
            title: "Opleiden en doorgroeien",
            text: "Voor timmermannen is er ruimte en een bonus tot € 5.000 om je verder te ontwikkelen.",
          },
          {
            icon: ShieldIcon,
            title: "Goede spullen, fijne collega's",
            text: "Degelijke werkkleding, degelijk materieel en mensen met wie je graag een dag draait.",
          },
          {
            icon: ClockIcon,
            title: "Vier dagen werken kan",
            text: "Wanneer het bij je functie en de planning past, is een vierdaagse werkweek bespreekbaar.",
          },
        ]}
      />

      {/* ONZE CULTUUR */}
      <SplitSection
        eyebrow="Onze cultuur"
        title="Geen hiërarchie, wel verantwoordelijkheid"
        image={{
          src: mathijs.url,
          alt: "Mathijs van MTB Bouw op de bouwplaats",
        }}
        imageSide="left"
      >
        <p>
          Wij zijn een jong bouwbedrijf. Geen dikke lagen management, geen
          eindeloze overlegstructuren — iedereen helpt elkaar, van leerling
          tot projectleider.
        </p>
        <p>
          Goede ideeën zijn belangrijker dan diploma&apos;s. Karakter vinden
          we belangrijker dan een papiertje. Wij zoeken mensen die willen
          leren en zin hebben om aan te pakken.
        </p>
        <p>
          Kort gezegd: wij bouwen samen. Op de bouw, maar ook als team.
        </p>
      </SplitSection>

      {/* VEILIG EN VERANTWOORD WERKEN */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
              Hoe we voor elkaar zorgen
            </p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Veilig en verantwoord werken
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone md:text-lg">
              Bouwen is prachtig werk, maar ook gewoon zwaar werk. Dat merk je
              pas echt als je zelf een paar weken meedraait. Eén van onze
              collega&apos;s werkte jarenlang op kantoor in de financiële
              dienstverlening en sprong door spoed zes weken bij op de bouw.
            </p>
          </div>

          <blockquote className="mt-8 max-w-3xl border-l-2 border-lime pl-6">
            <p className="font-display text-xl font-bold leading-snug text-ink md:text-2xl">
              &ldquo;Ik wist niet dat je handen, benen en voeten zó moe konden
              zijn.&rdquo;
            </p>
            <footer className="mt-3 text-sm text-stone">
              Met 15.000 tot 20.000 stappen per dag snap je dat ook wel.
            </footer>
          </blockquote>

          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-stone md:text-lg">
            <p>
              Daarom nemen we veilig en verantwoord werken serieus. De cao Bouw
              is al goed ingericht, met voldoende vrije dagen en heldere
              afspraken voor vakmensen. Bij MTB Bouw willen we daar waar
              mogelijk nog een stap verder in gaan.
            </p>
            <p>
              Goed bouwen begint met mensen die het werk langdurig met plezier,
              energie en trots kunnen blijven doen.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: ShieldIcon,
                title: "Veiligheid vóór snelheid",
                text: "Liever een dag later klaar dan een ongeluk erbij.",
              },
              {
                Icon: WrenchIcon,
                title: "Goed gereedschap",
                text: "Degelijk materieel scheelt je lijf elke dag een beetje.",
              },
              {
                Icon: ClockIcon,
                title: "Flexibele werktijden",
                text: "We houden rekening met de belasting van het werk.",
              },
              {
                Icon: CupIcon,
                title: "Ruimte om bij te tanken",
                text: "Laat de planning het toe? Dan is een extra vrije dag bespreekbaar.",
              },
            ].map(({ Icon, title, text }) => (
              <div
                key={title}
                className="border border-mist bg-white p-6 transition-colors hover:border-lime"
              >
                <Icon className="h-8 w-8 text-lime-dark" />
                <h3 className="mt-5 text-base font-bold leading-snug text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamGrid
        title="Je toekomstige collega's"
        showBio={false}
      />

      {/* OPENSTAANDE FUNCTIES */}
      <section id="vacatures" className="scroll-mt-20 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
            Openstaande functies
          </p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Waar we nu naar op zoek zijn
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {jobs.map((job) => (
              <JobCard key={job.slug} job={job} applyHref={applyHref(job.title)} />
            ))}
          </div>
        </div>
      </section>

      {/* HOE ZIET JOUW WERKDAG ERUIT */}
      <DayTimeline
        eyebrow="Een dag op de bouw"
        title="Hoe ziet jouw werkdag eruit?"
        moments={[
          { time: "08:00", label: "Start op de bouw" },
          { label: "Werkoverleg" },
          { label: "Samen bouwen" },
          { label: "Lunch" },
          { label: "Project afronden" },
          { time: "16:30", label: "Naar huis" },
        ]}
      />

      {/* PROJECTEN WAAR JIJ AAN WERKT */}
      <RelatedContent
        projects={projects.map((p) => ({
          slug: p.slug,
          permalink: p.permalink,
          title: p.title,
          cover: p.cover,
        }))}
        eyebrow="Aan de slag"
        title="Projecten waar jij aan werkt"
      />

      {/* DOORGROEIEN */}
      <TurnkeyFlow
        eyebrow="Doorgroeien"
        title="Diploma's zijn niet leidend. Inzet, vakmanschap en verantwoordelijkheid wel."
        steps={["Leerling", "Timmerman", "Allround timmerman", "Voorman", "Projectleider"]}
      />

      {/* FAQ */}
      <FaqAccordion
        items={faqWerkenBij}
        eyebrow="Veelgestelde vragen"
        title="Vragen over werken bij MTB Bouw"
      />

      {/* Interne links */}
      <section className="border-t border-mist py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
            Meer weten
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <ArrowLink href="/over-ons">Over ons</ArrowLink>
            <ArrowLink href="/projecten">Projecten</ArrowLink>
            <ArrowLink href="/contact">Contact</ArrowLink>
          </div>
        </div>
      </section>

      {/* SOLLICITEREN */}
      <CtaBanner
        eyebrow="Solliciteren"
        title="Kom gewoon eens kennismaken."
        text="Geen lange motivatiebrief. Geen ingewikkelde procedure. Bel ons, app ons, of kom een kop koffie drinken."
        cta={{ label: "Solliciteer direct", href: applyHref() }}
        secondary={{ label: "Bel 053 206 50 71", href: "tel:+31532065071" }}
      />
    </>
  );
}
