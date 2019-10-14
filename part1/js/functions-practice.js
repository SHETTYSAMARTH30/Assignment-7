/*eslint-env browser */
//STEP 1
function halfNumber(num) {
    "use strict";
    var n = parseFloat(num / 2);
    return n;
}

//STEP 2
function squareNumber(num1) {
    "use strict";
    var n = parseFloat(num1 * num1);
    return n;
}


//STEP 3
function percentOf(num2, num3) {
    "use strict";
    var n = parseFloat((num2 / num3) * 100);
    return n;
}


//STEP 4
function findModulus(num4, num5) {
    "use strict";
    var n = parseFloat(num5 % num4);
    return n;
}


//STEP 5

function sumOfNumbers(str1) {
	"use strict";
	var i, totalSum;
	totalSum = 0;
	str1 = str1.split(",");
	for (i = 0; i < str1.length; i += 1) {
		if (isNaN(parseInt(str1[i], 10))) {
			return false;
		} else {
			totalSum += parseInt(str1[i], 10);
		}
	}
	return totalSum;
}

// prompting for inputs Part 1 to 4
// Step 5 extension
while (true) {
	var inp1 = window.prompt("Enter a list of numbers separated by ',' ");
	var result = sumOfNumbers(inp1);
	if (result === false) {
		window.alert("Not valid entries ! Please, enter a list of numbers separated by ',' ");
	} else {
		break;
	}
}

window.console.log("Half of 5 is " + halfNumber(5) + ".");

window.console.log("The result of squaring the number 3 is " + squareNumber(3) + ".");

window.console.log("2 is " + percentOf(2, 4) + "% of 4.");

window.console.log(findModulus(4, 10) + " is the modulus of 4 and 10.");

window.console.log("The sum of all the numbers separeted by ',' is: " + result);










