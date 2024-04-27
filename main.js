// let expression = '';

// function appendInput(value) {
//     expression += value;
//     document.getElementById('display').value = expression;
// }

// function clearDisplay() {
//     expression = '';
//     document.getElementById('display').value = '';
// }

// function calculate() {
//     try {
//         let result = eval(expression);
//         document.getElementById('display').value = result;
//         expression = '';
//     } catch (error) {
//         document.getElementById('display').value = 'Error';
//         expression = '';
//     }
// }
let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  displayValue += operator;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result;
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}

function updateDisplay() {
  document.querySelector('.display').value = displayValue;
}