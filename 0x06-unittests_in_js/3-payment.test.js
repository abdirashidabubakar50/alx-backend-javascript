const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payments')

describe('sendPaymentRequestToApi', () => {

    it('should validate usage of Utils.calculateNumber', () => {
        const Spy = sinon.spy(Utils, "calculateNumber");

        sendPaymentRequestToApi(100, 20);

        sinon.assert.calledOnce(Spy);
        sinon.assert.calledWith(Spy, 'SUM', 100, 20);

        Spy.restore();
    });
});