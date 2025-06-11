const themeToggle = document.getElementById('themeToggle');
const colorPicker = document.getElementById('colorPicker');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Update button text depending on mode
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Switch to Light Mode';
    // Reset background color to dark default
    document.body.style.backgroundColor = '#222';
    colorPicker.value = '#222222';
  } else {
    themeToggle.textContent = 'Switch to Dark Mode';
    // Reset background color to light default
    document.body.style.backgroundColor = '#ffffff';
    colorPicker.value = '#ffffff';
  }
});

// Change background color on color picker input
colorPicker.addEventListener('input', (e) => {
  // Apply selected color as background
  document.body.style.backgroundColor = e.target.value;

  // If custom color picked, remove dark-mode class to avoid conflict
  document.body.classList.remove('dark-mode');

  // Update button text accordingly
  themeToggle.textContent = 'Switch to Dark Mode';
});
