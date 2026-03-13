export default class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    return `Кафе: ${this.name}. Наш адрес: ${this.location}`
  }

  orderDrink(drink) {
    console.log('Заказ принят!');
    drink.serveDrink();
  }
}