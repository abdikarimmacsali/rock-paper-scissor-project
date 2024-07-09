let choice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

// Get references to elements
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resultDisplay = document.getElementById('result');
const humanScoreDisplay = document.getElementById('humanScore');
const computerScoreDisplay = document.getElementById('computerScore');

// Event listeners for each choice button
rockButton.addEventListener('click', function() {
    playRound('rock');
});

paperButton.addEventListener('click', function() {
    playRound('paper');
});

scissorsButton.addEventListener('click', function() {
    playRound('scissors');
});

// Function to get computer's choice
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

// Function to play a round based on user's and computer's choice
function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    // Display human and computer choices
    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    // Game logic
    if (humanChoice === computerChoice) {
        updateResult("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        updateResult("You win this round! Let's try again.");
        humanScore++;
    } else {
        updateResult("Computer wins this round, miskiin.");
        computerScore++;
    }

    // Update scores on the HTML
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}

// Function to update result display
function updateResult(message) {
    resultDisplay.textContent = message;
}
