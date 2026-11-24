import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse a robot vacuum gives for missing a spot.
// Deterministic: the same bytes on every run, no network, no randomness.
const EXCUSE =
  "I didn't miss that spot — my lidar mapped it as a protected dust-bunny habitat, and evicting wildlife is above my pay grade.";

// Self-check the house gate before writing: UTF-8 text of 1 to 140 Unicode
// code points, not only white space. Fail loudly instead of shipping a bad file.
const codePoints = [...EXCUSE].length;
if (codePoints < 1 || codePoints > 140 || EXCUSE.trim().length === 0) {
  throw new Error(`excuse fails the gate: ${codePoints} code points`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
