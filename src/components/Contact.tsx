// src/components/Contact.tsx
import { siteMeta } from "../data/siteMeta";
import { MonoLink, Section } from "./ui";

export default function Contact() {
    return (
        <Section id="contact" index="04" title="Let's build something">
            <p className="max-w-xl text-lg">
                Have a role, a project, or an idea you want to talk through? I&apos;m always open to a conversation. Email is the fastest way to reach me.
            </p>

            <a
                href={`mailto:${siteMeta.email}`}
                className="mt-6 inline-block break-all text-2xl font-bold text-accent underline decoration-line decoration-2 underline-offset-8 transition-colors hover:decoration-accent sm:text-4xl"
            >
                {siteMeta.email}
            </a>

            <div className="mt-8 flex flex-wrap gap-6">
                <MonoLink href={siteMeta.socials.linkedin} external>LinkedIn ↗</MonoLink>
                <MonoLink href={siteMeta.socials.github} external>GitHub ↗</MonoLink>
                <MonoLink href={siteMeta.resumeUrl} download>Resume ↓</MonoLink>
            </div>
        </Section>
    );
}
