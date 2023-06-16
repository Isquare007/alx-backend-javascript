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
  describe('GET /cart/a12', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/a12',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
  describe('GET /cart/hello', () => {
    it('Responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/hello',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});

describe('GET /available_payments JSON string', () => {
  it('Responds with 200 and correct JSON string', (done) => {
    const options = {
      url: 'http://localhost:7865/available_payments',
      method: 'GET',
    };

    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal(
        '{"payment_methods":{"credit_cards":true,"paypal":false}}'
      );
      done();
    });
  });

  describe('GET /available_payments JSON parsed', () => {
    it('Responds with 200 and correct JSON object when parsed', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        const bodyParsed = JSON.parse(body);

        const referenceBody = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };

        expect(bodyParsed).to.deep.equal(referenceBody);
        done();
      });
    });
  });
});