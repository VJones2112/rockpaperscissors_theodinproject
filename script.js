// 8.10.20 Think it's done!?
// Work on styling the results and resetting start text

// Declare variables
let playerSelection;
let computerSelection;
var result = playRound();
const displayResult = document.getElementById('results');
const computerChoice = document.getElementById('computerChoice');
const playerChoice = document.getElementById('playerChoice')
const playerChoices = document.querySelectorAll('.choices');
let playerScore = 0;
let computerScore = 0;
let playerWins = false;
let computerWins = false;
document.getElementById('displayScore').innerHTML = 'Computer Score: ' + computerScore  + '   Player Score: ' + playerScore;


// Get a random computer choice
function computerPlay() {
    let compChoice = [Math.floor(Math.random() * 3)];
    if (compChoice == 0) {
        return computerSelection = 'rock';
    } else if (compChoice == 1) {
        return computerSelection = 'paper';
    } else {
        return computerSelection = 'scissors';
    }
}


// Get playerChoice
playerChoices.forEach(element => element.addEventListener('click', (e) => {  //playerChoice => playerChoice.addEventListener('click', (e) => {
    playerSelection = element.id; // e.target.id referred to the FA icon!
    computerPlay();
    playRound();
    displayResult.innerHTML = result;
}))


// Get results
function playRound() {
    document.getElementById('displayWinner').innerHTML = ''
    if (playerSelection === computerSelection) {
        return result = 'You chose ' + playerSelection + '. Computer chose ' + computerSelection + '. It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerWins = true;
        computerWins = false;
        getScore();
        checkScore();
        return result = 'You chose ' + playerSelection + '. Computer chose ' + computerSelection + '. You win!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerWins = true;
        playerWins = false;
        getScore();
        checkScore();
        return result = 'You chose ' + playerSelection + '. Computer chose ' + computerSelection + '. Computer wins!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWins = true;
        computerWins = false;
        getScore();
        checkScore();
        return result = 'You chose ' + playerSelection + '. Computer chose ' + computerSelection + '. You win!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerWins = true;
        playerWins = false;
        getScore();
        checkScore();
        return result = 'You chose ' + playerSelection + '. Computer chose ' + computerSelection + '. Computer wins!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWins = true;
        computerWins = false;
        getScore();
        checkScore();
        return result = 'You chose ' + playerSelection + '. Computer chose ' + computerSelection + '. You win!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerWins = true;
        playerWins = false;
        getScore();
        checkScore();
        return result = 'You chose ' + playerSelection + '. Computer chose ' + computerSelection + '. Computer wins!';
    }
    getScore();
    checkScore();
}


// Display Running Score and Limit to 5 games
function getScore() {
    if (playerWins == true) {
        playerScore++;
    } else if (computerWins == true) {
        computerScore++;
    } else if (playerWins == false) {
        playerScore += 0;
    } else if (computerWins == false) {
        computerScore += 0;
    }
    displayScore.textContent = 'Computer Score: ' + computerScore  + '   Player Score: ' + playerScore;
}


function checkScore() {
    if (playerScore === 5) {
        document.getElementById('displayWinner').innerHTML = 'Congratulations- You won!'
        document.getElementById('displayWinner').style.color = '#283618';
        document.getElementById('displayWinner').style.font = 'bold 50px';
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore === 5) {
        document.getElementById('displayWinner').innerHTML = 'Sorry you lost. Game Over.'
        document.getElementById('displayWinner').style.color = '#BC6C25';
        document.getElementById('displayWinner').style.font = 'bold 50px';
        playerScore = 0;
        computerScore = 0;
    }
}


// Add keydown events
document.addEventListener('keydown', event => {
    if (event.key == 'r') {
        playerSelection == 'rock';
    } else if (event.key == 'p') {
        playerSelection == 'paper';
    } else if (event.key == 's') {
        playerSelection == 'scissors';
    } else {
        alert('Please choose rock, paper, or scissors.')
    }
})