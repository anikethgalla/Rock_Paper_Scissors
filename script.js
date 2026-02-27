
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

const rockButton=document.getElementById('rock');
const paperButton=document.getElementById('paper');
const scissorsButton=document.getElementById('scissors');
const resultContainer=document.getElementById('result');
const scoreContainer=document.getElementById('score');
let humanChoice='';
let humanScore=0;
let computerScore=0;

resultContainer.textContent='Result:';
scoreContainer.textContent='Score:';
rockButton.addEventListener('click', () => {
    humanChoice='rock';
    playRound();
});

paperButton.addEventListener('click',()=>{
    humanChoice='paper';
    playRound();
});

scissorsButton.addEventListener('click',()=>{
    humanChoice='scissors';
    playRound();
});

function playRound() {
    const computerChoice = getComputerChoice();
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        resultContainer.textContent='Computer wins! Paper beats Rock.';
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        resultContainer.textContent='Computer wins! Scissors beats Paper.';
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        resultContainer.textContent='Computer wins! Rock beats Scissors.';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        resultContainer.textContent='You win! Rock beats Scissors.';
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        resultContainer.textContent='You win! Paper beats Rock.';
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        resultContainer.textContent='You win! Scissors beats Paper.';
    } else {
        resultContainer.textContent='It\'s a tie!';
    }
    scoreContainer.textContent='Human Score: ' + humanScore + ' | Computer Score: ' + computerScore;
    displayWinner();
}

function displayWinner(){
        if(humanScore==5 || computerScore==5){
            rockButton.disabled=true;
            paperButton.disabled=true;
            scissorsButton.disabled=true;
            if(humanScore>computerScore){
                resultContainer.textContent='Congratulations! You are the overall winner!';
            }
            else if(computerScore>humanScore){
                resultContainer.textContent='Computer wins the game! Better luck next time!';
            }
        }
}
