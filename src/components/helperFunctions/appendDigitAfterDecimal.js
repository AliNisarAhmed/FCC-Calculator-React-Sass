export default (arr, value) => {   // arr = [1, "+", "2."]   // value = 2
  arr[arr.length - 1] = parseFloat(arr[arr.length - 1] + value.toString(), 10);
  return arr;
} 