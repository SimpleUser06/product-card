// Создать структуру на ваш выбор, как было показано в лекции (имеется ввиду - с машинами/бьюти-продуктами). 
// Придумайте свою структуру и реализуйте наследуемость классов.

class Country {
  constructor(country, capital) {
    this.country = country;
    this.capital = capital;
  }

  showCapital() {
    console.log(`${this.capital} is the capital of ${this.country}`)
  }
}

const usa = new Country('USA', 'Washington, D.C')
const china = new Country('China', 'Beijing')

usa.showCapital();
china.showCapital();