// src/components/Experience.tsx
import { experience } from "../data/experience";
import { Section, Tag } from "./ui";

export default function Experience() {
    return (
        <Section id="work" index="01" title="Work">
            <ol className="space-y-12">
                {experience.map((exp) => (
                    <li key={`${exp.company}-${exp.role}`} className="grid gap-4 sm:grid-cols-[10rem_1fr]">
                        <p className="font-mono text-xs uppercase tracking-wider text-muted sm:pt-1.5">
                            {exp.start} to {exp.end ?? "Present"}
                        </p>

                        <div>
                            <h3 className="text-xl font-bold">
                                {exp.role} ·{" "}
                                {exp.url ? (
                                    <a href={exp.url} target="_blank" rel="noreferrer" className="text-accent hover:underline underline-offset-4">
                                        {exp.company}
                                    </a>
                                ) : (
                                    exp.company
                                )}
                            </h3>
                            <p className="font-mono text-xs uppercase tracking-wider text-muted">{exp.location}</p>

                            <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-muted">
                                {exp.bullets.map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>

                            {exp.tech && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {exp.tech.map((t) => (
                                        <Tag key={t}>{t}</Tag>
                                    ))}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
