// then --> await

// await можем использовать ТОЛЬКО внутри функций, которые яв-ся асинхронными
// при ее объявлении укажем слово async

// каждый await - раскрытие промиса

const form = document.getElementById("login-form");
const errElement = document.getElementById("login-form-err");

async function fetchLogin() {
  try {
    const credentials = {
      email: form.elements["email"].value,
      password: form.elements["password"].value,
    };

    const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!res.ok) {
      if (res.status === 401) {
        throw new Error("Wrong password or email");
      }
      throw new Error("Login error");
    }

    // асинхронная функция
    const obj = await res.json();
    const { access_token } = obj;
    console.log(access_token);

    // в браузере есть способы хранения
    // sessionStorage (хранит информацию, пока идет сессия)
    // localeStorage  (долгосрочное хранение)
    // cookies (инфор-я прикрепится автом-ки)

    localStorage.setItem("access_token", access_token);

    console.log(obj);
    errElement.innerText = "";

    // window.location.href = "/profile";
    window.location.replace("/profile");
  } catch (err) {
    errElement.innerText = err.message;
  }
}

function loginHandler(e) {
  e.preventDefault();
  fetchLogin();
}

form.addEventListener("submit", loginHandler);
