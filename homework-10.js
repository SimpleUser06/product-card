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

class Area extends Country {
  constructor(country, capital, area) {
    super(country, capital);
    this.area = area;
  }

  showArea() {
    console.log(`${this.capital} is the capital of ${this.country}. The area of the ${this.country} = ${this.area}km2`);
  }
};


const egypt = new Area('Egypt', 'Cairo', 1010408);

egypt.showArea()