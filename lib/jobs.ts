/**
 * Openstaande functies — content voor /werkgenoeg. `datePosted` bepaalt of
 * Google de vacature als "actueel" toont in Google Vacatures; werk deze
 * (en `validThrough`) periodiek bij zolang de vacature openstaat.
 */
export type Job = {
  slug: string;
  title: string;
  intro: string;
  tasks: string[];
  profile: string[];
  extra: string[];
  benefits: string[];
  datePosted: string;
  validThrough: string;
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
      "Salaris €2.700 – €3.800",
      "CAO Bouw",
      "Vast contract mogelijk",
      "Vierdaagse werkweek mogelijk",
      "Eigen bus op termijn",
      "Eigen gereedschap",
      "Opleidingen",
      "Doorgroeien naar voorman of projectleider",
    ],
    datePosted: "2026-07-03",
    validThrough: "2026-10-01",
    employmentType: "FULL_TIME",
    salaryMin: 2700,
    salaryMax: 3800,
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
    datePosted: "2026-07-03",
    validThrough: "2026-10-01",
    employmentType: "FULL_TIME",
  },
];
