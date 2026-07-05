import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { renovatieData } from "@/lib/services/renovatie";

export const metadata: Metadata = {
  title: { absolute: renovatieData.seo.title },
  description: renovatieData.seo.description,
  alternates: { canonical: renovatieData.seo.canonical },
  openGraph: {
    type: "website",
    title: renovatieData.seo.title,
    description: renovatieData.seo.description,
    url: renovatieData.seo.canonical,
  },
};

export default function VerbouwingPage() {
  return (
    <ServicePageTemplate
      data={renovatieData}
      caseImage="/images/projects/project-1.jpg"
    />
  );
}
