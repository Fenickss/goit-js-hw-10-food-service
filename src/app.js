import cardTemplate from './template/card-template';
import menuFood from '../menu.json';


const menuContainer = document.querySelector('.js-menu');
const menuMarkup = cardTemplate(menuFood);
menuContainer.insertAdjacentHTML('beforeend', menuMarkup); 


// const cardMarkup = createMenuCardsMarkup(menuFood);


// cardTemplate.insertAdjacentHTML('beforeend', cardMarkup);


// function createMenuCardsMarkup(menuFood) {
//      menuFood.map(cardTemplate).join('');
// }




