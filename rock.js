let userScore = 0;
let computerScore = 0;
function game() {
  let playerChoice = playerSelection();
  let computerChoice = computerPlay();

  function playerSelection() {
    let userChoice = prompt("What is your move: 'rock', 'paper', or 'scissors'");
    return userChoice.toLowerCase();
  }
  
  function computerPlay() {
    //pick random number 0 - 2
    let selection = Math.floor(Math.random() * 3);

    let choices = ['Rock', 'Paper', 'Scissors'];
    
    return choices[selection];
  }

  function playRound(playerChoice, computerChoice) {
    let userWin = `USER WINS! ${playerChoice} beats ${computerChoice}.`;

    let computerWin = `COMPUTER WINS! ${computerChoice} beats ${playerChoice}.`;

    switch (playerChoice.toLowerCase() + computerChoice) {
      case 'rockScissors':
      case 'paperRock':
      case 'scissorsPaper':
        userScore++;
        return userWin;
        break;
      case 'scissorsRock':
      case 'rockPaper':
      case 'paperScissors':
        computerScore++;
        return computerWin;
        break;
      case 'rockRock':
      case 'paperPaper':
      case 'scissorsScissors':
        return 'DRAW!';
    }
  }

  for (let i = 0;i < 5; i++) {
    playerSelection();
    computerPlay();
    console.log(playRound(playerChoice, computerChoice));
  }
  
}

game();
if (userScore > computerScore) {
    console.log(`${userScore} to ${computerScore}. User Wins!`)
  } else if (userScore < computerScore) {
    console.log(`${userScore} to ${computerScore}. Computer Wins!`)
  } else {
    console.log(`${userScore} to ${computerScore}. It's a draw!`);
}