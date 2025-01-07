const { expect } = require('chai')
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payments')

describe('sendPaymentRequestToApi', () => {

    it('should validate usage of Utils.calculateNumber', () => {
        const spy = sinon.spy(Utils, "calculateNumber");

        sendPaymentRequestToApi(100, 20);

        expect(spy.calledOnceWithExactly("SUM", 100, 20)).to.be
          .true;

        spy.restore();
    });
});

