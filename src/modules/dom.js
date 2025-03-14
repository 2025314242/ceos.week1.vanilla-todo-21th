import { CONSTANTS } from './constants.js';
import { loadTodos } from './storage.js';
import { removeTodo, toggleTodo } from './todo.js';

export function renderTodoList(date) {
  const todoListContainer = document.getElementById('todo-list');
  todoListContainer.innerHTML = '';

  const todos = loadTodos(date);
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'todo';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.checked;
    checkbox.addEventListener('change', () => {
      toggleTodo(date, index);
      renderTodoList(date);
    });

    const textSpan = document.createElement('span');
    textSpan.textContent = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = CONSTANTS.DELETE;
    deleteBtn.addEventListener('click', () => {
      removeTodo(date, index);
      renderTodoList(date);
    });

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(deleteBtn);

    todoListContainer.appendChild(li);
  });
}
