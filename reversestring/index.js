// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // let strArr = str.split('');
  // strArr.reverse();

  // return strArr.join('');

  // Cleaner way of doing it, chaining the methods.

  return str.split('').reverse().join('');

}

module.exports = reverse;
