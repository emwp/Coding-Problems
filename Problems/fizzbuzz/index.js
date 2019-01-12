// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  // Start i at 1 as per the instructions
  for (let i = 1; i<=n; i++ ) {
    // Check if i is a multiple of 3 AND 5, using the remainder operator %
    // In this case print fizzbuzz
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
      // Check if its a mulple of 3, in this case print fizz
    } else if(i % 3 === 0)  {
      console.log('fizz');
      // Check if its a multiple of 5, in this case print buzz
    } else if(i % 5 === 0) {
      console.log('buzz');
      // If neither conditions above are met, print the number i
    } else
      console.log(i);
  }
}


module.exports = fizzBuzz;
