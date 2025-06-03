var index = 0;

function changeBackgroundColor() {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F0E68C', '#FF69B4'];
  const body = document.querySelector('body');
  
  // Change the background color
  body.style.backgroundColor = colors[index];
  
  // Update the index for the next color
  index = (index + 1) % colors.length;
}