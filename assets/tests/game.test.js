/**
 * @jest-environment jsdom
 */
const { game } = require("../js/game");

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
});