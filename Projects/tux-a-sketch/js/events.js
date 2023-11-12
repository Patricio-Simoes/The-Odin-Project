gridSizeElement.addEventListener('input', updateGridSize);
buttons.forEach(function(button) {
    button.addEventListener('click', toggleBtn);
});
toggleBordersBtn.addEventListener('click', toggleBorders);
toggleColorBtn.addEventListener('click', toggleColor);
toggleRainbowBtn.addEventListener('click', toggleRainbow);
toggleShaderBtn.addEventListener('click', toggleShader);
toggleLightnerBtn.addEventListener('click', toggleLightner);
toggleEraserBtn.addEventListener('click', toggleEraser);
clearGridBtn.addEventListener('click', clearGrid);
cells.forEach(function(cell){
    addEventListener('mousedown', toggleCellAction)
});
paintColorElement.addEventListener('change', updatePaintColor);
backgroundColorElement.addEventListener('change', updateBackgroundColor);

//! Occurs when changing from phones to tables and vice-versa
const smallerPhoneBreakpoint = window.matchMedia("(max-width: 430px)");
const phoneBreakpoint = window.matchMedia("(max-width: 600px)");
const tabletBreakpoint = window.matchMedia("(min-width: 601px) and (max-width: 768px)");

// Add the event listener to the media query
smallerPhoneBreakpoint.addEventListener("change", drawGrid);
phoneBreakpoint.addEventListener("change", drawGrid);
tabletBreakpoint.addEventListener("change", drawGrid);