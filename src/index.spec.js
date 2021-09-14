const { addNumbers } = require('.');

describe('Test Suite', () => {
  describe('addNumbers', () => {
    test('adding 2 and 2 results to 4', () => {
      const result = addNumbers(2, 2);
      expect(result).toEqual(4);
    });
  });

  describe('subtractNumbers', () => {

  });

  describe('makeAjaxCall', () => {
    // remember to mock `node-fetch` with `jest.mock`
    // an example can be found here: https://stackoverflow.com/questions/53484219/how-can-i-mock-fetch-function-in-node-js-by-jest
  });

  describe('generateId', () => {

  });
});
