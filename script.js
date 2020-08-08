// 8.8.20 My keydown events aren't working except the alert :(
    // Why do my buttons lose their icon upon pressing?



// Declare variables globally
let playerSelection;
let computerSelection;
var result = playRound();
const displayResult = document.getElementById('results');
const computerChoice = document.getElementById('computerChoice');
const playerChoice = document.getElementById('playerChoice')
const playerChoices = document.querySelectorAll('.choices');

// get a random computer choice
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
playerChoices.forEach(playerChoice => playerChoice.addEventListener('click', (e) => {
    playerSelection = e.target.id;
    computerPlay();
    playRound();
    playerChoice.innerHTML = playerSelection;
    // computerChoice.innerHTML = computerSelection;
    displayResult.innerHTML = result;
}))

// Get results
function playRound() {
    if (playerSelection === computerSelection) {
        return result = 'You chose ' + playerSelection + '. Computer chose ' + computerSelection + '. It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return result = 'You chose ' + playerSelection + '. Computer chose ' + computerSelection + '. You win!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return result = 'You chose ' + playerSelection + '. Computer chose ' + computerSelection + '. Computer wins!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return result = 'You chose ' + playerSelection + '. Computer chose ' + computerSelection + '. You win!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return result = 'You chose ' + playerSelection + '. Computer chose ' + computerSelection + '. Computer wins!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return result = 'You chose ' + playerSelection + '. Computer chose ' + computerSelection + '. You win!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return result = 'You chose ' + playerSelection + '. Computer chose ' + computerSelection + '. Computer wins!';
    }
}

// Add keydown events

// // Keydown Events
window.addEventListener('keydown', event => {
    if (event.key == 'r') {
        playerSelection === 'rock';
        // playRound();
    } else if (event.key == 'p') {
        playerSelection === 'paper';
    } else if (event.key == 's') {
        playerSelection === 'scissors';
    } else {
        alert('Please choose rock, paper, or scissors.')
    }
})




// // Making new functions that take in specific choices for each button
// // function playRoundRock(playerSelection, computerSelection) {
// //     computerSelection = computerPlay();
// //     playerSelection == 'rock';
// //     if (playerSelection === computerSelection) {
// //         return resultRock = 'You chose ' + playerSelection + '. Computer chose  ' + computerSelection + '. It\'s a tie!';
// //     };
    
// //     console.log(playRoundRock()); // Change this to innerHTML display
// //     document.getElementById('resultsPara').textContent = resultRock;
// // }
// function playRoundRock(playerSelection, computerSelection) {
//     computerSelection = computerPlay();
//     if (computerSelection === playerSelection) {
//         return resultRock = 'You chose ' + playerSelection + '. Computer chose  ' + computerSelection + 'It\'s a tie!';
//     } else if (computerSelection == 'scissors') {
//         return resultRock = 'You chose rock. Computer chose ' + computerSelection + '. You win!';
//     } else if (computerSelection == 'paper') {
//         return resultRock = 'You chose rock. Computer chose ' + computerSelection + '. Computer wins!';
//     };
    
//     console.log(playRoundRock()); // Change this to innerHTML display
//     document.getElementById('resultsPara').textContent = resultRock;
// }

// function playRoundPaper(playerSelection, computerSelection) {
//     computerSelection = computerPlay();
//         if (playerSelection === computerSelection) {
//             return 'You chose paper. ' + 'Computer chose paper. ' + 'It\'s a tie!';
//         } else if (computerSelection == 'rock') {
//             return 'You chose paper. ' + 'Computer chose ' + computerSelection + '. You win!';
//         } else if (computerSelection == 'scissors') {
//             return 'You chose paper. ' + 'Computer chose ' + computerSelection + '. Computer wins!';
//         }
//     console.log(playRoundPaper());
// }

// function playRoundScissors(playerSelection, computerSelection) {
//     computerSelection = computerPlay();
//       // for (i = 0; i < 1; i++) {
//         if (playerSelection === computerSelection) {
//             return 'You chose scissors. ' + 'Computer chose ' + computerSelection + '. It\'s a tie!';
//         } else if (computerSelection == 'paper') {
//             return 'You chose scissors. ' + 'Computer chose ' + computerSelection + '. You win!';
//         } else if (computerSelection == 'rock') {
//             return 'You chose scissors. ' + 'Computer chose ' + computerSelection + '. Computer wins!';
//         }
//     console.log(playRoundScissors());
// // }
// }



// // I really wanted below to work. Oh well. I'm leaving it in for when I learn more JS and can figure it out.
// // function playerInput() {
// //     //I need to get rid of .toLowerCase() below if I want null to register.
// //     let playerInput = window.prompt('What\'s your choice?').toLowerCase();
// //     if (playerInput == '' || playerInput == null) {
// //         return 'Please enter rock, paper, or scissors.';
// //     } else if (playerInput == 'rock' || playerInput == 'paper' 
// //         || playerInput == 'scissors') {
// //         return 'You chose ' + playerInput + '.';
// //     } else {
// //         return 'You must choose rock, paper, or scissors.'
// //     }
// // }

// function game(playerSelection, computerPlay) {
//     const computerSelection = computerPlay();
//     playRound(playerSelection, computerSelection)
//     console.log(playRound(playerSelection, computerSelection));
//     // for (i = 0; i < 5; i++) {
//     //     let playerSelection = window.prompt('Rock, paper, or scissors?');
//     //     const computerSelection = computerPlay();
//     //     playRound(playerSelection, computerSelection)
//     //     console.log(playRound(playerSelection, computerSelection));
//     // }
// }

// // game()

// // Event listeners for buttons

// // Keydown Events
// window.addEventListener('keydown', event => {
//     if (event.key == 'r') {
//         playRoundRock();
//     } else if (event.key == 'p') {
//         playRoundPaper();
//     } else if (event.key == 's') {
//         playRoundScissors();
//     } else {
//         alert('Please choose rock, paper, or scissors.')
//     }
// })

// //   document.getElementById("paper").addEventListener("click", game); //DOES NOT WORK!
//   document.getElementById("scissors").addEventListener("click", playRoundScissors); //WORKS!
//   document.getElementById("paper").addEventListener("click", playRoundPaper); //WORKS!
//   document.getElementById("rock").addEventListener("click", playRoundRock); //WORKS!
// // document.getElementById("rock").addEventListener("click", ()=>{playRound('rock', computerPlay())}); //testing DOES NOT WORK
