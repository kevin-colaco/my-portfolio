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
            "Core developer on a high-traffic U.S. healthcare e-commerce platform; led delivery of automated prescription refills and dependent prescription support, boosting daily order volume by 2,000+ with zero critical post-release issues.",
            "Built a Customer Support Automation platform with Vertex AI-powered summarization, resolving support queries 67% faster and significantly reducing manual triage effort.",
            "Improved overall platform performance by 30% through proactive code reviews, API optimization, and backend refactoring in Python and React/Next.js."
        ],
        tech: ["Python", "React/Next.js", "Vertex AI", "AWS/Azure", "GCP"]
    },
    {
        role: "Python Intern",
        company: "SOLITS – India",
        start: "Jan 2023",
        end: "Jul 2023",
        bullets: [
            "Built a Hostel Management System for Nisarg Hostel using Python and Django, automating room allocation, billing, and student records — reducing administrative staff workload by 40% and eliminating manual data entry errors."
        ],
        tech: ["Python", "Django", "SQLite", "REST APIs"]
    }
];
