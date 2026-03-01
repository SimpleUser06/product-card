// Создать файл Modal.js и в нем создать  класс для модального окна под названием Modal. 
// Он будет принимать 1 параметр через конструктор - айди модального окна. 
// Внутри класса будут методы:
//   I. Для открытия модального окна.
//  II. Для закрытия модального окна.
//  III. Для проверки, открыто ли сейчас модальное окно.
//  IV. Метод, который слушает кнопку (крестик) для закрытия модалки и закрывает модалку (реализовать через eventListener) и вызывать в конструкторе.
// Используя данный класс - переписать логику задания №9, связанной с модальными окнами. 
// Как? Используя внутренние методы - мы можем управлять через айди модалки ее закрытием, открытием.

class Modal {
  constructor(modalId) {
    this.modalId = modalId;
    this.modal = document.querySelector('.modal');
    this.regBtn = document.querySelector('.registration-btn');
    this.body = document.querySelector('body');
    this.modalOverlay = document.querySelector('.overlay');
    this.modalCloseBtn = document.querySelector('.modal-close-btn');
  }

  openModal() {
  this.regBtn.addEventListener('click', () => {
  this.modal.classList.add('modal-showed');
  this.body.style.overflow = 'hidden';
  this.modalOverlay.classList.add('modal-overlay');
})
  }

  closeModal() {
  this.modalCloseBtn.addEventListener('click', (event) => {
  event.preventDefault();
  this.modal.classList.remove('modal-showed');
  this.body.style.overflow = 'auto';
  this.modalOverlay.classList.remove('modal-overlay');
})
  }
}

const modalId = new Modal();
modalId.openModal();
modalId.closeModal();