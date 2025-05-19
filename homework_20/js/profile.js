const fullNameElement = document.getElementById("full-name");
const emailElement = document.getElementById("email");
const avatarImg = document.getElementById("avatar");

if (!localStorage.getItem("access_token")) {
  window.location.replace("/login");
}

async function fetchProfile() {
  const accessToken = localStorage.getItem("access_token");

  // GET - запрос по-умолчанию
  const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const user = await res.json();
  console.log(user);

  const { avatar, email, name } = user;
  fullNameElement.innerText = name;
  avatarImg.src = avatar;

  // для отображение "заблокированной" картинка
  avatarImg.referrerPolicy = "no-referrer";
  avatarImg.crossOrigin = "anonymous";
  //-------------------------------------------

  emailElement.innerText = email;
}

fetchProfile();
