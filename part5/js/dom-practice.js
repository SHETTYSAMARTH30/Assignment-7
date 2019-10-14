/*eslint-env browser*/

//STEP 1

function writeMessage() {
    "use strict";
    window.alert("I have been clicked");
}



//STEP 5

function init() {
    "use strict";
    
//STEP 2
    var button1 = window.document.getElementById("btn1");
    button1.onclick = function () {
    
        window.alert("I have been clicked");
    };

//STEP 3
    var button2 = window.document.getElementById("btn2");
    function displayMessage() {
    
        window.alert("I have been clicked");
    }
    button2.addEventListener("click", displayMessage);

//STEP 4
    var button3 = window.document.getElementById("btn3");
    button3.addEventListener("click", function () {
    
        window.alert("I have been clicked");
    });
}

window.addEventListener("load", init, false);

