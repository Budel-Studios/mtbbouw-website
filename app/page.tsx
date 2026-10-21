import type { Metadata } from "next";
import { HomeContent } from "@/components/home/home-content";

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

export default function HomePage() {
  return <HomeContent />;
}
