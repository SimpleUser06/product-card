export default class User {
  constructor(id, name, surname, email, age) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.age = age;
  }

  createCard(template, onDelete) {
    const clone = template.content.cloneNode(true);

    clone.querySelector(".user-id").textContent = this.id;
    clone.querySelector(".user-name").textContent = this.name;
    clone.querySelector(".user-surname").textContent = this.surname;
    clone.querySelector(".user-email").textContent = this.email;
    clone.querySelector(".user-age").textContent = this.age;

    const deleteButton = clone.querySelector(".btn-delete");
    deleteButton.addEventListener("click", () => {
      onDelete(this.id);
    });

    return clone;
  }
}