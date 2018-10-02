import appendDecimal from '../../src/components/helperFunctions/appendDecimal';

test('appends decimal to the last element of the array, and converts it to string', () => {
  let arr = [1, "+", 2];
  let result = appendDecimal(arr);
  expect(result).toEqual([1, "+", "2."]);
});