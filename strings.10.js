// Is it a secret code?
// Instruction: Make a function that checks if a message looks like a secret code.
// A secret code starts with "X", ends with "9", or includes "42".

function isSecretCode(message) {
  throw new Error("The function, isSecretCode, hasn't been implemented yet.");
}

const cases = [
  { input: ["Xhello"], expected: true },
  { input: ["hello9"], expected: true },
  { input: ["there42buddy"], expected: true },
  { input: ["nothing special"], expected: false },
];

import { test } from "./test.js";
test(isSecretCode, cases);

