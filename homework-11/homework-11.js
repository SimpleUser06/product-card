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


const newCoffee = new Coffee('капучино', 'средний', 15, 68, 'робуста + арабика', 'миндалльное', 'каштан + соленая карамель');
console.log(newCoffee);

console.log(newCoffee.changeMilk('кокосовое'));


const newSoda = new Soda('Cola', 0.5, 10, 4, 3);
console.log(newSoda);

console.log(newSoda.changeIceValue(2));


const greenTea = new Tea('tea', 'medium', 20, 'green', 70, 3);
console.log(greenTea);

console.log(greenTea.changeSugarValue(2));