// src/components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<{ [k: string]: string }>({});
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    function validate() {
        const e: { [k: string]: string } = {};
        if (!form.name.trim()) e.name = "Name is required";
        if (!form.email.includes("@")) e.email = "Valid email required";
        if (form.message.length < 10) e.message = "Message must be at least 10 characters";
        setErrors(e);
        return Object.keys(e).length === 0;
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        // simulate send delay — replace with real API call
        await new Promise((r) => setTimeout(r, 800));
        console.log("Contact form submitted:", form);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
    }

    return (
        <section id="contact" className="pt-8">
            <div className="container">
                <h2 className="text-2xl font-semibold">Contact</h2>
                <p className="mt-2 text-sm text-slate-600">Send a quick message — I usually reply within a few business days.</p>

                <div className="mt-4 card max-w-2xl">
                    <form onSubmit={onSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Name</label>
                            <input
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="mt-1 block w-full rounded-md border px-3 py-2"
                                aria-invalid={!!errors.name}
                            />
                            {errors.name && <div className="text-xs text-red-600 mt-1">{errors.name}</div>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="mt-1 block w-full rounded-md border px-3 py-2"
                                aria-invalid={!!errors.email}
                            />
                            {errors.email && <div className="text-xs text-red-600 mt-1">{errors.email}</div>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Message</label>
                            <textarea
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                rows={5}
                                className="mt-1 block w-full rounded-md border px-3 py-2"
                                aria-invalid={!!errors.message}
                            />
                            {errors.message && <div className="text-xs text-red-600 mt-1">{errors.message}</div>}
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                type="submit"
                                className="btn-outline inline-flex items-center gap-2"
                                disabled={loading}
                                aria-disabled={loading}
                            >
                                {loading ? (
                                    // small spinner
                                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                                        <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                                        <path d="M2 12l20-9-9 20-1-7-10-4z" stroke="currentColor" strokeWidth="0.6" />
                                    </svg>
                                )}
                                <span>{loading ? "Sending..." : "Send message"}</span>
                            </button>

                            {sent && <div className="text-sm text-green-600">Message logged to console. Integrate backend to send email.</div>}
                        </div>
                    </form>
                </div>

                <div className="mt-6 text-sm text-slate-600">
                    Or email me directly: <a className="underline" href="mailto:kevincolaco.kc@gmail.com">kevincolaco.kc@gmail.com</a>
                </div>
            </div>
        </section>
    );
}
