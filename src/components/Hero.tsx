// src/components/Hero.tsx
import { siteMeta } from "../data/siteMeta";
import { MonoLink } from "./ui";

export default function Hero() {
    return (
        <section id="hero" className="pt-16 sm:pt-24">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">{siteMeta.role}</p>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-6xl">
                {siteMeta.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-lg">{siteMeta.intro}</p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                    href="#projects"
                    className="rounded-full bg-accent px-5 py-2.5 font-medium text-bg transition-opacity hover:opacity-90"
                >
                    View projects
                </a>
                <a
                    href={`mailto:${siteMeta.email}`}
                    className="rounded-full border border-line px-5 py-2.5 font-medium text-heading transition-colors hover:border-accent hover:text-accent"
                >
                    Email me
                </a>
                <div className="flex gap-5">
                    <MonoLink href={siteMeta.socials.github} external>GitHub ↗</MonoLink>
                    <MonoLink href={siteMeta.socials.linkedin} external>LinkedIn ↗</MonoLink>
                </div>
            </div>

            <div className="mt-16 border-t border-line pt-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h2 className="font-mono text-xs font-normal uppercase tracking-wider text-accent">
                        {siteMeta.impact.heading}
                    </h2>
                    <p className="text-sm text-muted">{siteMeta.impact.context}</p>
                </div>

                <dl className="mt-2 grid sm:grid-cols-3">
                    {siteMeta.metrics.map((m, i) => (
                        <div
                            key={m.label}
                            className={`flex flex-col py-6 sm:px-6 ${i === 0 ? "sm:pl-0" : "border-t border-line sm:border-t-0 sm:border-l"}`}
                        >
                            {/* Label is the term, value the description; order flips visually so the number leads. */}
                            <dt className="order-2 mt-1 font-medium text-heading">{m.label}</dt>
                            <dd className="order-1 text-4xl font-bold text-heading">{m.value}</dd>
                            <dd className="order-3 mt-2 text-sm text-muted">{m.detail}</dd>
                        </div>
                    ))}
                </dl>

                <a href="#work" className="font-mono text-xs uppercase tracking-wider text-accent underline-offset-4 hover:underline">
                    See the work behind these →
                </a>
            </div>
        </section>
    );
}
