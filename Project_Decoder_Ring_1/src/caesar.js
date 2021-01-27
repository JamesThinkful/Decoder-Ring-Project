function caesar(input, shift, encode = true) {
  if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
  if (encode === false) shift = shift * -1;

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  input = input.toLowerCase().split("");
  let result = "";

  let cipher = (input, shift, alphabet) => {
    let charSwitch = input.forEach((letter) => {
      if (letter === " ") {
        result += letter;
        return result;
      }
      let currentIndex = alphabet.indexOf(letter);
      let newIndex = currentIndex + shift;
      if (newIndex > 25) newIndex = newIndex - 26;
      if (newIndex < 0) newIndex = newIndex + 26;

      result += alphabet[newIndex];
    });
    return result;
  };

  return cipher(input, shift, alphabet);
}

module.exports = caesar;
