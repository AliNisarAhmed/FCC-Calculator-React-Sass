export default (arr, display, value) => {

  // This function is meant to add the operator  to the expression array.

  // If the last element of the expression is an operator, then we must replace that operator with the new one


  let num = parseFloat(display, 10);

  if (display === "0") {
    return arr.slice(0, arr.length - 1).concat(value);
  } else {
    if (value) {
      return arr.concat([num, value]);
    } else {
      return arr.concat([num]);
    }
  }  
}