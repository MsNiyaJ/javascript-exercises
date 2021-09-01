const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

//Used reduce to calculate the the sum of the array, total = 0
const sum = function(arr) {
  return arr.reduce((total, current) => total + current, 0);
}

//Used reduce to multiply all values in the array, total = 1
const multiply = function(arr) {
  return arr.reduce((total, current) => total * current, 1);
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
	if(num === 0) return 1;
  let ans = 1;
  for(let i = num; i > 1; i--){
    ans *= i;
  }
  return ans;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
