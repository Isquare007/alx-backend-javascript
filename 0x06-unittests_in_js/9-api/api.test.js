const request = require('request');
const { expect } = require('chai');

describe('Integration Testing', () => {
  describe('GET /', () => {
    it('Code: 200 | Body: welcome to the payment system', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
  describe('GET /cart/12', () => {
    it('Code: 200 | Body: Payment methods for cart :12', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/12',
        method: 'GET',
      };

      request(options, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart :12');
        done();
      });
    });
  });
});