/*
Задание 2
Создайте метод который принимает массив строк, ничего!! не возвращает.
Метод должен заменить текст в первом элементе массива, чтобы он был с большой буквы.

["apple", "orange"] ---> ["Apple", "orange"]
*/

function capitalizeFirstLetterFirstElement(stringsArray) {
  try {
    if (stringsArray === null) {
      throw new Error("Array is null");
    }
    if (stringsArray === undefined) {
      throw new Error("Array is undefined");
    }
    if (stringsArray.length === 0) {
      throw new Error("Array is empty");
    }
    if (typeof stringsArray[0] !== "string") {
      throw new Error("First element is not a string");
    }
    if (stringsArray[0].length === 0) {
      throw new Error("First element is empty");
    }

    const newFirstElement = stringsArray[0].at(0).toUpperCase() + stringsArray[0].slice(1);
    stringsArray[0] = newFirstElement;
  } catch (error) {
    console.error(error);
  }
}
