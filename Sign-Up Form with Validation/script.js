const form = document.getElementById('signupForm');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  // Clear old error messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';

  // Get form values
  const name = document.getElementById('name').value.trim(); // .value.trim() - removes whitespace before and after the input
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  let valid = true;

  // Name validation
  if (name === '') { // Check if name is empty
    document.getElementById('nameError').textContent = 'Name is required.'; //Show an error message by setting the text of the element with ID nameError (defined in index).
    valid = false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //emailRegex is a regular expression (regex) that checks for a basic valid email format.
  if (!emailRegex.test(email)) { //test() checks if the email matches the regex pattern.
    //The ! (not) operator reverses the result of the test, so if the email does not match the pattern, it will execute the code inside the if block.
    document.getElementById('emailError').textContent = 'Enter a valid email.';
    valid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});
