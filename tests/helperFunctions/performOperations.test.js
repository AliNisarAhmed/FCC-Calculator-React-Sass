import performOperation from '../../src/components/helperFunctions/performOperations';

// let arr = [3, "+", 5, "x", 6, "-", 2, "/", 4];

test('should perform multiplication and divisions correctly, such that none is left at the end', () => {
  let arr = [3, "+", 5, "x", 6, "/", 2, "/", 4];
  const result = performOperation(arr, 'multiplyAndDivide');
  expect(result).toEqual([3, "+", 3.75]);
});

test('should perform multiple multiplications correctly', () => {
  let arr = [3, "+", 5, "x", 6, "x", 2];
  const result = performOperation(arr, "multiplyAndDivide");
  expect(result).toEqual([3, "+", 60]);
});

test('should perform multiple subtractions correctly', () => {
  let arr = [3, "-", 5, "-", 6, "-", 2];
  let result = performOperation(arr, "addAndSubtract");
  expect(result).toEqual([-10]);
});


test('should produce correct result, after multiple operations on a single array', () => {
  let arr = [3, "+", 5, "x", 6, "-", 2, "/", 4];
  let result = performOperation(arr, "multiplyAndDivide");
  expect(result).toEqual([3, "+", 30, "-", 0.5]);
  result = performOperation(result, "multiplyAndDivide");
  expect(result).toEqual([3, "+", 30, "-", 0.5]);
  result = performOperation(result, "addAndSubtract");
  expect(result).toEqual([32.5]);
  result = performOperation(result, "addAndSubtract");

  expect(result).toEqual([32.5]);
});