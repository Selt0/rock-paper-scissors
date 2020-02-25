let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById('player-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.scoreboard');
const result_p = document.querySelector('.results > p')
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const action_p = document.getElementById('action-message')
const reset_btn = document.querySelector('button')
const choices_div = document.getElementById('choices');


rock_div.addEventListener('click', function() {
  game('rock')
})

paper_div.addEventListener('click', function() {
  game('paper')
})

scissors_div.addEventListener('click', function() {
  game('scissors')
})


//computer selects rock, paper, scissors
function computerPlay() {
  //pick random number 0 - 2
  let selection = Math.floor(Math.random() * 3);
  let choices = ['Rock', 'Paper', 'Scissors'];
  
  return choices[selection];
}

//capitalize first letter of player choice
const capitalize = (string) => { return string.charAt(0).toUpperCase() + string.slice(1) }

function game(playerChoice) {
  const playerChoice_div = document.getElementById(playerChoice);
  const computerChoice = computerPlay();

  switch (playerChoice + computerChoice) {
    case 'rockScissors':
    case 'paperRock':
    case 'scissorsPaper':
      // playerScore++;
      win();
      break;
    case 'scissorsRock':
    case 'rockPaper':
    case 'paperScissors':
      // computerScore++;
      lose();
      break;
    case 'rockRock':
    case 'paperPaper':
    case 'scissorsScissors':
      draw();
  }

    // player wins
  function win() {
    playerScore++;
    playerScore_span.innerHTML = playerScore; 
    result_p.innerHTML = `PLAYER WINS! ${capitalize(playerChoice)} beats ${computerChoice}.`;
    playerChoice_div.classList.add('bg-success');
    setTimeout(function() {
      playerChoice_div.classList.remove('bg-success')
    }, 300);
  }

  //player loses
  function lose() {
    computerScore++
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `COMPUTER WINS! ${computerChoice} beats ${capitalize(playerChoice)}.`;
    playerChoice_div.classList.add('bg-danger');
    setTimeout(function() {
      playerChoice_div.classList.remove('bg-danger')
    }, 300);
  }

  //draw
  function draw() {
    result_p.innerHTML = 'DRAW!'
    playerChoice_div.classList.add('bg-secondary');
    setTimeout(function() {
      playerChoice_div.classList.remove('bg-secondary')
    }, 300);
  }

  if (playerScore == 5 || computerScore == 5) {
    endGame();
  }

}

  //function to disable game and restart
  function endGame() {
    if (playerScore == 5) {
      action_p.innerHTML = 'Game Over. You Won! Play again?';
      action_p.classList.add('bg-success');
    } else {
      action_p.innerHTML = 'Game Over. You Lost! Play again?';
      action_p.classList.add('bg-danger');
    }

    //disable choices
    choices_div.classList.add('d-none');

    //display button reset
    reset_btn.classList.remove('d-none');
  }

  reset_btn.addEventListener('click', function() {
    //reset scores
    playerScore = 0;
    playerScore_span.innerHTML = playerScore;
    computerScore = 0;
    computerScore_span.innerHTML = computerScore;

    //bring back choices
    choices_div.classList.remove('d-none');

    //hide button
    reset_btn.classList.add('d-none');

    //reset display message
    action_p.innerHTML = 'Make your move!';
    action_p.classList.remove('bg-success');
    action_p.classList.remove('bg-danger');

    //reset result message
    result_p.innerHTML = 'Are you feeling lucky? First to 5 wins!'
  })
