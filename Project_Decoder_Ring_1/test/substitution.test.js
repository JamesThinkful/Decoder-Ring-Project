const substitution = require("../src/substitution.js");
const expect = require("chai").expect;

describe("substitution", () => {
  //happy path
  it("should decode or encode a message with a substitution cipher", () => {
    const expected = "zyx";
    const actual = substitution("abc", "zyxwvutsrqponmlkjihgfedcba");
    expect(actual).to.eql(expected);
  });

  it("returns false if given alphabet is anything but 26 characters", () => {
    const lessThanTwentySix = substitution("abc", "zxy");
    expect(lessThanTwentySix).to.be.false;
  });
  it("returns false if there are any duplicate characters in the given alphabet", () => {
    const dupeChars = substitution("abc", "aacdefghijklmnopqrstuvwxyz");
    expect(dupeChars).to.be.false;
  });
  it("should maintain spaces before and after encoding and decoding", () => {
    const expected = "zyx zyx";
    const actual = substitution("abc abc", "zyxwvutsrqponmlkjihgfedcba");
    expect(actual).to.eql(expected);
  });
  it("should ignore capital letters", () => {
    const expected = "zyx";
    const actual = substitution("abc", "zyxwvutsrqponmlkjihgfedcba");
    expect(actual).to.eql(expected);
  });
});
