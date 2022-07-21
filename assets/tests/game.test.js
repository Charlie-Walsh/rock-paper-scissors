/**
 * @jest-environment jsdom
 */
 const { game, getComputerChoice } = require("../js/game");
 beforeEach(() => {
     const fs = require("fs");
     let fileContents = fs.readFileSync("index.html", "utf-8");
     document.open();
     document.write(fileContents);
     document.close();
 });
 describe("game keys exist", () => {
     test("does playerScore exist in game", () => {
         expect("playerScore" in game).toBe(true);
     });
     test("does computerScore exist in game", () => {
         expect("computerScore" in game).toBe(true);
     });
     test("does playerScoreSpan exist in game", () => {
         expect("playerScoreSpan" in game).toBe(true);
     });
     test("does scoreBoard exist in game", () => {
         expect("scoreBoard" in game).toBe(true);
     });
     test("does whoWon exist in game", () => {
         expect("whoWon" in game).toBe(true);
     });
     test("does rock exist in game", () => {
         expect("rock" in game).toBe(true);
     });
     test("does paper exist in game", () => {
         expect("paper" in game).toBe(true);
     });
     test("does scissors exist in game", () => {
         expect("scissors" in game).toBe(true);
     });
 });
 describe("does getComputerChoice work", () => {
     beforeAll(() => {
         game.compChoice = [];
         getComputerChoice();
     });
     test("does computerChoice add the result to game.computerChoice", () => {
         expect(game.compChoice.length).toBe(1);
     });
 });