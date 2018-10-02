import insertValueToExpr from '../../src/components/helperFunctions/insertValueToExpr';

test('should replace the last operator with the new operator', () => {
  let arr = [1, "+", 2, "-"];
  let result = insertValueToExpr(arr, "0", "+");
  expect(result).toEqual([1, "+", 2, "+"]);
});

test('should add the display to the expr, followed by the operator', () => {
  let arr = [1, "+"];
  let result = insertValueToExpr(arr, "2", "-");
  expect(result).toEqual([1, "+", 2, "-"]);
})
