const game = {
    playerScore: 0,
    computerScore: 0,
    playerScoreSpan: document.getElementById("wins"),
    computerScoreSpan: document.getElementById("losses"),
    scoreBoard: document.querySelector("#score-board"),
    whoWon: document.getElementById("who-won"),
    rock: document.getElementById("rock"),
    paper: document.getElementById("paper"),
    scissors: document.getElementById("scissors"),
    computerChoices: ["r", "p", "s"],
    computerChoice: [],
    playerChoice: [],
};

function getComputerChoice() {
    game.computerChoice = [];
    game.computerChoice.push(game.computerChoices[Math.floor(Math.random() * 3)]);
};

function rps() {
    getComputerChoice();
    console.log(game.computerChoice);
    let compChoice = game.computerChoice[0];
    let plyrChoice = game.playerChoice[0];

    // It's a draw
    if (plyrChoice == compChoice) {
        game.whoWon.textContent = "It's a draw!";
    };
    // Player chooses rock
    if (plyrChoice == "r") {
        if (compChoice == "s") {
            game.playerScore++;
            game.playerScoreSpan.textContent = game.playerScore;
            game.whoWon.textContent = "You win! Rock breaks Scissors";
        } else if (compChoice == "p") {
            game.computerScore++;
            game.computerScoreSpan.textContent = game.computerScore;
            game.whoWon.textContent = "You lost! Paper covers Rock";
        }
    };
    // Player Chooses paper
    if (plyrChoice == "p") {
        if (compChoice == "r") {
            game.playerScore++;
            game.playerScoreSpan.textContent = game.playerScore;
            game.whoWon.textContent = "You win! Paper covers Rock";
        } else if (compChoice == "s") {
            game.computerScore++;
            game.computerScoreSpan.textContent = game.computerScore;
            game.whoWon.textContent = "You lost! Scissors cut Paper";
        }
    };
    // Player Chooses scissors
    if (plyrChoice == "s") {
        if (compChoice == "p") {
            game.playerScore++;
            game.playerScoreSpan.textContent = game.playerScore;
            game.whoWon.textContent = "You win! Scissors cut Paper";
        } else if (compChoice == "r") {
            game.computerScore++;
            game.computerScoreSpan.textContent = game.computerScore;
            game.whoWon.textContent = "You lost! Rock breaks Scissors";
        }
    };
};

function getPlayerChoice() {
    game.rock.addEventListener("click", function() {
        game.playerChoice = [];
        game.playerChoice.push(["r"]);
        console.log(game.playerChoice);
        rps()
    });
    game.paper.addEventListener("click", function() {
        game.playerChoice = [];
        game.playerChoice.push(["p"]);
        console.log(game.playerChoice);
        rps();
    });
    game.scissors.addEventListener("click", function() {
        game.playerChoice = [];
        game.playerChoice.push(["s"]);
        console.log(game.playerChoice);
        rps();
    });
}
if (typeof module !== "undefined")
    module.exports = {
        game,
        getComputerChoice
    };

getPlayerChoice();