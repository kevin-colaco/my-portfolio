// src/components/ThemeToggle.tsx
"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const THEME_CHANGE_EVENT = "theme-change";
const themeQuery = "(prefers-color-scheme: dark)";

function getThemeSnapshot(): Theme {
    if (typeof window === "undefined") return "light";

    try {
        const stored = localStorage.getItem("theme");
        if (stored === "dark" || stored === "light") return stored;
    } catch {
        // ignore storage errors and fall back to system preference
    }

    return window.matchMedia(themeQuery).matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
    document.documentElement.setAttribute("data-theme", theme);
}

function subscribe(onStoreChange: () => void) {
    if (typeof window === "undefined") return () => undefined;

    const mediaQuery = window.matchMedia(themeQuery);
    const handleChange = () => {
        applyTheme(getThemeSnapshot());
        onStoreChange();
    };

    window.addEventListener("storage", handleChange);
    window.addEventListener(THEME_CHANGE_EVENT, handleChange);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
        window.removeEventListener("storage", handleChange);
        window.removeEventListener(THEME_CHANGE_EVENT, handleChange);
        mediaQuery.removeEventListener("change", handleChange);
    };
}

export default function ThemeToggle() {
    // The inline script in layout.tsx sets the initial theme before paint; this only
    // reapplies it on changes, so the hydration-time "light" snapshot never touches the DOM.
    const theme = useSyncExternalStore<Theme>(subscribe, getThemeSnapshot, () => "light");
    const next = theme === "dark" ? "light" : "dark";

    function toggle() {
        try {
            localStorage.setItem("theme", next);
        } catch {
            // ignore storage errors
        }

        window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
    }

    return (
        <button
            type="button"
            onClick={toggle}
            className="rounded-full border border-line p-2 text-heading hover:border-accent hover:text-accent"
            aria-label={`Switch to ${next} theme`}
            title={`Switch to ${next} theme`}
        >
            {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </svg>
            ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                </svg>
            )}
        </button>
    );
}
