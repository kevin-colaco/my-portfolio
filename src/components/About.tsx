// src/components/About.tsx
import { certifications, education } from "../data/education";
import { skillLabels, skills } from "../data/skills";
import { Section, Tag } from "./ui";

const skillKeys = Object.keys(skills) as (keyof typeof skills)[];

export default function About() {
    return (
        <Section id="about" index="03" title="About">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
                <div className="space-y-4">
                    <p className="text-lg text-heading">
                        I&apos;m a full-stack engineer who ships reliable backend systems, clean frontend experiences, and AI-enabled automation tools.
                    </p>
                    <p>
                        I design services with observability and testability in mind, and move fast without sacrificing stability. I&apos;ve shipped
                        healthcare e-commerce features, customer support automation, production OCR systems, and agentic coding assistants.
                    </p>
                    <p>
                        Outside of work I&apos;m exploring ML/OCR, agentic coding workflows, and developer tooling.
                    </p>

                    <dl className="grid grid-cols-2 gap-6 pt-4">
                        <div>
                            <dt className="font-mono text-xs uppercase tracking-wider text-muted">Based in</dt>
                            <dd className="mt-1 text-heading">India</dd>
                        </div>
                        <div>
                            <dt className="font-mono text-xs uppercase tracking-wider text-muted">Experience</dt>
                            <dd className="mt-1 text-heading">Nearly 3 years</dd>
                        </div>
                    </dl>

                    <div className="pt-6">
                        <h3 className="font-mono text-xs font-normal uppercase tracking-wider text-muted">Education</h3>
                        <p className="mt-2 font-bold text-heading">{education.degree}</p>
                        <a href={education.url} target="_blank" rel="noreferrer" className="text-accent hover:underline underline-offset-4">
                            {education.school}
                        </a>
                        <p className="text-sm text-muted">
                            {education.period} · {education.grade}
                        </p>
                    </div>

                    <div className="pt-4">
                        <h3 className="font-mono text-xs font-normal uppercase tracking-wider text-muted">Certifications</h3>
                        <ul className="mt-2 space-y-1">
                            {certifications.map((c) => (
                                <li key={c}>{c}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className="font-mono text-xs font-normal uppercase tracking-wider text-muted">Skills</h3>
                    <dl className="mt-2 divide-y divide-line border-y border-line">
                        {skillKeys.map((key) => (
                            <div key={key} className="grid gap-2 py-4 sm:grid-cols-[8.5rem_1fr]">
                                <dt className="font-medium text-heading">{skillLabels[key]}</dt>
                                <dd className="flex flex-wrap gap-2">
                                    {skills[key].map((s) => (
                                        <Tag key={s}>{s}</Tag>
                                    ))}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </Section>
    );
}
