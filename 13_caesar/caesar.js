//TODO: PUT REPEATING CODE IN ONE FUNCTION

const caesar = function(str, shift) {
    let cipherText = '';
   
    // loop through each character in the string
    for(let i = 0; i < str.length; i++){
        let charCode = str.charCodeAt(i);   //get unicode value of each character
        
        if(charCode >= 65 && charCode <= 90){
            let shiftedCharCode = shiftCapitalLetters(charCode, shift);
            let shiftedChar = String.fromCharCode(shiftedCharCode); //convert the code back to a string
            cipherText += shiftedChar;  //append the charcater to the cipher text
        }
        else if(charCode >= 97 && charCode <= 122){
            let shiftedCharCode = shiftLowercaseLetters(charCode, shift);
            let shiftedChar = String.fromCharCode(shiftedCharCode); //char code to string
            cipherText += shiftedChar;  //append it to the cipher text
        }
        // if it is any character besides a letter, append it to cipherText
        else
            cipherText += str[i];
    }

    return cipherText;
};

// Wrap shifting between char codes 65 - 90
function shiftCapitalLetters(charCode, shift){
    if(shift < 0)
        shift += 26;
    charCode = 65 + (charCode+ shift - 65) % (90 - 64);
    return charCode;
}

// Wrap shifting between char codes  97 - 122
function shiftLowercaseLetters(charCode, shift){
    if(shift < 0)
        shift += 26;
    charCode = 97 + (charCode + shift - 97) % (122 - 96);
    return charCode;
}

module.exports = caesar;
