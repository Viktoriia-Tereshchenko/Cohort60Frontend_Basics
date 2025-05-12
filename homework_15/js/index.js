/*
Homework
Задание 1
Создайте страницу, на которой можно добавить животное в список животных. 
Соответсвенно, вам понадобится использовать форму, в которой вы уточните 
у пользователя кличку животного "nickname", возраст "age" и породу "breed".

П.С. Выводите каждый шаг в консоль, чтобы сразу увидеть ошибку.
Имеет смысл сначала сделать с одним полем, а потом добавить и остальные.
*/

const form = document.getElementById("animal-form");
const nicknameInput = form.elements["nickname"];
const ageInput = form.elements["age"];
const breedInput = form.elements["breed"];
const animalsContainer = document.getElementById("animals-container");
const resetBtn = document.getElementById("reset-btn");

let animals = [
  { nickname: "Бобик", age: "3", breed: "собака" },
  { nickname: "Мурчик", age: "5", breed: "кот" },
];

// добавление животного в список
function addAnimalToList(event) {
  event.preventDefault();

  if (validateForm()) {
    animals.push({
      nickname: nicknameInput.value,
      age: ageInput.value,
      breed: breedInput.value,
    });

    nicknameInput.value = "";
    ageInput.value = "";
    breedInput.value = "";
    renderAnimals(animals);
  } else {
    alert("Все поля должны быть заполнены!");
  }
}

// вывод списка на экран
function renderAnimals(animals) {
  while (animalsContainer.firstChild) {
    animalsContainer.removeChild(animalsContainer.firstChild);
  }

  animals.forEach((animal) => {
    const animalCard = document.createElement("div");
    const nicknameInfo = document.createElement("div");
    const ageInfo = document.createElement("div");
    const breedInfo = document.createElement("div");

    animalCard.classList.add("div-card");
    nicknameInfo.classList.add("div-nickname");
    ageInfo.classList.add("div-age");
    breedInfo.classList.add("div-breed");

    nicknameInfo.innerText = animal.nickname;
    ageInfo.innerText = animal.age;
    breedInfo.innerText = animal.breed;

    animalCard.append(nicknameInfo, ageInfo, breedInfo);
    animalsContainer.appendChild(animalCard);
  });
}

// очистить форму и список
function resetAll() {
  nicknameInput.value = "";
  ageInput.value = "";
  breedInput.value = "";
  animals = [];
  renderAnimals(animals);
}

function validateForm() {
  return (
    nicknameInput.value !== "" &&
    ageInput.value !== "" &&
    breedInput.value !== ""
  );
}

renderAnimals(animals); // initial render
form.addEventListener("submit", addAnimalToList);
resetBtn.addEventListener("click", resetAll);
