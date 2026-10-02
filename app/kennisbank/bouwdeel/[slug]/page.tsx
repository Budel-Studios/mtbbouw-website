import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HubPage } from "@/components/kennisbank/hub-page";
import { existingHubs, getHub, hubExists, hubPath } from "@/lib/kennisbank";

type Params = { slug: string };

// Alleen bouwdelen met genoeg gepubliceerde artikelen krijgen een pagina
// (MIN_HUB_ARTICLES). Nieuwe hubs verschijnen vanzelf bij de volgende build.
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return existingHubs("subcategory").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getHub("subcategory", slug);
  if (!item) return {};
  const title = `${item.label}: artikelen en advies`;
  const description = item.metaDescription ?? item.description;
  const url = hubPath("subcategory", slug);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", title, description, url },
  };
}

export default async function BouwdeelPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = getHub("subcategory", slug);
  if (!item || !hubExists("subcategory", slug)) notFound();
  return <HubPage type="subcategory" item={item} />;
}
