// 🕵️‍♂️ Story 6: SPUD Signal Recovery
// ================================
//
// Premise:
// Field Agent Parsnip has sent another scrambled message, but the intern
// (code name: Pickle) forgot how to decode it. We need reverse-engineer the
// encoding to build a decoding function. Look at the excerpt of the SPUD
// Secret Agent Handbook for instructions on how the messages are encoded.
//
// 🧩 S.P.U.D. Secret Message Encoding Process
// ============================================
// 1. All messages should start at 100 characters long. If they are too short, we add ! until it's long enough
// 2. We wrap our 100 character messages in angle brackets <>
// 3. We replace the letter 'a' with @
// 4. We replace the letter 'e' with 3
// 4. We replace the letter 'o' with /
// 6. We reverse the whole string
// 7. We prepend 6 random digits to the string
// 8. We replace spaces with _

// ✉️ Message: 
// '402057>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!3lbiss/p_s@_n//s_s@_n/itc@rtx3_d33n_i_,nw/lb_si_r3v/c_ym<'
function spudDecode(message) {
  throw new Error("We really need to know what the secret message is 🥸");
}































































































const cases = [
  {
    expected: ["bobby wagner"],
    input:
      "916177>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!r3ng@w_ybb/b<",
  },
  {
    expected: ["ay bethlehem"],
    input:
      "334181>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!m3h3lht3b_y@<",
  },
  {
    expected: "my cover is blown, i need extraction as soon as possible",
    input:
      "402057>!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!3lbiss/p_s@_n//s_s@_n/itc@rtx3_d33n_i_,nw/lb_si_r3v/c_ym<",
  },
];

function encode(message) {
  return `<${message.padEnd(100, "!")}>`
    .replaceAll("a", "@")
    .replaceAll("e", "3")
    .replaceAll("o", "/")
    .split("")
    .reverse()
    .join("")
    .padStart(108, String(Math.floor(Math.random() * 10000000)).slice(0, 7))
    .replaceAll(" ", "_");
}
