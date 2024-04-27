let humanScoreDisplay = document.querySelector('.score.human');
let computerScoreDisplay = document.querySelector('.score.computer');
let humanIcon = document.querySelector(`.human img`);
let computerIcon = document.querySelector(`.computer img`);

let rockBtn = document.querySelector(`#rock-button`);
let paperBtn = document.querySelector(`#paper-button`);
let scisscorBtn = document.querySelector(`#scisscor-button`);
let resetBtn = document.querySelector(`#reset`);
let statusDisplay = document.querySelector(`.status`);
let body = document.querySelector(`body`);

let humanScore = 0;
let computerScore = 0;
//effects: returns a string, either "rock," ",paper" or "scisscors", which is randomly chosen
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3); //generate a random number from 0 to 2
   
    switch (random) { //returns based on rng
        case 0:
            computerIcon.src = `../images/fist.png`;
            return "rock";
        case 1:
            computerIcon.src = `../images/hand-palm.png`;
            return "paper";
        case 2:
            computerIcon.src = `../images/swipe.png`;
            return "scisscors";
        default:
            computerIcon.src = `../images/fist.png`;
            return "rock";
    }
}


function playRound(humanChoice, computerChoice) { 
    
    if(humanChoice === "rock") { //if user entered rock
        if(computerChoice === "rock") {
            statusDisplay.textContent = "Rock vs. Rock. Tie game. No one wins.";
        }
        else if (computerChoice === "paper"){
            statusDisplay.textContent = "Rock vs. Paper. Computer wins.";
            computerScore++; //increment computer's score
        }
        else { //if user entered scisscors
            statusDisplay.textContent = "Rock vs. Scisscors. Human wins.";
            humanScore++; //increment computer's score
        }
    }
    else if (humanChoice === "paper") { //if user entered paper
        if(computerChoice === "rock") {
            statusDisplay.textContent = "Paper vs. Rock. Human wins.";
            humanScore++;
        }
        else if (computerChoice === "paper"){
            statusDisplay.textContent = "Paper vs. Paper. Tie game. No one wins.";
          
        }
        else { //if user entered scisscors
            statusDisplay.textContent = "Paper vs. Scisscors. Computer wins.";
            computerScore++; //increment computer's score
        }
    }
    else { //if user entered scisscor
    
        if(computerChoice === "rock") {
            statusDisplay.textContent = "Scisscor vs. Rock. Computer wins.";
            computerScore++;
        }
        else if (computerChoice === "paper"){
            statusDisplay.textContent = "Scisscor vs. Paper. Human wins.";
            humanScore++;
        }
        else { //if user entered scisscors
            statusDisplay.textContent = "Scisscor vs. Scisscors. Tie game. No one wins.";
        }
    }

    humanScoreDisplay.textContent = humanScore; //sets the score display
    computerScoreDisplay.textContent = computerScore;

    if(humanScore === 5) {
        statusDisplay.textContent = "Human is the winner! Bravo.";
    }
    else if (computerScore === 5) {
        statusDisplay.textContent = "Computer is the winner! Better luck next time!";
    }
    console.log(humanScore);
    console.log(computerScore);

}

rockBtn.addEventListener(`click`, () => {
    if(humanScore === 5 || computerScore === 5) return; //if any scores are 5, then no need to play round so return
    humanIcon.src = `../images/fist.png`;
    playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    if(humanScore === 5 || computerScore === 5) return; 
    humanIcon.src = `../images/hand-palm.png`;
    playRound('paper', getComputerChoice());
});

scisscorBtn.addEventListener(`click`, () => {
    if(humanScore === 5 || computerScore === 5) return; 
    humanIcon.src = `../images/swipe.png`;
    playRound('scisscors', getComputerChoice());
});

resetBtn.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    humanIcon.src = `../images/questionmark.png`;
    computerIcon.src = `../images/questionmark.png`;
    statusDisplay.textContent = "New game."
}) 




