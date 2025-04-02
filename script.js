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
  return randomChoice;
}

console.log(getComputerChoice());

function getHumanChoice() {
  let randomChoice = prompt("What will you play?");
  return randomChoice;
}

console.log(getHumanChoice());
