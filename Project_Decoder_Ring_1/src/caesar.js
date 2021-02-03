function caesar(input, shift, encode = true){
if(!shift || shift === 0 || shift > 25 || shift < -25) return false;
let inputArr = input.toLowerCase().split(``)

function isCharacterALetter(char) {
    return char.toLowerCase() != char.toUpperCase()
  }
    for(let ltr in inputArr){
        if(isCharacterALetter(inputArr[ltr])){
        let currentLetterCode = inputArr[ltr].charCodeAt(0)
        encode ? inputArr[ltr] = String.fromCharCode(currentLetterCode + shift) : inputArr[ltr] = String.fromCharCode(currentLetterCode - shift);
        if (inputArr[ltr].charCodeAt(0) > 122) inputArr[ltr] = String.fromCharCode(inputArr[ltr].charCodeAt(0) - 26);
        if (inputArr[ltr].charCodeAt(0) < 97) inputArr[ltr] = String.fromCharCode(inputArr[ltr].charCodeAt(0) + 26);
        }
    }
return inputArr.join('')
}

module.exports = caesar;
