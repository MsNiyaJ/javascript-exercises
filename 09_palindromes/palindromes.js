const reverseString = require("../03_reverseString/reverseString");

const palindromes = function (str) {
    str = removePunctionationAndWhitespace(str).toLowerCase();

    let reversedString = reverseString(str); //Reverse the given string    
    if(reversedString === str) return true;
    return false;
};

//Use regex to remove punctuation and whitespace
function removePunctionationAndWhitespace(str){
    var punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    var finalString = punctuationless.replace(/\s/g, '');
    return finalString;
}

module.exports = palindromes;
