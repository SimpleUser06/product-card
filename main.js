// Смена цвета одной карточки

const changeCardColor = document.querySelector('.change-card-color');
const oneCard = document.querySelector('.card-container');

changeCardColor.addEventListener('click', () => {
  oneCard.style.backgroundColor = '#bb8c0dff'
});




// Смена цвета всех карточек

const allCards = document.querySelectorAll('.card-container');
const changeCardsColor = document.querySelector('.change-cards-color');
changeCardsColor.addEventListener('click', () => {
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

function ConsoleLogMessage(message) {
  consoleMessage.addEventListener('click' , () => {
    console.log(message)
  })
};

ConsoleLogMessage('ДЗ №4');



// Слушатель событий для заголовка

const mainTitle = document.querySelector('.main-title');

mainTitle.addEventListener('mouseover', () => {
  console.log(mainTitle.innerHTML);
});




// Смена цвета кнопки

const buttonColor = document.querySelector('.btn-color');

buttonColor.addEventListener('click', () => {
  buttonColor.classList.toggle('yellow')
});
