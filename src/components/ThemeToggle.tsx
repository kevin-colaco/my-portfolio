// src/components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark" | null>(null);

    // initialize theme from localStorage or system preference
    useEffect(() => {
        try {
            const stored = localStorage.getItem("theme");
            if (stored === "dark" || stored === "light") {
                setTheme(stored);
                document.documentElement.setAttribute("data-theme", stored);
                if (stored === "dark") document.documentElement.classList.add("dark");
                else document.documentElement.classList.remove("dark");
                return;
            }

            // no stored preference → use system preference
            const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
            const initial = prefersDark ? "dark" : "light";
            setTheme(initial);
            document.documentElement.setAttribute("data-theme", initial);
            if (initial === "dark") document.documentElement.classList.add("dark");
            else document.documentElement.classList.remove("dark");
        } catch (err) {
            // ignore (server-side safety)
            console.warn("Theme init error:", err);
        }
    }, []);

    function toggle() {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        try {
            localStorage.setItem("theme", next);
        } catch { }
        if (next === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", next);
    }

    return (
        <button
            onClick={toggle}
            className="rounded p-2 border text-sm"
            aria-label="Toggle theme"
            title="Toggle theme"
        >
            {theme === "dark" ? "🌙" : theme === "light" ? "☀️" : "Toggle"}
        </button>
    );
}
