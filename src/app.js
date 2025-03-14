import { CONSTANTS } from './modules/constants';
import { addTodo } from './modules/todo';
import { renderTodoList } from './modules/dom';

function init() {
  const root = document.getElementById('root');

  const today = new Date().toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  const header = document.createElement('header');
  header.id = 'header';
  header.textContent = CONSTANTS.HEADER;

  const main = document.createElement('div');
  main.id = 'main';

  const title = document.createElement('h1');
  title.id = 'title';
  title.textContent = CONSTANTS.TITLE;

  const dateElem = document.createElement('p');
  dateElem.id = 'date';
  dateElem.textContent = today;

  const form = document.createElement('form');
  form.id = 'todo-form';

  const emoji = document.createElement('span');
  emoji.textContent = CONSTANTS.EMOJI;

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = CONSTANTS.PLACEHOLDER;

  const addBtn = document.createElement('button');
  addBtn.type = 'submit';
  addBtn.textContent = CONSTANTS.ADD;

  form.appendChild(emoji);
  form.appendChild(input);
  form.appendChild(addBtn);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const text = input.value.trim();
    if (!text) {
      return;
    }

    addTodo(today, text);
    input.value = '';
    renderTodoList(today);
  });

  const ul = document.createElement('ul');
  ul.id = 'todo-list';

  main.appendChild(title);
  main.appendChild(dateElem);
  main.appendChild(form);
  main.appendChild(ul);

  root.appendChild(header);
  root.appendChild(main);

  renderTodoList(today);
}

init();
