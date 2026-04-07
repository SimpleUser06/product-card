import User from "./User.js";

const USERS_ALL_KEY = "usersAll";
const USERS_CURRENT_KEY = "usersCurrent";
const message = document.getElementById("message");
const usersContainer = document.getElementById("usersContainer");
const userTemplate = document.getElementById("user-template");
const deleteAllBtn = document.getElementById("deleteAllBtn");
const showAllBtn = document.getElementById("showAllBtn");


function getUsers(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

function saveUsers(key, users) {
  localStorage.setItem(key, JSON.stringify(users));
}

function renderUsers(users) {
  usersContainer.innerHTML = "";

  if (!users.length) {
    alert("Нет карточек для отображения");
    return;
  }

  message.textContent = "";

  users.forEach((userData) => {
    const user = new User(
      userData.id,
      userData.name,
      userData.surname,
      userData.email,
      userData.age
    );

    const card = user.createCard(userTemplate, deleteUserCard);
    usersContainer.append(card);
  });
}

function deleteUserCard(userId) {
  const currentUsers = getUsers(USERS_CURRENT_KEY) || [];

  const updatedUsers = currentUsers.filter((user) => user.id !== userId);

  saveUsers(USERS_CURRENT_KEY, updatedUsers);
  renderUsers(updatedUsers);
}

function deleteAllCards() {
  const currentUsers = getUsers(USERS_CURRENT_KEY) || [];

  if (!currentUsers.length) {
    alert("Все карточки уже удалены");
    return;
  }

  saveUsers(USERS_CURRENT_KEY, []);
  renderUsers([]);
}

function showAllCards() {
  const allUsers = getUsers(USERS_ALL_KEY) || [];
  const currentUsers = getUsers(USERS_CURRENT_KEY) || [];

  if (!allUsers.length) {
    alert("Нет данных для восстановления");
    return;
  }

  if (currentUsers.length === allUsers.length) {
    alert("У вас уже отображены все пользователи");
    return;
  }

  saveUsers(USERS_CURRENT_KEY, allUsers);
  renderUsers(allUsers);
}

async function fetchUsers() {
  try {
    message.textContent = "Данные загружаются";

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const response = await fetch("./users.json");

    if (!response.ok) {
      throw new Error("Ошибка загрузки");
    }

    const data = await response.json();

    if (!data.users) {
      throw new Error("Некорректные данные");
    }

    saveUsers(USERS_ALL_KEY, data.users);
    saveUsers(USERS_CURRENT_KEY, data.users);

    renderUsers(data.users);
  } catch (error) {
    console.error(error);
    usersContainer.innerHTML = "";
    message.textContent = "Ошибка при загрузке данных";
  }
}

function init() {
  const allUsers = getUsers(USERS_ALL_KEY);
  const currentUsers = getUsers(USERS_CURRENT_KEY);

  if (allUsers && currentUsers) {
    renderUsers(currentUsers);
  } else {
    fetchUsers();
  }
}
deleteAllBtn.addEventListener("click", deleteAllCards);
showAllBtn.addEventListener("click", showAllCards);

init();