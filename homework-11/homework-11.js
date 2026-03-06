import Cafe from './Cafe.js';
import Tea from './Tea.js';
import Coffee from './Coffee.js';
import Soda from './Soda.js';

const tea = new Tea('чай', 'средний', 20, 'черный', 85);
console.log(tea);

const soda = new Soda('Лимонад', 'средний', 15, 4);
console.log(soda);


const coffee = new Coffee('латте', 'средний', 35, 70, 'арабика', 'кокосовое', 'сливочный пломбир');
console.log(coffee);


const cafeInfo = new Cafe('Surf Coffee', 'Неглинная ул., 14, стр. 1А');
console.log(cafeInfo.getInfo());


const newOrder = new Cafe();
newOrder.orderDrink(soda);