const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payments')

describe('sendPaymentRequestToApi', () => {

    it('should validate usage of Utils.calculateNumber', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        // call the function to test
        sendPaymentRequestToApi(100, 20);

        // Validate the calculateNumber was called once
        sinon.assert.calledOnce(calculateNumberSpy);
        sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20)

        calculateNumberSpy.restore();

    });
});