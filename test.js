export function test(fn, cases) {
  try {
    cases.forEach(({ input, expected }) => {
      const actual = fn(...input);

      if (actual === expected) {
        console.log(`✅ '${actual}' does indeed equal '${expected}'`);
      } else {
        console.log(`❌ Expected '${expected}', instead got '${actual}'`);
      }
    });
  } catch (e) {
    console.log(`⚠️ Uh oh, there was an error: ${e}`);
  }
}

