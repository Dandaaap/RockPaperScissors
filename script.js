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
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
}

function playGame() {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  if (humanScore > computerScore) {
    console.log("You are the total winner!");
  } else if (humanScore < computerScore) {
    console.log("Computer is the total winner!");
  } else {
    console.log("Nobody is the total winner!");
  }
}

playGame();
