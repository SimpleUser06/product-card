export default class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    this.#temperature = temperature + 'гр';
    this.name = name;
    this.size = size;
    this.price = price + 'руб.';
  }
  

  getInfo() {
    return[this.name, this.size, this.#temperature, this.price]
  }

  getTemperature() {
    return `Температура напитка ${this.#temperature}`
  }

  setTemperature(temperature) {
    if (temperature <= 0 || temperature > 100) {
      return 'Выбор данной температуры невозможен'
    } else {
      this.#temperature = temperature;
      return `Выбранная температура = ${temperature}`
    }
  }

  #makeDrink() {
    this.getInfo();
    this.getTemperature();
  }

  serveDrink() {
    this.#makeDrink();
    console.log(`Ваш ${this.name} готов!`);
  }
}