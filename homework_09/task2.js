/*
Задание 2
Создайте функцию, которая бы принимала бы один параметр - код погоды.

Функция должна возвращать строку, описывающую погоду.

Таблица соответствия кода-описание:
SQ – шквал
PO – пыльный вихрь
FC - торнадо
BR – дымка (видимость от 1 до 9 км)
HZ – мгла (видимость менее 10 км)
FU – дым (видимость менее 10 км)
DS - пыльная буря (видимость менее 10 км)
SS - песчаная буря (видимость менее 10 км)
*/

function weatherDescription(weatherCode) {
  if (
    weatherCode === null ||
    weatherCode === undefined ||
    weatherCode.trim() === ""
  ) {
    return "некорректный код погоды";
  }

  switch (weatherCode.toUpperCase()) {
    case "SQ":
      return "шквал";
    case "PO":
      return "пыльный вихрь";
    case "FC":
      return "торнадо";
    case "BR":
      return "дымка (видимость от 1 до 9 км)";
    case "HZ":
      return "мгла (видимость менее 10 км)";
    case "FU":
      return "дым (видимость менее 10 км)";
    case "DS":
      return "пыльная буря (видимость менее 10 км)";
    case "SS":
      return "песчаная буря (видимость менее 10 км)";
    default:
      return "неизвестный код погоды";
  }
}

console.log(weatherDescription("SQ"));
console.log(weatherDescription("DS"));
console.log(weatherDescription("fc"));

console.log(weatherDescription("AA"));
console.log(weatherDescription("77"));

console.log(weatherDescription(""));
console.log(weatherDescription(null));
console.log(weatherDescription());
