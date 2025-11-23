// src/components/ContactForm.tsx
// Replaced interactive form with a simple "email me" contact block.
export default function ContactForm() {
    return (
        <section id="contact" className="pt-8">
            <div className="container">
                <h2 className="text-2xl font-semibold">Contact</h2>

                <div className="mt-4 card max-w-2xl">
                    <div className="p-4">
                        <p className="text-sm" style={{ color: "var(--text)" }}>
                            Email me directly:
                        </p>

                        <a
                            href="mailto:kevincolaco.kc@gmail.com"
                            className="mt-3 inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm"
                        >
                            kevincolaco.kc@gmail.com
                        </a>

                        <div className="mt-4 text-sm text-slate-600">
                            {/* Resume link uses the uploaded path (dev environment). */}
                            <a
                                href="/resume.pdf"
                                className="underline"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View / download resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
