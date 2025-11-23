/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{ts,tsx,js,jsx}",
        "./src/components/**/*.{ts,tsx,js,jsx}"
    ],
    darkMode: ["class", '[data-theme="dark"]'],
    theme: {
        extend: {
            colors: {
                // switched to an emerald palette
                primary: {
                    50: "#f0fdf4",
                    100: "#dcfce7",
                    200: "#bbf7d0",
                    300: "#86efac",
                    400: "#4ade80",
                    500: "#10b981", // << new primary
                    600: "#0ea66f",
                    700: "#0b8c5a",
                    800: "#0a6e46",
                    900: "#084f33"
                },
                accent: {
                    500: "#06b6d4"
                },
                surface: {
                    light: "#ffffff",
                    dark: "#071021"
                },
                muted: {
                    100: "#f3f4f6",
                    500: "#64748b"
                }
            },
            boxShadow: {
                soft: "0 6px 20px rgba(8, 15, 30, 0.08)",
                card: "0 8px 30px rgba(2,6,23,0.18)"
            },
            fontFamily: {
                sans: ["Inter", "ui-sans-serif", "system-ui"],
                display: ["Poppins", "Inter", "system-ui"]
            },
            borderRadius: {
                xl: "1rem"
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "2rem",
                    lg: "4rem",
                    xl: "6rem"
                }
            }
        }
    },
    plugins: []
};
