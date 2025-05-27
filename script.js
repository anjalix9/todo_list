// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.querySelector('.add-task button');
  const input = document.querySelector('.add-task input');
  const todoList = document.querySelector('.todo-list');

  addButton.addEventListener('click', () => {
    const taskText = input.value.trim();

    if (taskText !== '') {
      // Create a new list item
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <label>
          <input type="checkbox" />
          ${taskText}
        </label>
      `;

      // Append to the list
      todoList.appendChild(listItem);

      // Clear the input field
      input.value = '';
    } else {
      alert("Please enter a task!");
    }
  });

  // Optional: Allow pressing Enter to add task
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addButton.click();
    }
  });
});
