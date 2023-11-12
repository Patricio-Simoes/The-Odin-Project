//? HTML Elements

const btnStartElement = document.getElementById("game-start-btn")
const mainElement = document.getElementById("main");
const footerElement = document.getElementById("footer");
const gameOverElement = document.getElementById("game-over-popup");
const rangerViking = document.getElementById("ranger-viking");
const warriorViking = document.getElementById("warrior-viking");
const assassinViking = document.getElementById("assassin-viking");
const playerPlayedClass = document.getElementById("player-played-class");
const opponentPlayedClass = document.getElementById("opponent-played-class");
const roundWinner = document.getElementById("round-winner");
const opponentRoundsLost = document.getElementById("opponent-rounds-lost");
const opponentRoundsWon = document.getElementById("opponent-rounds-won");
const playerRoundsLost = document.getElementById("player-rounds-lost");
const playerRoundsWon = document.getElementById("player-rounds-won");
const playAgainButtonElement = document.getElementById("play-again-btn");
const gameOverMessageElement = document.getElementById("game-over-message");

//? Audio Elements

const gameStartSound = document.getElementById("game-start-sound");
const rangerSound = document.getElementById("ranger-select-sound");
const warriorSound = document.getElementById("warrior-select-sound");
const assassinSound = document.getElementById("assassin-select-sound");
const winSound = document.getElementById("win-sound");
const loseSound = document.getElementById("lose-sound");
const drawSound = document.getElementById("draw-sound");


//? JS Variables

let playerRoundsWonCounter = 0;
let opponentRoundsWonCounter = 0;
const classes = ["ranger", "warrior", "assassin"];