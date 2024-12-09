const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payments')

describe('sendPaymentRequestToApi', () => {

    it('should validate usage of Utils.calculateNumber', () => {
        const calculateNumberSpy = sinon.spy(Utils, "calculateNumber");

        sendPaymentRequestToApi(100, 20);

        sinon.assert.calledOnceWithExactly(calculateNumberSpy, "SUM", 100, 20);

        calculateNumberSpy.restore();

    });
});