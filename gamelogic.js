//effects: returns a string, either "rock," ",paper" or "scisscors", which is randomly chosen
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3); //generate a random number from 0 to 2
   
    switch (random) { //returns based on rng
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scisscors";
        default:
            return "rock";
    }
}

//effects: returns a string, either "rock," ",paper" or "scisscors" which is obtained from user
function getHumanChoice() {
    userInput = prompt("Please enter: rock, paper, or scisscors", "rock"); 
    userInput = userInput.toLowerCase(); //make the input only lowercase, code can break if user fails to enter string
    if (userInput !== "rock" && userInput !== "paper" && userInput !== "scisscors") { console.log("Please enter correct options only."); return; }
    return userInput;
}
//modifies: humanScore, computerScore (both are strings)
//effects: 


function playGame() {

    function playRound(humanChoice, computerChoice) {
        if(humanChoice === "rock") { //if user entered rock
            if(computerChoice === "rock") {
                console.log("Rock vs. Rock. Tie game. No one wins.");
            }
            else if (computerChoice === "paper"){
                console.log("Rock vs. Paper. Computer wins.");
                computerScore++; //increment computer's score
            }
            else { //if user entered scisscors
                console.log("Rock vs. Scisscors. Human wins.");
                humanScore++; //increment computer's score
            }
        }
        else if (humanChoice === "paper") { //if user entered paper
            if(computerChoice === "rock") {
                console.log("Paper vs. Rock. Human wins.");
                humanScore++;
            }
            else if (computerChoice === "paper"){
                console.log("Paper vs. Paper. Tie game. No one wins.");
            }
            else { //if user entered scisscors
                console.log("Paper vs. Scisscors. Computer wins.");
                computerScore++; //increment computer's score
            }
        }
        else { //if user entered scisscor
        
            if(computerChoice === "rock") {
                console.log("Scisscor vs. Rock. Computer wins.");
                computerScore++;
            }
            else if (computerChoice === "paper"){
                console.log("Scisscor vs. Paper. Human wins.");
                humanScore++;
            }
            else { //if user entered scisscors
                console.log("Scisscor vs. Scisscors. Tie game. No one wins.");
            }
        }
    
    }

    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(humanScore > computerScore) {
        console.log(`Human beat computer with ${humanScore} points over ${computerScore}.`);
    }
    else if (humanScore === computerScore) {
        console.log(`Tie game, both have ${humanScore} points.`);
    }
    else { //if computer score has higher amount of points
        console.log(`Computer beat human with ${computerScore} points over ${humanScore}.`);
    }

}

playGame();






