
// start by creating 2 variables, one for the string of values 
//you'll be inputting and one for the result
var calculatorInput = "";
var result = ""; 
var _num;

var add = function(a, b) {
	return(a + b);
}

var subtract = function(a, b) {
	return(a - b);
}

var multiply = function(a, b) {
	return(a * b);
}

var divide = function (a, b) {
	return(a / b);
} 


// create a variable called display for the element representing where you display the numbers entered
var display = document.getElementById('calculator-input');



// write a function that adds numbers you click to the display. 
//Make sure to handle empty strings for clear 
// and for starting a new calculation.
var _numbers = document.getElementsByClassName('number');

var addNum = function(num) {
	if (num == 0) {
		display.value += _numbers[9].innerHTML;
		calculatorInput = display.value;
	}
	else {
		display.value += _numbers[num-1].innerHTML;	
		calculatorInput = display.value;
	}
	
  

}

var _symbols = document.getElementsByClassName('symbol');

var addSymbol = function(symbol) {
	if (symbol == 5) {
		calculatorInput = display.value;
		calculate(calculatorInput);
		
	}
	else {
		display.value += _symbols[symbol-1].innerHTML;	
		calculatorInput = display.value;
	}

}

var calculate = function (calculatorInput) {
	inputArray = calculatorInput.split(/\+|-|\*|\//);
	var1 = parseInt(inputArray[0]);
	var2 = parseInt(inputArray[1]);
	operationsArray = calculatorInput.match(/\+|-|\*|\//);
	

	switch (operationsArray[0]) {
		case "+":
		result = add(var1, var2);
		break;
		case "-":
		result = subtract(var1, var2);
		break;
		case "*":
		result = multiply(var1, var2);
		break;
		case "/":
		result = divide(var1, var2);
		break;
		default:
		console.log("check yo input!");	
	}
	
	console.log('result is', result);
	display.value = result;
}

	
	
// HINT: use this regex (/\+|-|\*|\//) and string split() and match() to split the input string.
// The split() method is used to split a string into an array of substrings, and returns the new array. It can be called w/ separators.
// The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.


//clear display and input

var clearCalculator = function () {
	display.value = "";
	calculatorInput = "";
}