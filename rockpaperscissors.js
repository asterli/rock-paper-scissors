//Functions

function getComputerChoice (){
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    //randomly generate # 1-3
    //switch case (num)
    //case 1: rock, etc...
    //returns rock, paper, or scissors
}

function gameRound(computerSelection, playerSelection){
    var playerSelectionLower = playerSelection.toLowerCase();
    if (computerSelection == 'rock' && playerSelectionLower == 'scissors'){
        console.log(`You Lose! The computer chose: ${computerSelection}, which beats ${playerSelection}. Try again!`);
    } else if (computerSelection == 'scissors' && playerSelectionLower == 'paper'){
        console.log(`You Lose! The computer chose: ${computerSelection}, which beats ${playerSelection}. Try again!`);
    } else if (computerSelection == 'paper' && playerSelectionLower == 'rock'){
        console.log(`You Lose! The computer chose: ${computerSelection}, which beats ${playerSelection}. Try again!`);
    } else if (computerSelection === playerSelectionLower){
        console.log(`You Tied! The computer chose: ${computerSelection}. You chose: ${playerSelection}. Try again.`);
    } else {
        console.log(`You Win! The computer chose: ${computerSelection}, which loses again ${playerSelection}.`);
    }
}