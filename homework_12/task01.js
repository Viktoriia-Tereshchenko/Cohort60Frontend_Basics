// Задание 1
// Создайте метод, который принимает объект, а возврщает новый объект,
//  в котором ключи и значения поменялись местами.
// {name: "Bob"} --> {"Bob": "name"}
// (вам понадобится поработать с Object.values, Object.keys )

function swapKeysAndValues(initialObj) {
  if (initialObj === null) {
    throw new Error("Initial object is null");
  }

  if (initialObj === undefined) {
    throw new Error("Initial object is undefined");
  }

  if (typeof initialObj !== "object") {
    throw new Error("A function argument is not an object");
  }

  const keys = Object.keys(initialObj);
  const values = Object.values(initialObj);
  const newObj = {};

  for (let i = 0; i < keys.length; i++) {
    newObj[values[i]] = keys[i];
  }

  return newObj;
}

try {
  console.log(swapKeysAndValues({ name: "Bob" }));
  // console.log(swapKeysAndValues(null));
  // console.log(swapKeysAndValues(undefined));
  // console.log(swapKeysAndValues(5));
} catch (error) {
  console.error(error.message);
}
