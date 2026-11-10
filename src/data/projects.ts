// src/data/projects.ts
export type Project = {
    title: string;
    description: string;
    highlights?: string[];
    tech: string[];
    link?: string; // optional live URL
    repo?: string; // repo URL (GitHub)
    status?: string;
};

export const projects: Project[] = [
    {
        title: "Smart Marksheet Scanner",
        description:
            "Led a 5-member team to build a full-stack OCR system that won the SSIP Hackathon and validates marksheets with 95%+ accuracy for ACPDC (Govt. of Gujarat) and Charotar University.",
        highlights: [
            "5-member team",
            "95%+ OCR accuracy",
            "Active use at Charotar University"
        ],
        tech: ["Python (OCR)", "React", "FastAPI/Django", "Postgres"],
        repo: "https://github.com/DeV-Parekh/Smart_Marksheet_Scanner"
    },
    {
        title: "Agentic Coding Assistant",
        description:
            "Built a modular agentic coding system using Claude Code, Hermes, and OpenClaw to automate planning, code generation, and review workflows.",
        highlights: [
            "Cut repetitive development cycles by 50%",
            "Self-verification improved reliability by 35%"
        ],
        tech: ["Claude Code", "Hermes", "OpenClaw", "Automation"],
        status: "Private / Internal"
    },
    {
        title: "GPT from Scratch",
        description:
            "Implemented a transformer/GPT model from scratch using Python and PyTorch (multi-head attention, positional encoding, training loops).",
        highlights: ["Architecture docs", "Tokenization and training experiments"],
        tech: ["Python", "PyTorch", "NumPy"],
        repo: "https://github.com/kevin-colaco/Transformer"
    },
    {
        title: "RTOCR (In Progress)",
        description:
            "Vision-assist device for visually impaired users using Azure AI, Computer Vision, and OCR with real-time object and text recognition.",
        highlights: ["Sub-500ms response time"],
        tech: ["Azure AI", "Computer Vision", "Python", "OpenCV", "OCR"],
        repo: "https://github.com/mvp-corporation/rtocr-fe"
    }
];
