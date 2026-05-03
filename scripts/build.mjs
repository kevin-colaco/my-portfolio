import { spawn } from "node:child_process";
import path from "node:path";
import readline from "node:readline";

// Next/Turbopack currently emits this stale-data warning even with the latest
// published package, so we suppress only this known noisy line during builds.
const warningSnippet = "[baseline-browser-mapping] The data in this module is over two months old.";
const nextBin = path.join(process.cwd(), "node_modules", "next", "dist", "bin", "next");

const child = spawn(process.execPath, [nextBin, "build"], {
  stdio: ["inherit", "pipe", "pipe"],
  env: {
    ...process.env,
    BROWSERSLIST_IGNORE_OLD_DATA: "true",
    BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA: "true"
  }
});

function pipeFiltered(stream, target) {
  const rl = readline.createInterface({ input: stream });
  rl.on("line", (line) => {
    if (!line.includes(warningSnippet)) {
      target.write(`${line}\n`);
    }
  });
}

pipeFiltered(child.stdout, process.stdout);
pipeFiltered(child.stderr, process.stderr);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
