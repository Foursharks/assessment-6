// Create an array of shuffled values, using a version of the
// [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).

const copyArray = (source, array) => {
  //unsure where source or array are coming from
  let index = -1;
  const length = source.length;
//will return whichever one is true?
  array || (array = new Array(length));
  while (++index < length) {
    //copy the source into a new array at index, while index is less that the source array's length, which in this case is 10
    array[index] = source[index];
  }
  return array;
};

module.exports = (array) => {
  const length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  let index = -1;
  const lastIndex = length - 1;
  const result = copyArray(array);
  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
    const value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  //result is an array that has been shuffled - can see it in the network tab
  return result;
  
};