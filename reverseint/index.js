// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // First Solution
  const num = n
    .toString()
    .split("")
    .reverse()
    .join("");
  // if (Math.sign(n) === -1) {
  //   return parseInt(num) * -1;
  // } else {
  //   return parseInt(num);
  // }
  // ---------------------

  // Cleaner solution => Instead of the whole if/else statement just multiply the return value by Math.sign
  return parseInt(num) * Math.sign(n);
}

module.exports = reverseInt;
