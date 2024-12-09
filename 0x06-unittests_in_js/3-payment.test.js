const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payments')

describe('sendPaymentRequestToApi', () => {

    it('should validate usage of Utils.calculateNumber', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        const consoleLogSpy = sinon.spy(console, "log");

        // call the function to test
        sendPaymentRequestToApi(100, 20);

        // Validate the calculateNumber was called once
        // sinon.assert.calledOnceWithExactly(calculateNumberSpy);
        sinon.assert.calledOnceWithExactly(calculateNumberSpy, 'SUM', 100, 20);

        const expectedResult = Utils.calculateNumber("SUM", 100, 20);

        sinon.assert.calledWithExactly(
          consoleLogSpy,
          `The total is: ${expectedResult}`
        );

        calculateNumberSpy.restore();
        consoleLogSpy.restore();

    });
});