// Galactic License Plate
// Instruction: A license plate must be exactly 8 characters. We are a machine 
// that makes sure license plate numbers are the right length
// Add "*" if it's too short, or return as-is.

function formatPlate(code) {
  throw new Error("The function formatPlate hasn't been implemented yet.");
}

const cases = [
  {input: ["XZ42"], expected: "XZ42****"},
  {input: ["ABCDEFGH"], expected: "ABCDEFGH"},
  {input: ["1234567"], expected: "1234567*"},
  {input: ["THAGOATTT"], expected: "THAGOATT"}
];

import { test } from "./test.js";
test(formatPlate, cases);
