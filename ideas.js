// 1,2,3 Captialize me
// Instructions: Return the same word with the 3rd letter capitalized
// Example: bigThree('bumfuzzle') === 'buMfuzzle'
function bigThree(word) {
  throw new Error("bigThree function not implemented yet");
}

const cases = [
  { input: ["bumfuzzle"], expected: "buMfuzzle" },
  { input: ["Wagner"], expected: "WaGner" },
  { input: ["Bethlehem"], expected: "BeThlehem" },
];

import { test } from "./test.js";
test(bigThree, cases);

// Highsides
// Instructions: Capitalize the first and last letter of word passed in
// Example: highsides('bobbyw') === 'BobbyW'
function highsides(word) {
  throw new Error("bigThree function not implemented yet");
}

const cases = [
  { input: ["bobbyw"], expected: "BobbyW" },
  { input: ["darthv"], expected: "DarthV" },
  { input: ["ashtonj"], expected: "AshtonJ" },
];

import { test } from "./test.js";
test(highsides, cases);

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
