const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payments')

describe('sendPaymentRequestToApi', () => {

    afterEach(() => {
        sinon.restore();
    });

    it('should validate usage of Utils.calculateNumber', () => {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        // call the function to test
        sendPaymentRequestToApi(100, 20);

        // Validate the calculateNumber was called once
        expect(calculateNumberSpy.calledOnce).to.be.true;

        // validate it was called with correct arguemtns
        expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    });
    it('should fail if Utils.calculateNumber is not used', () => {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber')
        
        sendPaymentRequestToApi(100, 20);

        if (!calculateNumberStub.called) {
            throw new Error('sendPaymentRequestApi did not use Utils.calculateNumber');
        }


        expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    });
});