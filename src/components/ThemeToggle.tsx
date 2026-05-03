// src/components/ThemeToggle.tsx
"use client";

import { useEffect, useSyncExternalStore } from "react";

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

function subscribe(onStoreChange: () => void) {
    if (typeof window === "undefined") return () => undefined;

    const mediaQuery = window.matchMedia(themeQuery);
    const handleChange = () => onStoreChange();

    window.addEventListener("storage", handleChange);
    window.addEventListener(THEME_CHANGE_EVENT, handleChange);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
        window.removeEventListener("storage", handleChange);
        window.removeEventListener(THEME_CHANGE_EVENT, handleChange);
        mediaQuery.removeEventListener("change", handleChange);
    };
}

function applyTheme(theme: Theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
}

export default function ThemeToggle() {
    const theme = useSyncExternalStore<Theme>(subscribe, getThemeSnapshot, () => "light");

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    function toggle() {
        const next = theme === "dark" ? "light" : "dark";

        try {
            localStorage.setItem("theme", next);
        } catch {
            // ignore storage errors
        }

        window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
    }

    return (
        <button
            onClick={toggle}
            className="rounded p-2 border text-sm"
            aria-label="Toggle theme"
            title="Toggle theme"
        >
            {theme === "dark" ? "🌙" : "☀️"}
        </button>
    );
}
