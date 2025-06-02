// Echo Echo Echo
// Instruction: Make a function that repeats a word 3 times, separated by a space.

function echo(word) {
  throw new Error("The function echo hasn't been implemented yet.");
}

const cases = [
  {input: "hey", expected: "hey hey hey"},
  {input: "no", expected: "no no no"}
];

import { test } from "./test.js";
test(echo, cases);
