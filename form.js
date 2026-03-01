// 5. Создать файл Form.js и реализовать класс для формы под названием Form. Он будет принимать 1 параметр - айди формы. Внутри класса будут методы:
//   I. Для получения всех значений формы.
//  II. Для проверки валидности формы (метод возвращает true/false в зависимости от того, валидна ли форма).
//  III. Для сброса значений формы.
// Используя данный класс - переписать логику задания №9, связанной с формами. 
// Как? Используя внутренние методы - мы можем управлять через айди формы получением значений и всем, что должна делать модалка.

class Form {
  constructor(formId) {
    this.formId = formId;
    this.emailForm = document.querySelector('#email-form');
    this.regForm = document.querySelector('.registration-form');
    this.body = document.querySelector('body');
    this.modal = document.querySelector('.modal');
    this.modalOverlay = document.querySelector('.overlay');
  }

  formData() {
  this.getFormData = (form) => {
  form = form.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  return data;
}
  }

  getEmail() {
  this.emailForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(this.getFormData(event));
})
  }

  registForm() {
  this.regForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = this.getFormData(event);
  let user = null;
  if (data.userPassword !== data.confirmPassword) {
    alert('Веденные пароли не совпадают!')
  } else {
  data.createdOn = new Date;
  user = data
  console.log(user);
  this.modal.classList.remove('modal-showed');
  this.body.style.overflow = 'auto';
  this.modalOverlay.classList.remove('modal-overlay');
  }
})
  }
}

const formId = new Form();
formId.formData();
formId.getEmail();
formId.registForm();