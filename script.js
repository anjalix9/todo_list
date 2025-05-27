document.addEventListener('DOMContentLoaded', () => {
  const addButton = document.getElementById('addButton');
  const input = document.getElementById('taskInput');
  const todoList = document.getElementById('taskList');

  function addTask() {
    const taskText = input.value.trim();

    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.classList.add('task-item');

      listItem.innerHTML = `
        <label>
          <input type="checkbox" />
          <span>${taskText}</span>
        </label>
        <button class="remove-btn">Remove</button>
      `;

      listItem.querySelector('.remove-btn').addEventListener('click', () => {
        todoList.removeChild(listItem);
      });

      todoList.appendChild(listItem);
      input.value = '';
    } else {
      alert("Please enter a task!");
    }
  }

  addButton.addEventListener('click', addTask);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });
});
