const form = document.getElementById("register-form");
const inputsContainer = document.getElementById("inputs-container");
const nameElement = form.elements["name"];
const emailElement = form.elements["email"];
const passwordElement = form.elements["password"];
const avatarElement = form.elements["avatar"];
const btnHome = document.getElementById("btn-home");

form.addEventListener("submit", async (event) => {
  await addUserHandler(event);
});

btnHome.addEventListener("click", () => {
  window.location.replace("/");
});

async function addUserHandler(event) {
  event.preventDefault();
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const password = form.elements["password"].value;
  const avatar = form.elements["avatar"].value;

  const isValid = await validateInputs();
  if (isValid) {
    const newUser = {
      name,
      email,
      password,
      avatar,
    };

    fetchAddUser(newUser);
  }
}

async function fetchAddUser(user) {
  const response = await fetch("https://api.escuelajs.co/api/v1/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });

  if (response.status === 201) {
    window.location.replace("/login");
  }
}

async function validateInputs() {
  let result = true;
  let errorMessage = "";

  if (inputsContainer.querySelector("p")) {
    inputsContainer.querySelector("p").remove();
  }

  if (nameElement.value === "") {
    errorMessage += "User name should not be empty! ";
    result = false;
  }

  if (emailElement.value === "") {
    errorMessage += "Email should not be empty! ";
    result = false;
  }

  const emailExists = await isEmailAlreadyExists(emailElement.value);
  if (emailExists) {
    console.log(isEmailAlreadyExists(emailElement.value));
    errorMessage += "This email is already registered! ";
    result = false;
  }

  if (passwordElement.value === "") {
    errorMessage += "Password should not be empty! ";
    result = false;
  }

  if (avatarElement.value === "") {
    errorMessage += "Avatar should not be empty! ";
    result = false;
  }

  if (!result) {
    const errorElement = document.createElement("p");
    errorElement.innerText = errorMessage;
    inputsContainer.appendChild(errorElement);
  }

  return result;
}

async function isEmailAlreadyExists(emailStr) {
  let result = false;
  let users = [];
  const response = await fetch("https://api.escuelajs.co/api/v1/users");
  users = await response.json();

  if (users.findIndex((user) => user.email === emailStr) >= 0) {
    result = true;
  }
  return result;
}
