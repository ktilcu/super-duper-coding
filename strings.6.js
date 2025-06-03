// Alien Translator
// Instruction: Translate a word into an alien language by replacing all "e" with "€".

  throw new Error("The function, toAlien, hasn't been implemented yet.");
function toAlien(message) {
}

const cases = [
  {input: ["We like elephants"], expected: "W€ lik€ €l€phants"},
  {input: ["Take us to your leader"], expected: "Tak€ us to your l€ad€r"},
  {input: ["beep boop"], expected: "b€€p boop"},
  {input: ["sun"], expected: "sun"}
];

import { test } from "./test.js";
test(toAlien, cases);