import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ExpertiseTiles } from "@/components/sections/expertise-tiles";
import { expertises } from "@/lib/expertises";

export const metadata: Metadata = {
  title: "Wat we bouwen",
  description:
    "MTB Bouw bundelt vier expertises: Wonen & Verbouwen, Afbouwstudio, Kozijnen en Prefab Bouwen. Vind de juiste specialist voor jouw project.",
  alternates: { canonical: "/diensten" },
  openGraph: {
    type: "website",
    title: "Wat we bouwen | MTB Bouw",
    description: "MTB Bouw bundelt vier expertises: Wonen & Verbouwen, Afbouwstudio, Kozijnen en Prefab Bouwen. Vind de juiste specialist voor jouw project.",
    url: "/diensten",
  },
};

export default function DienstenPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Wat we bouwen", url: "/diensten" },
        ]}
      />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-16 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone">
          Wat we bouwen
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight">
          Eén merk, vier specialisten
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-stone">
          MTB Bouw bundelt vakmanschap, vertrouwen en ervaring — en brengt je
          van daaruit naar de juiste specialist: voor je woning, je
          bedrijfspand, je kozijnen of je prefab-project.
        </p>
      </section>

      {/* Expertise-tegels met sub-items */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <ExpertiseTiles items={expertises} showSubItems />
      </section>

      {/* Werkwijze */}
      <ProcessSteps compact />
    </>
  );
}
