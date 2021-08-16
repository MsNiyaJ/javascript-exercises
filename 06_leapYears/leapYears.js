const leapYears = function(year) {
    if(divisibleByFour(year) && !divisibleByOneHundred(year))
        return true;
    if(divisibleByFour(year) && divisibleByOneHundred(year) && divisibleByFourHundred(year))
        return true;
    return false;
};

function divisibleByFour(year){
    if(year % 4 == 0) return true;
    return false;
}

function divisibleByOneHundred(year){
    if(year % 100 == 0) return true;
    return false;
}

function divisibleByFourHundred(year){
    if(year % 400 == 0) return true;
    return false;
}

module.exports = leapYears;
