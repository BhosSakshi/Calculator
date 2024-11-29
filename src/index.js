// Create Calculator Elements Dynamically
const body = document.body;

// Create Calculator Container
const calculator = document.createElement('div');
calculator.style.width = '300px';
calculator.style.margin = '50px auto';
calculator.style.fontFamily = 'Arial, sans-serif';
calculator.style.border = '1px solid #ccc';
calculator.style.borderRadius = '10px';
calculator.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
calculator.style.padding = '20px';
calculator.style.background = '#fff';
body.appendChild(calculator);

// Create Display
const display = document.createElement('div');
display.style.width = '100%';
display.style.height = '50px';
display.style.marginBottom = '20px';
display.style.textAlign = 'right';
display.style.fontSize = '1.5rem';
display.style.padding = '10px';
display.style.border = '1px solid #ddd';
display.style.borderRadius = '5px';
display.style.background = '#f9f9f9';
display.textContent = '0';
calculator.appendChild(display);

// Buttons Layout
const buttonsLayout = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['C', '0', '=', '+'],
];

// Create Buttons Container
const buttonsContainer = document.createElement('div');
buttonsContainer.style.display = 'grid';
buttonsContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
buttonsContainer.style.gap = '10px';
calculator.appendChild(buttonsContainer);

// Create Buttons
buttonsLayout.flat().forEach((btn) => {
  const button = document.createElement('button');
  button.textContent = btn;
  button.style.height = '50px';
  button.style.fontSize = '1.2rem';
  button.style.border = '1px solid #ccc';
  button.style.borderRadius = '5px';
  button.style.background = '#fff';
  button.style.cursor = 'pointer';
  button.style.transition = 'background 0.3s';

  // Button hover and active effects
  button.addEventListener('mouseover', () => (button.style.background = '#f1f1f1'));
  button.addEventListener('mouseout', () => (button.style.background = '#fff'));
  button.addEventListener('mousedown', () => (button.style.background = '#ddd'));
  button.addEventListener('mouseup', () => (button.style.background = '#f1f1f1'));

  // Button Click Logic
  button.addEventListener('click', () => handleButtonClick(btn));
  buttonsContainer.appendChild(button);
});

// JavaScript Logic
let currentInput = '';

function handleButtonClick(value) {
  if (value === 'C') {
    currentInput = '';
    display.textContent = '0';
  } else if (value === '=') {
    try {
      currentInput = eval(currentInput).toString(); // Evaluate the input safely
      display.textContent = currentInput;
    } catch {
      display.textContent = 'Error';
      currentInput = '';
    }
  } else {
    currentInput += value;
    display.textContent = currentInput;
  }
}
