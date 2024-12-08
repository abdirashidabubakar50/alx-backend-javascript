const assert = require("assert");
const calculateNumber = require("./1-calcul");


describe('calculateNumber', () => {
    it('should return 6 when the type = SUM and inputs are 1.4 and 4.5', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6)
    })

    it('should return -4 when the type is SUBTRACT and inputs are 1.4 and 4.5', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
    })
    
    it('should return 3 when the type is DIVIDE and inputs are 6 and 2', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 6, 2), 3)
    })
    
    it('should should return "Error" when the type is DIVIDE and inputs are 5 and 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 5, 0), 'Error');
    })
});