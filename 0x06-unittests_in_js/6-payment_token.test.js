const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', () => {
    it('should return a resolved promise with the correct data when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((response) => {
                expect(response).to.be.an('object');
                expect(response).to.have.property('data', 'Successful response from the API');
                done();
            })
            .catch((err) => done(err));
    });

    it('should return undefined when success is false', () => {
        const result = getPaymentTokenFromAPI(false);
        expect(result).to.be.undefined;
    });
});