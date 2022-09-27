import cardTemplate from './template/card-template';
import menuFood from '../menu.json';


const menuContainer = document.querySelector('.js-menu');
const cardMarkup = createMenuCardsMarkup(menuFood)


cardTemplate.insertAdjacentHTML('beforeend', cardMarkup);

function createMenuCardsMarkup(menuFood) {
    menuFood.map(cardTemplate).join('');
}
