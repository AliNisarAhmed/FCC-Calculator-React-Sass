export default (arr) => {   // [1, "+", 2]
  arr[arr.length - 1] = arr[arr.length - 1].toString() + ".";
  return arr;
} 