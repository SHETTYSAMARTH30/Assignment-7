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

function sumAll() {
    "use strict";
    var sum = 0;
    var str = window.prompt("Enter the numbers").split(",");
    for (var i = 0; i < str.length; i += 1) {
        sum += Number(str[i]);
    }
    window.console.log("Sum of all the numbers " + sum);
}


window.console.log("Half of 5 is " + halfNumber(5) + ".");

window.console.log("The result of squaring the number 3 is " + squareNumber(3) + ".");

window.console.log("2 is " + percentOf(2, 4) + "% of 4.");

window.console.log(findModulus(4, 10) + " is the modulus of 4 and 10.");

sumAll();








