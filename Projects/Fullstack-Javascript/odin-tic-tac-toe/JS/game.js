const Game = (() => {
    const Player = (username) => {
        let name = username;
        let wins = 0;
        let symbol = '';
        const getName = () => name;
        const getWins = () => wins;
        const getSymbol = () => symbol;
        const setName = (value) => name = value;
        const setWins = (value) => wins = value;
        const setSymbol = (value) => symbol = value;
        return { getName, getWins, getSymbol, setName, setWins, setSymbol };
    }

    const AI = (aiDifficulty) => {
        let difficulty = aiDifficulty;
        let wins = 0;
        let symbol = '';
        const getDifficulty = () => difficulty;
        const getWins = () => wins;
        const getSymbol = () => symbol;
        const setDifficulty = (value) => difficulty = value;
        const setWins = (value) => wins = value;
        const setSymbol = (value) => symbol = value;

        return { getDifficulty, getWins, getSymbol, setDifficulty, setWins, setSymbol };
    }

    //? The players.
    let player = Player('PLAYER');
    let aiOpponent = null;
    let humanOpponent = null;
    //? The board.
    let gameboard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    //? Controls who's playing.
    let game = false;
    let turn = '';
    let symbol = 'X';

    //? This function stores the user inserted form data.
    const getFormData = () => {
        if (playerNameElement.value != '') {
            player.setName(playerNameElement.value);
            //? Retrieves the selected symbol.
            //? (X goes first).
            const selectedSymbol = document.querySelector('input[name="symbols"]:checked');
            player.setSymbol(selectedSymbol.value);
            let opponentSymbol = '';
            if (player.getSymbol() == 'X')
                opponentSymbol = 'O';
            else
                opponentSymbol = 'X';
            //? Checks if the opponent is human or not.
            switch (opponent) {
                case 'ai':
                    if (aiDifficultyFormElement.value != '') {
                        if (aiOpponent === null)
                            aiOpponent = AI('easy');
                        aiOpponent.setDifficulty(aiDifficultyFormElement.value);
                        aiOpponent.setSymbol(opponentSymbol);
                    }
                    else {
                        displayAlert();
                        return false;
                    }
                    break;
                case 'human':
                    if (opponentNameElement.value != '') {
                        if (humanOpponent === null)
                            humanOpponent = Player('OPPONENT');
                        humanOpponent.setName(opponentNameElement.value);
                        humanOpponent.setSymbol(opponentSymbol);
                    }
                    else {
                        displayAlert();
                        return false;
                    }
                    break;
            }
            //? Closes the menu, (Moblie devices).
            detailsAreaElement.style.left = '-100%';
            menuBlurElement.style.visibility = 'hidden';
            menuBlurElement.style.display = 'none';
            mobileTitleElement.style.visibility = 'hidden';
            mobileTitleElement.style.display = 'none';
            //? Updates the turn, whoever has 'X' plays first.
            turn = player.getSymbol() === 'X' ? 'player' : 'opponent';
            return true;
        }
        else {
            displayAlert();
            return false;
        }
    }

    const displayAlert = () => {
        alert('Please fill out the form in order to start a new game.');
    }

    //? This function starts the game sequence.
    const startGame = () => {
        //? The new game starts here.
        if (getFormData() != false) {
            //? Resets all traces of a previous game.
            toggleWinner(false);
            clearBoard();
            updatescoreboard();
            //? Displays who's playing turn is.
            displayTurn();
            //* If the AI goes first, the first play is made here.
            if (player.getSymbol() === 'O')
                setTimeout(function () {
                    playAI();
                }, 500);
            gameAreaElement.classList.remove('hidden');
            game = true;
        }
    }

    const resetCell = (index) => {
        cells[index].textContent = '';
        cells[index].classList.remove('filled');
    }

    const play = (index) => {
        if (game) {
            switch (turn) {
                case 'player':
                    symbol = player.getSymbol();
                    break;
                case 'opponent':
                    symbol = humanOpponent.getSymbol();
                    break;
            }
            //? Calculates the row and column based on the index.
            const row = Math.floor(index / 3);
            const col = index % 3;
            //? Checks if the cell is empty before updating it.
            if (gameboard[row][col] === null) {
                gameboard[row][col] = symbol;
                //? Updates the cell's content to display the click.
                cells[index].textContent = symbol;
                cells[index].classList.add('filled');
                //? Checks for a winner.
                checkEnd();
                if (game) {
                    //? Updates the turn.
                    switch (turn) {
                        case 'player':
                            turn = 'opponent';
                            //? Auto-plays if opponents is an AI
                            if (opponent === 'ai') {
                                setTimeout(function () {
                                    (async () => {
                                        await playAI();
                                    })();
                                }, 500);
                            }
                            break;
                        case 'opponent':
                            turn = 'player';
                            break;
                    }
                    //? Displays who's playing turn is.
                    displayTurn();
                }
            }
        }
        else
            return;
    }

    const playAI = async () => {
        while (turn === 'opponent') {
            //? If AI is on easy mode.
            if (aiOpponent.getDifficulty() == 'easy') {
                symbol = aiOpponent.getSymbol();
                //? Generates a cell.
                const index = rand();
                const row = Math.floor(index / 3);
                const col = index % 3;
                //? Checks if the cell is empty before updating it.
                if (gameboard[row][col] === null) {
                    gameboard[row][col] = aiOpponent.getSymbol();
                    //? Updates the cell's content to display the play.
                    cells[index].textContent = symbol;
                    cells[index].classList.add('filled');
                    //? Checks for a winner.
                    checkEnd();
                    turn = 'player';
                }
            }
        }
        //? Displays who's playing turn is.
        displayTurn();
    }
    const checkEnd = () => {
        //? Checks for a 3-in-a-row line.
        if (gameboard[0][0] != null && gameboard[0][0] === gameboard[0][1] && gameboard[0][1] === gameboard[0][2] ||
            gameboard[1][0] != null && gameboard[1][0] === gameboard[1][1] && gameboard[1][1] === gameboard[1][2] ||
            gameboard[2][0] != null && gameboard[2][0] === gameboard[2][1] && gameboard[2][1] === gameboard[2][2] ||
            gameboard[0][0] != null && gameboard[0][0] === gameboard[1][0] && gameboard[1][0] === gameboard[2][0] ||
            gameboard[0][1] != null && gameboard[0][1] === gameboard[1][1] && gameboard[1][1] === gameboard[2][1] ||
            gameboard[0][2] != null && gameboard[0][2] === gameboard[1][2] && gameboard[1][2] === gameboard[2][2] ||
            gameboard[0][0] != null && gameboard[0][0] === gameboard[1][1] && gameboard[1][1] === gameboard[2][2] ||
            gameboard[0][2] != null && gameboard[0][2] === gameboard[1][1] && gameboard[1][1] === gameboard[2][0]) {
            switch (turn) {
                //? The game ends and the player won a round.
                case 'player':
                    player.setWins(player.getWins() + 1);
                    toggleWinner(true, player.getName());
                    game = false;
                    break;
                //? The game ends and the opponent won a round.
                case 'opponent':
                    if (opponent === 'human') {
                        humanOpponent.setWins(humanOpponent.getWins() + 1);
                        toggleWinner(true, humanOpponent.getName());
                    }
                    if (opponent === 'ai') {
                        aiOpponent.setWins(aiOpponent.getWins() + 1);
                        toggleWinner(true, 'AI');
                    }
                    game = false;
                    break;
            }
        }
        //? Checks for a draw.
        else if (gameboard[0][0] && gameboard[1][0] != null && gameboard[2][0] != null &&
            gameboard[0][1] != null && gameboard[1][1] != null && gameboard[2][1] != null &&
            gameboard[0][2] != null && gameboard[1][2] != null && gameboard[2][2] != null) {
            toggleWinner(true, 'draw');
            game = false;
        }
    }

    //? Updates the scoreboard with the ammount of wins of each Player.
    const updatescoreboard = () => {
        playerScoreboardNameElement.textContent = player.getName() + ' (' + player.getSymbol() + ')';
        playerScoreboardScoreElement.textContent = player.getWins();
        if (opponent === 'human') {
            opponentScoreboardNameElement.textContent = humanOpponent.getName() + ' (' + humanOpponent.getSymbol() + ')';
            opponentScoreboardScoreElement.textContent = humanOpponent.getWins();
        }
        else {
            opponentScoreboardNameElement.textContent = 'AI (' + aiOpponent.getSymbol() + ')';
            opponentScoreboardScoreElement.textContent = aiOpponent.getWins();
        }
    }

    //? Resets the gameboard, (Not the visual elements, that part is in events.js)
    const clearBoard = () => {
        gameboard.forEach((row, rIndex) => {
            row.forEach((cell, cIndex) => {
                gameboard[rIndex][cIndex] = null;
            })
        });
    }

    //? Shows/hides the winner text area.
    const toggleWinner = (state, winner = null) => {
        if (state === true) {
            if (winner === 'draw')
                winnerParagraphElement.textContent = 'Looks like it\'s a draw!';
            else
                winnerParagraphElement.textContent = 'Looks like the winner is ' + winner + '!';
            turnAreaElement.classList.add('hidden');
            winnerAreaElement.classList.remove('hidden');
        }
        else {
            turnAreaElement.classList.remove('hidden');
            winnerAreaElement.classList.add('hidden');
            winnerParagraphElement.textContent = '';
        }
    }

    //? Updates the turn paragraph to display who's playing.
    const displayTurn = () => {
        turnAreaElement.classList.remove('hidden');
        switch (turn) {
            case 'opponent':
                if (opponent === 'human')
                    turnParagraphElement.textContent = humanOpponent.getName() + ' is playing...';
                if (opponent === 'ai')
                    turnParagraphElement.textContent = 'AI is playing...';
                break;
            case 'player':
                turnParagraphElement.textContent = player.getName() + ' is playing...';
                break;
        }
    }

    //? Used by the AI to play on a random cell.
    //? Returns a random number between 0 and 8.
    const rand = () => {
        return Math.floor(Math.random() * 9);
    }

    return {
        gameboard,
        startGame,
        play,
        resetCell
    };
})();
