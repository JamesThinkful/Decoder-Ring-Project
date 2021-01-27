const polybius = require("../src/polybius.js");
const expect = require("chai").expect;

describe("polybius", () => {
  //happy path
  it("should encode and decode using a polybius cipher", () => {
    const expected = "agn";
    const actual = polybius("112233", false);

    expect(actual).to.eql(expected);
  });

  //Translate "42" to "i/j" and "i/j" to "42"
  it("should translate '42' to i/j", () => {
    const fortyTwoToIAndJ = "i/j";
    const fortyTwoactual = polybius("42", false);
    const IandJToFortyTwo = "254233";
    const IandJActual = polybius("wi/jn", true);
    expect(fortyTwoactual).to.eql(fortyTwoToIAndJ);
    expect(IandJActual).to.eql(IandJToFortyTwo);
  });

  //ignores capital letters
  it("should ignore capital letters", () => {
    const expected = "112131";
    const actual = polybius("ABC");
    expect(actual).to.eql(expected);
  });

  //maintains spaces
  it("should maintain spaces", () => {
    const expected = "11 22 33";
    const actual = polybius("a g n");
  });
  //checks if odd number of characters when decoding
  it("should have an even number of characters when decoding", () => {
    expect(polybius("12133", false)).to.be.false;
  });
});
