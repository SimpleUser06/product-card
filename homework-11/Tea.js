import Drink from "./Drink.js";

export default class Tea extends Drink {
  constructor(name, size, price, color, temperature, sugar) {
    super(name, size, price, temperature)
    this.color = color
    this.sugar = sugar + ' ч.л. сахара';
  }

  changeSugarValue(value) {
    if (!value) {
      return this.sugar = 'без сахара'
    } else {
      return this.sugar = value + ' ч.л. сахара'
    }
  }
}

const greenTea = new Tea('tea', 'medium', 20, 'green', 70, 3);
console.log(greenTea);

console.log(greenTea.changeSugarValue(2));

