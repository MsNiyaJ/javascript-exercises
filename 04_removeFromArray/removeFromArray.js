const removeFromArray = function() {
    let args = Array.from(arguments); //Creates an array out of given arguments
    let numOfArgs = args.length;
    
    let arr = arguments[0];         // The first argument is the given array
        
    for(let i = 0; i < numOfArgs; i++){
        if(i === 0)
            continue;
        
        let valueToBeRemove = args[i];
        let index = arr.indexOf(valueToBeRemove); //index of the value to be removed, will return -1 if value isn't in the array
        
        if(index != -1)
            arr.splice(index, 1);   //Removes the element at that index

        //ignore the argument if the value doesn't exist in the array.
    }
    return arr;
};

module.exports = removeFromArray;
