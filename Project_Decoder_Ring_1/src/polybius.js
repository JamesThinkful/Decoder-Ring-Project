function polybius(input, encode = true){
const grid = [
        { char: 'a', pos: 11 }, { char: 'b', pos: 21 }, { char: 'c', pos: 31 }, { char: 'd', pos: 41 }, { char: 'e', pos: 51 },
        { char: 'f', pos: 12 }, { char: 'g', pos: 22 }, { char: 'h', pos: 32 }, { char: 'i', pos: 42 }, { char: 'j', pos: 42 }, { char: 'k', pos: 52 },
        { char: 'l', pos: 13 }, { char: 'm', pos: 23 }, { char: 'n', pos: 33 }, { char: 'o', pos: 43 }, { char: 'p', pos: 53 },
        { char: 'q', pos: 14 }, { char: 'r', pos: 24 }, { char: 's', pos: 34 }, { char: 't', pos: 44 }, { char: 'u', pos: 54 },
        { char: 'v', pos: 15 }, { char: 'w', pos: 25 }, { char: 'x', pos: 35 }, { char: 'y', pos: 45 }, { char: 'z', pos: 55 }, {char: ' ', pos: 56},
];
if(!input) return false;
if(encode){
    let inputArr = input.toLowerCase().split('')
    for(ltr in inputArr){
        if(inputArr[ltr] != " "){
        let cipherLetter = grid.find((letter)=> letter.char === inputArr[ltr]);
        inputArr[ltr] = cipherLetter.pos;
        }
    }
    return inputArr.join('')
    }
if(!encode){
    let inputPrep = input.replace(/[ ]+/g,56);
    if(inputPrep.length % 2 !== 0) return false;
    let inputArr = inputPrep.match(/\d{1,2}/g);
    for(pair in inputArr){
            let cipherLetter = grid.find((letter)=> letter.pos == inputArr[pair]);
            if(cipherLetter.char === `i` || cipherLetter.char === `j`){
            inputArr[pair] = `(i/j)`
            }
            else{
            inputArr[pair] = cipherLetter.char;
            }
    }
    return inputArr.join('')
    }
}

module.exports = polybius;
