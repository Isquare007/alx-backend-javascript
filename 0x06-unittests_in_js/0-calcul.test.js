const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(2.4, 4.6), 7);
    assert.strictEqual(calculateNumber(2.1, 4.4), 6);
    assert.strictEqual(calculateNumber(5.8, 3.2), 9);
  });
})
