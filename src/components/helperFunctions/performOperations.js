export default (arr, operator) => {  // let arr = [1, "+", 4, "/", 2];  (answer should be [1, "+", 2])

  let temp = arr.slice();

  if (operator === "multiplyAndDivide") {
    while(temp.includes("/") || temp.includes("x")) {
      let i = temp.findIndex(elem => elem === "/" || elem === "x");
      let left = temp[i - 1];
      let right = temp[i + 1];
      let result = temp[i] === "/" ? left / right : left * right;
      temp.splice(i - 1, 3, result);
    }
  } else {
    while (temp.includes("+") || temp.includes("-")) {
      let i = temp.findIndex(elem => elem === "+" || elem === "-");
      let left = temp[i - 1];
      let right = temp[i + 1];
      let result = temp[i] === "+" ? left + right : left - right;
      temp.splice(i - 1, 3, result);
    }
  }

  return temp;
  // } else if (operator === "addAndSubtract") {
  //   return arr.reduce((acc, x, i) => {
  //     if (x === "+" || x === "-") {
  //       let left = acc[i - 1];
  //       let right = acc[i + 1];
  //       let result;
  //       result = x === "+" ? left + right : left - right;
  //       acc.splice(i - 1, 3, result);
  //     }
  //     return acc;
  //   }, temp);
  // }
  
  
}  
  
// function reducer(accum, i, op1, op2) {

// }






//   while(arr.includes(operator)) {
//     let result;
//     let index = arr.findIndex(elem => elem === operator);
//     let left = arr[index - 1];  // left operand
//     let right = arr[index + 1]; // right operand
//     switch (operator) {
//       case "/":
//         result = left / right;
//         break;
//       case "x":
//         result = left * right;
//         break;
//       case "+":
//         result = left + right;
//         break;
//       case "-":
//         result = left - right;
//         break;
//     }
//     arr.splice(index - 1, 3, result);
//   }
//   return arr;
// }
