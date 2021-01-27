function polybius(input, encode = true) {
  const alphabet = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i/j", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];

  if (encode === false) {
    if (input.split("").length % 2 != 0) return false;

    const result = input.split(" ").map(decodeWord).join(" ");
    function decodeWord(word) {
      const chars = word.split("").map((c) => parseInt(c) - 1);
      let output = "";
      for (i = 0; i < chars.length - 1; i += 2) {
        let row = chars[i];
        let col = chars[i + 1];
        output += alphabet[col][row];
      }
      return output;
    }

    return result;
  } else if (encode === true) {
    const cipher = input
      .toLowerCase()
      .split(" ")
      .map((word) =>
        word
          .split("")
          .map((c) => {
            for (let row = 0; row < alphabet.length; row++) {
              for (let col = 0; col < alphabet[row].length; col++) {
                if (c.includes("i")) return "42";
                if (alphabet[row][col] === c) {
                  return `${col + 1}${row + 1}`;
                }
              }
            }
          })
          .join("")
      )
      .join(" ");
    return cipher;
  }
}

module.exports = polybius;
