const ftoc = function(fahrenheit) {
  let celcius = (5/9) * (fahrenheit - 32);// Convert farenheit to celcius

  if (celcius === 0)
    return Number(celcius.toFixed(0));    // Round celcius to nearest whole number
	return Number(celcius.toFixed(1));      // Round celsius to nearest tenth 
};

const ctof = function(celcius) {
  let fahrenheit = celcius * (9/5) + 32;  // Convert celcius to farenheit

  if (fahrenheit === 0)
    return Number(fahrenheit.toFixed(0)); // Round fahrenheit to nearest whole number
  return Number(fahrenheit.toFixed(1));   // Round fahrenheit to nearest tenth
};

module.exports = {
  ftoc,
  ctof
};
