import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import { HomeContent } from "@/components/home/home-content";

/**
 * TESTPAGINA — de homepage mét speelse accenten, om te beoordelen voordat
 * iets live gaat. Niet in de sitemap en noindex, zodat Google hem negeert.
 */
const caveat = Caveat({ subsets: ["latin"], weight: ["500", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Testpagina — speelse accenten",
  robots: { index: false, follow: false },
};

export default function TestSpeelsPage() {
  return (
    <>
      <div className="bg-lime">
        <p className="label-mono container-page py-2 text-ink">
          Testpagina — homepage met speelse accenten · niet zichtbaar in Google
        </p>
      </div>
      <HomeContent playful hand={caveat.className} />
    </>
  );
}
