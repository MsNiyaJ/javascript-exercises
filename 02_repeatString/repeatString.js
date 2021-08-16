const repeatString = function(str, repeats) {
    if(repeats < 0)
        return 'ERROR';
    
    let repeatedStr = '';
    for(let i = 0; i < repeats; i++){
        repeatedStr += str;
    }
    return repeatedStr;
};

module.exports = repeatString;
