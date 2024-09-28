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
        userInput = prompt("Enter choice('rock', 'paper', 'scissors'): ").toLowerCase();
        if(!choices.includes(userInput)) {
            alert("Incorrect choice, please try again");
        }
        return userInput;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice) {
        console.log("It's a tie, Both chose " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + ".");
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
                console.log("You win");
                humanScore++;
            } else {
                console.log("You lose");
                computerScore++;
            }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
    let humanScore = 0;
    let computerChoice = 0;

    for (i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        console.log("Score: ");
        console.log("HumanScore: ", humanScore);
        console.log("ComputerScore: ", computerScore);
    }

    if(humanScore > computerScore) {
        console.log("Congrats you win!")
    } else if (humanScore < computerChoice) {
        console.log("Computer wins") 
    } else {
        console.log("It's a tie");
    }
}

playGame();
