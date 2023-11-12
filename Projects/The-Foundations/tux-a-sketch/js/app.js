drawGrid();
cells = document.querySelectorAll('.cell');

//* Changes the appearance of the buttons.
function toggleBtn(e){
    const btn = e.target;
    //* Changes the active status of the btn.
    if(!btn.classList.contains('btn-active'))
        btn.classList.add('btn-active');
    else
        btn.classList.remove('btn-active');
}

//* Shows/hides the borders on each cell.
function toggleBorders(){
    cells.forEach(function(cell) {
        //* Toggle the 'border-active' class on each cell
        if(!cell.classList.contains('border-active')){
            cell.classList.add('border-active');
            //* Fixes the height & width to match the added borders
            const newHeight = gridSizeValue / gridSize - 2  + "px";
            const newWidth = gridSizeValue / gridSize - 2 + "px";
            cell.style.height = newHeight;
            cell.style.width = newWidth;
            checkBorders = true;
        }
        else{
            cell.classList.remove('border-active');
            //* Fixes the height & width to match the missing borders
            const newHeight = gridSizeValue / gridSize + "px";
            const newWidth = gridSizeValue / gridSize + "px";
            cell.style.height = newHeight;
            cell.style.width = newWidth;
            checkBorders = false;
        }
      });
}

//* Paints the selected cell based on which button is selected.
function toggleCellAction(e){
    const cell = e.target;
    if (checkColor == true && cell.classList.contains('cell')){
        cell.style.backgroundColor = paintColor;
    }
    else if (checkRainbow == true && cell.classList.contains('cell')){
        rainbowColor = generateColor();
        cell.style.backgroundColor = rainbowColor;
    }
    else if (checkShader == true && cell.classList.contains('cell')){
        shadeCell(cell);
    }
    else if (checkLightner == true && cell.classList.contains('cell')){
        lightenCell(cell);
    }
    else if (checkEraser == true && cell.classList.contains('cell')){
        cell.style.backgroundColor = backgroundColor;
    }
}

function updatePaintColor(){
    paintColor = paintColorElement.value;
}

function updateBackgroundColor(){
    let answer = confirm("Warning :: This will erase your current sketch, are you sure?");
    if (answer) {
        backgroundColor = backgroundColorElement.value;
        cells.forEach(function(cell){
            cell.style.backgroundColor = backgroundColor;
        })
    }
    else {
        backgroundColorElement.value = '#FFFFFF';
        return;
    }
}

//* Resets all the other buttons to normal state when necessary, (in order to prevent color mode & rainbow mode active at the same time tor example).
function updateButtons(currentBtn){
    switch(currentBtn){
        case 'colorMode':
            toggleRainbowBtn.classList.remove('btn-active');
            checkRainbow = false;
            toggleShaderBtn.classList.remove('btn-active');
            checkShader = false;
            toggleLightnerBtn.classList.remove('btn-active');
            checkLightner = false;
            toggleEraserBtn.classList.remove('btn-active');
            checkEraser = false;
            break;
        case 'rainbowMode':
            toggleColorBtn.classList.remove('btn-active');
            checkColor = false;
            toggleShaderBtn.classList.remove('btn-active');
            checkShader = false;
            toggleLightnerBtn.classList.remove('btn-active');
            checkLightner = false;
            toggleEraserBtn.classList.remove('btn-active');
            checkEraser = false;
            break;
        case 'shaderMode':
            toggleColorBtn.classList.remove('btn-active');
            checkColor = false;
            toggleRainbowBtn.classList.remove('btn-active');
            checkRainbow = false;
            toggleLightnerBtn.classList.remove('btn-active');
            checkLightner = false;
            toggleEraserBtn.classList.remove('btn-active');
            checkEraser = false;
            break;
        case 'lightnerMode':
            toggleColorBtn.classList.remove('btn-active');
            checkColor = false;
            toggleRainbowBtn.classList.remove('btn-active');
            checkRainbow = false;
            toggleShaderBtn.classList.remove('btn-active');
            checkShader = false;
            toggleEraserBtn.classList.remove('btn-active');
            checkEraser = false;
            break;
        case 'eraserMode':
            toggleColorBtn.classList.remove('btn-active');
            checkColor = false;
            toggleRainbowBtn.classList.remove('btn-active');
            checkRainbow = false;
            toggleShaderBtn.classList.remove('btn-active');
            checkShader = false;
            toggleLightnerBtn.classList.remove('btn-active');
            checkLightner = false;
            break;
    }
}

//* Toggles color mode, coloring selected cells with the primary color.
function toggleColor(){
    //* Color mode is now set to off.
    if (checkColor == true){
        checkColor = false;
    }
    //* Color mode is now set to on.
    else{
        checkColor = true;
        paintColor = paintColorElement.value;
        updateButtons('colorMode');
    }
}

//* Generates a random number between 0-255.
function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

