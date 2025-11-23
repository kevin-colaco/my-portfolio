// src/components/Hero.tsx
import { siteMeta } from "../data/siteMeta";

function IconButton({
    href,
    label,
    children
}: {
    href: string;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm border shadow-sm hover:translate-y-[-2px] transition-transform"
            aria-label={label}
        >
            {children}
            <span className="sr-only">{label}</span>
        </a>
    );
}

export default function Hero() {
    return (
        <section id="hero" className="pt-10">
            <div className="container">
                <div className="grid gap-8 items-center lg:grid-cols-12">
                    <div className="lg:col-span-7">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                            Kevin Colaco
                        </h1>

                        <p className="lead mt-4">
                            Full-stack engineer — I build reliable backend services and clean frontend experiences. Specializing in Python, React/Next.js, cloud services, and production ML/OCR systems.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a href="#projects" className="btn">View projects</a>
                            <a href="#contact" className="btn secondary">Contact</a>

                            {/* Download resume as a more prominent outline button */}
                            <a
                                href={siteMeta.resumeUrl}
                                download
                                className="inline-flex items-center gap-2 rounded-md border px-4 py-2 font-medium hover:shadow-lg transition"
                                aria-label="Download resume"
                            >
                                {/* small download icon */}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path d="M12 3v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M21 21H3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>Download resume</span>
                            </a>
                        </div>

                        <div className="mt-6 flex gap-3">
                            <IconButton href="https://www.linkedin.com/in/kevin-colaco-kc" label="LinkedIn">
                                {/* linkedin icon */}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-12h4v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                    <rect x="2" y="9" width="4" height="12" rx="1" stroke="currentColor" strokeWidth="1.4" />
                                    <circle cx="4" cy="5" r="2" stroke="currentColor" strokeWidth="1.4" />
                                </svg>
                                <span className="text-sm">LinkedIn</span>
                            </IconButton>

                            <IconButton href="https://www.github.com/kevin-colaco" label="GitHub">
                                {/* github icon */}
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path d="M9 19c-5 1-5-2-7-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M20 18v-2a4 4 0 00-1-3c2-1 3-3 3-5a4 4 0 00-1-3s-1 0-4 2a11 11 0 00-8 0c-3-2-4-2-4-2a4 4 0 00-1 3c0 2 1 4 3 5a4 4 0 00-1 3v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-sm">GitHub</span>
                            </IconButton>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="glass p-6 card">
                            <div className="text-sm text-slate-500">Quick facts</div>
                            <h3 className="mt-2 text-lg font-semibold">Python · Next.js · PyTorch</h3>
                            <p className="mt-2 text-sm">Experienced building backend systems, shipping frontend features, and leading ML/OCR projects into production.</p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="quick-badge">Python</span>
                                <span className="quick-badge">NextJS</span>
                                <span className="quick-badge">AWS</span>
                                <span className="quick-badge">Azure</span>
                                <span className="quick-badge">DSA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
