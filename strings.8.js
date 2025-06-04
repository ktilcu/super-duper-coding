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

