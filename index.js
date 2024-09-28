/*function getComputerChoice() {
    const choiceObj = "rock paper scissors";
    const choiceArray = choiceObj.split(" ");

    const randomChoices = Math.floor(Math.random() * choiceArray.length);
    return choiceArray[randomChoices];
} */

/* function getHumanChoice() {
    const choices = ['rock', 'paper', 'scissors']
    let userInput = "";

    while(true) {
        userInput = prompt("Enter choice('rock', 'paper', 'scissors'): ");

        if(choices.includes(userInput)){
            return userInput;
        } else {
            alert("Incorrect choice, please select another option.");
        }
    }
}*/

const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    
    if (randomChoice == 0) {
        return "rock";
    } else if (randomChoice == 1) {
        return "paper"
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choices = ['rock', 'paper', 'scissors']
    let userInput = "";

    while(!choices.includes(userInput)){
        userInput = prompt("Enter choice('rock', 'paper', 'scissors'): ");
        if(!choices.includes(userInput)) {
            alert("Incorrect choice, please try again");
        }
        return userInput;
    }
}
