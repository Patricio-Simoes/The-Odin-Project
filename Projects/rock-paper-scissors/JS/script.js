function startGame(){
    btnStartElement.style.visibility = "hidden";
    mainElement.style.visibility = "visible";
    mainElement.style.position = "relative";
    mainElement.style.top = "-50px";
    footerElement.style.visibility = "visible"
    gameOverElement.style.visibility = "hidden";
    mainElement.style.display = "block";
    footerElement.style.display = "block";
    warriorViking.style.position = "static";
    rangerViking.style.position = "static";
    assassinViking.style.position = "static";
    playerRoundsWonCounter = 0;
    opponentRoundsWonCounter = 0;
    updateScores();
    gameStartSound.play();
}

//* The round is played here:
function playPlayerPick(event){
    const playerPick = event.target.dataset;

    //? The player plays his class.
    switch(playerPick.class){
        case "ranger" : playerPlayedClass.src="./images/bow.png";break;
        case "warrior" : playerPlayedClass.src="./images/axe.png";break;
        case "assassin" : playerPlayedClass.src="./images/dagger.png";break;
    }

    //? The opponent plays his class.
    let opponentPick = playOpponentPick();
    //? The winner is picked.
    drawWinner(playerPick.class, opponentPick);
    //? The scoreboard is updated
    updateScores();
    //? If the player or the opponent reach score 3, the game ends
    if (playerRoundsWonCounter == 5){
        showGameOverMessage("Congratulations, You Won!");
    }
    else if (opponentRoundsWonCounter == 5){
        showGameOverMessage("Opponent Won, Better Luck Next Time!");
    }
}

//* Randomly generates the opponent's class.
function playOpponentPick(){
    const randomIndex = Math.floor(Math.random() * classes.length);
    const opponentPick = classes[randomIndex];

    switch(opponentPick){
        case "ranger" : opponentPlayedClass.src="./images/bow.png";break;
        case "warrior" : opponentPlayedClass.src="./images/axe.png";break;
        case "assassin" : opponentPlayedClass.src="./images/dagger.png";break;
    }

    return opponentPick;
}

//* This is where the winner is picked
function drawWinner(playerPick, opponentPick){
    if (playerPick == opponentPick){
        drawSound.play();
        roundWinner.src="./images/swords.png"
    }
    //? Player picked The Ranger Viking
    else if (playerPick == "ranger"){
        if (opponentPick == "warrior"){
            winSound.play()
            roundWinner.src="./images/viking.png"
            playerRoundsWonCounter++;
        }
        else{
            loseSound.play()
            roundWinner.src="./images/skull.png"
            opponentRoundsWonCounter++;
        }
    }
    //? Player picked The Warrior Viking
    else if (playerPick == "warrior"){
        if (opponentPick == "assassin"){
            winSound.play()
            roundWinner.src="./images/viking.png"
            playerRoundsWonCounter++;
        }
        else{
            loseSound.play()
            roundWinner.src="./images/skull.png"
            opponentRoundsWonCounter++;
        }
    }
    //? Player picked The Assassin Viking
    else if (playerPick == "assassin"){
        if (opponentPick == "ranger"){
            winSound.play()
            roundWinner.src="./images/viking.png"
            playerRoundsWonCounter++;
        }
        else{
            loseSound.play()
            roundWinner.src="./images/skull.png"
            opponentRoundsWonCounter++;
        }
    }
}

function updateScores(){
    playerRoundsWon.textContent = "Rounds Won: " + playerRoundsWonCounter;
    playerRoundsLost.textContent = "Rounds Lost: " + opponentRoundsWonCounter;
    opponentRoundsLost.textContent = "Rounds Lost: " + playerRoundsWonCounter;
    opponentRoundsWon.textContent = "Rounds Won: " + opponentRoundsWonCounter;
}

function showGameOverMessage(message){
    gameOverMessageElement.textContent = message;
    //! Images are hidden like this due to delay using the visibility property
    warriorViking.style.position = "absolute";
    warriorViking.style.left = "-9999px";
    rangerViking.style.position = "absolute";
    rangerViking.style.left = "-9999px";
    assassinViking.style.position = "absolute";
    assassinViking.style.left = "-9999px";
    mainElement.style.visibility = "hidden";
    footerElement.style.visibility = "hidden";
    mainElement.style.display = "none";
    footerElement.style.display = "none";
    gameOverElement.style.visibility = "visible";
}