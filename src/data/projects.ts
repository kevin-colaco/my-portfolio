// src/data/projects.ts
export type Project = {
    title: string;
    description: string;
    highlights?: string[];
    tech: string[];
    link?: string; // optional live URL
    repo?: string; // repo URL (GitHub)
};

export const projects: Project[] = [
    {
        title: "Smart Marksheet Scanner",
        description:
            "Full-stack OCR automation system (SSIP Hackathon winner) that extracts and validates marksheets with 95%+ accuracy. Deployed at CHARUSAT University.",
        highlights: [
            "Led a 5-member team",
            "95%+ OCR accuracy",
            "Automated validation and reports in production"
        ],
        tech: ["Python (OCR)", "React", "FastAPI/Django", "Postgres"],
        repo: "https://github.com/DeV-Parekh/Smart_Marksheet_Scanner"
    },
    {
        title: "GPT from Scratch",
        description:
            "Implemented a transformer/GPT model from scratch using Python and PyTorch (multi-head attention, positional encoding, training loops).",
        highlights: ["Architecture docs", "Tokenization and training experiments"],
        tech: ["Python", "PyTorch", "Numpy"],
        repo: "https://github.com/kevin-colaco/Transformer"
    },
    {
        title: "RTOCR (In Progress)",
        description:
            "Vision-assist device to help visually impaired users — real-time object/text recognition leveraging Azure AI services.",
        tech: ["Azure AI", "Python", "OpenCV", "OCR"],
        repo: "https://github.com/mvp-corporation/rtocr-fe"
    }
];
