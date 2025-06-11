const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
//hold the current math expression being typed
let currentInput = '';

//Loop Over Each Button
buttons.forEach(button => {
  button.addEventListener('click', () => { // Add click event listener to each button
    // When a button is clicked, grab its visible text 
    const value = button.textContent;

    //If the clicked button is C (Clear)
    if (value === 'C') {
      currentInput = ''; // Reset current input
      display.value = ''; // Clear the display

      //f the clicked button is = (equals)
    } else if (value === '=') {
      try {
        //Try to evaluate the current string as a math expression using eval()
        currentInput = eval(currentInput).toString();
        display.value = currentInput; // Update the display with the result

        //If there’s a problem (like 5++), show "Error" and clear input.
      } catch {
        display.value = 'Error';
        currentInput = '';
      }
    } else {
      currentInput += value; //Add the clicked character to currentInput
      display.value = currentInput; // Update the display with the current input
    }
  });
});
