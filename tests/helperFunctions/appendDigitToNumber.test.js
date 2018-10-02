import appendDigitToNumber from '../../src/components/helperFunctions/appendDigitToNumber';

test('appends a digit to the last digit in the expression array', () => {
  let expr = [1, "+", 2];
  const result = appendDigitToNumber(expr, 2); 
  expect(result).toEqual([1, "+", 22]);
});