const appendDigitToNumber = (arr, value) => {
  arr[arr.length - 1] = parseInt(arr[arr.length - 1].toString() + value.toString(), 10);
  return arr;
}

// console.log("from append: ", appendDigitToNumber([1, "+", 2], 2));

export default appendDigitToNumber;