const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberStub;
    let consoleSpy;

    beforeEach(() => {
        calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);
        // Spy on console.log
        consoleSpy = sinon.spy(console, "log");
    });

    afterEach(() => {
        sinon.restore();
    })

    it('should stub Utils.caclulateNumber and verify its usage', () => {
        sendPaymentRequestToApi(100, 20);

        sinon.assert.calledOnce(calculateNumberStub);
        sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', 100, 20);

        sinon.assert.calledOnce(consoleSpy);
        sinon.assert.calledWithExactly(consoleSpy, 'The total is: 10');
    })
})