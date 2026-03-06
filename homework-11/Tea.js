import Drink from "./Drink.js";

export default class Tea extends Drink {
  constructor(name, size, price, color, temperature) {
    super(name, size, price, temperature)
    this.color = color
  }
}

