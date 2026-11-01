import Link from "next/link";
import { ApplyButton } from "@/components/apply-dialog";
import { CheckIcon } from "@/components/icons";
import { jobPath, type Job } from "@/lib/jobs";

/**
 * Grote vacaturekaart — werkzaamheden als chips, profiel als lijst,
 * arbeidsvoorwaarden als afvinklijst. Hoekig, veel witruimte, geen
 * standaard "vacaturebank"-uitstraling.
 */
export function JobCard({ job, detail = false }: { job: Job; detail?: boolean }) {
  return (
    <article className="border border-mist bg-white p-8 sm:p-10">
      {!detail && <h3 className="text-2xl font-semibold sm:text-3xl">{job.title}</h3>}
      <p className={`${detail ? "" : "mt-4 "}leading-relaxed text-stone`}>{job.intro}</p>

      {job.tasks.length > 0 && (
        <div className="mt-8">
          <p className="eyebrow text-stone">
            Werkzaamheden
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {job.tasks.map((task) => (
              <li
                key={task}
                className="border border-mist bg-paper px-3 py-1.5 text-sm text-ink"
              >
                {task}
              </li>
            ))}
          </ul>
        </div>
      )}

      {job.profile.length > 0 && (
        <div className="mt-8">
          <p className="eyebrow text-stone">
            Wij zoeken iemand die
          </p>
          <ul className="mt-3 space-y-1.5">
            {job.profile.map((trait) => (
              <li key={trait} className="flex items-start gap-2 text-sm text-ink">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                {trait}
              </li>
            ))}
          </ul>
        </div>
      )}

      {job.extra.length > 0 && (
        <div className="mt-6 space-y-2 border-l-2 border-lime pl-4">
          {job.extra.map((line) => (
            <p key={line} className="text-sm leading-relaxed text-stone">
              {line}
            </p>
          ))}
        </div>
      )}

      {job.benefits.length > 0 && (
        <div className="mt-8">
          <p className="eyebrow text-stone">
            Arbeidsvoorwaarden
          </p>
          <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
            {job.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm text-ink">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-9 flex flex-wrap items-center gap-5">
        <ApplyButton job={job.title} />
        {job.status === "open" && !detail && (
          <Link href={jobPath(job.slug)} className="link-line text-navy">
            Bekijk de vacature
          </Link>
        )}
      </div>
    </article>
  );
}
