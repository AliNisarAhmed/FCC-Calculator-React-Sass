import makeExpression from '../../src/components/helperFunctions/makeExpression';

describe('makes String expressions for displaying on Screen', () => {

  test('should make String expression without decimal point', () => {
    let arr = [1, "+", 2];
    let result = makeExpression(arr);
    expect(result).toBe('1 + 2');
  });

  test('should make String expression with decimal at the end', () => {
    let arr = [1, "+", "2."];
    let result = makeExpression(arr);
    expect(result).toBe('1 + 2.');
  });

});