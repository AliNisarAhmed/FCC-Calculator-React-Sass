export default (arr) => {
  arr[arr.length - 1] = parseInt(arr[arr.length - 1], 10);
  return arr;
}