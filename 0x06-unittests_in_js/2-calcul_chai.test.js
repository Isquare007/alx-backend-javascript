const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of rounded numbers', () => {
      expect(calculateNumber('SUM', 5.5, 3.3)).to.equal(9);
      expect(calculateNumber('SUM', 8.9, 2.1)).to.equal(11);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference of rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 10.8, 4.2)).to.equal(7);
      expect(calculateNumber('SUBTRACT', 6.1, 2.9)).to.equal(3);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division result of rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 15.6, 4.2)).to.equal(4);
      expect(calculateNumber('DIVIDE', 10.5, 0)).to.equal('Error');
    });
  });
});
