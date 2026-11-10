// src/data/skills.ts
// Kept in sync with the Skills section of resume/resume.tex.

export const skills = {
    languages: [
        "Python",
        "TypeScript",
        "JavaScript",
        "SQL",
        "C++",
        "Dart",
    ] as string[],

    backend: [
        "Django",
        "FastAPI",
        "Flask",
        "REST APIs",
        "GraphQL",
        "Celery",
        "Microservices",
    ] as string[],

    frontend: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "HTML",
        "CSS",
    ] as string[],

    data: [
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Firebase",
    ] as string[],

    cloud: [
        "AWS",
        "Azure",
        "GCP",
        "Docker",
        "Kubernetes",
        "Linux",
    ] as string[],

    ai: [
        "LLMs",
        "RAG",
        "Embeddings",
        "Vertex AI",
        "Claude Code",
        "Hermes",
        "OpenClaw",
        "PyTorch",
        "OpenCV",
        "OCR",
    ] as string[],

    practices: [
        "Unit Testing (pytest)",
        "CI/CD",
        "Agile/Scrum",
        "Code Review",
        "Git/GitHub",
    ] as string[],
};

export const skillLabels: Record<keyof typeof skills, string> = {
    languages: "Languages",
    backend: "Backend",
    frontend: "Frontend",
    data: "Databases",
    cloud: "Cloud / DevOps",
    ai: "AI / Agentic",
    practices: "Practices",
};
