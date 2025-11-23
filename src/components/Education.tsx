// src/components/Education.tsx
export default function Education() {
    return (
        <section id="education" className="pt-8">
            <div className="container">
                <h2 className="text-2xl font-semibold">Education & Certifications</h2>

                <div className="mt-4 space-y-3 text-sm">
                    <div>
                        <div className="font-medium">
                            B.Tech (Computer Science & Engineering)
                        </div>

                        {/* clickable CHARUSAT link */}
                        <a
                            href="https://www.charusat.ac.in/"
                            target="_blank"
                            rel="noreferrer"
                            className="accent"
                        >
                            Charotar University of Science and Technology (CSPIT)
                        </a>

                        <div className="text-slate-500">
                            Jul 2020 – Jun 2024 • CGPA 9.83
                        </div>
                    </div>

                    <div>
                        <div className="font-medium">Certifications</div>
                        <ul className="ml-5 list-disc">
                            <li>Microsoft Certified: Azure AI Fundamentals</li>
                            <li>Microsoft Certified: Azure Data Fundamentals</li>
                            <li>NVIDIA — Building Real-Time Video AI Applications</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
