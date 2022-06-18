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

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
};


/* game.rock.addEventListener('click', function() {
    game('r')
});
game.paper.addEventListener('click', function() {
    game('p')
});
game.scissors.addEventListener('click', function() {
    game('s')
}); */

module.exports = {game}