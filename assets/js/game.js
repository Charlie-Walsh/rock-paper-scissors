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

function getPlayerChoice() {
    game.rock.addEventListener('click', function() {
        game.playerChoice.push(['r']);
        game.rock.setAttribute("data-listener", "true");
    });
    game.paper.addEventListener('click', function() {
        game.playerChoice.push(['p']);
        game.paper.setAttribute("data-listener", "true");
    });
    game.scissors.addEventListener('click', function() {
        game.playerChoice.push(['s']);
        game.scissors.setAttribute("data-listener", "true");
    });
    };

module.exports = {game, getComputerChoice, getPlayerChoice}