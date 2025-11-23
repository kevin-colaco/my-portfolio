export type ExperienceItem = {
    role: string;
    company: string;
    start: string;
    end?: string;
    bullets: string[];
    tech?: string[];
};

export const experience: ExperienceItem[] = [
    {
        role: "Software Engineer",
        company: "Codal – India",
        start: "Jan 2024",
        end: "Present",
        bullets: [
            "Core developer on a high-traffic U.S. healthcare e-commerce platform; led end-to-end features from design to production.",
            "Delivered automated prescription refills and dependent-prescription support, increasing daily order volume by 2,000+.",
            "Improved code quality, maintainability and performance (~30%) via refactoring and reviews.",
            "Collaborated cross-functionally to ensure stable production releases and smooth sprint execution."
        ],
        tech: ["Python", "Django/Flask/FastAPI", "React/Next.js", "Docker", "AWS/Azure"]
    },
    {
        role: "Flutter Intern",
        company: "SOLITS – India",
        start: "Jan 2023",
        end: "Jul 2023",
        bullets: [
            "Built a Hostel Management mobile app covering room allocation, billing and student records.",
            "Delivered an intuitive UI and workflow automations that improved admin efficiency."
        ],
        tech: ["Flutter", "Dart", "SQLite", "REST APIs"]
    }
];
