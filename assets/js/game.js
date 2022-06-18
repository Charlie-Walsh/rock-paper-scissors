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
};

module.exports = {game}