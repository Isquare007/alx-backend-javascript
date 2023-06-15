const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 5.5, 3.3), 9);
      assert.strictEqual(calculateNumber('SUM', 8.9, 2.1), 11);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference of rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 10.8, 4.2), 7);
      assert.strictEqual(calculateNumber('SUBTRACT', 6.1, 2.9), 3);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division result of rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 15.6, 4.2), 4);
      assert.strictEqual(calculateNumber('DIVIDE', 10.5, 0), 'Error');
    });
  });
});
