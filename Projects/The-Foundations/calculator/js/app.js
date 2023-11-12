function power() {
    //* Powers the calculator on.
    if (!powered) {
        powered = true;
        textAreaElement.style.cssText = "background-color: #CCC; visibility: visible;";
    }
    //* Powers the calculator off.
    else {
        powered = false;
        textAreaElement.style.cssText = "background-color: transparent; visibility: hidden;";
        clear();
    }
}

//? Inserts a digit on the input field once a button is clicked.
function insertDigit(e) {
    if (!appLock && powered) {
        const btn = e.target;
        if (input.length < inputMaxLength) {
            input += btn.dataset.value;
            if (inputType == 'operator' || secondNumber != '')
                secondNumber += btn.dataset.value;
            else
                firstNumber += btn.dataset.value;
            inputFieldElement.textContent = input;
            inputType = 'numeric';
        }
    }
    else
        return;
}

//? Inserts an operator on the input field once a button is clicked.
function insertOperator(e) {
    if (!appLock && powered) {
        const btn = e.target;
        if (btn.dataset.value == '=') {
            inputFieldElement.textContent = '';
            firstNumber = result;
            secondNumber = '';
            input = firstNumber;
        }
        else if (input.length < inputMaxLength && inputType == 'numeric') {
            operator = btn.dataset.value;
            inputType = 'operator';
            input += ' ' + btn.dataset.value + ' ';
            inputFieldElement.textContent = input;
            //* Updates the number values once the operation is done.
            if (secondNumber != '') {
                firstNumber = result;
                secondNumber = '';
                input = outputFieldElement.textContent.toString() + ' ' + operator + ' ';
                inputFieldElement.textContent = input;
            }
        }
    }
    else
        return
}

//? Keeps updating the output field with the result of the operations.
function updateOutput() {
    if (!appLock && powered) {
        try {
            switch (operator) {
                case '+':
                    if (secondNumber !== '')
                        result = (parseFloat(firstNumber) + parseFloat(secondNumber)).toFixed(1).toString();
                    else
                        result = parseFloat(firstNumber).toString();
                    outputFieldElement.textContent = result;
                    break;
                case '-':
                    if (secondNumber !== '')
                        result = (parseFloat(firstNumber) - parseFloat(secondNumber)).toFixed(1).toString();
                    else
                        result = parseFloat(firstNumber).toString();
                    outputFieldElement.textContent = result;
                    break;
                case 'x':
                    if (secondNumber !== '')
                        result = (parseFloat(firstNumber) * parseFloat(secondNumber)).toFixed(1).toString();
                    else
                        result = parseFloat(firstNumber).toString();
                    outputFieldElement.textContent = result;
                    break;
                case '/':
                    //! If trying to divide by 0, the program becomes locked.
                    //! To unlock, either the 'C' button must be pressed, or the page refreshed.
                    if (secondNumber == 0) {
                        result = "ERROR! Cannot divide by 0!";
                        appLock = true;
                    } else if (secondNumber !== '')
                        result = (parseFloat(firstNumber) / parseFloat(secondNumber)).toFixed(1).toString();
                    else
                        result = parseFloat(firstNumber).toString();
                    outputFieldElement.textContent = result;
                    break;
                case '%':
                    if (secondNumber !== '')
                        result = (parseFloat(firstNumber) % parseFloat(secondNumber)).toFixed(1).toString();
                    else
                        result = parseFloat(firstNumber).toString();
                    outputFieldElement.textContent = result;
                    break;
            }
        }
        catch {
            return;
        }
    }
    else
        return;
}

//? Handles the aux buttons.
function handleAux(e) {
    if (powered) {
        const btn = e.target;
        if (btn.dataset.value == 'C') {
            clear();
        }
        if (!appLock) {

        }
        else
            return;
    }
    else
        return;
}

//* Clears everything.
function clear() {
    firstNumber = '';
    secondNumber = '';
    result = '';
    operator = '';
    input = '';
    inputType = '';
    appLock = false;
    inputFieldElement.textContent = '';
    outputFieldElement.textContent = '';
}