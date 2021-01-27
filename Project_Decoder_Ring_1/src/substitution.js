let findDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) != index);

function substitution(input, alphabet, encode = true) {
  alphabet = alphabet.split("");

  if (findDuplicates(alphabet) != 0 || alphabet.length != 26) return false;

  const breakout = "abcdefghijklmnopqrstuvwxyz".split("");
  input = input.split("");
  let result = "";

  const encodeCipher = (input, alphabet, breakout) => {
    let charSwitch = input.forEach((letter) => {
      if (letter === " ") {
        result += letter;
        return result;
      }
      let currentIndex = alphabet.indexOf(letter);
      let newIndex = breakout[currentIndex];
      result += newIndex;
    });
    return result;
  };

  const decodeCipher = (input, alphabet, breakout) => {
    let charSwitch = input.forEach((letter) => {
      if (letter === " ") {
        result += letter;
        return result;
      }
      let currentIndex = breakout.indexOf(letter);
      let newIndex = alphabet[currentIndex];
      result += newIndex;
    });
    return result;
  };

  return encode
    ? encodeCipher(input, alphabet, breakout)
    : decodeCipher(input, alphabet, breakout);
}

module.exports = substitution;
