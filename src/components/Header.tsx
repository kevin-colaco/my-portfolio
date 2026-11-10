// src/components/Header.tsx
import Link from "next/link";
import { siteMeta } from "../data/siteMeta";
import ThemeToggle from "./ThemeToggle";

const nav = [
    { href: "#work", index: "01", label: "Work" },
    { href: "#projects", index: "02", label: "Projects" },
    { href: "#about", index: "03", label: "About" },
    { href: "#contact", index: "04", label: "Contact" }
];

export default function Header() {
    return (
        <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
                <Link href="/" className="font-bold text-heading">
                    {siteMeta.name}
                </Link>

                <nav aria-label="Sections" className="hidden md:block">
                    <ul className="flex gap-6 font-mono text-xs uppercase tracking-wider">
                        {nav.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="text-body hover:text-accent">
                                    <span className="text-muted">{item.index}</span> {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href={siteMeta.resumeUrl}
                        download
                        className="font-mono text-xs uppercase tracking-wider text-accent hover:underline underline-offset-4"
                    >
                        Resume ↓
                    </a>
                    <ThemeToggle />
                </div>
            </div>

            {/* Phones and small tablets get the section links as a second row. */}
            <nav aria-label="Sections" className="border-t border-line md:hidden">
                <ul className="mx-auto flex max-w-5xl justify-between px-4 py-2.5 font-mono text-xs uppercase tracking-wider sm:px-6">
                    {nav.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} className="text-body hover:text-accent">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
