import appendDigitAfterDecimal from '../../src/components/helperFunctions/appendDigitAfterDecimal';

test('appnds number to after decimal to a "decimal" number, and converts it to float', () => {
  let arr = [1, "+", "2."];
  let result = appendDigitAfterDecimal(arr, 2);
  expect(result).toEqual([1, "+", 2.2]);
});