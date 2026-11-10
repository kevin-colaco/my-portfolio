# Kevin Colaco · Portfolio

Personal portfolio of Kevin Colaco, a full-stack engineer building Python backends, healthcare e-commerce systems, and AI automation.

**Live:** https://my-portfolio-rho-flame-40.vercel.app

## Stack

- [Next.js 16](https://nextjs.org) (App Router, fully static output)
- React 19, TypeScript
- Tailwind CSS v4 with theme tokens in `src/app/globals.css`
- DM Sans and DM Mono via `next/font` (self-hosted, no layout shift)
- Vercel Analytics (cookie-free page views)

## Project layout

```
src/
  app/            layout, page, metadata, sitemap, robots, OG image, favicon
  components/     Header, Hero, Experience, Projects, About, Contact, shared ui
  data/           all site content (edit these, not the components)
resume/
  resume.tex      one-page LaTeX resume (compile in Overleaf)
public/
  resume.pdf      the PDF served by the "Resume" links
scripts/          build wrapper and resume-sync check
```

Content lives in `src/data/*.ts`. Updating experience, projects, skills, or metrics means editing those files only.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Release checklist

```bash
npm run lint -- --max-warnings=0
npm run verify:resume
npm run build
```

Then check:

- `siteUrl` in `src/data/siteMeta.ts` matches the live domain (it drives canonical, Open Graph, sitemap, and robots URLs)
- `public/resume.pdf` is the latest export of `resume/resume.tex`
- `src/data/skills.ts` and the resume's Skills section still match
- Social links point to the right LinkedIn and GitHub profiles

## Updating the resume

1. Edit `resume/resume.tex` and compile it in Overleaf.
2. Confirm it is still one page.
3. Download the PDF and replace `public/resume.pdf`.
