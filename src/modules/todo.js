import { loadTodos, saveTodos } from './storage.js';

export function addTodo(date, text) {
  const todos = loadTodos(date);
  todos.unshift({
    text,
    checked: false,
  });
  saveTodos(date, todos);
}

export function removeTodo(date, index) {
  const todos = loadTodos(date);
  todos.splice(index, 1);
  saveTodos(date, todos);
}

export function toggleTodo(date, index) {
  const todos = loadTodos(date);
  todos[index].checked = !todos[index].checked;
  saveTodos(date, todos);
}
