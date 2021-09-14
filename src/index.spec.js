const { addNumbers } = require('.');

describe('Test Suite', () => {
  describe('addNumbers', () => {
    test('adding 2 and 2 results to 4', () => {
      const result = addNumbers(2, 2);
      expect(result).toEqual(4);
    });
  });
});