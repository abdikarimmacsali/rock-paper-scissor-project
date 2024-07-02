# rock-paper-scissor-project
This is my third project I am making in my The Odin Project lessons
let choice = ["rock","paper", "scissor"]

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomIndex =  Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}
function getHumanChoice() {
    let userInput = prompt("Enter your choice") 
        if (userInput.includes(userInput)) {
            return userInput
        } else return "Invalid responce"
}
    
function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice.startsWith("Invalid")) {
        return "Invalid"
    }
}

if (humanChoice == computerChoice) {
    return "It's a tie dude"
} else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissor"&& computerChoice == "paper") ) {
        return "You win this round!, let's try again"
        humanScore++;
    } else {
        return "Computer wins this round, miskiin"
        computerScore++;
    }


