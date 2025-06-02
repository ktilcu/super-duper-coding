// Make a superhero name!
// Instructions: Combine a hero’s prefix and suffix into a full name.
function makeHeroName(prefix, suffix) {
  throw new Error('The function makeHero hasnt been implemented yet.')
}

const cases = [
  {input: ["Mega", "Thunder"], expected: "MegaThunder"},
  {input: ["Captain", "Code"], expected: "CaptainCode"},
  {input: ["", "Flash"], expected: "Flash"},
];

import { test } from "./test.js";
test(makeHeroName, cases);
