/* pseudocode for rock paper scissors
for the computer: generate a random int between 1 and 3
1 = rock, 2 = paper, 3 = scissors
then ask the user for input of rock or paper or scissors (ignore case)
and ensure their input is valid (if not, ask til they give valid input)
then compare computer choice v user choice
if they're the same, tie
rock beats scissors, scissors beats paper, paper beats rock
increment player or computer score upon a win
after 5 rounds, compare the scores and display the final score + results
*/

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "ROCK";
    }
    else if (computerChoice === 2) {
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

function getUserChoice() {
    let userChoice = prompt("Please enter rock, paper, or scissors:");
    userChoice = userChoice.toUpperCase();
    if (userChoice === "ROCK" || userChoice === "PAPER" || userChoice === "SCISSORS") {
        return userChoice;
    }
    else {
        alert("that is an invalid input. Please input rock, paper, or scissors.");
        return getUserChoice();
    }
}

function getRoundResult(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie";
    }

    if (
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "PAPER" && computerChoice === "ROCK") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER")
    ) {
        return "human";
    }

    return "computer";
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let result = getRoundResult(humanChoice, computerChoice);

    if (result === "tie") {
        console.log("it's a tie");
    }
    else if (result === "human") {
        console.log("you win this round");
        humanScore++;
    }
    else {
        console.log("you lose this round");
        computerScore++;
    }
    console.log("current score: you " + humanScore + " - computer " + computerScore);
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log("final score: you " + humanScore + " - computer " + computerScore);
    if (humanScore > computerScore) {
        console.log("congratulations! you win the game ... were you cheating?");
    }
    else if (humanScore === computerScore) {
        console.log("the game is a tie!");
    }
    else {
        console.log("sucker, you lose the game. better luck next time");
    }
}

console.log("Welcome to Rock, Paper, Scissors!");
playGame();