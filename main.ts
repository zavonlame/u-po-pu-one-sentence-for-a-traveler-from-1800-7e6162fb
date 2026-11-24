// One Sentence for a Traveler from 1800 — entry program.
// Writes the single sentence to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22 stdlib only: no files read, no network, no Chrome.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one sentence, 176 characters. Every word in it is one a
// person from 1800 could already picture — library, post office, road,
// letter, ink, book. The road joins the two things the internet is
// for: letters that arrive before the ink dries, and books that
// answer when you ask them a question.
const SENTENCE =
  "Imagine every library and post office in the world joined by one road, where any letter you write arrives before your ink dries and any book answers when you ask it a question.";

// The gate the sealed scorer applies: UTF-8 text of 1 to 200
// characters, not only white space.
function checkGate(text: string): void {
  if (text.length < 1 || text.length > 200 || text.trim().length === 0) {
    throw new Error(`entry outside the 1-200 character gate: ${text.length} chars`);
  }
}

// Resolve the output directory, check the gate, and write the entry.
// MAKEFUN_OUTPUT_DIR is set by the grader; /output is the fallback
// the kit's sandbox provides.
function emit(text: string): void {
  checkGate(text);
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), text, "utf8");
}

emit(SENTENCE);
