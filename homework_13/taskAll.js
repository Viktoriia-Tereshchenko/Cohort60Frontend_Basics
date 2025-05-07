/*
Задание 1
У вас есть массив объектов:

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

Создайте на основе старого массива новый массив объектов по образу:
[{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

*/

const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
];

const newCars = cars.map((car) => ({
  brand: car.brand,
  isDiesel: car.isDiesel,
}));

console.log(newCars);

// Задание 2 --------------------------------------------------------------
// Создайте новый массив, где оставьте только машины с дизельным двигателем.
const dieselCars = cars.filter((car) => car.isDiesel);
console.log(dieselCars);

// Задание 3 --------------------------------------------------------------
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.
const nonDieselCars = cars.filter((car) => !car.isDiesel);
console.log(nonDieselCars);

// Задание 4--------------------------------------------------------------
// Посчитайте общую стоимость всех машин не с дизельным двигателем.

// вариант 1
const totalCost = nonDieselCars.reduce((acc, car) => acc + car.price, 0);
console.log(totalCost);

// вариант 2
const totalCost2 = cars.reduce((acc, car) => {
  if (!car.isDiesel) {
    return acc + car.price;
  }
  return acc;
}, 0);
console.log(totalCost2);

// Задание 5 --------------------------------------------------------------
// Повысьте цену всех машин в массиве на 20%.
cars.forEach((car) => (car.price *= 1.2));
console.log(cars);

// Задание 6 --------------------------------------------------------------
// Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }

// вариант 1
const modernCars = cars.map((car) =>
  car.isDiesel ? { brand: "Tesla", price: 25000, isDiesel: false } : car
);
console.log(modernCars);

// вариант 2
const replacedCars2 = [...cars];

replacedCars2.forEach((car) => {
  if (car.isDiesel) {
    car.brand = "Tesla";
    car.price = 25000;
    car.isDiesel = false;
  }
});
console.log(replacedCars2);
