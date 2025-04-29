/*
Задание 1
Создайте метод который принимает массив и возвращает новый! массив с теми же данными, 
но первый и последний элементы в массиве должны быть поменяны местами.

Исходный массив должен остаться неизмененным после вызова метода.
*/

function createNewArrayWithRearrangedElements(initialArray) {
  try {
    if (initialArray === null) {
      throw new Error("Array is null");
    }
    if (initialArray === undefined) {
      throw new Error("Array is undefined");
    }
    if (initialArray.length === 0) {
      throw new Error("Array is empty");
    }

    const resultArray = [...initialArray];
    const firstElement = resultArray[0];
    resultArray[0] = resultArray[resultArray.length - 1];
    resultArray[resultArray.length - 1] = firstElement;
    return resultArray;
    
  } catch (error) {
    console.error(error);
    // уточнить т/з
    return [];
  }
}

// проверки
const testArray = [1, 2, 5, -4];
console.log(testArray);
console.log(createNewArrayWithRearrangedElements(testArray));

const testArray2 = ["a", "b", "c", "d"];
console.log(testArray2);
console.log(createNewArrayWithRearrangedElements(testArray2));

const testArray3 = ["one"];
console.log(testArray3);
console.log(createNewArrayWithRearrangedElements(testArray3));

const testArray4 = [];
console.log(testArray4);
console.log(createNewArrayWithRearrangedElements(testArray4));

const testArray5 = [null];
console.log(testArray5);
console.log(createNewArrayWithRearrangedElements(testArray5));

const testArray6 = [undefined, null];
console.log(testArray6);
console.log(createNewArrayWithRearrangedElements(testArray6));

const testArray7 = null;
console.log(testArray7);
console.log(createNewArrayWithRearrangedElements(testArray7));

const testArray8 = undefined;
console.log(testArray8);
console.log(createNewArrayWithRearrangedElements(testArray8));
