// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  //Creates a new array to store the splitted result
  const chunked = [];

  //Loop through the elements of the array
  for (let element of array) {
    //Defines the last spot in the new chunked array
    const last = chunked[chunked.length - 1];

    //Checks wheter the chunked array exists and push a new chunk, or if its full and push a new block
    if (!last || last.length === size) {
      chunked.push([element]);
      //If there is space left in the block, push element
    } else {
      last.push(element);
    }
  }
  return chunked;

  // ----------------------------------------------------
  // ALTERNATIVE WAY WITH SLICE

  // const chunked = [];
  // let index = 0;

  // while (index < array.lenght) {
  //   chunked.push(array.slice(index, index + size));
  //   index += size;
  // }
  // return chunked
}

module.exports = chunk;
