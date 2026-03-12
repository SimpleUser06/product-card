import Drink from "./Drink.js";

export default class Coffee extends Drink {
  constructor(name, size, price, temperature, seed, milk, syrup) {
    super(name, size, price, temperature);
    this.seed = seed;
    this.milk = milk + ' молоко';
    this.syrup = syrup;
  }

  changeMilk(milk) {
    return this.milk = milk + ' молоко'
  }
}