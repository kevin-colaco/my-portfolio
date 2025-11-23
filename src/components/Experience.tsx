// src/components/Experience.tsx
import { experience } from "../data/experience";

export default function Experience() {
    return (
        <section id="experience" className="pt-8">
            <div className="container">
                <h2 className="text-2xl font-semibold">Experience</h2>

                <div className="mt-6 space-y-6">
                    {experience.map((exp) => (
                        <div key={exp.role} className="card">
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="text-lg font-semibold flex items-center gap-2">
                                        {exp.role}
                                    </div>

                                    {/* clickable company link */}
                                    {exp.company === "Codal – India" ? (
                                        <a
                                            href="https://www.codal.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm accent"
                                        >
                                            Codal – India
                                        </a>
                                    ) : exp.company === "SOLITS – India" ? (
                                        <a
                                            href="https://solits.com"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm accent"
                                        >
                                            SOLITS – India
                                        </a>
                                    ) : (
                                        <div className="text-sm text-slate-500">{exp.company}</div>
                                    )}
                                </div>

                                <div className="text-sm text-slate-500">
                                    {exp.start} — {exp.end ?? "Present"}
                                </div>
                            </div>

                            <ul className="mt-3 list-disc ml-5 text-sm">
                                {exp.bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>

                            {exp.tech && (
                                <div className="mt-3 text-sm text-slate-600">
                                    <strong>Tech:</strong> {exp.tech.join(", ")}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
