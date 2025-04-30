/*
Задание 1
Дан объект

  const house = {
    adress: "Pfondorfer str 69",
    postIndex: 10408,
    roofColor: "red",
    wallColor: "green",
  };

Используя деструктуризацию объекта, получите в отдельные переменные цвет стен, и адрес.
*/

const house = {
  adress: "Pfondorfer str 69",
  postIndex: 10408,
  roofColor: "red",
  wallColor: "green",
};

const { wallColor: wallColorValue, adress: adressValue } = house;

// console.log(wallColorValue);
// console.log(adressValue);
