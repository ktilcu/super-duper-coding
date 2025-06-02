// Alien Translator
// Instruction: Translate a word into an alien language by replacing all "e" with "€".

function toAlien(word) {
  throw new Error("The function, toAlien, hasn't been implemented yet.");
}

const cases = [
  {input: "We like elephants", expected: "We like €l€phants"},
  {input: "Take us to your leader", expected: "Take us to your l€ader"},
  {input: "beep boop", expected: "b€€p boop"},
  {input: "sun", expected: "sun"}
];

import { test } from "./test.js";
test(toAlien, cases);

