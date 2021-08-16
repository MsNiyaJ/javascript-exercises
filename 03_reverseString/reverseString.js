const reverseString = function(str) {
  let lastIndex = str.length - 1; //Last character in the string
  let reversedStr = '';

// Loops backwards through each character and appends it to a new string
  for(let i = lastIndex; i >= 0; i--){
    reversedStr += str.charAt(i);
  }
  return reversedStr;
};

module.exports = reverseString;
