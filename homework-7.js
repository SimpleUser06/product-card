import { comments } from "./comments.js";


// №1. Массив чисел от 1 до 10. Отфильтрован таким образом, чтобы получить массив чисел начиная с 5.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNums= numbers.filter(number => number >= 5);

console.log(filteredNums);



// №2. Массив из фильмов. Проверка, есть ли в массиве какая-то определенная сущность.

const movies = ['The Shawshank Redemption', 'The Godfather', 'Pulp Fiction', ' Fight Club'];

const movieSearch = movies.includes('Pulp Fiction');
console.log(movieSearch)


// №3. Функция, которая аргументом принимает массив и изменяет его порядок на противоположный.


function ReverseArray(array) {
 return array.reverse()
};

console.log(ReverseArray(numbers));
console.log(ReverseArray(movies));

// №5. Добавить файл comments.js, в нём создать константу и в него поместить первые 10 объектов этого массива (https://jsonplaceholder.typicode.com/comments). 

// №6. Сделать константу экспортируемой, добавив перед "const" ключевое слово "export". 


// №7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com".

const comEmails = comments.filter((comment) => comment.email.includes('.com'));

console.log(comEmails);

// №8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1.

const comments2 = comments.map(comment => ({
  ...comment, postId: comment.id <= 5 ? 2 : 1
}));

console.log(comments2);


// №9. Перебрать массив, что бы объекты состояли только из айди и имени.

const commentsInfo = comments.map(comment => ({
  id: comment.id,
  name: comment.name
}));

console.log(commentsInfo)

// №10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.

const isInvalid = comments.map(comment => ({
  ...comment, isInvalid: comment.body.length > 180
}));

console.log(isInvalid);



// №10. Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть тоже самое с помощью метода map.

const emails = comments.reduce((acc, comment) => {
    acc.push(comment.email);
    return acc
}, []);

console.log(emails)



const emails2 = comments.map(comment => {
  return comment.email
});

console.log(emails2)


// №11. Почитать про методы toString(), join() и перебрав массив с задания №10, привести его к строке.

const emailsString = emails.toString()
console.log(emailsString)

const emailList = emails.join(' - ')
console.log(emailList)