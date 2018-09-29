const makeExpression = (arr) => {
  console.log(arr);
  let expression = arr.join('');
  expression = expression.replace(/([x\/\+-])/g, " $1 ");
  return expression;
} 

export default makeExpression; 
