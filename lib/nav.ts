/**
 * Main navigation config — 1:1 content replica of the live site's custom
 * jalalabadi header (janki-header plugin), with hrefs mapped to the rebuild's
 * routes. Numbered "steps" and column links mirror the live mega menus.
 *
 */

export type NavLink = { id: number; title: string; href: string; subtitle?: string };
export type NavColumn = NavLink & { items: { title: string; href: string }[] };

export type MegaContent = {
  /** Intro card (first column): big light title + outline button */
  intro?: { title: string; button: string; href: string };
  /** Intro variant rendered as the LAST column (Over ons) */
  introPro?: { title: string; button: string; href: string };
  /** Right-hand image panel */
  image: string;
  /** Numbered link column(s) */
  steps?: NavLink[];
  stepsPro?: NavLink[];
  /** Extra numbered links, only shown in the mobile submenu */
  stepsMobile?: NavLink[];
  /** Numbered heading + indented sub-links */
  options?: NavColumn;
  levels?: NavColumn;
  levelsExtra?: NavColumn;
};

export type NavItem = {
  title: string;
  id: string;
  href?: string;
  content?: MegaContent;
};

export const mainNav: NavItem[] = [
  {
    title: "Wat we bouwen",
    id: "diensten",
    content: {
      intro: { title: "Eén merk, vier specialisten", button: "Alle expertises", href: "/diensten" },
      image: "/images/nav/mega-diensten.png",
      steps: [
        {
          id: 1,
          title: "Wonen & Verbouwen",
          href: "/wonen-en-verbouwen",
          subtitle: "Voor alles wat met uitbouw, verduurzaming of renovatie te maken heeft.",
        },
        {
          id: 2,
          title: "Afbouwstudio",
          href: "/afbouwstudio",
          subtitle: "Kantoorpanden, winkels of horeca. Dat is wat we het liefste doen!",
        },
      ],
      stepsPro: [
        {
          id: 3,
          title: "Kozijnen",
          href: "/kozijnen",
          subtitle: "De meest transparante, altijd volledig inclusief — ons eigen merk De Kozijnstudio.",
        },
        {
          id: 4,
          title: "Prefab Bouwen",
          href: "/prefab",
          subtitle: "Slim en efficiënt, als trotse partner van Prefabmaat.",
        },
      ],
    },
  },
  {
    title: "Samen Bouwen",
    id: "bouwen",
    content: {
      intro: { title: "Onze gratis brochure", button: "Download", href: "/gratis-brochure" },
      image: "/images/nav/mega-samen-bouwen.png",
      options: {
        id: 1,
        title: "Ons proces",
        href: "/hoe-wij-werken",
        items: [
          {
            title: "Duidelijkheid, planning en vakmanschap in elke fase.",
            href: "/hoe-wij-werken",
          },
        ],
      },
      levels: {
        id: 2,
        title: "Regionale partners",
        href: "/regionale-partners",
        items: [
          {
            title: "Wij kiezen regionale partners die ons sterker maken.",
            href: "/regionale-partners",
          },
        ],
      },
      levelsExtra: {
        id: 3,
        title: "Prefab bouwen",
        href: "/prefab",
        items: [
          {
            title: "Sneller bouwen met prefab elementen, zonder in te leveren op kwaliteit.",
            href: "/prefab",
          },
        ],
      },
    },
  },
  { title: "Projecten", id: "woningen", href: "/projecten" },
  {
    title: "Over ons",
    id: "over-ons",
    content: {
      introPro: {
        title: "Wij bouwen samen met onze partners",
        button: "Lees meer",
        href: "/over-ons",
      },
      image: "/images/nav/mega-over-ons.png",
      steps: [
        { id: 1, title: "Over MTB BOUW", href: "/over-ons" },
        { id: 2, title: "Veel gestelde vragen", href: "/veelgestelde-vragen" },
        { id: 3, title: "Hoe wij werken", href: "/hoe-wij-werken" },
      ],
      stepsPro: [
        { id: 4, title: "Werken bij", href: "/werkgenoeg" },
        {
          id: 5,
          title: "Veilig en verantwoord",
          href: "/veilig-verantwoord-bouwen",
        },
        { id: 6, title: "Blogs", href: "/kennisbank" },
      ],
    },
  },
];
