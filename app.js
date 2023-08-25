let win = 0;
let ties = 0;
let lose = 0;

while (true) {
  let playerChoice = prompt("Enter rock, scissors or papper or q");

  if (playerChoice === "q") {
    break;
  }

  if (
    playerChoice !== "rock" &&
    playerChoice !== "scissors" &&
    playerChoice !== "paper"
  ) {
    console.log("please enter valid choice");
    continue;
  }

  const choices = ["rock", "scissors", "paper"];
  const randomIndex = Math.round(Math.random() * 2);
  const computerChoice = choices[randomIndex];

  console.log(`the computer choose: ${computerChoice}`);
  if (computerChoice === playerChoice) {
    console.log("Draw");
    ties++;
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log("You won");
    win++;
    console.log(`${win}, ${ties}, ${lose}`)
  } else {
    console.log("You loss");
    lose++;
  }
}

