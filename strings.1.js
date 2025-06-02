// Given a word like "racecar" return the same word with all capital letters.
// Example:
// capitalize('racecar') === 'RACECAR'
function capitalize(word) {
  throw new Error("Capitalize function not implemented yet");
}

const cases = [
  { input: ["Luke, I am your father"], expected: "LUKE, I AM YOUR FATHER" },
  { input: ["Lord Business"], expected: "LORD BUSINESS" },
  { input: ["I have guns, in my butt!?"], expected: "I HAVE GUNS, IN MY BUTT?!" },
];

import { test } from "./test.js";
test(capitalize, cases);
