// write function getComputerChoice
// getComputerChoice return random String("Rock"or "Paper " or "Scissors")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.random();
  let randomChoice;
  if (randomNumber >= 0.66) {
    randomChoice = "rock";
  } else if (randomNumber >= 0.33) {
    randomChoice = "paper";
  } else {
    randomChoice = "scissors";
  }
  console.log(randomChoice);
  return randomChoice;
}

function getHumanChoice() {
  let randomChoice = prompt("What will you play?");
  return randomChoice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log("Its a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);
