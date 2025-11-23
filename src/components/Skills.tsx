// src/components/Skills.tsx
import { skills } from "../data/skills";

function SkillChip({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-block rounded-full px-3 py-1 text-sm border mr-2 mb-2 transition-transform transform hover:-translate-y-1 hover:scale-105">
            {children}
        </span>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="pt-8">
            <h2 className="text-2xl font-semibold">Skills</h2>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="skill-card">
                    <h3 className="font-medium">Languages</h3>
                    <div className="mt-2">
                        {skills.languages.map((s) => (
                            <SkillChip key={s}>{s}</SkillChip>
                        ))}
                    </div>
                </div>

                <div className="skill-card">
                    <h3 className="font-medium">Frontend</h3>
                    <div className="mt-2">
                        {skills.frontend.map((s) => (
                            <SkillChip key={s}>{s}</SkillChip>
                        ))}
                    </div>
                </div>

                <div className="skill-card">
                    <h3 className="font-medium">Backend & DevOps</h3>
                    <div className="mt-2">
                        {skills.backend.concat(skills.cloud).map((s) => (
                            <SkillChip key={s}>{s}</SkillChip>
                        ))}
                    </div>
                </div>

                <div className="skill-card">
                    <h3 className="font-medium">ML / Tools</h3>
                    <div className="mt-2">
                        {skills.ml.concat(skills.tools).map((s) => (
                            <SkillChip key={s}>{s}</SkillChip>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
