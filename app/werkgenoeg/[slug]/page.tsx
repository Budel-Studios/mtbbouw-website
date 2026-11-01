import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd, JobPostingJsonLd } from "@/components/json-ld";
import { JobCard } from "@/components/sections/job-card";
import { site } from "@/lib/site";
import { jobDescriptionHtml, jobPath, openJobs } from "@/lib/jobs";

type Params = { slug: string };

/**
 * Pagina per vacature. Alleen bevestigd openstaande vacatures (status "open"
 * in lib/jobs.ts) krijgen een pagina; de rest geeft een 404. Hier, en alleen
 * hier, staat de JobPosting-markup voor Google Vacatures.
 */
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return openJobs().map((job) => ({ slug: job.slug }));
}

const findJob = (slug: string) => openJobs().find((job) => job.slug === slug);

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const job = findJob(slug);
  if (!job) return {};
  const title = `Vacature ${job.title} in Enschede en Twente`;
  const description = job.intro.length > 155 ? `${job.intro.slice(0, 152).trimEnd()}…` : job.intro;
  return {
    title,
    description,
    alternates: { canonical: jobPath(job.slug) },
    openGraph: { type: "website", title: `${title} | MTB Bouw`, description, url: jobPath(job.slug) },
  };
}

export default async function VacaturePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const job = findJob(slug);
  if (!job) notFound();
  const url = `${site.url}${jobPath(job.slug)}`;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Werken bij", url: "/werkgenoeg" },
          { name: job.title, url: jobPath(job.slug) },
        ]}
      />
      <JobPostingJsonLd
        title={job.title}
        description={jobDescriptionHtml(job)}
        url={url}
        datePosted={job.datePosted}
        validThrough={job.closingDate}
        employmentType={job.employmentType}
        salaryMin={job.salaryMin}
        salaryMax={job.salaryMax}
      />

      <div className="container-page pb-24 pt-10 md:pb-32 md:pt-14">
        <nav aria-label="Kruimelpad" className="label-mono text-stone">
          <Link href="/werkgenoeg" className="link-line hover:text-navy">
            Werken bij
          </Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-navy">Vacature</span>
        </nav>

        <header className="mt-14 max-w-3xl md:mt-20">
          <p className="eyebrow text-stone">Vacature · MTB Bouw, Enschede</p>
          <h1 className="display mt-6 text-5xl md:text-6xl">{job.title}</h1>
        </header>

        <div className="mt-12 max-w-4xl">
          <JobCard job={job} detail />
        </div>

        <p className="mt-10 max-w-2xl leading-relaxed text-stone">
          Liever eerst even bellen? Dat kan op {site.telephone}. Meer over het
          team en hoe een werkdag eruitziet lees je op{" "}
          <Link href="/werkgenoeg" className="link-line text-navy">
            werken bij MTB Bouw
          </Link>
          .
        </p>
      </div>
    </>
  );
}
