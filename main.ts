import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "We had a meeting about having too many meetings, and it ran over, so we scheduled a follow-up to discuss why it ran over.";

// Gate check (mirrors the bounty gate): 1-200 chars, one line, not blank.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`joke is ${JOKE.length} chars, must be 1-200`);
}
if (JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error("joke must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
