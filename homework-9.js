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


const emailForm = document.querySelector('#email-form');

emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data)
})



const regBtn = document.querySelector('.registration-btn');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const regSubmitBtn = document.querySelector('.reg-submit-btn');
const body = document.querySelector('body');
const modalOverlay = document.querySelector('.overlay');
const regForm = document.querySelector('.registration-form');
let user = {}


regBtn.addEventListener('click', () => {
  modal.classList.add('modal-showed');
  body.style.overflow = 'hidden';
  modalOverlay.classList.add('modal-overlay');
})


modalCloseBtn.addEventListener('click', (event) => {
  event.preventDefault();
  modal.classList.remove('modal-showed');
  body.style.overflow = 'auto';
  modalOverlay.classList.remove('modal-overlay');
})


regForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(regForm);
  const data = Object.fromEntries(formData.entries());
  if (data.userPassword !== data.confirmPassword) {
    alert('Веденные пароли не совпадают!')
  } else {
  data.createdOn = new Date;
  user = data
  console.log(user);
  modal.classList.remove('modal-showed');
  body.style.overflow = 'auto';
  modalOverlay.classList.remove('modal-overlay');
  }
})



