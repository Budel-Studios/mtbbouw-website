import type { Metadata } from "next";
import { HomeContent } from "@/components/home/home-content";

/**
 * Eigen metadata voor de homepage. Zonder deze export erfde de belangrijkste
 * pagina van de site de generieke standaardtitel uit de layout (76 tekens,
 * dus afgekapt in Google) en de sitebrede omschrijving.
 */
export const metadata: Metadata = {
  // Titel ≤ 60 tekens: zoekwoord + regio voorop, diensten erachter, merk als
  // afsluiter. Zo blijft hij in Google volledig zichtbaar.
  title: {
    absolute: "Aannemer Enschede & Twente — verbouw & uitbouw | MTB Bouw",
  },
  description:
    "Aannemer uit Enschede voor verbouwing, uitbouw, renovatie en nieuwbouw in heel Twente. Een gespecificeerde offerte, één aanspreekpunt en een intake bij jou thuis.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "MTB Bouw — aannemer in Enschede & Twente",
    description:
      "Verbouwing, uitbouw, renovatie en zakelijke afbouw. Eén team, één planning, één aanspreekpunt.",
    url: "/",
    // Eigen openGraph-blok overschrijft dat van de layout volledig, dus de
    // deelafbeelding moet hier opnieuw staan (anders geen foto in WhatsApp).
    images: [
      {
        url: "/images/home/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Vakman van MTB Bouw legt dakpannen op een dak in Twente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/home/og-home.jpg"],
  },
};

export default function HomePage() {
  return <HomeContent />;
}
