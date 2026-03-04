// 4. К Форме, которая прикреплена в футере - добавить логику:
// email должен соответствовать стандартам (добавить валидацию), если он не заполнен - форма не отправляется. 
// Кнопка "Подписаться" и есть "отправкой формы", при нажатии на которую мы будем выводить 
// консоль лог в виде объекта:  { email: 'введенная почта' }

//  6. Создать форму для регистрации внутри модального окна. 
//  Она должна содержать поля: имя, фамилия, дата рождения, логин, пароль, повторение пароля. 
//  Используйте <label> для того, что бы указать пользователю, какое поле за что отвечает. 
//  Также важно использовать placeholder (обо всем этом можно будет почитать в документации в конце поста) 
//  Разрешается добавить поля на ваше усмотрение. Все поля должны иметь валидацию. 
//  Если пользователь ввел два разных пароля или форма невалидна (используем метод checkValidity()) - мы должны предупредить его о том, 
//  что регистрация отклонена. Если регистрация успешна - выводим значения формы в лог, как в задании №4. 
//  Дополнительно мы должны добавить к этому объекту свойство createdOn и указать туда время создания (используем сущность new Date()). 
//  Также создайте внешнюю переменную user и присвойте ей этот объект. После успешной регистрации - модалка должны закрыться.
import Modal from './modal.js';
import Form from './form.js';


const emailForm = new Form('#email-form');
const emailFormBtn = document.querySelector('#email-form');
const formData = new Form('.registration-form');
let user = null;


emailFormBtn.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(emailForm.getFormData(event));
})



const regBtn = document.querySelector('.registration-btn');
const modal = new Modal('.modal');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const regForm = new Form('.registration-form')


regBtn.addEventListener('click', () => {
  modal.openModal();
})


modalCloseBtn.addEventListener('click', (event) => {
  event.preventDefault();
  modal.closeModal();
})


const regFormElement = document.querySelector('.registration-form');

regFormElement.addEventListener('submit', (event) => {
  event.preventDefault();
  

  const data = regForm.getFormData();
  

  if (data.userPassword !== data.confirmPassword) {
    alert('Введенные пароли не совпадают!');
    return;
  }
  
  if (regForm.validateAndReport()) {
    data.createdOn = new Date();
    user = data;
    console.log(user);
    modal.closeModal();
    regForm.resetForm();
  }
});