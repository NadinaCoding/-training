//get the form, input, and task list elements from index.html
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();

  // Validate input - check if taskText is not empty - if emty show an alert
  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  // Create new list item - new HTML element and stores it in the variable li
  const li = document.createElement('li'); //Calls a method on the document object (which represents the whole webpage). Creates a brand-new <li> element in memory.
  // Set the text content of the li to the task text - textContent is better than innerHTML for text-only content
  li.textContent = taskText; 

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  //This assigns the button the CSS class "delete-btn" for styling purposes in the CSS file.
  deleteBtn.className = 'delete-btn';

  // appendChild - method adds a new child element inside a parent element. In this case, it adds the delete button to the li element.
  li.appendChild(deleteBtn);

  // Adds newly created <li> element (task text and delete button) to the existing <ul> element called taskList.
  taskList.appendChild(li);

  // Clear input field after adding task
  taskInput.value = '';

  // When clicking on the task item, toggle the 'completed' class
  li.addEventListener('click', function (e) { // e or event is the event object. Can be used to access properties of the event, like which element was clicked.
    if (e.target !== deleteBtn) { //When you click anywhere inside the <li> except the delete button (deleteBtn), it toggles the "completed" CSS class on the <li>.
      li.classList.toggle('completed');
    }
  });

  // Delete task on clicking delete button
  deleteBtn.addEventListener('click', function () {
    taskList.removeChild(li);
  });
});
