// USE if you would like to use the hamburger menu functionality with javascript

// This script toggles the visibility of navigation links when the hamburger icon is clicked
// Get references to DOM elements
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Toggle "active" class on click to show/hide nav links
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});