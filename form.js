// 5. Создать файл Form.js и реализовать класс для формы под названием Form. Он будет принимать 1 параметр - айди формы. Внутри класса будут методы:
//   I. Для получения всех значений формы.
//  II. Для проверки валидности формы (метод возвращает true/false в зависимости от того, валидна ли форма).
//  III. Для сброса значений формы.
// Используя данный класс - переписать логику задания №9, связанной с формами. 
// Как? Используя внутренние методы - мы можем управлять через айди формы получением значений и всем, что должна делать модалка.

export default class Form {
  constructor(formId) {
    this.formId = document.querySelector(formId);
  }

  getFormData = (form) => {
  form = form.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    return data;
  }

  checkValidity(data) {
    let user = null;
    if (data.userPassword !== data.confirmPassword) {
    alert('Веденные пароли не совпадают!')
  } else {
    data.createdOn = new Date;
    user = data
    console.log(user);
  }
  }
}