let currentInput = '';
let previousInput = '';
let operator = null;

// Function to update the display
function updateDisplay(value) {
  document.getElementById('display').value = value;
}

// Function to append numbers to the current input
function appendNumber(number) {
  currentInput += number;
  updateDisplay(currentInput);
}

// Function to set the operation (add, subtract, multiply, divide)
function setOperation(op) {
  if (currentInput === '') return;  // Avoid operation if input is empty
  if (previousInput !== '') calculateResult();  // Calculate if there's a pending result

  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

// Function to calculate the result
function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        result = 'Error';
      } else {
        result = prev / current;
      }
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  updateDisplay(currentInput);
}

// Function to clear the display
function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  updateDisplay('');
}
