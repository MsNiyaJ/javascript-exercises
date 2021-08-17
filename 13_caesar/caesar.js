//Takes a string to be encoded and a shift factor and then returns the encoded string
const caesar = function(str, shift) {
    let cipherText = '';        // Represents the final encryped text
   
    // loop through each character in the string
    for(let i = 0; i < str.length; i++){
        let charCode = str.charCodeAt(i);   //get unicode value of each character
        let encryptedChar;                  //represents the character after it has been encrypted

        if(charCode >= 65 && charCode <= 90){
            let shiftedCharCode = shiftString(65, charCode, shift);
            encryptedChar = String.fromCharCode(shiftedCharCode); //convert char code back to a string   
        }
        else if(charCode >= 97 && charCode <= 122){
            let shiftedCharCode = shiftString(97, charCode, shift);
            encryptedChar = String.fromCharCode(shiftedCharCode);
        }
        // if it is any character besides a letter, do not make any changes
        else
            encryptedChar = str[i];

        cipherText += encryptedChar;  //append the encrypted character to the cipher text
    }

    return cipherText;
};

// Shifts a string and returns a char code
function shiftString(start, charCode, shift){
    
    // If the shift is negative add 26 to make it positive. (26 letters in the alphabet)
    if(shift < 0)
        shift += 26;
    
    // Wraps around the alphabet at a given range to get the encrypted char code
    charCode = start + (charCode + shift - start) % (26);
    return charCode;     //returns the new char code
}

module.exports = caesar;
