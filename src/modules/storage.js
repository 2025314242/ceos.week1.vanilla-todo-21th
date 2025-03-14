const STORAGE_KEY = 'todos';

function loadAll() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
}

function saveAll(allTodos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allTodos));
}

export function loadTodos(date) {
  const allTodos = loadAll();
  return allTodos[date] || [];
}

export function saveTodos(date, todos) {
  const allTodos = loadAll();
  allTodos[date] = todos;
  saveAll(allTodos);
}
