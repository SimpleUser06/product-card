// 1. Функция для вывода температуры города в консоль

function showWeather(city, temperature) {
  console.log(`Сейчас в городе ${city} температура - ${temperature} градусов по Цельсию`)
};

showWeather('Магас', 15);



// 2. Функция для сравнения выбранного числа со скоростью звука

const SPEED_OF_SOUND = 331;

function compareTheSpeed(speed) {
  if (speed > SPEED_OF_SOUND) {
    console.log('Сверхзвуковая скорость')
  } else {
    console.log('Дозвуковая скорость')
  }
};

compareTheSpeed(350);



// 3. Функция для подсчета стоимости товара.

const product = 'Кофе';
const productPrice = 15;

function calculateTheCost(budget) {
  if (budget >= 15) {
    console.log(`${product} приобретен. Спасибо за покупку!`)
  } else {
    const difference = productPrice - budget;
    console.log(`Вам не хватает ${difference}$, пополните баланс.`)
  }
};

calculateTheCost(10);



// 4. Функция для подсчета температуры тела.

const normalTemperature = 36.6;

function measureTheTemperature(temperature) {
  if (temperature > normalTemperature) {
    console.log(`Ваша температура равна ${temperature} градусам. Обратитесь к врачу!`)
  } else if (temperature <= 35) {
    console.log(`Ваша температура равна ${temperature} градусам. У вас гипотермия! Зайдите в тёплое помещение и обратитесь к врачу!`)
  } else {
    console.log(`Температура вашего тела ${temperature} градусов. Все в порядке.`)
  }
}

measureTheTemperature(311)



// 5. Создание переменных.

const LIGHT_SPEED = 299792458;

const capitalOfFrance = 'Paris';

let age = 35;
