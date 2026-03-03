// Создать файл Modal.js и в нем создать  класс для модального окна под названием Modal. 
// Он будет принимать 1 параметр через конструктор - айди модального окна. 
// Внутри класса будут методы:
//   I. Для открытия модального окна.
//  II. Для закрытия модального окна.
//  III. Для проверки, открыто ли сейчас модальное окно.
//  IV. Метод, который слушает кнопку (крестик) для закрытия модалки и закрывает модалку (реализовать через eventListener) и вызывать в конструкторе.
// Используя данный класс - переписать логику задания №9, связанной с модальными окнами. 
// Как? Используя внутренние методы - мы можем управлять через айди модалки ее закрытием, открытием.


export default class Modal {
  constructor(modalId) {
    this.modalId = document.querySelector(modalId);
    this.modalOverlay = document.querySelector('.overlay');
    this.bodyStyle = document.querySelector('body');
  }

  openModal() {
    this.modalId.classList.add('modal-showed');
    this.modalOverlay.classList.add('modal-overlay');
    this.bodyStyle.style.overflow = 'hidden';
  }

  closeModal() {
    this.modalId.classList.remove('modal-showed');
    this.modalOverlay.classList.remove('modal-overlay');
    this.bodyStyle.style.overflow = 'auto';
  }
}
