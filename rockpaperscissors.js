//Global Variables
var winCount = 0;
var loseCount = 0;
var tieCount = 0;

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
    if (lowercase != "rock" && lowercase != "paper" && lowercase != "scissors"){
        lowercase = getPlayerChoice();
    }
    return lowercase;
}

function gameRound(computerSelection, playerSelection){
    if (computerSelection == 'rock' && playerSelection == 'scissors'){
        loseCount++;
        console.log(`You Lose! The computer chose: ${computerSelection}, which beats ${playerSelection}. Try again!`);
    } else if (computerSelection == 'scissors' && playerSelection == 'paper'){
        loseCount++;
        console.log(`You Lose! The computer chose: ${computerSelection}, which beats ${playerSelection}. Try again!`);
    } else if (computerSelection == 'paper' && playerSelection == 'rock'){
        loseCount++;
        console.log(`You Lose! The computer chose: ${computerSelection}, which beats ${playerSelection}. Try again!`);
    } else if (computerSelection === playerSelection){
        tieCount++;
        console.log(`You Tied! The computer chose: ${computerSelection}. You chose: ${playerSelection}. Try again.`);
    } else {
        winCount++;
        console.log(`You Win! The computer chose: ${computerSelection}, which loses again ${playerSelection}.`);
    }
}

function game(){ //main function
    for (var i = 0; i < 5; i++){
        gameRound(getComputerChoice(), getPlayerChoice());
    }
    console.log(`
Game over!
You won ${winCount} times.
You lost ${loseCount} times.
You tied ${tieCount} times.
Thank you for playing. Refresh the page to play again!`
    );
}

game();