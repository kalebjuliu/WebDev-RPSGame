const playerDiv = document.getElementById('player-score') //top
const computerScoreDiv = document.getElementById('computer-score') //top
const userScoreDiv = document.getElementById('user-score') //big

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')


rock.addEventListener('click', function rockClicked(){game('r')})
paper.addEventListener('click', function paperClicked(){game('p')})
scissors.addEventListener('click', function scissorsClicked(){game('s')})

let userScore = 0;
let computerScore = 0;

function lose(){
  computerScore++
  computerScoreDiv.innerHTML = computerScore
}
function win(){
  userScore++
  playerDiv.innerHTML = userScore
  userScoreDiv.innerHTML = userScore
  userScoreDiv.style.fontSize = '450px'
}
function draw(){
  console.log('draw')
}

function game(userChoice){

  const computerChoice = ['r', 'p', 's']
  const getRandNum= Math.floor(Math.random() * 3)
  const getComputerChoice = computerChoice[getRandNum]

  switch(userChoice + getComputerChoice){
  case 'ps':
  case 'rp':
  case 'sr':
    lose() // lose
    break
  case 'rs':
  case 'pr':
  case 'sp':
    win() //win
  break
  case 'rr':
  case 'pp':
  case 'ss':
    draw() //win
    break
  }
}
