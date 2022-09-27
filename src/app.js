import cardTemplate from './template/card-template';
import menuFood from '../menu.json';


const menuContainer = document.querySelector('.js-menu');
const menuMarkup = cardTemplate(menuFood);
menuContainer.insertAdjacentHTML('beforeend', menuMarkup); 

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  
  const THEME_KEY = 'theme';
  
  const themeSwitcher = document.querySelector('.theme-switch__toggle');
  themeSwitcher.addEventListener('change', switchTheme);
  
  makeSavedTheme();
  
  
  function switchTheme(e) {
    e.target.checked ? 
    replaceTheme(Theme.LIGHT, Theme.DARK) : 
    replaceTheme(Theme.DARK, Theme.LIGHT);
  }
  
  function replaceTheme(oldTheme, newTheme) {
    document.body.classList.add(newTheme);
    document.body.classList.remove(oldTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  }
  
  
  function makeSavedTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === Theme.DARK) {
      themeSwitcher.checked = true;
      replaceTheme(Theme.LIGHT, Theme.DARK);
    } else {
      replaceTheme(Theme.DARK, Theme.LIGHT);
    }
   



  }