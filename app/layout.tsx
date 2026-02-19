import type { Metadata } from "next";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "MySocialworkDegree.com | Find Your Social Work Degree",
  description: "Compare BSW, MSW, DSW, and PhD social work programs and request program matches by state, timeline, and modality.",
  openGraph: {
    title: "MySocialworkDegree.com | Find Your Social Work Degree",
    description: "Compare BSW, MSW, DSW, and PhD social work programs and request program matches by state, timeline, and modality.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
