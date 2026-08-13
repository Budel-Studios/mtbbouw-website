import type { Metadata } from "next";
import { portfolio } from "#site/content";
import {
  BreadcrumbJsonLd,
  JobPostingJsonLd,
  FaqJsonLd,
} from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { PerkGrid } from "@/components/sections/perk-grid";
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
  LayersIcon,
  MapPinIcon,
} from "@/components/icons";
import { faqWerkenBij } from "@/lib/faq";
import { jobs } from "@/lib/jobs";
import { site } from "@/lib/site";
import { getAsset } from "@/lib/assets";

export const metadata: Metadata = {
  title: { absolute: "Werken bij MTB Bouw — vacature timmerman & BBL Twente" },
  description:
    "Vacature allround timmerman en BBL-leerling in Enschede en Twente. Werken in de bouw bij een jong team: vierdaagse werkweek mogelijk, eigen gereedschap, opleidingen en doorgroeien zonder dat een diploma leidend is.",
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
      <PerkGrid
        eyebrow="Waarom MTB Bouw"
        title="Dit krijg je erbij"
        items={[
          { icon: ClockIcon, text: "Vierdaagse werkweek mogelijk" },
          { icon: VanIcon, text: "Eigen bus" },
          { icon: WrenchIcon, text: "Eigen gereedschap" },
          { icon: GraduationIcon, text: "Specialistische opleidingen" },
          { icon: TrendingUpIcon, text: "Doorgroeimogelijkheden" },
          { icon: UsersIcon, text: "Kleine hechte ploeg" },
          { icon: LayersIcon, text: "Veel afwisseling" },
          { icon: MapPinIcon, text: "Werken in Twente" },
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
