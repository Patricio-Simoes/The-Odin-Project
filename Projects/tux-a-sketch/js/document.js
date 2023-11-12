//? The number of tiles of each row/column.
const gridSizeElement = document.getElementById("gridTileCount");
//? Stores the grid size
let gridSize = gridSizeElement.value;
//? The element that displays the current grid size.
const gridSizeOutputElement = document.getElementById("gridTileCountDisplayer");
gridSizeOutputElement.textContent = 'Grid Size: ' + gridSize + " x " + gridSize;
//? The element where the grid itself is drawn.
let gridContainerElement = document.getElementById('drawing-area');
//? List of cells in the page.
let cells;
//! Needed to set each cell's height and width.
let gridContainerElementStyle = window.getComputedStyle(gridContainerElement);
let gridDimensionValue = gridContainerElementStyle.height;
let gridSizeValue = parseInt(gridDimensionValue, 10);
//? List of buttons in the page.
const buttons = document.querySelectorAll('button');
//? Individual buttons.
const toggleBordersBtn = document.getElementById('toggle-lines-btn');
const toggleColorBtn = document.getElementById('toggle-color-btn');
const toggleRainbowBtn = document.getElementById('toggle-rainbow-btn');
const toggleShaderBtn = document.getElementById('toggle-shader-btn');
const toggleLightnerBtn = document.getElementById('toggle-lightner-btn');
const toggleEraserBtn = document.getElementById('toggle-eraser-btn');
const clearGridBtn = document.getElementById('clear-grid-btn');
//? Value of the selected color.
const paintColorElement = document.getElementById('paint-color');
let paintColor;
//? Value of the background color.
const backgroundColorElement = document.getElementById('background-color');
let backgroundColor;
//? Checks if the borders are set to show.
let checkBorders = false;
//? Dimensions of each cell.
let height = 0;
let width = 0;
//? Checks which buttons are active.
let checkColor = false;
let checkRainbow = false;
let checkShader = false;
let checkLightner = false;
let checkEraser = false;
//? Randomly generated color.
let rainbowColor = 'rgb(0,0,0)';