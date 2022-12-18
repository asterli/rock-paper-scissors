//Functions

function getComputerChoice (){
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    var randomNum = Math.floor(Math.random() * 3) + 1; //chooses a random number from 1-3
    switch (randomNum){
        case 1:
            return rock;
        case 2:
            return paper;
        case 3:
            return scissors;
        default:
            return null;
    }
}

function getPlayerChoice(){
    var choice = prompt("Rock, paper, scissors, shoot:");
    var lowercase = choice.toLowerCase(); //ensures that the user input does not need to be case-sensitive
    return lowercase;
}

function gameRound(computerSelection, playerSelection){
    if (computerSelection == 'rock' && playerSelection == 'scissors'){
        console.log(`You Lose! The computer chose: ${computerSelection}, which beats ${playerSelection}. Try again!`);
    } else if (computerSelection == 'scissors' && playerSelectionLower == 'paper'){
        console.log(`You Lose! The computer chose: ${computerSelection}, which beats ${playerSelection}. Try again!`);
    } else if (computerSelection == 'paper' && playerSelection == 'rock'){
        console.log(`You Lose! The computer chose: ${computerSelection}, which beats ${playerSelection}. Try again!`);
    } else if (computerSelection === playerSelection){
        console.log(`You Tied! The computer chose: ${computerSelection}. You chose: ${playerSelection}. Try again.`);
    } else {
        console.log(`You Win! The computer chose: ${computerSelection}, which loses again ${playerSelection}.`);
    }
}

function game(){ //main function
    for (var i = 0; i < 5; i++){
        gameRound(getComputerChoice(), getPlayerChoice());
    }
}