//* Generates a random rgb color.
function generateColor(){
    const r = getRandomNumber();
    const g = getRandomNumber();
    const b = getRandomNumber();
    console.log('rgb(' + r + ',' + g + ',' + b + ')');
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

//* Toggles rainbow mode, which returns a random rgb color with each click.
function toggleRainbow(){
    //* Eraser mode is now set to off.
    if (checkRainbow == true){
        checkRainbow = false;
    }
    //* Eraser mode is now set to on.
    else{
        checkRainbow = true;
        rainbowColor = generateColor();
        updateButtons('rainbowMode');
    }
}

//* Given an rgb color, returns the individual red, green and blue values.
function separateRGB(rgbColor) {
    const colorValues = rgbColor.slice(4, -1);
    const colorArray = colorValues.split(',');
    const red = parseInt(colorArray[0].trim());
    const green = parseInt(colorArray[1].trim());
    const blue = parseInt(colorArray[2].trim());
    return { red, green, blue };
}

//* Turns the selected cell darker with each click. A maximum of 10 clicks will be necessary to turn the selected cell fully black.
function shadeCell(cell){
    const color = cell.style.backgroundColor;
    const colors = separateRGB(color);
    let r = colors.red;
    let g = colors.green;
    let b = colors.blue;
    //* 25.5 equals 10% of 255, so, a maximum of 10 clicks will be necessary.
    r >= 25.5 ? r -= 25.5 : r = 0;
    g >= 25.5 ? g -= 25.5 : g = 0;
    b >= 25.5 ? b -= 25.5 : b = 0;
    cell.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

//* Toggles the shader mode, with each click, the selected cell becomes a little darker and, eventually, becomes full black.
function toggleShader(){
    //* Shader mode is now set to off.
    if (checkShader == true){
        checkShader = false;
    }
    //* Eraser mode is now set to on.
    else{
        checkShader = true;
        updateButtons('shaderMode');
    }
}

//* Turns the selected cell brighter with each click. A maximum of 10 clicks will be necessary to turn the selected cell fully white.
function lightenCell(cell){
    const color = cell.style.backgroundColor;
    const colors = separateRGB(color);
    let r = colors.red;
    let g = colors.green;
    let b = colors.blue;
    //* 25.5 equals 10% of 255, so, a maximum of 10 clicks will be necessary.
    r <= 229.5 ? r += 25.5 : r = 255;
    g <= 229.5 ? g += 25.5 : g = 255;
    b <= 229.5 ? b += 25.5 : b = 255;
    cell.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    console.log('here')
}

//* Toggles the lightner mode, with each click, the selected cell becomes a little brighter and, eventually, becomes full white.
function toggleLightner(){
    //* Lightner mode is now set to off.
    if (checkLightner == true){
        checkLightner = false;
    }
    //* Lightner mode is now set to on.
    else{
        checkLightner = true;
        updateButtons('lightnerMode');
    }
}
//* Toggles the eraser, coloring selected cells with the background color.
function toggleEraser(){
    //* Eraser mode is now set to off.
    if (checkEraser == true){
        checkEraser = false;
    }
    //* Eraser mode is now set to on.
    else{
        checkEraser = true;
        backgroundColor = backgroundColorElement.value;
        updateButtons('eraserMode');
    }
}

//* Updates the tile count each time the user changes the slider.
function updateGridSize() {
    gridSize = gridSizeElement.value;
    gridSizeOutputElement.textContent = 'Grid Size: ' + gridSize + " x " + gridSize;
    drawGrid();
    cells = document.querySelectorAll('.cell');
}

//* Draws the number of tiles inserted by the user.
function drawGrid(){
    gridContainerElementStyle = window.getComputedStyle(gridContainerElement);
    gridDimensionValue = gridContainerElementStyle.height;
    gridSizeValue = parseInt(gridDimensionValue, 10);
    //* Remove all child elements from the grid container.
    gridContainerElement.innerHTML = "";
    //* Adjust each cell's height & width to fit the grid nicely.
    //? Why -2? Because of the border defined with CSS.
    if (checkBorders === true){
        height = parseFloat(gridSizeValue / gridSize - 2).toFixed(10) + "px";
        width = parseFloat(gridSizeValue / gridSize - 2).toFixed(10) + "px";
    }
    else{
        height = gridSizeValue / gridSize + "px";
        width = gridSizeValue / gridSize + "px";
    }
    //* Generates the divs, styles them and places them in the grid container.
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const cell = document.createElement('div');
        if (checkBorders === true)
            cell.classList.add('cell', 'border-active');
        else
            cell.classList.add('cell');
        gridContainerElement.appendChild(cell);
        cell.style.height = height;
        cell.style.width = width;
        cell.style.backgroundColor = backgroundColorElement.value;
      }
    }
}

// * Resets the grid to it's initial state.
function clearGrid(){
    backgroundColorElement.value = '#FFFFFF';
    cells.forEach(function(cell){
        backgroundColor = '#FFFFFF';
        cell.style.backgroundColor = '#FFFFFF';
    })
    //* Resets the button to normal state after .1 seconds.
    setTimeout(function() {
        clearGridBtn.classList.remove('btn-active');
      }, 100);
}