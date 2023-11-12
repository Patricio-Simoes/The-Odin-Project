//* The power button.
const powerBtnElement = document.getElementById('power-btn');
//* Every button assigned to a numeric value.
const numBtnElements = document.querySelectorAll('.num-btn');
//* Every button assigned to an operation.
const oprBtnElements = document.querySelectorAll('.opr-btn');
//* Every button assigned to an auxiliary operation.
const auxBtnElements = document.querySelectorAll('.aux-btn');
//* The calculator's text area.
const textAreaElement = document.getElementById('text-area');
//* The input & output field text elements.
let inputFieldElement = document.getElementById('input');
let outputFieldElement = document.getElementById('output');
//* The current input text, resets when '=' is pressed.
let input = '';
let inputMaxLength = 15;
//* Monitors the type of the last button clicked;
let inputType = '';
//* Stores the values to update the output value.
let firstNumber = '';
let secondNumber = '';
let result = '';
let operator = '';
//* Controls the state of the app. If the app becomes locked, a clear is necessary.
let appLock = false;
//* Controls the power of the calculator.
let powered = false;