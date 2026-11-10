// src/components/Projects.tsx
import { projects } from "../data/projects";
import { MonoLink, Section, Tag } from "./ui";

export default function Projects() {
    return (
        <Section id="projects" index="02" title="Selected projects">
            <ol className="border-t border-line">
                {projects.map((p, i) => (
                    <li key={p.title} className="grid gap-4 border-b border-line py-8 sm:grid-cols-[10rem_1fr]">
                        <p className="font-mono text-xs uppercase tracking-wider text-muted sm:pt-1.5">
                            {String(i + 1).padStart(2, "0")}
                        </p>

                        <div>
                            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                                <h3 className="text-xl font-bold">{p.title}</h3>
                                <div className="flex gap-4">
                                    {p.repo && <MonoLink href={p.repo} external>Repo ↗</MonoLink>}
                                    {p.link && <MonoLink href={p.link} external>Live ↗</MonoLink>}
                                    {p.status && (
                                        <span className="font-mono text-xs uppercase tracking-wider text-muted">{p.status}</span>
                                    )}
                                </div>
                            </div>

                            <p className="mt-3 max-w-2xl">{p.description}</p>

                            {p.highlights && (
                                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-heading">
                                    {p.highlights.map((h) => (
                                        <li key={h} className="before:mr-2 before:text-accent before:content-['→']">
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                    <Tag key={t}>{t}</Tag>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
