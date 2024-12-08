import { expect } from 'chai';
import calculateNumber from "./2-calcul_chai.js";

describe("calculateNumber", () => {
  it("should return 6 when the type = SUM and inputs are 1.4 and 4.5", () => {
   expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
  });

  it("should return -4 when the type is SUBTRACT and inputs are 1.4 and 4.5", () => {
   expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
  });

  it("should return 3 when the type is DIVIDE and inputs are 6 and 2", () => {
   expect(calculateNumber("DIVIDE", 6, 2)).to.equal(3);
  });

  it('should should return "Error" when the type is DIVIDE and inputs are 5 and 0', () => {
   expect(calculateNumber("DIVIDE", 5, 0)).to.equal('Error');
  });
});
