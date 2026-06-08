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

const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let result = getRoundResult(humanChoice, computerChoice);

    if (result === "tie") {
        resultsDiv.textContent = "You chose " + humanChoice + ". The computer chose " + computerChoice + ". It's a tie.";
    }
    else if (result === "human") {
        humanScore++;
        resultsDiv.textContent = "You chose " + humanChoice + ". The computer chose " + computerChoice + ". You win this round.";
    }
    else {
        computerScore++;
        resultsDiv.textContent = "You chose " + humanChoice + ". The computer chose " + computerChoice + ". You lose this round.";
    }

    scoreDiv.textContent = "Current score: You " + humanScore + " - Computer " + computerScore;
}

rockButton.addEventListener("click", function () {
    playRound("ROCK");
});

paperButton.addEventListener("click", function () {
    playRound("PAPER");
});

scissorsButton.addEventListener("click", function () {
    playRound("SCISSORS");
});

scoreDiv.textContent = "Current score: You 0 - Computer 0";

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

for (let i = 0; i < 100; i++) {
    let choice = getComputerChoice();

    console.assert(
        choice === "ROCK" || choice === "PAPER" || choice === "SCISSORS",
        "getComputerChoice returned invalid choice: " + choice
    );
}

console.log("All tests passed!");