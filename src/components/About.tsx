// src/components/About.tsx
export default function About() {
    return (
        <section id="about" className="pt-8">
            <div className="container">
                <div className="grid gap-8 lg:grid-cols-3 items-start">
                    {/* left: intro */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-semibold">About</h2>

                        <div className="mt-4">
                            <div className="card">
                                <p className="text-sm" style={{ color: "var(--text)" }}>
                                    I'm a Python-first full-stack engineer who ships reliable backend systems and clean frontend experiences.
                                    I like to design services with observability and testability in mind, and move fast without sacrificing stability.
                                    I’ve shipped features for healthcare e-commerce platforms, built OCR systems in production, and implemented transformer models for experimentation.
                                </p>

                                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <strong>Location</strong>
                                        <div className="text-sm text-slate-500">India</div>
                                    </div>
                                    <div>
                                        <strong>Open to</strong>
                                        <div className="text-sm text-slate-500">Full-time, Contract, Consulting</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 flex gap-3">
                                <a href="#contact" className="btn">Get in touch</a>
                                <a href="#projects" className="btn secondary">See projects</a>
                            </div>
                        </div>
                    </div>

                    {/* right: short cards */}
                    <aside className="space-y-3">
                        <div className="skill-card p-4">
                            <h3 className="text-sm font-semibold">Approach</h3>
                            <p className="text-xs mt-2 text-slate-500">Iterative delivery, strong tests, and observability-first design.</p>
                        </div>

                        <div className="skill-card p-4">
                            <h3 className="text-sm font-semibold">Impact</h3>
                            <p className="text-xs mt-2 text-slate-500">Delivered features that increased daily orders and reduced manual workload via automation.</p>
                        </div>

                        <div className="skill-card p-4">
                            <h3 className="text-sm font-semibold">Interests</h3>
                            <p className="text-xs mt-2 text-slate-500">ML/OCR, transformer internals, developer tools, DX improvements.</p>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
