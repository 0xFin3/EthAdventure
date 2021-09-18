const Game = artifacts.require("Game")
const Character = artifacts.require("Character")

const PROVIDED_NAME = "TEST"

contract("Game", (accounts) => {

    const creatorAccount = accounts[0];

    it("should create a character with the name provided", async () => {
        const _game = await Game.deployed()
        await _game.createCharacter(PROVIDED_NAME, {from:creatorAccount})
        const _characterAddress = await _game.getCharacter()
        const _characterObject = await Character.at(_characterAddress)
        const _characterName = await _characterObject.getName()
        assert.equal(_characterName, PROVIDED_NAME, 
            "Failed to create character with provided name.")
    })
})