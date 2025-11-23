// src/app/layout.tsx
import { ReactNode } from "react";
import ThemeToggle from "../components/ThemeToggle"; // <-- import the client component
import { siteMeta } from "../data/siteMeta";
import "./globals.css";

export const metadata = {
  title: siteMeta.title,
  description: siteMeta.description
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <header className="flex items-center justify-between py-6">
            <div>
              <a href="/" className="text-lg font-semibold">
                {siteMeta.name}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <a
                href={siteMeta.resumeUrl}
                className="hidden sm:inline-block rounded-md border px-3 py-1 text-sm"
                download
              >
                Download Resume
              </a>
            </div>
          </header>

          <main>{children}</main>

          <footer className="py-12 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} {siteMeta.name}. Built with Next.js + Tailwind.
          </footer>
        </div>
      </body>
    </html>
  );
}
