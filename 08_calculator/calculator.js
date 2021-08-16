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

const multiply = function(arr) {
  let ans = 1;
  arr.forEach(element => {
    ans *= element;
  });
  return ans;
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
