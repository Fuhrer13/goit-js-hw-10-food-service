import menu from './menu.json';
import menuTemplate from './hbs/menu.hbs';

import './styles.css';

console.log(menu);
console.log(menuTemplate);

const markup = menuTemplate(menu);
const ul = document.querySelector('.js-menu');
ul.insertAdjacentHTML('afterbegin', markup);

//===========================================================
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const input = document.querySelector('input.js-switch-input');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === Theme.DARK) {
  input.checked = true;
  body.classList.add(Theme.DARK);
} else {
  input.checked = false;
  body.classList.add(Theme.LIGHT);
}

input.addEventListener('change', e => {
  if (e.target.checked) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', Theme.DARK);
  }
});
