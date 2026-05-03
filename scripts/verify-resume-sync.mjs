import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';

const projectRoot = process.cwd();
const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'resume-sync-'));

async function loadTsModule(relativePath) {
  const sourcePath = path.join(projectRoot, relativePath);
  const source = await fs.readFile(sourcePath, 'utf8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2020,
    },
    fileName: sourcePath,
  }).outputText;

  const tempPath = path.join(tempDir, relativePath.replace(/[\\/]/g, '__').replace(/\.ts$/, '.mjs'));
  await fs.writeFile(tempPath, transpiled, 'utf8');
  return import(pathToFileURL(tempPath).href);
}

const failures = [];
const { siteMeta } = await loadTsModule('src/data/siteMeta.ts');
const { experience } = await loadTsModule('src/data/experience.ts');
const { projects } = await loadTsModule('src/data/projects.ts');
const { skills } = await loadTsModule('src/data/skills.ts');

if (!siteMeta.title.includes('AI Builder')) {
  failures.push('siteMeta.title should reflect the updated AI Builder positioning');
}

if (!experience.some((item) => item.bullets.some((bullet) => bullet.includes('Customer Support Automation')))) {
  failures.push('experience should include the Customer Support Automation work');
}

const agenticProject = projects.find((project) => project.title === 'Agentic Coding Assistant');
if (!agenticProject) {
  failures.push('projects should include Agentic Coding Assistant');
} else {
  if (!agenticProject.highlights?.some((highlight) => highlight.includes('50%'))) {
    failures.push('Agentic Coding Assistant should include the 50% impact highlight');
  }

  if (!agenticProject.repo && !agenticProject.link && !agenticProject.status) {
    failures.push('projects without a repo or live link should declare a status such as Private / Internal');
  }
}

if (!Array.isArray(skills.ai) || !skills.ai.includes('OpenClaw')) {
  failures.push('skills.ai should include OpenClaw');
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(failure);
  }
  process.exit(1);
}

console.log('Resume sync checks passed.');
