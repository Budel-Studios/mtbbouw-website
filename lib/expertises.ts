import type { ComponentType } from "react";
import { HouseIcon, BuildingIcon, WindowIcon, LayersIcon } from "@/components/icons";

/**
 * De 4 expertises/labels onder MTB Bouw — centrale bron voor de homepage-
 * tegels, het "Wat we bouwen"-portaal (/diensten) en (handmatig gespiegeld,
 * want MegaContent heeft een eigen vorm) het hoofdmenu in lib/nav.ts.
 *
 * Structuur is bewust uitbreidbaar: een nieuw label (bv. Zebrano Studio,
 * Badenstudio) toevoegen is één extra object in deze array.
 */
export type ExpertiseSubItem = { label: string; href: string };

export type Expertise = {
  id: string;
  emoji: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  href: string;
  image: string;
  imageAlt: string;
  subItems: ExpertiseSubItem[];
};

export const expertises: Expertise[] = [
  {
    id: "wonen",
    emoji: "🏡",
    icon: HouseIcon,
    title: "Wonen & Verbouwen",
    subtitle: "Voor particulieren.",
    href: "/wonen-en-verbouwen",
    image: "/images/projects/project-1.jpg",
    imageAlt: "Verbouwde woning door MTB Bouw",
    subItems: [
      { label: "Renovatie & verbouw", href: "/verbouwing" },
      { label: "Aanbouw & uitbouw", href: "/aanbouw-uitbouw" },
      { label: "Nieuwbouw", href: "/nieuwbouw" },
    ],
  },
  {
    id: "afbouwstudio",
    emoji: "🏢",
    icon: BuildingIcon,
    title: "Zakelijke Afbouw",
    subtitle: "Voor kantoren, winkels en bedrijfsruimtes.",
    href: "/afbouwstudio",
    image: "/images/projects/project-2.jpg",
    imageAlt: "Afgebouwd bedrijfspand door Afbouwstudio",
    subItems: [
      { label: "Kantoren", href: "/afbouwstudio#specialismen" },
      { label: "Winkels & horeca", href: "/afbouwstudio#specialismen" },
      { label: "Casco → turn-key", href: "/afbouwstudio#werkwijze" },
    ],
  },
  {
    id: "kozijnen",
    emoji: "🪟",
    icon: WindowIcon,
    title: "Kozijnen",
    subtitle: "Eigen specialist.",
    href: "/kozijnen",
    image: "/images/projects/project-3.jpg",
    imageAlt: "Nieuwe kozijnen geplaatst door De Kozijnstudio",
    subItems: [],
  },
  {
    id: "prefab",
    emoji: "🏭",
    icon: LayersIcon,
    title: "Prefab Bouwen",
    subtitle: "Sneller, slimmer en duurzamer bouwen.",
    href: "/prefab",
    image: "/images/projects/bedrijfshal-borne.webp",
    imageAlt: "Prefab bouwproject van MTB Bouw",
    subItems: [
      { label: "HSB", href: "/prefab#hsb" },
      { label: "Prefab daken & wanden", href: "/prefab#elementen" },
      { label: "Overkappingen & buitengebouwen", href: "/prefab#overkappingen" },
    ],
  },
];
