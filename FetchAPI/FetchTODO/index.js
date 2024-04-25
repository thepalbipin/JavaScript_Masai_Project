document.addEventListener('DOMContentLoaded', function() {
  const fetchTodosBtn = document.getElementById('fetchTodosBtn');
  const todoList = document.getElementById('todoList');

  fetchTodosBtn.addEventListener('click', async function() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      displayTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  });

  function displayTodos(todos) {
    todoList.innerHTML = ''; // Clear previous todos

    todos.forEach(todo => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todoitem');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed; // Set checkbox based on completed state

      const todoText = document.createElement('span');
      todoText.textContent = todo.title;

      todoItem.appendChild(todoText);
      todoItem.appendChild(checkbox);
      todoList.appendChild(todoItem);
    });
  }
});