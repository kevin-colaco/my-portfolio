// src/components/ui.tsx
// Small shared building blocks for the editorial layout.
import { ReactNode } from "react";

export function Section({
    id,
    index,
    title,
    children
}: {
    id: string;
    index: string;
    title: string;
    children: ReactNode;
}) {
    return (
        <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-32 border-t md:scroll-mt-24 border-line pt-10">
            <p className="font-mono text-xs uppercase tracking-wider text-accent">{index}</p>
            <h2 id={`${id}-title`} className="mt-2 text-3xl font-bold sm:text-4xl">
                {title}
            </h2>
            <div className="mt-8">{children}</div>
        </section>
    );
}

export function Tag({ children }: { children: ReactNode }) {
    return (
        <span className="inline-block rounded-full border border-line px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wide text-muted">
            {children}
        </span>
    );
}

export function MonoLink({
    href,
    children,
    external = false,
    download = false
}: {
    href: string;
    children: ReactNode;
    external?: boolean;
    download?: boolean;
}) {
    return (
        <a
            href={href}
            download={download || undefined}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="font-mono text-xs uppercase tracking-wider text-accent underline-offset-4 hover:underline"
        >
            {children}
        </a>
    );
}
