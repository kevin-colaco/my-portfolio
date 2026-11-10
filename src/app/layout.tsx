// src/app/layout.tsx
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { DM_Mono, DM_Sans } from "next/font/google";
import { ReactNode } from "react";
import Header from "../components/Header";
import { siteMeta } from "../data/siteMeta";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap"
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.siteUrl),
  title: siteMeta.title,
  description: siteMeta.description,
  alternates: { canonical: "/" },
  authors: [{ name: siteMeta.name, url: siteMeta.siteUrl }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteMeta.name,
    title: siteMeta.title,
    description: siteMeta.description
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F9F9F9" },
    { media: "(prefers-color-scheme: dark)", color: "#0B111F" }
  ]
};

// Runs before first paint so the saved/system theme is applied without a flash.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteMeta.name,
  url: siteMeta.siteUrl,
  email: `mailto:${siteMeta.email}`,
  jobTitle: "Full-Stack Engineer",
  description: siteMeta.description,
  worksFor: { "@type": "Organization", name: "Codal", url: "https://www.codal.com" },
  sameAs: [siteMeta.socials.linkedin, siteMeta.socials.github]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <Header />

        <main id="main" className="mx-auto max-w-5xl px-4 sm:px-6">
          {children}
        </main>

        <footer className="mx-auto mt-24 flex max-w-5xl flex-col gap-2 border-t border-line px-4 py-8 font-mono text-xs uppercase tracking-wider text-muted sm:flex-row sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} {siteMeta.name}</span>
          <span>Built with Next.js and Tailwind</span>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
