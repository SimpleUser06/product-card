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

const consoleMessage = document.querySelector('.console-log-message');

function consoleLogMessageButton(message) {
  consoleMessage.addEventListener('click' , () => {
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
