import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { uitbouwData } from "@/lib/services/uitbouw";

export const metadata: Metadata = {
  title: { absolute: uitbouwData.seo.title },
  description: uitbouwData.seo.description,
  alternates: { canonical: uitbouwData.seo.canonical },
  openGraph: {
    type: "website",
    title: uitbouwData.seo.title,
    description: uitbouwData.seo.description,
    url: uitbouwData.seo.canonical,
  },
};

export default function AanbouwUitbouwPage() {
  return (
    <ServicePageTemplate
      data={uitbouwData}
      caseImage="/images/projects/project-2.jpg"
    />
  );
}
