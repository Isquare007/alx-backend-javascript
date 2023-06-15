const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
	let calculateNumberStub;
	let consoleLogSpy;

	beforeEach(() => {
		calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
		consoleLogSpy = sinon.spy(console, 'log');
	});

	afterEach(() => {
		calculateNumberStub.restore();
		consoleLogSpy.restore();
	});

	it('should log the correct total for payment request (100, 20)', () => {
		calculateNumberStub.returns(120);
		sendPaymentRequestToApi(100, 20);
		expect(consoleLogSpy.calledOnceWith('The total is: 120')).to.be.true;
	});

	it('should log the correct total for payment request (10, 10)', () => {
		calculateNumberStub.returns(20);
		sendPaymentRequestToApi(10, 10);
		expect(consoleLogSpy.calledOnceWith('The total is: 20')).to.be.true;
	});
});
