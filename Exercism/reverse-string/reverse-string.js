const reverseString = str => {
  let reversed = str
    .split('')
    .reverse()
    .join('');

  if (str === '' || str === undefined) {
    return '';
  } else {
    return reversed;
  }
};

console.log(reverseString('racecar'));
