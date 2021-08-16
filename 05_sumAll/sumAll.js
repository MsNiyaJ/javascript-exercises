const sumAll = function(num1, num2) {
    let start = num1;   //start of range
    let end = num2;     //end of range

    // Sets the smallest number to start and the largest to end
    if(num1 > num2){
        start = num2;
        end = num1;
    }
    // if there are negative numbers or the parameter is NaN return 'ERROR'
    if(num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number')
        return 'ERROR';
    
    let sum = 0;
    for(let i = start; i <= end; i++)
        sum += i;       //Adds every number between the range
    return sum;
};

module.exports = sumAll;
