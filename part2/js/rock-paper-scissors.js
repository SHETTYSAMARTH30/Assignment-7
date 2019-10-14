/*eslint-env browser */

function playGame(choice, compChoice) {
    "use strict";
    if ((choice === "rock") && (compChoice === 'scissor')) {
        return "User";
    }
    if ((compChoice === "rock") && (choice === 'scissor')) {
        return "Computer";
    }
    if (choice === "scissor" && compChoice === "paper") {
        return "User";
    }

    if (compChoice === "scissor" && choice === "paper") {
        return "Computer";
    }
    if (compChoice === "paper" && choice === "rock") {
        return "Computer";
    }
    if (choice === "paper" && compChoice === "rock") {
        return "User";
    }
}

function rockPaperScissor() {
    "use strict";
    
    var compChoice, choice, winner, options = ['rock', 'paper', 'scissor'];
    
    do {
            
        choice = window.prompt("Choose either rock, paper or scissor?").toLowerCase().trim();
        compChoice = options[Math.floor((Math.random()) * 3)];
           
        window.console.log("Computer's choice:" + compChoice);
        window.console.log("User's choice:" + choice);
            
    } while ((choice === compChoice) || (!options.includes(choice)));
    
    winner = playGame(choice, compChoice);
    window.alert("Winner : " + winner);
}



rockPaperScissor();