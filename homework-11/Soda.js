import Drink from "./Drink.js";

export default class Soda extends Drink {
  constructor(name, size, price, temperature, ice) {
    super(name, size, price, temperature)
    this.ice = ice + ' кубик(а) льда';
  }

  changeIceValue(value) {
    if (!value) {
      return 'без льда'
    } else {
    return this.ise = value + ' кубик(а) льда';
    }
  }
}


const newSoda = new Soda('Cola', 0.5, 10, 4, 3);
console.log(newSoda);

console.log(newSoda.changeIceValue(2));