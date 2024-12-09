const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe("sendPaymentRequestToApi", () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should log "The total is: 120" and only call console.log once when called with 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);

        sinon.assert.calledOnce(consoleSpy)
        sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');
    });

    it('should log "The toal is: 20" and only call console.log once when called with 10 and 10', () => {
        sendPaymentRequestToApi(10, 10)

        sinon.assert.calledOnce(consoleSpy);
        sinon.assert.calledWithExactly(consoleSpy, 'The total is: 20');
    });
});