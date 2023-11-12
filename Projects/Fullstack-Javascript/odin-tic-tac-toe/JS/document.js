//* AI / Player form elements.
const detailsAreaElement = document.getElementById('details-area');
const playerNameElement = document.getElementById('player-1');
const selectFormFieldElement = document.getElementById('opponent');
const aiFormFieldElement = document.getElementById('ai-opponent');
const aiDifficultyFormElement = document.getElementById('ai-difficulty');
const humanFormFieldElement = document.getElementById('human-opponent');
const opponentNameElement = document.getElementById('player-2');
const playerScoreboardNameElement = document.getElementById('player-name');
const opponentScoreboardNameElement = document.getElementById('opponent-name');
const playerScoreboardScoreElement = document.getElementById('player-score');
const opponentScoreboardScoreElement = document.getElementById('opponent-score');
//* Form btn.
const startGameBtnElement = document.getElementById('start-game');
//* Gameboard element.
const gameboardElement = document.getElementById('gameboard');
//* Game area elements.
const gameAreaElement = document.getElementById('game-area');
const cells = document.querySelectorAll('.cell');
//* Winner/Turn area elements.
const winnerAreaElement = document.getElementById('winner-area');
const winnerParagraphElement = document.querySelector('#winner-area p');
const playAgainBtnElement = document.querySelector('#winner-area button');
const turnAreaElement = document.getElementById('turn-area');
const turnParagraphElement = document.querySelector('#turn-area p');
//* Hamburguer menu elements
const menuBtnElement = document.querySelector('#menu button');
const closeMenuBtnElement = document.querySelector('#close-menu button');
const menuBlurElement = document.querySelector('.blur');
const mobileTitleElement = document.getElementById('mobile-title');