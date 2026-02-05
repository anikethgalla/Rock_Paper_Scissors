
function getComputerChoice(){
    const max=3;
    const choice=Math.floor(Math.random() * max);
    if(choice===0){
        return "rock";
    } else if(choice===1){
        return "paper";
    } else{
        return "scissors";
    }
}

function getHumanChoice(){
    const userchoice=prompt("Rock paper or scissors");
    return userchoice.toLowerCase();
}

function playRound() {
    let humanScore=0;
    let computerScore=0;
    for(i=0;i<5;i++){
        const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        console.log('Computer wins! Paper beats Rock.');
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        console.log('Computer wins! Scissors beats Paper.');
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        console.log('Computer wins! Rock beats Scissors.');
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        console.log('You win! Rock beats Scissors.');
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        console.log('You win! Paper beats Rock.');
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        console.log('You win! Scissors beats Paper.');
    } else {
        console.log('It\'s a tie!');
    }
    }
    console.log('Human Score: ' + humanScore);
    console.log('Computer Score: ' + computerScore);
}





playRound();