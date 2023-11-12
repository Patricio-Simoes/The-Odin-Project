powerBtnElement.addEventListener('click', power);
numBtnElements.forEach(function(btn){
    btn.addEventListener('click', insertDigit);
    btn.addEventListener('click', updateOutput);
});
oprBtnElements.forEach(function(btn){
    btn.addEventListener('click', insertOperator);
});
auxBtnElements.forEach(function(btn){
    btn.addEventListener('click', handleAux);
});