function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let userInput = "";

    while (!choices.includes(userInput)) {
        userInput = prompt("Enter choice ('rock', 'paper', 'scissors'): ");
        if (!choices.includes(userInput)) {
            alert("Incorrect choice, please try again.");
        }
    }
    return userInput;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice + ".");
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
               (humanChoice === "paper" && computerChoice === "rock") ||
               (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("You lose this round.");
        computerScore++;
    }

    console.log(`Current Score: Human - ${humanScore}, Computer - ${computerScore}`);
}

function playGame() {
    while (humanScore < 3 && computerScore < 3) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        
        if (humanScore === 3) {
            console.log("Congrats, you win the game!");
            break;
        } else if (computerScore === 3) {
            console.log("Computer wins the game.");
            break;
        }
    }
}

playGame();
