//? Shows form fields once the user has chosen an opponent.
selectFormFieldElement.addEventListener('change', displayOpponentFormFields);
//? Resets the visual of the gameboard.
startGameBtnElement.addEventListener('click', () =>{
    cells.forEach((cell, index) => {
        Game.resetCell(index)
    });
});
//? Starts the game.
startGameBtnElement.addEventListener('click', Game.startGame);

//? Calls the play function when a cell is clicked.
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        Game.play(index);
    });
});
//? Calls for a new game.
playAgainBtnElement.addEventListener('click', Game.startGame);
//? Resets the visual of the gameboard.
playAgainBtnElement.addEventListener('click', () =>{
    cells.forEach((cell, index) => {
        Game.resetCell(index)
    });
});
//? Triggers the hamburguer menu.
menuBtnElement.addEventListener('click', () =>{
    detailsAreaElement.style.left = '0';
    menuBlurElement.style.visibility = 'visible';
    menuBlurElement.style.display = 'block';
});
closeMenuBtnElement.addEventListener('click', () =>{
    detailsAreaElement.style.left = '-100%';
    menuBlurElement.style.visibility = 'hidden';
    menuBlurElement.style.display = 'none';
});
menuBlurElement.addEventListener('click', () =>{
    detailsAreaElement.style.left = '-100%';
    menuBlurElement.style.visibility = 'hidden';
    menuBlurElement.style.display = 'none';
})