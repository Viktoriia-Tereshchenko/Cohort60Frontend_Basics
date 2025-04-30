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

const { wallColor, adress} = house;

// console.log(wallColor);
// console.log(adress);
