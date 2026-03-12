export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.closeButtonHandler = () => {
      this.close();
    };
    this.#initOpen(buttonId);
    this.overlayHandler = () => {
      this.close();
    };
  }



  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');

    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.overlayHandler);
    }

    this.#initClose();
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');

    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.overlayHandler);
    }

    this.#removeClose();
  }

    #removeClose() {
    const closeButton = this.modal.querySelector('#modal-close-button');
    closeButton.removeEventListener('click', this.closeButtonHandler);
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }

  #initClose() {
    const closeButton = this.modal.querySelector('#modal-close-button');

    closeButton.addEventListener('click', this.closeButtonHandler);
  }
}