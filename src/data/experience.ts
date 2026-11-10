export type ExperienceItem = {
    role: string;
    company: string;
    url?: string;
    location: string;
    start: string;
    end?: string;
    bullets: string[];
    tech?: string[];
};

export const experience: ExperienceItem[] = [
    {
        role: "Software Engineer",
        company: "Codal",
        url: "https://www.codal.com",
        location: "India",
        start: "Jan 2024",
        end: "Present",
        bullets: [
            "Core developer on a high-traffic U.S. healthcare e-commerce platform; spearheaded delivery of automated prescription refills and dependent prescription support, boosting daily order volume by 2,000+ with zero critical post-release issues.",
            "Implemented order routing logic that directs ~120 prescription orders per day across 2 partner pharmacies, with more pharmacies planned.",
            "Partnered with a third-party pharmacy network to design and build Rx management integrations for transfers and refills, now handling 4 to 5 prescription transfers daily (120+ per month).",
            "Created a Customer Support Automation tool with LLM-powered summarization on Vertex AI, resolving support queries 67% faster and reducing manual triage effort.",
            "Drove the Python 3.9 to 3.12 upgrade across the entire production codebase.",
            "Improved overall application performance by 30% through code reviews, REST API optimization, and backend refactoring in Python; shipped customer-facing UI features in React/Next.js."
        ],
        tech: ["Python", "REST APIs", "React/Next.js", "Vertex AI", "AWS/Azure", "GCP"]
    },
    {
        role: "Python Intern",
        company: "SOLITS",
        url: "https://solits.com",
        location: "India",
        start: "Jan 2023",
        end: "Jul 2023",
        bullets: [
            "Developed a Hostel Management System for Nisarg Hostel using Python and Django, automating room allocation, billing, and student records. Reduced administrative workload by 40% and eliminated manual data entry errors."
        ],
        tech: ["Python", "Django", "SQLite", "REST APIs"]
    }
];
