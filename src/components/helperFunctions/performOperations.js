export const performOperation = (arr, operator) => {  // let arr = [1, "+", 4, "/", 2];  (answer should be [1, "+", 2])
  while(arr.includes(operator)) {
    let result;
    let index = arr.findIndex(elem => elem === operator);
    let left = arr[index - 1];  // left operand
    let right = arr[index + 1]; // right operand
    switch (operator) {
      case "/":
        result = left / right;
        break;
      case "x":
        result = left * right;
        break;
      case "+":
        result = left + right;
        break;
      case "-":
        result = left - right;
        break;
    }
    arr.splice(index - 1, 3, result);
  }
  return arr;
}
