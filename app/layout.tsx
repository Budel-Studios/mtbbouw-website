import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { OrganizationJsonLd } from "@/components/json-ld";
import { Preloader } from "@/components/preloader";
import { ContactDrawerProvider } from "@/components/contact-drawer";

/**
 * Merklettertype: Montserrat voor koppen, buttons, navigatie en labels.
 * Bodytekst valt terug op Arial (systeemfont) — zie globals.css.
 */
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Bouwen doen we samen | Aannemer in Enschede & Twente`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    // Geen title/url hier: pagina's zonder eigen openGraph erven dit blok
    // volledig, en zouden anders sitewide dezelfde og:title/og:url tonen.
    type: "website",
    locale: site.locale,
    siteName: site.name,
    description: site.description,
    images: [
      {
        url: "/images/brand/hero.png",
        width: 1200,
        height: 630,
        alt: "MTB Bouw — aannemer in Twente",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <OrganizationJsonLd />
        <Preloader />
        <ContactDrawerProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ContactDrawerProvider>
      </body>
    </html>
  );
}
