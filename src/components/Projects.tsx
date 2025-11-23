// src/components/Projects.tsx
import { projects } from "../data/projects";

export default function Projects() {
    return (
        <section id="projects" className="pt-8">
            <div className="container">
                <h2 className="text-2xl font-semibold">Projects</h2>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {projects.map((p) => (
                        <article key={p.title} className="card">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold">{p.title}</h3>
                                    <div className="text-xs text-slate-400 mt-1">{p.tech.join(" • ")}</div>
                                </div>

                                <div className="flex gap-2">
                                    {p.repo && (
                                        <a
                                            href={p.repo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-sm accent"
                                            aria-label={`Repository for ${p.title}`}
                                        >
                                            {/* github small icon */}
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                                                <path d="M12 2C7.6 2 4 5.6 4 10c0 3.6 2.3 6.7 5.5 7.8.4.1.5-.2.5-.4v-1.3c-2.2.5-2.7-1-2.7-1-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.1 1 2.6.8.1-.6.3-1 .6-1.2-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.7.9-2.3-.1-.2-.4-1 .1-2 0 0 .7-.2 2.4.9a8 8 0 014.4 0c1.7-1.1 2.4-.9 2.4-.9.5 1.1.2 1.8.1 2 .6.6.9 1.4.9 2.3 0 3.1-1.9 3.8-3.7 3.9.3.3.6.9.6 1.8v2.7c0 .2.1.5.6.4C19.7 16.7 22 13.6 22 10c0-4.4-3.6-8-10-8z" stroke="currentColor" strokeWidth="0.2" />
                                            </svg>
                                            Repo
                                        </a>
                                    )}

                                    {p.link && (
                                        <a
                                            href={p.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm underline"
                                            aria-label={`Live site for ${p.title}`}
                                        >
                                            Live
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="mt-3 text-sm" style={{ color: "var(--text)" }}>
                                {p.description}
                            </p>

                            {p.highlights && (
                                <ul className="mt-3 ml-5 list-disc text-sm">
                                    {p.highlights.map((h, i) => (
                                        <li key={i}>{h}</li>
                                    ))}
                                </ul>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
