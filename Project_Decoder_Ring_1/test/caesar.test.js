const caesar = require("../src/caesar.js");
const expect = require("chai").expect;

describe("caesar", () => {
  //Happy path
  it("should decode or encode a message with a caesar cipher", () => {
    const expected = "def";
    const actual = caesar("abc", 3);
    expect(actual).to.eql(expected);
  });

  /*It returns false if the shift value is equal to 0, 
    less than -25, greater than 25, or not present.*/

  it("should return false if shift value is incorrect or not present", () => {
    const equalsZero = caesar("abc", 0);
    const lessThanNeg25 = caesar("abc", -36);
    const greaterThan25 = caesar("abc", 26);
    const notPresent = caesar("abc");

    expect(equalsZero).to.be.false;
    expect(lessThanNeg25).to.be.false;
    expect(greaterThan25).to.be.false;
    expect(notPresent).to.be.false;
  });

  // It should ignore capital letters

  it("should ignore capital letters", () => {
    const expected = "def";
    const actual = caesar("ABC", 3);
    expect(actual).to.eql(expected);
  });

  /* When encoding, it handles shifts that go past the end of the alphabet. 
     (For example, shifting “z” to the right by 3 should cause the “z” to wrap around 
     to the front of the alphabet, so that “z” becomes “c”)*/

  it("should handle shifts that go past the end of the alphabet", () => {
    const expected = "abc";
    const actual = caesar("xyz", 3);
    expect(actual).to.eql(expected);
  });

  it("should maintain spaces before and after encoding", () => {
    const expected = "def def";
    const actual = caesar("abc abc", 3);
    expect(expected).to.eql(actual);
  });
});
