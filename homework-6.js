// 1. Объект на основе моих данных.

const userInfo = {
  name: 'Magomed',
  age: 30,
  country: 'Russia',
  city: 'Moscow',
  maritalStatus: 'married',
  job: 'Gazprom-neft'
};



// 2. Объект, содержащий данные автомобиля.

const carInfo = {
  brand: 'Chevrolet',
  model: 'Tahoe',
  year: 2020,
  color: 'black',
  transmission: 'automatic'
}

carInfo.carOwner = userInfo.name;

console.log(carInfo);



// 3. Функция, проверяющая, а при необходимости, добавляющая свойство "максимальная скорость".

function hasProrerty(maxSpeed) {
  if (!carInfo.maxSpeed) {
    carInfo.maxSpeed = '240 km/h'
    console.log(carInfo)
  } else {
    return
  }
}

hasProrerty()



// 4. Функция, принимающая в качестве аргументов объект и его свойство, и выводящая его в консоль лог.

function getObjectProperty(object, property) {
    console.log(object[property])
}

getObjectProperty(userInfo, 'city');



// 5. Массив, содержащий продукты.

const food = ['apple', 'tomato', 'orange', 'lime'];



// 6. Массив, содержащий книги.

const books = [
  { 
    name: 'Gone with the Wind',
    author: 'Margaret Mitchell',
    genre: 'novel',
    year: 1936,
    color: 'beige'
  },
  {
    name: 'Metro 2033',
    author: 'Dmitry Glukhovsky',
    genre: 'post-apocalyptic novel',
    year: 2005,
    color: 'black'
  },
  {
    name: '11/22/63',
    author: 'Stephen King',
    genre: 'novel/fantasy',
    year: 2011,
    color: 'red'
  },
  {
    name: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    genre: 'adventure novel',
    year: 1844,
    color: 'blue'
  }
]



// 7. Массив, содержащий серию книг.

const harryPotterBooks = [
  { 
    name: "Philosopher's Stone",
    author: 'J. K. Rowling',
    genre: 'fantasy',
    year: 1997,
    color: 'red'
  },
  { 
    name: 'Chamber of Secrets',
    author: 'J. K. Rowling',
    genre: 'fantasy',
    year: 1998,
    color: 'purple'
  },
  { 
    name: 'Prisoner of Azkaban',
    author: 'J. K. Rowling',
    genre: 'fantasy',
    year: 1999,
    color: 'purple'
  },
  { 
    name: 'Goblet of Fire ',
    author: 'J. K. Rowling',
    genre: 'fantasy',
    year: 2000,
    color: 'orange'
  },
  { 
    name: 'Goblet of Fire ',
    author: 'J. K. Rowling',
    genre: 'fantasy',
    year: 2000,
    color: 'orange'
  }
];



// 8. Массив, объедияющий два массива из предыдущих заданий, с помощью Spread-оператора. 

const allBooks = [...books, ...harryPotterBooks];

console.log(allBooks);



// 9. Функция, для добавления и проверки книги на редкость.


function isRareBook(books) {
  return books.map(book => ({
    ...book, rare: book.year < 2000
  }));
}


console.log(isRareBook(harryPotterBooks))