/*
Задание 3
Создайте функцию gardender, которая принимает в себя два параметра: операцию и предмет, на который эта операция будет направлена.
Создайте еще одну функцию поливать цветок, которая бы выводила в консоль "I water this " плюс название конкретного цветка.
Вызовите фунцкию gardender c параметрами: функция поливать цветок, 'rose'.

Попробуйте придумать функции для других операций и предметов, с которыми может работать садовник. 
*/

function gardender(operation, item) {
  operation(item);
}

const waterFlower = (flower) => {
  console.log("I water this " + flower);
};

gardender(waterFlower, "rose");

// other options
const plant = (typeOfPlant) => {
  console.log("I plant " + typeOfPlant);
};
gardender(plant, "bush");

const remove = (what) => {
  console.log("I remove " + what);
};
gardender(remove, "fallen leaves");

const work = (tool) => {
  console.log("I work with " + tool);
};
gardender(work, "lawnmower");
