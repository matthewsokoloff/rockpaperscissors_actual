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
    if (userChoice === null) {
        alert("that is an invalid input. Please input rock, paper, or scissors.");
        return getUserChoice();
    }
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
    let humanChoice = getUserChoice();
    console.log("human choice: " + humanChoice);

    let computerChoice = getComputerChoice();
    console.log("computer choice: " + computerChoice);

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

// tests
console.assert(getRoundResult("ROCK", "ROCK") === "tie");
console.assert(getRoundResult("PAPER", "PAPER") === "tie");
console.assert(getRoundResult("SCISSORS", "SCISSORS") === "tie");

console.assert(getRoundResult("ROCK", "SCISSORS") === "human");
console.assert(getRoundResult("PAPER", "ROCK") === "human");
console.assert(getRoundResult("SCISSORS", "PAPER") === "human");

console.assert(getRoundResult("SCISSORS", "ROCK") === "computer");
console.assert(getRoundResult("ROCK", "PAPER") === "computer");
console.assert(getRoundResult("PAPER", "SCISSORS") === "computer");

// test computer choice
for (let i = 0; i < 100; i++) {
    let choice = getComputerChoice();

    console.assert(
        choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS",
        "getComputerChoice returned invalid choice: " + choice
    );
}

console.log("All tests passed!");

// start game
console.log("Welcome to Rock, Paper, Scissors!");
playGame();