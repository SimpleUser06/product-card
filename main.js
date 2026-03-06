import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './homework-10/homework-10.js';
import './homework-10/modal.js';
import './homework-10/form.js';
import './homework-11/homework-11.js';
import './homework-11/Drink.js';
import './homework-11/Cafe.js';
import './homework-11/Tea.js';
import './homework-11/Coffee.js';
import './homework-11/Soda.js';



// Смена цвета одной карточки

const changeCardColorButton = document.querySelector('.change-card-color');
const firstCard = document.querySelector('.card-container');

changeCardColorButton.addEventListener('click', () => {
  firstCard.style.backgroundColor = '#bb8c0dff'
});




// Смена цвета всех карточек

const allCards = document.querySelectorAll('.card-container');
const changeCardsColorButton = document.querySelector('.change-cards-color');

changeCardsColorButton.addEventListener('click', () => {
  allCards.forEach((card) => {
    card.style.backgroundColor = '#24c9c1ff';
  })
});




// Открыть сайт Google.com

const openGoogleButton = document.querySelector('.open-google-page');

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://google.com');
  } else {
    return
  }
};

openGoogleButton.addEventListener('click', openGoogle);



// Вывод сообщения

const consoleMessageButton = document.querySelector('.console-log-message');

function consoleLogMessageButton(message) {
  consoleMessageButton.addEventListener('click' , () => {
    console.log(message)
  })
};

consoleLogMessageButton('ДЗ №4');



// Слушатель событий для заголовка

const mainTitle = document.querySelector('.main-title');

mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.innerHTML);
});




// Смена цвета кнопки

const buttonColor = document.querySelector('.btn-color');

buttonColor.addEventListener('click', () => {
  buttonColor.classList.toggle('bg-yellow')
});
