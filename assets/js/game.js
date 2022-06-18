document.addEventListener("DOMContentLoaded", () => {

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
        computerChoices: ['r', 'p', 's'],
        computerChoice: [],
        playerChoice: [],
        };

    function getComputerChoice() {
        game.computerChoice = [];
        game.computerChoice.push(game.computerChoices[Math.floor(Math.random() * 3)]);
        };

    function rps() {
        getComputerChoice();
        const compChoice = game.computerChoice[0];
        const plyrChoice = game.playerChoice[0];
        if (plyrChoice == "r") {
            if (compChoice == "s") {
                game.playerScore++;
            } else if (compChoice == "p") {
                game.computerScore++;
            };
        };
        console.log(game.playerScore);
        console.log(game.computerScore);
    };

    function getPlayerChoice() {
        game.rock.addEventListener('click', function() {
            game.playerChoice.push(['r']);
            console.log(game.playerChoice)
        });
        game.paper.addEventListener('click', function() {
            game.playerChoice.push(['p']);
            rps()
        });
        game.scissors.addEventListener('click', function() {
            game.playerChoice.push(['s']);
            rps()
        });
        };

    module.exports = {game, getComputerChoice, getPlayerChoice}

});