const { expect } = require('chai');
const sinon = require('sinon');
const utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payments')

describe('sendPaymentRequestToApi', () => {
    it('should validate usage of utils.calculateNumber', () => {
        const calculateNumberSpy = sinon.spy(utils, 'calculateNumber');

        // call the function to test
        sendPaymentRequestToApi(100, 20);

        // Validate the calculateNumber was called once
        expect(calculateNumberSpy.calledOnce).to.be.true;

        // validate it was called with correct arguemtns
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

        calculateNumberSpy.restore();
    });
});