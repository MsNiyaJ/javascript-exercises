const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
  arr.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(num1, num2) {

};

const power = function(num1, num2) {
	
};

const factorial = function(num) {
	
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
