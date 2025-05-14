/*
Задание 1 — Форматирование строки
Создайте функцию, которая принимает строку в формате вида "1333.132.123 00" — числа могут быть любыми,
но структура такая же: три группы, разделённые точками и пробелом.

Цель: преобразовать строку к следующему формату: 📌 "1333 132:123-00"

Пример:
function formatString(input) {
    // Ваша реализация здесь
}
const result = formatString("1333.132.123 00");
console.log(result); // "1333 132:123-00"
*/

function formatString(input) {
  const regex = /(\d{4})\.(\d{3})\.(\d{3})\s(\d{2})/;
  return input.replace(regex, `$1 $2:$3-$4`);
}

console.log(formatString("1333.132.123 00"));

// вариант 2, если кол-во чисел может меняться
function formatString2(input) {
  const regex = /(\d+)\.(\d+)\.(\d+)\s(\d+)/;
  return input.replace(regex, `$1 $2:$3-$4`);
}

console.log(formatString2("1333.132.123 00"));

/*
Задание 2 — Промис с рандомной ошибкой
Создайте Promise, который с одинаковой вероятностью (50/50):
    либо возвращает строку "Best day of my life"
    либо выбрасывает ошибку с сообщением "Something is off"
Затем обработайте результат с помощью .then() и .catch().
*/

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (Math.floor(Math.random() * 2)) {
      resolve("Best day of my life");
    }
    reject(new Error("Something is off"));
  }, 1000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
