import { nanoid } from 'nanoid';
import clipboard from 'clipboard-copy';
import "../css/style.css";

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');

passwordBtnEl.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPasswordEl.innerHTML = randomPassword;
});

displayPasswordEl.addEventListener('click', (event) => {
  clipboard(event.target.innerHTML);
});