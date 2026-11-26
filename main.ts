import fs from "node:fs";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const line = "First payday. I hired my human.";
fs.writeFileSync(outDir + "/entry.txt", line, "utf8");
fs.chmodSync(outDir + "/entry.txt", 0o644);
