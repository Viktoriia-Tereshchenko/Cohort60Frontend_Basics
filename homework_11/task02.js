/*
Задание 2
Создайте метод, который принимает массив стрингов и еще один параметр типа стринг prefix. 
Метод должен вернуть новый массив, в котором будут храниться слова из исходного массива, слева к которым присоединен префикс.

Исходный массив должен остаться неизменным.

Пример: ["apple", "orange"] с префиксом "pine" ----> ["pineapple", "pineorange"]
*/

function createArrayWithPrefixes(initialArray, prefix) {
  if (!initialArray.length || !prefix.length) {
    return initialArray;
  }

  const array = [...initialArray];

  for (let i = 0; i < array.length; i++) {
    array[i] = prefix + array[i];
    // array[i] = prefix.concat(array[i]); // вариант с concat
  }

  // /* вариант 2 */
  // let i=0;
  // while (i < array.length) {
  //   array[i] = prefix + array[i];
  //   i++;
  // }

  return array;
}

console.log(createArrayWithPrefixes(["apple", "orange"], "pine"));
