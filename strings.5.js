// Sneaky Slicer
// Instruction: We've embedded secret messages inside our strings. Remove the
// first 2 characters and the last 2 to see the secret.

function sneaky(word) {
  throw new Error("The function sneaky hasn't been implemented yet.");
}

const cases = [
  {input: "xxDragonzrulexx", expected: "Dragonzrule"},
  {input: "asrejoicealwaysay", expected: "rejoicealways"},
  {input: "he❤️rt", expected: "❤️"}
];

import { test } from "./test.js";
test(sneaky, cases);
