/**
 * Functies voor /werkgenoeg en de vacaturepagina's onder /werkgenoeg/[slug].
 *
 * `status` bepaalt alles:
 * - "open": bevestigd openstaand. Krijgt een eigen vacaturepagina met
 *   JobPosting-markup (Google Vacatures) en staat in de sitemap.
 * - "te-bevestigen": nog niet bevestigd door Robbert of Mathijs. Wel zichtbaar
 *   op /werkgenoeg, maar zonder vacaturepagina en zonder JobPosting.
 * - "gesloten": niet meer zichtbaar en geen markup.
 *
 * `datePosted` is de echte publicatiedatum. `closingDate` alleen invullen als
 * er echt een sluitingsdatum is (wordt dan `validThrough`); nooit een datum
 * verzinnen of automatisch vooruitzetten. Zie
 * https://developers.google.com/search/docs/appearance/structured-data/job-posting
 */
export type JobStatus = "open" | "te-bevestigen" | "gesloten";

export type Job = {
  slug: string;
  title: string;
  intro: string;
  tasks: string[];
  profile: string[];
  extra: string[];
  benefits: string[];
  status: JobStatus;
  datePosted: string;
  /** Echte sluitingsdatum (ISO), alleen als die er is. */
  closingDate?: string;
  employmentType: string;
  salaryMin?: number;
  salaryMax?: number;
};

export const jobs: Job[] = [
  {
    slug: "allround-timmerman",
    title: "Allround Timmerman",
    intro:
      "Van ruwbouw tot laatste kwaststreek — jij pakt het hele traject op. Geen dag hetzelfde: de ene week een uitbouw, de andere week kozijnen of een complete renovatie.",
    tasks: [
      "Ruwbouw",
      "Renovatie",
      "Verbouw",
      "Afbouw",
      "Aanbouw",
      "Uitbouw",
      "Kozijnen",
      "Timmerwerk",
    ],
    profile: [
      "handig is",
      "verantwoordelijkheid neemt",
      "graag samenwerkt",
      "netjes werkt",
    ],
    extra: [
      "Een diploma is geen vereiste. Affiniteit met bouwen vinden wij belangrijker.",
      "Ervaring is mooi meegenomen, maar geen harde eis.",
      "Een rijbewijs is wenselijk, maar we denken graag mee.",
    ],
    benefits: [
      "Salaris €3.000 – €4.500 bruto per maand",
      "CAO Bouw",
      "Vast contract mogelijk",
      "Vierdaagse werkweek mogelijk",
      "Eigen bus op termijn",
      "Eigen gereedschap",
      "Opleidingen",
      "Doorgroeien naar voorman of projectleider",
    ],
    // Status nog te bevestigen (audit 1 nov 2026: validThrough was verlopen).
    status: "open",
    datePosted: "2026-07-03",
    employmentType: "FULL_TIME",
    salaryMin: 3000,
    salaryMax: 4500,
  },
  {
    slug: "bbl-leerling",
    title: "BBL Leerling",
    intro:
      "Iedereen is welkom vanaf niveau 2. Wij leiden graag mensen op — je leert direct in de praktijk, loopt mee met ervaren vakmensen en krijgt al snel verantwoordelijkheid.",
    tasks: [
      "Meelopen op de bouwplaats",
      "Leren van ervaren timmermannen",
      "Stap voor stap zelfstandig werken",
      "Ruwbouw en afbouw in de praktijk",
    ],
    profile: ["gemotiveerd is", "wil leren", "graag aanpakt", "op tijd komt"],
    extra: [
      "Vanaf niveau 2 ben je welkom — ook zonder ervaring.",
      "Wij kijken vooral naar motivatie, niet naar cijfers of diploma's.",
      "Je combineert werken bij ons met je BBL-opleiding.",
    ],
    benefits: [
      "Begeleiding door ervaren vakmensen",
      "CAO Bouw leerlingschaal",
      "Praktijkervaring op echte projecten",
      "Uitzicht op een vast contract na je diploma",
    ],
    // Status nog te bevestigen (audit 1 nov 2026: validThrough was verlopen).
    status: "open",
    datePosted: "2026-07-03",
    employmentType: "FULL_TIME",
  },
];

/** Functies die op /werkgenoeg zichtbaar zijn. */
export const visibleJobs = () => jobs.filter((j) => j.status !== "gesloten");

/** Bevestigd openstaande vacatures: alleen deze krijgen een eigen pagina en markup. */
export const openJobs = () => jobs.filter((j) => j.status === "open");

export const jobPath = (slug: string) => `/werkgenoeg/${slug}`;

/** Volledige vacaturetekst als HTML voor de JobPosting-description. */
export function jobDescriptionHtml(job: Job): string {
  const list = (items: string[]) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
  return [
    `<p>${job.intro}</p>`,
    job.tasks.length ? `<p>Werkzaamheden:</p>${list(job.tasks)}` : "",
    job.profile.length ? `<p>Wij zoeken iemand die:</p>${list(job.profile)}` : "",
    ...job.extra.map((e) => `<p>${e}</p>`),
    job.benefits.length ? `<p>Arbeidsvoorwaarden:</p>${list(job.benefits)}` : "",
  ].join("");
}
