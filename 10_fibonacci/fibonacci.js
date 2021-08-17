const fibonacci = function(num) {
    num = Number(num);
    
    let previous = 0;   // The previous number that was added to the sequence 
    let current = 1;    // The current number that was added to the sequence
    let sum = previous + current;   // The next number that will be added

    // Negative numbers aren't accepted
    if(num < 0)
        return 'OOPS';

    //Loops until given sequence number is reached
    for(let i = 0; i < num; i++){
        if(i === 0) continue;
        previous = current;
        current = sum;
        sum = previous + current;
    }
    return current;
};

module.exports = fibonacci;
